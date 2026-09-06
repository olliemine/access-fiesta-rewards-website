import { useState, type FormEvent } from 'react'

export function LeadForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="success" role="status">
        Recibimos tus datos. Un asesor te escribirá o llamará en horario de oficina. Si
        prefieres no esperar, marca o escribe por WhatsApp.
      </div>
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <label>
        Nombre completo
        <input name="nombre" type="text" autoComplete="name" required />
      </label>
      <label>
        Correo electrónico
        <input name="email" type="email" autoComplete="email" required />
      </label>
      <label>
        Teléfono
        <input name="telefono" type="tel" autoComplete="tel" required />
      </label>
      <button className="btn" type="submit">
        Quiero que me contacten
      </button>
    </form>
  )
}
