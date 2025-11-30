import { QRCodeCanvas } from 'qrcode.react'

function QrPreview({ generatedUrl, qrCanvasRef, onDownload }) {
  return (
    <section className="preview">
      <p className="eyebrow">Passo 2</p>
      <h3>Seu QR Code</h3>
      <div className="qr-frame">
        <QRCodeCanvas
          ref={qrCanvasRef}
          value={generatedUrl}
          size={320}
          marginSize={4}
          style={{ width: '100%', height: '100%', maxWidth: 320, maxHeight: 320 }}
        />
      </div>

      <button type="button" className="button ghost" onClick={onDownload}>
        Baixar PNG
      </button>
    </section>
  )
}

export default QrPreview
