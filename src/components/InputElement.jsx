

export default function InputElement({label, error ,id, ...props}) {
  return (        
    <div className="control no-margin">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
      {error && <span className="control-error">{error}</span>}
    </div>
  )
}