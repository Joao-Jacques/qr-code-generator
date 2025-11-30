import { UrlInput } from './input'

function QrForm({ url, error, onUrlChange, onGenerate }) {
  return (
    <section className="form-panel">
      <div>
        <p className="eyebrow">Passo 1</p>
        <h2>Cole sua URL</h2>
        <p className="muted">
          Validamos e convertemos em um formato amigável para QR.
        </p>
      </div>

      <form onSubmit={onGenerate} className="form">
        <UrlInput
          label="URL de Destino"
          value={url}
          onChange={onUrlChange}
          placeholder="https://your-link.com"
          required
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="button primary">
          Gerar QR Code
        </button>
      </form>
    </section>
  )
}

export default QrForm
