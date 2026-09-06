import { Link } from 'react-router-dom'
import { photos } from '../content/site'

export function DestinosPage() {
  return (
    <>
      <header className="page-intro wrap">
        <p className="kicker">Destinos</p>
        <h1>México primero. El mundo, cuando toque.</h1>
        <p className="lede">
          La membresía se entiende mejor en los destinos que Posadas ya opera —Cancún, Los
          Cabos, la ciudad— y se estira al inventario internacional cuando el viaje sale del
          país.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap mosaic">
          <article className="mosaic__lg">
            <img src={photos.cancun} alt="Costa de Cancún vista desde el aire, mar turquesa" />
            <h3>Cancún</h3>
          </article>
          <article className="mosaic__sm">
            <img src={photos.cdmx} alt="Fachada de hotel en un destino urbano" />
            <h3>Ciudad de México</h3>
          </article>
          <article className="mosaic__sm">
            <img src={photos.cabos} alt="Lancha en mar abierto, luz de atardecer" />
            <h3>Los Cabos</h3>
          </article>
        </div>

        <div className="wrap dest-list">
          <article>
            <img src={photos.ny} alt="Skyline de Nueva York al atardecer" />
            <h3>Nueva York</h3>
            <p className="muted">
              El inventario internacional cubre ciudad. El descuento no sustituye la
              temporada alta: conviene comparar fechas.
            </p>
          </article>
          <article>
            <img src={photos.paris} alt="Río Sena y tejados de París" />
            <h3>París</h3>
            <p className="muted">
              Mismo contrato, otro huso horario. La promesa es tarifa de socio, no un tour
              empacado.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap">
          <p className="kicker">Cómo se usa</p>
          <h2>Cinco pasos, sin teatro.</h2>
          <ol className="plain-list">
            <li>
              <span className="num">01</span>
              Confirmas la membresía —en línea, por teléfono o con el asesor del hotel.
            </li>
            <li>
              <span className="num">02</span>
              Eliges el paquete de noches de cortesía: 4 o 7, según la marca de ciudad.
            </li>
            <li>
              <span className="num">03</span>
              Reservas con tarifa de socio en Posadas o en el inventario internacional.
            </li>
            <li>
              <span className="num">04</span>
              Si viaja alguien más de la familia, transfieres el beneficio.
            </li>
            <li>
              <span className="num">05</span>
              Repites durante tres años. El contrato no caduca al primer fin de semana.
            </li>
          </ol>
          <div className="btn-row">
            <Link className="btn" to="/contacto">
              Pedir informes
            </Link>
            <Link className="btn btn--ghost" to="/precios-membresia">
              Ver el precio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
