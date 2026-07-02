import { useEffect, useState, useRef } from 'react';
import { Upload, Download, Shield, Clock, File, Copy, Check, AlertCircle } from 'lucide-react';
import './index.css' 

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
  const keyBase64 = btoa(String.fromCharCode(...new Uint8Array(rawKey)));

  return {
    encrypted,
    iv,
    key: keyBase64
  };
}

async function decryptFile(encrypted: ArrayBuffer, iv: number[], keyBase64: string) {
  const rawKey = Uint8Array.from(atob(keyBase64), c => c.charCodeAt(0));

  const key = await crypto.subtle.importKey(
    'raw',
    rawKey,
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

export default function App() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [shareLink, setShareLink] = useState('');
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');
  const [uploadedFile, setUploadedFile] = useState<{ name: string; size: number } | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const downloadStartedRef = useRef(false);

  useEffect(() => {
    if (downloadStartedRef.current) return;
    const downloadFile = async (id: string, key: string, filename: string) => {
      try {
        setIsDownloading(true);
        setStatus('Fetching encrypted file...');
        
        const res = await fetch(`http://localhost:3001/file/${id}`);
        if (!res.ok) {
          setError(`File not found or expired (Status ${res.status})`);
          setIsDownloading(false);
          return;
        }

        const { data, iv } = await res.json();
        setStatus('Decrypting file...');
        
        const encryptedArray = Uint8Array.from(atob(data), c => c.charCodeAt(0));
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
        
        setStatus('File downloaded successfully!');
        setIsDownloading(false);
        
        window.history.replaceState(null, '', window.location.pathname);
      } catch (err) {
        console.error(err);
        setError('Error downloading file. Please check the link and try again.');
        setIsDownloading(false);
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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileUpload(e.target.files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    try {
      setIsUploading(true);
      setError('');
      setStatus('Encrypting file...');
      setUploadedFile({ name: file.name, size: file.size });

      const { encrypted, iv, key } = await encryptFile(file);

      setStatus('Uploading encrypted file...');

      const res = await fetch('http://localhost:3001/upload', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: btoa(String.fromCharCode(...new Uint8Array(encrypted))),
          iv: Array.from(iv),
          expiresIn: 60 * 60 * 1000,
          filename: file.name
        })
      });

      const { id } = await res.json();
      const link = `${location.origin}${location.pathname}#${id}:${key}:${encodeURIComponent(file.name)}`;
      setShareLink(link);
      setStatus('Upload complete! Share the link below.');
      setIsUploading(false);
    } catch (err) {
      console.error(err);
      setError('Failed to upload file. Please try again.');
      setIsUploading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setError('Failed to copy link. Please copy manually.');
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const reset = () => {
    setShareLink('');
    setUploadedFile(null);
    setStatus('');
    setError('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  if (window.location.hash && isDownloading) {
    return (
      <div className="app-container">
        <div className="card download-card">
          <div className="download-content">
            <div className="icon-wrapper icon-blue">
              <Download className="icon-large icon-bounce" />
            </div>
            <h2>Downloading File</h2>
            <p className="status-text">{status}</p>
            {error && (
              <div className="alert alert-error">
                <AlertCircle className="alert-icon" />
                <p>{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="card main-card">
        {/* Header */}
        <div className="header">
          <div className="icon-wrapper icon-blue">
            <Shield className="icon-medium" />
          </div>
          <h1>Zero-Trust File Share</h1>
          <p className="subtitle">End-to-end encrypted file sharing. Your files are encrypted in your browser before upload.</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="alert alert-error">
            <AlertCircle className="alert-icon" />
            <p>{error}</p>
          </div>
        )}

        {/* Upload Area */}
        {!shareLink && (
          <div
            className={`upload-area ${isDragging ? 'dragging' : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              type="file"
              onChange={handleFileSelect}
              className="file-input"
              disabled={isUploading}
            />
            
            {isUploading ? (
              <div className="upload-loading">
                <div className="spinner"></div>
                <p className="status-text">{status}</p>
              </div>
            ) : (
              <div className="upload-prompt">
                <Upload className="icon-xlarge" />
                <div className="upload-text">
                  <p className="upload-title">Drop your file here or click to browse</p>
                  <p className="upload-subtitle">Files are encrypted before leaving your device</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Share Link Section */}
        {shareLink && (
          <div className="share-section">
            <div className="success-box">
              <div className="success-header">
                <Check className="icon-check" />
                <h3>File Encrypted & Uploaded!</h3>
              </div>
              
              {uploadedFile && (
                <div className="file-info">
                  <File className="file-icon" />
                  <div className="file-details">
                    <p className="file-name">{uploadedFile.name}</p>
                    <p className="file-size">{formatFileSize(uploadedFile.size)}</p>
                  </div>
                </div>
              )}

              <div className="expiry-info">
                <Clock className="clock-icon" />
                <span>Link expires in 1 hour</span>
              </div>

              <div className="link-container">
                <input
                  type="text"
                  value={shareLink}
                  readOnly
                  className="link-input"
                />
                <button
                  onClick={copyToClipboard}
                  className={`copy-button ${copied ? 'copied' : ''}`}
                >
                  {copied ? (
                    <>
                      <Check className="button-icon" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="button-icon" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            <button onClick={reset} className="reset-button">
              Upload Another File
            </button>
          </div>
        )}

        {/* Info Section */}
        <div className="info-section">
          <h4 className="info-title">
            <Shield className="info-icon" />
            How it works
          </h4>
          <ul className="info-list">
            <li>
              <span className="step-number">1.</span>
              <span>Your file is encrypted in your browser using AES-256-GCM</span>
            </li>
            <li>
              <span className="step-number">2.</span>
              <span>Only the encrypted data is uploaded to the server</span>
            </li>
            <li>
              <span className="step-number">3.</span>
              <span>The decryption key never leaves your browser (it's in the URL hash)</span>
            </li>
            <li>
              <span className="step-number">4.</span>
              <span>Recipients can only decrypt with the complete share link</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}