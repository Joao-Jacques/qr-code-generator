import { useState, useRef } from 'react'
import { QRCodeCanvas } from 'qrcode.react'
import { UrlInput } from './components/input'
import './index.css'
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
      alert('QR Code ainda não foi gerado.')
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
      <header className="hero">
        <div className="hero__badge">QRCODE Generator</div>
        <h1>Gere QRCODES de forma gratuita sem complicações</h1>
        <h2>
          Insira um link, clique em gerar e obtenha um QR code nítido para seu
          site, promoção ou evento.
        </h2>
        <p>
          QR Code: tecnologia que compacta informações em um padrão gráfico
          fácil de compartilhar e que dura para sempre.
        </p>
      </header>

      <main className="card">
        <section className="form-panel">
          <div>
            <p className="eyebrow">Passo 1</p>
            <h2>Cole sua URL</h2>
            <p className="muted">
              Validamos e convertemos em um formato amigável para QR.
            </p>
          </div>

          <form onSubmit={handleGenerate} className="form">
            <UrlInput
              label="URL de Destino"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://your-link.com"
              required
            />
            {error && <p className="error">{error}</p>}
            <button type="submit" className="button primary">
              Gerar QR Code
            </button>
          </form>
        </section>

        <section className="preview">
          <p className="eyebrow">Passo 2</p>
          <h3>Seu QR Code</h3>
          <div className="qr-frame">
            <QRCodeCanvas
              ref={qrCanvasRef}
              value={generatedUrl}
              size={400}
              includeMargin={true}
            />
          </div>

          <button
            type="button"
            className="button ghost"
            onClick={handleDownload}
          >
            Baixar PNG
          </button>
        </section>
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default App
