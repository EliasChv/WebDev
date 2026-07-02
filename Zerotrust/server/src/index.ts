import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'
import crypto from 'crypto'

const app = express()
const PORT = 3001

app.use(cors())
app.use(express.json({ limit: '100mb' }))

const uploadsDir = path.join(__dirname, '../uploads')
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir)

type FileEntry = {
  expiresAt: number
  iv: string
}

const files = new Map<string, FileEntry>()

// Upload encrypted file
app.post('/upload', (req, res) => {
  const { data, iv, expiresIn } = req.body

  const id = crypto.randomBytes(16).toString('hex')
  const expiresAt = Date.now() + expiresIn

  fs.writeFileSync(path.join(uploadsDir, id), Buffer.from(data, 'base64'))

  files.set(id, { expiresAt, iv })

  res.json({ id })
})

// Download encrypted file
app.get('/file/:id', (req, res) => {
  const entry = files.get(req.params.id)
  if (!entry) return res.sendStatus(404)

  if (Date.now() > entry.expiresAt) {
    files.delete(req.params.id)
    return res.sendStatus(410)
  }

  const filePath = path.join(uploadsDir, req.params.id)
  const data = fs.readFileSync(filePath)

  res.json({
    data: data.toString('base64'),
    iv: entry.iv
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
