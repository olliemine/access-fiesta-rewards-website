import { Link } from 'react-router-dom'
import { CanvasBMC } from '../components/CanvasBMC'
import { canvasBlocks } from '../content/canvas'

const kindLabel = {
  modified: 'Modificado',
  secondary: 'Efecto secundario',
  unchanged: 'Sin cambio de fórmula',
} as const

export function LienzoPage() {
  return (
    <>
      <header className="page-intro wrap">
        <p className="kicker">Análisis · 03</p>
        <h1>El lienzo de Access Light, antes y después del pivote frontstage</h1>
        <p className="lede">
          A la derecha, lo que el huésped ve hoy: una membresía de descuento vendida en el
          WiFi. Oro marca los bloques que el club de experiencias reescribe. Azul marca los
          ecos en la trastienda y en el ingreso. Crema: la fórmula de costos no se pivota.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap-wide">
          <CanvasBMC />
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap impact-list">
          <p className="kicker">Detalle por bloque</p>
          <h2>Qué cambia, y qué impacto se espera.</h2>
          {canvasBlocks.map((block) => (
            <article key={block.id} className="impact-item">
              <div className="badge">{kindLabel[block.change]}</div>
              <h3>
                {block.title}
                {block.change !== 'unchanged' ? ` — ${block.annotation}` : null}
              </h3>
              <p>{block.detail}</p>
              <p>
                <strong>Impacto. </strong>
                {block.impact}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="quote">
            El descuento se queda. Lo que se va es la idea de que un huésped es un lead, y
            de que una landing basta para llenar 34 hoteles nuevos.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/propuestas">
              Revisar por qué se eligió este pivote
            </Link>
            <Link className="btn btn--ghost" to="/">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
