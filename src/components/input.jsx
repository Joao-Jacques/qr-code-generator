export function UrlInput({ label, ...props }) {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <input className="field__input" type="url" autoComplete="off" {...props} />
    </label>
  )
}
