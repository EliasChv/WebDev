import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const app = express()
const PORT = Number(process.env.PORT) || 3001

app.use(cors())
app.use(express.json({ limit: '100mb' }))

const uploadsDir = path.join(__dirname, '../uploads')
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true })

type FileEntry = {
  expiresAt: number
  iv: number[]
}

// Metadata is written to disk alongside each blob (<id>.json).
// Previously it lived only in an in-memory Map, so every server restart
// (which nodemon/ts-node does constantly in dev) made all existing links 404.
const metaPath = (id: string) => path.join(uploadsDir, `${id}.json`)
const blobPath = (id: string) => path.join(uploadsDir, id)

function readMeta(id: string): FileEntry | null {
  try {
    return JSON.parse(fs.readFileSync(metaPath(id), 'utf-8'))
  } catch {
    return null
  }
}

function deleteFile(id: string) {
  try { fs.unlinkSync(blobPath(id)) } catch {}
  try { fs.unlinkSync(metaPath(id)) } catch {}
}

// Upload encrypted file
app.post('/upload', (req, res) => {
  const { data, iv, expiresIn } = req.body

  if (typeof data !== 'string' || !iv) {
    return res.status(400).json({ error: 'Missing data or iv' })
  }

  // Cap expiry at 24h so a bad client can't request "forever"
  const ttl = Math.min(Number(expiresIn) || 60 * 60 * 1000, 24 * 60 * 60 * 1000)

  const id = crypto.randomBytes(16).toString('hex')
  const entry: FileEntry = { expiresAt: Date.now() + ttl, iv }

  fs.writeFileSync(blobPath(id), Buffer.from(data, 'base64'))
  fs.writeFileSync(metaPath(id), JSON.stringify(entry))

  res.json({ id })
})

// Download encrypted file
app.get('/file/:id', (req, res) => {
  const id = req.params.id

  // Reject anything that isn't a hex id we generated --
  // otherwise "../" style ids could escape uploadsDir
  if (!/^[a-f0-9]{32}$/.test(id)) return res.sendStatus(400)

  const entry = readMeta(id)
  if (!entry) return res.sendStatus(404)

  if (Date.now() > entry.expiresAt) {
    deleteFile(id)
    return res.sendStatus(410)
  }

  const data = fs.readFileSync(blobPath(id))

  res.json({
    data: data.toString('base64'),
    iv: entry.iv
  })
})

// Sweep expired files every 10 minutes so the disk doesn't fill up
setInterval(() => {
  for (const file of fs.readdirSync(uploadsDir)) {
    if (!file.endsWith('.json')) continue
    const id = file.replace('.json', '')
    const entry = readMeta(id)
    if (entry && Date.now() > entry.expiresAt) deleteFile(id)
  }
}, 10 * 60 * 1000)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
