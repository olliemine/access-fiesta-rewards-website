import { Link } from 'react-router-dom'
import { photos, site } from '../content/site'

export function PrecioPage() {
  return (
    <>
      <header className="page-intro wrap">
        <p className="kicker">Precio</p>
        <h1>Tres años. Un precio. Meses sin intereses si el banco los autoriza.</h1>
        <p className="lede">
          La membresía no es una suscripción mensual disfrazada. Es un contrato de 36 meses
          con tarifa promocional de huésped.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap split">
          <div className="price-panel">
            <p className="kicker">Membresía 3 años</p>
            <div className="old">{site.priceFull} MXN</div>
            <div className="now">{site.pricePromo}</div>
            <p>Pago único, precio de huésped. Ahorras {site.savings} respecto al precio de lista.</p>
            <p className="month">
              O {site.priceMonth} al mes a 24 MSI
              <span className="old" style={{ marginLeft: '0.5rem' }}>
                {site.priceMonthBefore}
              </span>
            </p>
            <hr className="gold-rule" />
            <ul className="plain-list">
              <li>Hasta 40% en Posadas y en el inventario internacional</li>
              <li>Noches de cortesía (4 o 7, según marca de ciudad)</li>
              <li>10% en alimentos y bebidas para el titular</li>
              <li>Transferible a familia o amigos</li>
            </ul>
            <div className="btn-row">
              <Link className="btn" to="/contacto">
                Solicitar informes
              </Link>
              <a className="btn btn--ghost" href={site.whatsappHref}>
                WhatsApp
              </a>
            </div>
            <p className="muted" style={{ marginTop: '1rem', fontSize: '0.85rem' }}>
              Mensualidades sin intereses sujetas a aprobación crediticia. Precio promocional
              de huésped, por tiempo limitado.
            </p>
          </div>
          <figure className="figure">
            <img
              src={photos.city}
              alt="Fachada iluminada de un hotel al anochecer"
            />
            <figcaption>
              El precio se entiende frente a la tarifa de mostrador, no frente a un
              “estilo de vida”.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap">
          <p className="kicker">Preguntas frecuentes</p>
          <h2>Lo que suele preguntarse antes de firmar.</h2>
          <div className="faq">
            <details>
              <summary>¿Cómo empiezo?</summary>
              <p>
                Dejas tus datos en esta página o llamas al {site.phoneDisplay}. Un asesor
                te explica vigencia, noches de cortesía y restricciones. También puedes
                escribir por WhatsApp al {site.whatsappDisplay}.
              </p>
            </details>
            <details>
              <summary>¿Qué descuentos incluye?</summary>
              <p>
                Hasta 40% en hoteles de Grupo Posadas y hasta 40% en otras cadenas del
                inventario, en más de 60 mil destinos. La tarifa exacta depende del hotel y
                de las fechas.
              </p>
            </details>
            <details>
              <summary>¿Qué marcas de Posadas entran?</summary>
              <p>
                Live Aqua, Grand Fiesta Americana, Fiesta Americana, Curamoria, Fiesta Inn,
                One, Funeeq y The Explorean, entre otras del portafolio vigente.
              </p>
            </details>
            <details>
              <summary>¿Puedo combinarla con otras promociones?</summary>
              <p>
                En muchos casos sí, con las ofertas vigentes del hotel. El asesor confirma
                qué se puede apilar y qué no, hotel por hotel.
              </p>
            </details>
            <details>
              <summary>¿Hay garantía de precio?</summary>
              <p>
                En hoteles Posadas, si encuentras una tarifa pública reembolsable más baja,
                se empareja. Aplica según las condiciones del programa.
              </p>
            </details>
            <details>
              <summary>¿Las noches de cortesía tienen letra chica?</summary>
              <p>
                Sí: sujeto a disponibilidad, impuestos y propinas por cuenta del socio, y
                vigencia de tres años. No son un all inclusive ni aplican en cualquier
                propiedad de playa.
              </p>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}
