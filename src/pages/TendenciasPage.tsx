import { Link } from 'react-router-dom'

export function TendenciasPage() {
  return (
    <>
      <header className="page-intro wrap">
        <p className="kicker">Análisis · 01</p>
        <h1>Tendencias, megatendencias y demografía detrás de las propuestas</h1>
        <p className="lede">
          Grupo Posadas no parte de cero: Fiesta Rewards suma cerca de cuatro millones de
          socios y genera más de 2.3 millones de noches al año. El problema es que esa
          lealtad se tradujo, durante una década, en alrededor del 37% de la ocupación. La
          meta es 40%. Access Light —la membresía que se vende al huésped conectado al
          WiFi— es una palanca de ingreso. No es, todavía, la palanca de regreso.
        </p>
      </header>

      <section className="section section--cream" style={{ paddingTop: '2.4rem' }}>
        <div className="wrap">
          <p className="quote">
            El viajero de 2026 no se conquista con las mismas herramientas del viajero de
            1988. Acumular puntos sigue importando; ya no explica la relación.
          </p>
          <p className="muted" style={{ marginTop: '1rem' }}>
            Lectura alineada con la evolución pública de Fiesta Rewards e Invita (2026) y
            con el estancamiento de ocupación de socios que la propia compañía ha puesto
            sobre la mesa.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Megatendencias</p>
          <h2>Cuatro fuerzas que no caben en una campaña de 24 MSI.</h2>
          <div className="report-grid" style={{ marginTop: '1.6rem' }}>
            <article className="report-card">
              <h3>Economía de la experiencia</h3>
              <p>
                El gasto se desplaza del objeto (la noche, el punto) al episodio (el
                concierto, la mesa, el partido). Deloitte y otros estudios de lealtad
                hotelera muestran que una parte creciente de millennials prefieren una
                experiencia local a una noche gratis de valor equivalente. Posadas ya
                respondió con Fiesta Rewards Invita. Access Light, en cambio, sigue
                vendiéndose como un descuento.
              </p>
            </article>
            <article className="report-card">
              <h3>Membresía y recurrencia</h3>
              <p>
                El consumidor acepta pagar por pertenecer —siempre que el beneficio se
                sienta entre un uso y el siguiente. Access Light ya es una membresía de
                tres años. El hueco no es el SKU; es que la relación se apaga después del
                cierre telefónico. La megatendencia premia a quien se queda en la vida
                cotidiana del socio, no solo en el check-in.
              </p>
            </article>
            <article className="report-card">
              <h3>Datos propios frente a las OTA</h3>
              <p>
                La dependencia de agencias en línea encarece la distribución y aleja al
                huésped de la marca. Los canales directos digitales crecen y dejan más
                ingreso por transacción. Posadas tiene un activo que las OTA no tienen:
                cuatro millones de socios y el huésped ya dentro del hotel. Venderle una
                landing genérica desperdicia ese first-party data.
              </p>
            </article>
            <article className="report-card">
              <h3>Convergencia hotel, fintech y entretenimiento</h3>
              <p>
                La tarjeta Santander Fiesta Rewards, el patrocinio de foros y el catálogo
                Invita no son accesorios: son el mapa de una industria que ya no cabe en el
                front desk. El modelo de negocio del grupo se juega en esa intersección. Un
                pivote que ignore a Santander, GNP o las experiencias queda corto.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap">
          <p className="kicker">Tendencias de sector</p>
          <h2>Lo que ya se ve en el pasillo, no en 2035.</h2>
          <ol className="plain-list">
            <li>
              <span className="num">01</span>
              <strong> Recompensa inmediata contra earn-and-burn.</strong> Solo una
              minoría de millennials y Gen Z sigue viendo la acumulación de puntos como
              razón suficiente para repetir marca. “Quédate veinte noches y te regalamos
              una” suena a otro siglo. Access Light ya ofrece un beneficio tangible
              (descuento + noches). Falta que ese beneficio aparezca entre viajes, no solo
              en la siguiente reserva.
            </li>
            <li>
              <span className="num">02</span>
              <strong> Turismo doméstico como motor.</strong> En México, el huésped
              nacional sostiene una parte mayoritaria de la ocupación. El viajero
              estadounidense no desaparece, pero ya no es el único reloj del negocio. Un
              programa pensado para el socio que vive en CDMX, Monterrey o Guadalajara —y
              que arma puentes en Cancún o Cabos— vale más que una landing de “60,000
              destinos” fotografiada en una alberca de catálogo.
            </li>
            <li>
              <span className="num">03</span>
              <strong> Bleisure y estancias híbridas.</strong> Trabajo y ocio se mezclan.
              Fiesta Inn y las marcas de ciudad dejan de ser el “premio menor” de las
              noches de cortesía: son el producto que el socio usa entre semana. La
              membresía debería hablarle a ese calendario, no solo al de vacaciones.
            </li>
            <li>
              <span className="num">04</span>
              <strong> Novedad versus fidelidad en Gen Z.</strong> Los más jóvenes sí
              canjean y sí se inscriben a programas; abandonan cuando el programa huele a
              repetición. Phocuswright lo resume: si novedad y lealtad chocan, gana la
              novedad. Por eso Invita (teatro, deporte, conciertos) no es un adorno. Es el
              antídoto a un Access que se siente siempre igual: 40%, MSI, “actívala ahora”.
            </li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="kicker">Demografía</p>
          <h2>Quién decide el siguiente viaje —y quién está atrapado en el router.</h2>
          <div className="report-grid">
            <article className="report-card">
              <p className="stat">~4 M</p>
              <h3>Socios Fiesta Rewards</h3>
              <p>
                Crecieron cerca de 7% en el último año. El volumen no es el cuello de
                botella. El cuello es la conversión de socio a noche. Diez años en 37% de
                ocupación de Rewards es un dato demográfico de comportamiento, no de
                awareness.
              </p>
            </article>
            <article className="report-card">
              <p className="stat">37% → 40%</p>
              <h3>La meta que no se mueve sola</h3>
              <p>
                Tres puntos porcentuales parecen menores. En un sistema de ~200 hoteles y
                una expansión de 34 propiedades, son el equivalente a decidir si el
                crecimiento nuevo lo llenan socios o lo llenan OTA.
              </p>
            </article>
            <article className="report-card">
              <p className="stat">Millennials + Gen Z</p>
              <h3>El peso del gasto, no del folleto</h3>
              <p>
                Dominan una fracción creciente del turismo de ocio y del lujo accesible.
                Planifican en app y en redes, desconfían de la escasez inventada y comparan
                tarifas en dos pestañas. La landing actual habla como si el único segmento
                fuera el huésped cautivo del WiFi.
              </p>
            </article>
            <article className="report-card">
              <p className="stat">In-stay</p>
              <h3>El huésped que ya pagó la noche</h3>
              <p>
                Access Light nace en un momento de alta intención: la persona ya está en la
                propiedad. Ese segmento no se tira. Se le deja de tratar como lead de
                infomercial. Familias que comparten la membresía y viajeros bleisure de
                ciudad completan el retrato.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <p className="kicker">Puente a las propuestas</p>
          <p className="quote">
            Si el diagnóstico es relación y ocupación —no falta de socios ni falta de
            descuento— el pivote más honesto es de frontstage. Los otros dos existen y se
            evalúan. Uno se elige.
          </p>
          <div className="btn-row">
            <Link className="btn" to="/propuestas">
              Ver los tres pivotes
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
