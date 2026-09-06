import { Link } from 'react-router-dom'
import { photos } from '../content/site'

export function BeneficiosPage() {
  return (
    <>
      <header className="page-intro wrap">
        <p className="kicker">Beneficios</p>
        <h1>El ahorro es medible. El resto del contrato también.</h1>
        <p className="lede">
          Access Light no promete un estilo de vida. Promete tarifa de socio, noches de
          cortesía y un inventario que puedes usar en México y fuera, durante 36 meses.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="benefit-row">
            <strong>Hasta 40%</strong>
            <p>
              Descuento en hoteles de Grupo Posadas y hasta 40% en hoteles internacionales
              del inventario de la membresía. Hay garantía de mejor tarifa pública
              reembolsable en propiedades Posadas.
            </p>
          </div>
          <div className="benefit-row">
            <strong>Se comparte</strong>
            <p>
              Puedes transferir el beneficio a familiares o amigos. No hace falta que el
              titular viaje en cada reserva.
            </p>
          </div>
          <div className="benefit-row">
            <strong>Sin tope de reservas</strong>
            <p>
              No hay un número máximo de reservaciones durante la vigencia. Viajas cuando el
              calendario —y la disponibilidad— lo permiten.
            </p>
          </div>
          <div className="benefit-row">
            <strong>10% en A&B</strong>
            <p>
              Descuento en alimentos y bebidas para el titular en hoteles de Grupo Posadas.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap">
          <p className="kicker">Un ejemplo, no un milagro</p>
          <h2>Fin de semana en Cancún, con y sin membresía.</h2>
          <p className="muted" style={{ maxWidth: '38rem' }}>
            Los montos ilustran el tipo de diferencia que busca el producto. La tarifa real
            depende de fechas, hotel y disponibilidad.
          </p>
          <table className="compare">
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Sin Access</th>
                <th>Con Access</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fin de semana en Cancún</td>
                <td>$18,400</td>
                <td>$11,200</td>
              </tr>
              <tr>
                <td>Navidad en Los Cabos</td>
                <td>$28,900</td>
                <td>$17,400</td>
              </tr>
              <tr>
                <td>Ciudad de México, tres noches</td>
                <td>$9,800</td>
                <td>$6,200</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Noches incluidas</p>
          <h2>Elige un paquete. Lo usas en tres años, sujeto a disponibilidad.</h2>
          <p className="muted">
            No pagas la habitación. Cubres impuestos y propinas. Conviene reservar con
            anticipación, sobre todo en puentes y temporada alta.
          </p>
          <div className="nights" style={{ marginTop: '1.5rem' }}>
            <article>
              <div className="qty">4</div>
              <h3>Noches Fiesta Americana ciudad</h3>
              <p>
                Incluye Grand Fiesta Americana en destinos urbanos. Pensado para quien ya
                se mueve entre CDMX, Monterrey o Guadalajara.
              </p>
            </article>
            <article>
              <div className="qty">7</div>
              <h3>Noches Fiesta Inn ciudad</h3>
              <p>
                Útil para trabajo o para una escapada corta. Siete noches rinden más si las
                fraccionas en varios viajes.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap split">
          <div>
            <p className="kicker">Marcas Posadas</p>
            <h2>Live Aqua, Grand Fiesta Americana, Fiesta Inn, One y más.</h2>
            <p>
              El descuento de socio aplica en el portafolio del grupo —Live Aqua, Grand
              Fiesta Americana, Fiesta Americana, Curamoria, Fiesta Inn, One, Funeeq, The
              Explorean— y se suma a un inventario internacional de más de 60,000 destinos.
            </p>
            <Link className="btn" to="/precios-membresia">
              Ver precio y condiciones
            </Link>
          </div>
          <figure className="figure">
            <img
              src={photos.lobby}
              alt="Habitación de hotel con cama hecha y luz de mañana"
            />
            <figcaption>Playas y ciudad: el mismo contrato cubre ambos ritmos.</figcaption>
          </figure>
        </div>
      </section>
    </>
  )
}
