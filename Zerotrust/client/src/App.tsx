import { useEffect, useState, useRef } from 'react';
import './index.css'

// Backend URL: set VITE_API_URL in .env (dev) or Netlify env vars (prod).
// Falls back to localhost for same-machine development.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Convert an ArrayBuffer to base64 in chunks.
// btoa(String.fromCharCode(...bytes)) crashes with "Maximum call stack size
// exceeded" on files larger than a few hundred KB, because spreading a huge
// array passes every byte as a separate function argument.
function bufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000; // 32KB per chunk keeps the arg list safe
  let binary = '';
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

function base64ToBytes(base64: string): Uint8Array {
  // Accept both standard and URL-safe base64, with or without padding
  let normalized = base64.replace(/-/g, '+').replace(/_/g, '/');
  while (normalized.length % 4 !== 0) normalized += '=';
  return Uint8Array.from(atob(normalized), c => c.charCodeAt(0));
}

// URL-safe base64 for the key that goes in the link:
// '+' and '/' can get mangled when links are pasted into chat apps or
// URL-decoded, which silently corrupts the key and makes decryption fail.
function toUrlSafeBase64(base64: string): string {
  return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function encryptFile(file: File) {
  const key = await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const data = new Uint8Array(await file.arrayBuffer());

  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv: iv },
    key,
    data
  );

  const rawKey = await crypto.subtle.exportKey('raw', key);
  const keyBase64 = toUrlSafeBase64(bufferToBase64(rawKey));

  return { encrypted, iv, key: keyBase64 };
}

async function decryptFile(encrypted: ArrayBuffer, iv: number[], keyBase64: string) {
  const rawKey = base64ToBytes(keyBase64);

  const key = await crypto.subtle.importKey(
    'raw',
    rawKey.buffer as ArrayBuffer,
    'AES-GCM',
    true,
    ['decrypt']
  );

  const ivArray = new Uint8Array(iv);

  return crypto.subtle.decrypt(
    { name: 'AES-GCM', iv: ivArray },
    key,
    encrypted
  );
}

type Phase = 'idle' | 'working' | 'ready' | 'receiving' | 'received';

export default function App() {
  const [phase, setPhase] = useState<Phase>('idle');
  const [isDragging, setIsDragging] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [statusWord, setStatusWord] = useState('');
  const [error, setError] = useState('');
  const [fileMeta, setFileMeta] = useState<{ name: string; size: number } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const downloadStartedRef = useRef(false);

  useEffect(() => {
    if (downloadStartedRef.current) return;

    const downloadFile = async (id: string, key: string, filename: string) => {
      try {
        setPhase('receiving');
        setStatusWord('Fetching');

        const res = await fetch(`${API_URL}/file/${id}`);
        if (!res.ok) {
          setError(res.status === 410 ? 'This link has expired.' : 'File not found.');
          setPhase('idle');
          return;
        }

        const { data, iv } = await res.json();
        setStatusWord('Decrypting');

        const encryptedArray = base64ToBytes(data);
        const decryptedBuffer = await decryptFile(
          encryptedArray.buffer as ArrayBuffer,
          iv,
          key
        );

        const blob = new Blob([decryptedBuffer]);
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename || 'downloaded-file';
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);

        setFileMeta({ name: filename, size: blob.size });
        setPhase('received');
        window.history.replaceState(null, '', window.location.pathname);
      } catch (err) {
        console.error(err);
        setError('Couldn\u2019t decrypt this file. Check the link is complete.');
        setPhase('idle');
      }
    };

    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const [id, key, filename] = hash.split(':');
      if (id && key) {
        downloadStartedRef.current = true;
        downloadFile(id, key, filename ? decodeURIComponent(filename) : 'downloaded-file');
      }
    }
  }, []);

  const handleFileUpload = async (file: File) => {
    try {
      setPhase('working');
      setError('');
      setFileMeta({ name: file.name, size: file.size });
      setStatusWord('Encrypting');

      const { encrypted, iv, key } = await encryptFile(file);

      setStatusWord('Uploading');

      const res = await fetch(`${API_URL}/upload`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: bufferToBase64(encrypted),
          iv: Array.from(iv),
          expiresIn: 60 * 60 * 1000,
          filename: file.name
        })
      });

      const { id } = await res.json();
      const link = `${location.origin}${location.pathname}#${id}:${key}:${encodeURIComponent(file.name)}`;
      setShareLink(link);
      setPhase('ready');
    } catch (err) {
      console.error(err);
      setError('Upload failed. Try again.');
      setPhase('idle');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (phase !== 'idle') return;
    const files = e.dataTransfer.files;
    if (files.length > 0) handleFileUpload(files[0]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) handleFileUpload(e.target.files[0]);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('Copy failed \u2014 select the link manually.');
    }
  };

  const reset = () => {
    setPhase('idle');
    setShareLink('');
    setFileMeta(null);
    setError('');
    setCopied(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  // Shorten the link for display: keep origin, elide the long key
  const displayLink = shareLink.length > 46
    ? shareLink.slice(0, 30) + '\u2026' + shareLink.slice(-12)
    : shareLink;

  return (
    <div
      className={`page ${isDragging ? 'is-dragging' : ''}`}
      onDragOver={(e) => { e.preventDefault(); if (phase === 'idle') setIsDragging(true); }}
      onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
      onDrop={handleDrop}
    >
      <header className="top">
        <span className="wordmark">ZeroTrust</span>
        <span className="spec">AES-256 &middot; E2E</span>
      </header>

      <main className="stage">
        {error && <p className="error" role="alert">{error}</p>}

        {phase === 'idle' && (
          <button
            className="drop"
            onClick={() => fileInputRef.current?.click()}
            aria-label="Choose a file to encrypt and share"
          >
            <span className={`ring ${isDragging ? 'ring-active' : ''}`} aria-hidden="true">
              <svg viewBox="0 0 24 24" className="arrow">
                <path d="M12 3v14M5 12l7 7 7-7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="drop-title">Drop a file</span>
            <span className="drop-sub">or click to browse</span>
          </button>
        )}

        {(phase === 'working' || phase === 'receiving') && (
          <div className="drop" aria-live="polite">
            <span className="ring ring-spin" aria-hidden="true" />
            <span className="drop-title">{statusWord}</span>
            {fileMeta && <span className="drop-sub">{fileMeta.name}</span>}
          </div>
        )}

        {phase === 'ready' && (
          <div className="result">
            {fileMeta && (
              <p className="meta">{fileMeta.name} &middot; {formatFileSize(fileMeta.size)}</p>
            )}
            <div className="ticket">
              <span className="ticket-link" title={shareLink}>{displayLink}</span>
              <button
                className={`copy ${copied ? 'is-copied' : ''}`}
                onClick={copyToClipboard}
              >
                {copied ? 'Copied' : 'Copy link'}
              </button>
            </div>
            <p className="meta dim">Expires in 1 hour</p>
            <button className="again" onClick={reset}>Send another</button>
          </div>
        )}

        {phase === 'received' && (
          <div className="result">
            <span className="ring ring-done" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="arrow">
                <path d="M5 12.5l5 5L19 7" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="drop-title">Saved</p>
            {fileMeta && (
              <p className="meta">{fileMeta.name} &middot; {formatFileSize(fileMeta.size)}</p>
            )}
            <button className="again" onClick={reset}>Send a file</button>
          </div>
        )}

        <input
          ref={fileInputRef}
          type="file"
          onChange={handleFileSelect}
          className="visually-hidden"
          tabIndex={-1}
        />
      </main>

      <footer className="bottom">
        <span>Encrypted in your browser &middot; The key stays in the link</span>
      </footer>
    </div>
  );
}
