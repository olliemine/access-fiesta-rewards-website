import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { site } from '../content/site'

const analysisPaths = ['/tendencias', '/propuestas', '/lienzo']

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [analysisOpen, setAnalysisOpen] = useState(false)
  const { pathname } = useLocation()
  const analysisActive = analysisPaths.includes(pathname)

  return (
    <header className="header">
      <div className="wrap header__inner">
        <NavLink to="/" end className="logo" onClick={() => setOpen(false)}>
          <span className="logo__access">ACCESS</span>
          <span className="logo__fiesta">Fiesta Rewards</span>
          <span className="logo__light">Light</span>
        </NavLink>

        <nav className="nav" aria-label="Principal">
          <NavLink to="/beneficios">Beneficios</NavLink>
          <NavLink to="/destinos">Destinos</NavLink>
          <NavLink to="/precios-membresia">Precio</NavLink>
          <div className={analysisOpen ? 'nav__drop is-open' : 'nav__drop'}>
            <button
              type="button"
              className={analysisActive ? 'nav__drop-btn is-active' : 'nav__drop-btn'}
              aria-expanded={analysisOpen || analysisActive}
              onClick={() => setAnalysisOpen((v) => !v)}
            >
              Análisis
            </button>
            <div className="nav__menu">
              <NavLink to="/tendencias" onClick={() => setAnalysisOpen(false)}>
                Tendencias
              </NavLink>
              <NavLink to="/propuestas" onClick={() => setAnalysisOpen(false)}>
                Propuestas
              </NavLink>
              <NavLink to="/lienzo" onClick={() => setAnalysisOpen(false)}>
                Lienzo
              </NavLink>
            </div>
          </div>
          <NavLink to="/contacto">Contacto</NavLink>
        </nav>

        <div className="header__phones">
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={site.whatsappHref}>WhatsApp {site.whatsappDisplay}</a>
        </div>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </div>

      {open ? (
        <div className="drawer wrap">
          <NavLink to="/beneficios" onClick={() => setOpen(false)}>
            Beneficios
          </NavLink>
          <NavLink to="/destinos" onClick={() => setOpen(false)}>
            Destinos
          </NavLink>
          <NavLink to="/precios-membresia" onClick={() => setOpen(false)}>
            Precio
          </NavLink>
          <p className="muted" style={{ margin: '0.4rem 0 0.1rem' }}>
            Análisis
          </p>
          <NavLink to="/tendencias" onClick={() => setOpen(false)}>
            Tendencias
          </NavLink>
          <NavLink to="/propuestas" onClick={() => setOpen(false)}>
            Propuestas
          </NavLink>
          <NavLink to="/lienzo" onClick={() => setOpen(false)}>
            Lienzo
          </NavLink>
          <NavLink to="/contacto" onClick={() => setOpen(false)}>
            Contacto
          </NavLink>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={site.whatsappHref}>WhatsApp {site.whatsappDisplay}</a>
        </div>
      ) : null}
    </header>
  )
}
