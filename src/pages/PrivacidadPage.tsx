import { site } from '../content/site'

export function PrivacidadPage() {
  return (
    <article className="page-intro wrap" style={{ paddingBottom: '4rem', maxWidth: '42rem' }}>
      <p className="kicker">Aviso de privacidad</p>
      <h1>Tratamiento de datos en este sitio de proyecto</h1>
      <p className="lede">
        Este dominio de trabajo académico presenta la oferta Access Fiesta Rewards Light y
        un análisis de modelo de negocio. No sustituye el aviso oficial de Grupo Posadas.
      </p>
      <p>
        Los datos que captures en el formulario (nombre, correo y teléfono) se usan solo
        para simular una solicitud de informes en este prototipo. No se envían a un
        servidor de producción ni se ceden a terceros desde esta aplicación.
      </p>
      <p>
        La comercialización real de Access Fiesta Rewards Light, Fiesta Rewards y las
        marcas hoteleras corresponde a Grupo Posadas, S.A.B. de C.V., sus filiales y, en su
        caso, Infiniti Caribe N.V. El aviso de privacidad vigente —domicilio, derechos
        ARCO, finalidades y encargados— está en los canales oficiales del grupo, incluido
        el aviso publicado en el sitio comercial de Access.
      </p>
      <p>
        Contacto de referencia de promociones:{' '}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
      <p>
        <a href="https://www.accessfiestarewardslight.com/aviso-de-privacidad">
          Ver el aviso oficial en accessfiestarewardslight.com
        </a>
      </p>
    </article>
  )
}
