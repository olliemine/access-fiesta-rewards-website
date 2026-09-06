import { useState } from 'react'
import { canvasBlocks, type CanvasMode, type ChangeKind } from '../content/canvas'

const labels: Record<CanvasMode, string> = {
  actual: 'Lienzo actual',
  overlay: 'Cambios sobrepuestos',
  proposed: 'Lienzo propuesto',
}

function changeClass(kind: ChangeKind, mode: CanvasMode) {
  if (mode === 'actual') return ''
  if (kind === 'modified') return 'block--modified'
  if (kind === 'secondary') return 'block--secondary'
  return ''
}

export function CanvasBMC() {
  const [mode, setMode] = useState<CanvasMode>('overlay')

  return (
    <div>
      <div className="bmc-toolbar" role="tablist" aria-label="Vista del lienzo">
        {(Object.keys(labels) as CanvasMode[]).map((key) => (
          <button
            key={key}
            type="button"
            className={mode === key ? 'is-on' : ''}
            onClick={() => setMode(key)}
            aria-pressed={mode === key}
          >
            {labels[key]}
          </button>
        ))}
      </div>

      <div className="legend">
        <span>
          <i className="swatch swatch--mod" /> Bloque modificado (frontstage)
        </span>
        <span>
          <i className="swatch swatch--sec" /> Efecto secundario
        </span>
        <span>
          <i className="swatch swatch--ok" /> Sin cambio de fórmula
        </span>
      </div>

      <div className={mode === 'overlay' ? 'bmc is-overlay' : 'bmc'}>
        {canvasBlocks.map((block) => {
          const items = mode === 'proposed' ? block.proposed : block.current
          return (
            <article
              key={block.id}
              className={`block block--${block.area} ${changeClass(block.change, mode)}`}
            >
              <h3>{block.title}</h3>
              {mode === 'overlay' && block.change !== 'unchanged' ? (
                <>
                  <div className="arrow">ahora</div>
                  <ul>
                    {block.current.map((line) => (
                      <li key={`a-${line}`}>{line}</li>
                    ))}
                  </ul>
                  <div className="arrow">después →</div>
                  <ul>
                    {block.proposed.map((line) => (
                      <li key={`d-${line}`}>{line}</li>
                    ))}
                  </ul>
                  <p className="block__note">{block.annotation}</p>
                </>
              ) : (
                <>
                  <ul>
                    {items.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                  {mode === 'proposed' && block.change !== 'unchanged' ? (
                    <p className="block__note">{block.annotation}</p>
                  ) : null}
                </>
              )}
            </article>
          )
        })}
      </div>
    </div>
  )
}
