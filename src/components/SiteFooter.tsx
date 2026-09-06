import { Link } from 'react-router-dom'
import { site } from '../content/site'

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div>
          <h3>Access Fiesta Rewards Light</h3>
          <p>
            Membresía de hospedaje de Grupo Posadas. Ahorro en hoteles del grupo y en un
            inventario internacional, con noches de cortesía durante tres años.
          </p>
        </div>
        <div>
          <h3>Sitio</h3>
          <ul className="footer__links">
            <li>
              <Link to="/beneficios">Beneficios</Link>
            </li>
            <li>
              <Link to="/destinos">Destinos</Link>
            </li>
            <li>
              <Link to="/precios-membresia">Precio</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
            <li>
              <Link to="/aviso-de-privacidad">Aviso de privacidad</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Propuesta estratégica</h3>
          <ul className="footer__links">
            <li>
              <Link to="/tendencias">Tendencias</Link>
            </li>
            <li>
              <Link to="/propuestas">Tres pivotes</Link>
            </li>
            <li>
              <Link to="/lienzo">Lienzo de modelo de negocio</Link>
            </li>
          </ul>
          <p>
            {site.phoneDisplay}
            <br />
            <a href={site.whatsappHref}>WhatsApp {site.whatsappDisplay}</a>
            <br />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </div>
      <div className="wrap footer__legal">
        Sitio reconstruido con fines académicos a partir de la oferta Access Fiesta Rewards
        Light. Grupo Posadas, S.A.B. de C.V. y sus marcas son titularidad de sus respectivos
        dueños. Este proyecto no sustituye los canales oficiales de venta.
      </div>
    </footer>
  )
}
