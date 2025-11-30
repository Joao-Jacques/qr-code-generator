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
          size={400}  
          includeMargin={true}
        />
      </div>

      <button type="button" className="button ghost" onClick={onDownload}>
        Baixar PNG
      </button>
    </section>
  )
}

export default QrPreview
