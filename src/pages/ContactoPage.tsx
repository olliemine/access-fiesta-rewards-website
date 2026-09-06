import { LeadForm } from '../components/LeadForm'
import { photos, site } from '../content/site'

export function ContactoPage() {
  return (
    <>
      <header className="page-intro wrap">
        <p className="kicker">Contacto</p>
        <h1>Habla con una persona. El contrato no se firma contra el reloj del WiFi.</h1>
        <p className="lede">
          Teléfono, WhatsApp o el formulario. El correo de promociones es {site.email}.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div>
            <p>
              <strong>Teléfono</strong>
              <br />
              <a href={site.phoneHref}>{site.phoneDisplay}</a>
            </p>
            <p>
              <strong>WhatsApp</strong>
              <br />
              <a href={site.whatsappHref}>{site.whatsappDisplay}</a>
            </p>
            <p>
              <strong>Correo</strong>
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <LeadForm />
          </div>
          <figure className="figure">
            <img
              src={photos.friends}
              alt="Personas conversando al aire libre"
            />
            <figcaption>Atención desde México, para viajes en México y fuera.</figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
