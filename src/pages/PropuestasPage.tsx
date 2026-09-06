import { Link } from 'react-router-dom'

export function PropuestasPage() {
  return (
    <>
      <header className="page-intro wrap">
        <p className="kicker">Análisis · 02</p>
        <h1>Tres propuestas para el reto de Posadas. Una se queda.</h1>
        <p className="lede">
          El lienzo de Osterwalder se lee como un teatro: derecha, lo que el cliente ve
          (frontstage); izquierda, la maquinaria (backstage); abajo, cómo se gana y se
          gasta (rentabilidad). Hay un pivote para cada zona. Solo uno ataca de frente el
          37% que no se mueve.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <article className="proposal proposal--chosen">
            <div>
              <div className="proposal__tag">Frontstage</div>
              <div className="chosen-note">Seleccionada</div>
            </div>
            <div>
              <h2>“Un viaje te lleva a otro”</h2>
              <p>
                De membresía de descuento vendida en el portal WiFi a un club de
                experiencias que acompaña entre estancias. Se conserva el 40%, las noches
                de cortesía y el precio de Access Light. Se cambia lo que el socio ve,
                siente y usa cuando no está en el hotel: Invita, reconocimiento inmediato,
                app y campaña de marca —no escasez de “actívala en un minuto”.
              </p>
              <p>
                Toca segmentos (millennials, Gen Z, bleisure, socio Rewards que no se
                traduce en noche), propuesta de valor, canales y relación. Es el lenguaje
                que Posadas ya estrenó con Diego Klein. Access Light, hoy, habla otro.
              </p>
            </div>
          </article>

          <article className="proposal">
            <div className="proposal__tag">Backstage</div>
            <div>
              <h2>Orquestar datos y partners, sin que el huésped lo note</h2>
              <p>
                Unificar Access, Fiesta Rewards y el huésped in-stay en una plataforma de
                datos propios. Menos call center como motor, más personalización y aliados
                (Santander, GNP, venues). Los bloques que se mueven son recursos,
                actividades, socios y, de rebote, costos.
              </p>
              <p>
                Es correcta como infraestructura. Es insuficiente como respuesta al reto:
                el socio no deja de percibir una venta de alta presión solo porque el CRM
                se integró. El backstage sostiene el club; no lo inventa.
              </p>
            </div>
          </article>

          <article className="proposal">
            <div className="proposal__tag">Rentabilidad</div>
            <div>
              <h2>Bajar la puerta de $34,999 y cobrar en recurrencia</h2>
              <p>
                Pasar del pago único a tres años a una cuota anual más baja, con MSI y con
                LTV que se completa en A&B y experiencias. Se ataca el CAC de los closers y
                se alinea el ingreso con el uso. Es el patrón transaccional → recurrente.
              </p>
              <p>
                Útil, y quizá inevitable más adelante. Hoy el problema declarado no es que
                Access sea impagable: es que cuatro millones de socios no empujan la
                ocupación. Cambiar el SKU sin cambiar la relación es mudar el precio de un
                producto que el viajero joven ya no desea del todo.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap split">
          <div>
            <p className="kicker">Criterio de selección</p>
            <h2>Por qué gana el frontstage.</h2>
            <ol className="plain-list">
              <li>
                <span className="num">01</span>
                El KPI que la compañía puso en público es ocupación de socios, no margen
                de la membresía ni costo por llamada. Eso se mueve en segmentos, propuesta
                de valor, canales y relación.
              </li>
              <li>
                <span className="num">02</span>
                Las megatendencias (experiencia, novedad, viajero doméstico joven) pegan
                en lo que el cliente ve. Un CDP impecable no corrige una landing que
                parece plantilla de inteligencia artificial.
              </li>
              <li>
                <span className="num">03</span>
                Posadas ya invirtió relato e Invita en esa dirección. Elegir backstage o
                precio sería desoír el movimiento que la empresa ya empezó.
              </li>
              <li>
                <span className="num">04</span>
                Access Light se queda. No se mata el ingreso de $34,999; se le da un
                significado que sobrevive al check-out.
              </li>
            </ol>
            <div className="btn-row">
              <Link className="btn" to="/lienzo">
                Ver el lienzo anotado
              </Link>
              <Link className="btn btn--ghost" to="/tendencias">
                Volver a tendencias
              </Link>
            </div>
          </div>
          <div>
            <article className="report-card">
              <h3>Lo que no se elige —y no se descarta</h3>
              <p>
                El backstage (datos, partners, menos closer) es la condición de
                posibilidad del club. La recurrencia de precio puede venir cuando el socio
                ya tenga razones para renovar. El orden importa: primero la escena, luego
                el tramoyista, luego la taquilla.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
