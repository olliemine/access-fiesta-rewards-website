import { Link } from 'react-router-dom'
import { LeadForm } from '../components/LeadForm'
import { photos, site } from '../content/site'

export function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero__copy">
          <p className="kicker">Exclusivo para huéspedes del hotel</p>
          <h1>Este viaje puede pagar el siguiente.</h1>
          <p className="lede">
            Access Fiesta Rewards Light es una membresía a tres años: hasta 40% en hoteles
            Posadas y en un inventario internacional, con noches de cortesía incluidas. Se
            recupera, en muchos casos, en el primer viaje que ya estás haciendo.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/precios-membresia">
              Ver el precio de la membresía
            </Link>
            <Link className="btn btn--ghost" to="/beneficios">
              Cómo funciona el ahorro
            </Link>
          </div>
        </div>
        <div className="hero__photo">
          <img
            src={photos.hero}
            alt="Habitación de hotel con terraza y luz de día, fotografía real"
          />
          <span className="hero__caption">Una habitación, no una alberca de catálogo.</span>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="kicker">Por qué tiene sentido ahora</p>
            <h2>Cuatro razones concretas, sin recargo de urgencia.</h2>
            <ol className="plain-list">
              <li>
                <span className="num">01</span>
                Hasta 40% en tarifas de Grupo Posadas y en cadenas internacionales. El
                descuento no es un cupón de un fin de semana: dura los tres años de la
                membresía.
              </li>
              <li>
                <span className="num">02</span>
                Noches de cortesía para usar cuando quieras: 4 en Fiesta Americana de ciudad
                o 7 en Fiesta Inn de ciudad. Pagas impuestos y propinas, no la habitación.
              </li>
              <li>
                <span className="num">03</span>
                Precio promocional de {site.pricePromo} MXN, o {site.priceMonth} al mes a 24
                MSI — {site.savings} menos que el precio de lista.
              </li>
              <li>
                <span className="num">04</span>
                Certificado 2x1 de bienvenida, vigente por tiempo limitado, para quien se
                registra como huésped de esta propiedad.
              </li>
            </ol>
          </div>
          <figure className="figure">
            <img
              src={photos.dining}
              alt="Mesa servida en un restaurante de hotel, con copas y luz baja"
            />
            <figcaption>10% de descuento en alimentos y bebidas en hoteles Posadas.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap split split--reverse">
          <div>
            <p className="kicker">Solicitar informes</p>
            <h2>Un asesor te explica el contrato. Tú decides en casa, no en el pasillo.</h2>
            <p className="muted">
              Déjanos nombre, correo y teléfono. También puedes marcar al {site.phoneDisplay}{' '}
              o escribir al WhatsApp {site.whatsappDisplay}.
            </p>
            <LeadForm />
          </div>
          <figure className="figure">
            <img
              src={photos.friends}
              alt="Grupo de amigos conversando al aire libre, luz de atardecer suave"
            />
            <figcaption>La membresía se puede compartir con familia o amigos.</figcaption>
          </figure>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="kicker">Para el jurado y para Posadas</p>
          <p className="quote">
            La venta en el WiFi convierte. El reto de Grupo Posadas es otro: que el socio
            vuelva. Aquí está el análisis de tendencias, tres pivotes y el lienzo anotado.
          </p>
          <div className="btn-row">
            <Link className="btn btn--gold" to="/tendencias">
              Leer la propuesta estratégica
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
