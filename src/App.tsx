import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { SiteHeader } from './components/SiteHeader'
import { SiteFooter } from './components/SiteFooter'
import { HomePage } from './pages/HomePage'
import { BeneficiosPage } from './pages/BeneficiosPage'
import { DestinosPage } from './pages/DestinosPage'
import { PrecioPage } from './pages/PrecioPage'
import { ContactoPage } from './pages/ContactoPage'
import { PrivacidadPage } from './pages/PrivacidadPage'
import { TendenciasPage } from './pages/TendenciasPage'
import { PropuestasPage } from './pages/PropuestasPage'
import { LienzoPage } from './pages/LienzoPage'

const titles: Record<string, string> = {
  '/': 'Access Fiesta Rewards Light',
  '/beneficios': 'Beneficios · Access Fiesta Rewards Light',
  '/destinos': 'Destinos · Access Fiesta Rewards Light',
  '/precios-membresia': 'Precio · Access Fiesta Rewards Light',
  '/contacto': 'Contacto · Access Fiesta Rewards Light',
  '/aviso-de-privacidad': 'Aviso de privacidad · Access Fiesta Rewards Light',
  '/tendencias': 'Tendencias · Propuesta Posadas',
  '/propuestas': 'Propuestas · Propuesta Posadas',
  '/lienzo': 'Lienzo · Propuesta Posadas',
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = titles[pathname] ?? 'Access Fiesta Rewards Light'
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <ScrollToTop />
      <SiteHeader />
      <main id="contenido">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/beneficios" element={<BeneficiosPage />} />
          <Route path="/destinos" element={<DestinosPage />} />
          <Route path="/precios-membresia" element={<PrecioPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/aviso-de-privacidad" element={<PrivacidadPage />} />
          <Route path="/tendencias" element={<TendenciasPage />} />
          <Route path="/propuestas" element={<PropuestasPage />} />
          <Route path="/lienzo" element={<LienzoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </>
  )
}
