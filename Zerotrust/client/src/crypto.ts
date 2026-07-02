// client/src/crypto.ts

// Encrypt a file in the browser (zero-knowledge)
export async function encryptFile(file: File) {
  // Generate AES-256 key
  const key = await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  )

  // Generate IV (12 bytes)
  const iv = crypto.getRandomValues(new Uint8Array(12))

  // Read file into memory
  const data = new Uint8Array(await file.arrayBuffer())

  // Encrypt the file
  // CAST data and iv explicitly to ArrayBuffer
  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv.buffer as ArrayBuffer },
    key,
    data.buffer as ArrayBuffer
  )

  // Export key for share link
  const rawKey = await crypto.subtle.exportKey('raw', key)
  const keyBase64 = btoa(String.fromCharCode(...new Uint8Array(rawKey)))

  return {
    encrypted, // ArrayBuffer
    iv,        // Uint8Array
    key: keyBase64 // string
  }
}

// Decrypt a file in the browser
export async function decryptFile(
  encrypted: ArrayBuffer,
  iv: Uint8Array,
  keyBase64: string
) {
  const rawKey = Uint8Array.from(
    atob(keyBase64),
    c => c.charCodeAt(0)
  )

  const key = await crypto.subtle.importKey(
    'raw',
    rawKey,
    'AES-GCM',
    true,
    ['decrypt']
  )

  // CAST iv explicitly to ArrayBuffer
  return crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: iv.buffer as ArrayBuffer },
    key,
    encrypted
  )
}
