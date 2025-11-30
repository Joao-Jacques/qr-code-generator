import { useState, useRef } from 'react'
import './index.css'
import Hero from './components/hero'
import QrForm from './components/qrForm'
import QrPreview from './components/qrPreview'
import Footer from './components/footer'

function App() {
  const [url, setUrl] = useState('https://exemplo.com')
  const [generatedUrl, setGeneratedUrl] = useState('https://exemplo.com')
  const [error, setError] = useState('')
  const qrCanvasRef = useRef(null)

  const handleGenerate = (event) => {
    event.preventDefault()
    const trimmed = url.trim()

    if (!trimmed) {
      setError('Enter a URL to generate a QR code.')
      return
    }

    try {
      const normalized = new URL(trimmed)
      setGeneratedUrl(normalized.href)
      setError('')
    } catch (err) {
      setError('Please enter a valid URL (including https://).')
    }
  }

  const handleDownload = () => {
    const canvas = qrCanvasRef.current
    if (!canvas) {
      alert('QR Code ainda nǜo foi gerado.')
      return
    }

    const dataUrl = canvas.toDataURL('image/png')
    const link = document.createElement('a')
    link.href = dataUrl
    link.download = 'qr-code.png'
    document.body.appendChild(link)
    link.click()
    link.remove()
  }

  return (
    <div className="page">
      <Hero />

      <main className="card">
        <QrForm
          url={url}
          error={error}
          onUrlChange={(e) => setUrl(e.target.value)}
          onGenerate={handleGenerate}
        />

        <QrPreview
          generatedUrl={generatedUrl}
          qrCanvasRef={qrCanvasRef}
          onDownload={handleDownload}
        />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
