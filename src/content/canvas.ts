export type CanvasMode = 'actual' | 'overlay' | 'proposed'
export type ChangeKind = 'unchanged' | 'modified' | 'secondary'

export interface CanvasBlock {
  id: string
  title: string
  area: string
  current: string[]
  proposed: string[]
  change: ChangeKind
  annotation: string
  detail: string
  impact: string
}

export const canvasBlocks: CanvasBlock[] = [
  {
    id: 'kp',
    title: 'Socios clave',
    area: 'kp',
    current: [
      'Cadenas internacionales (inventario de ~1 millón de hoteles)',
      'Infiniti Caribe N.V. (comercialización)',
      'Bancos para 24 meses sin intereses',
    ],
    proposed: [
      'Se mantienen inventario internacional, Infiniti Caribe y bancos',
      'Se suman Fiesta Rewards Invita, venues (Estadio GNP, Palacio de los Deportes) y Santander',
    ],
    change: 'secondary',
    annotation: 'Partners de experiencia para sostener el club, no el pivote principal',
    detail:
      'El pivote frontstage no nace en la red de aliados, pero la hace visible. Access Light hoy depende de inventario hotelero y de financiamiento. La propuesta incorpora los socios que ya está construyendo Posadas —Invita, entretenimiento y la tarjeta Santander— para que el socio reciba valor entre una estancia y la siguiente.',
    impact:
      'El inventario deja de ser el único argumento de venta. Los aliados de experiencia dan sustancia al acompañamiento y reducen la presión de “cerrar” solo con un descuento del 40%.',
  },
  {
    id: 'ka',
    title: 'Actividades clave',
    area: 'ka',
    current: [
      'Captación en el portal WiFi del hotel',
      'Cierre telefónico y WhatsApp',
      'Reservas y atención postventa de la membresía',
    ],
    proposed: [
      'Captación sigue, pero deja de ser el centro',
      'Curaduría de experiencias y contenido de marca',
      'Acompañamiento entre viajes (app, concierge de club)',
    ],
    change: 'secondary',
    annotation: 'De cerrar la venta a cuidar la relación',
    detail:
      'Hoy la operación gira alrededor de convertir al huésped que acaba de conectarse al WiFi. Con el pivote, esa captación permanece —el hotel sigue siendo un momento de alta intención— pero se añaden actividades de curaduría (conciertos, gastronomía, deporte) y de relación continua, alineadas con “Un viaje te lleva a otro”.',
    impact:
      'El equipo deja de medirse solo por cierres del día. Gana sentido una operación de lealtad que busca el segundo y el tercer viaje, no únicamente la firma de los $34,999.',
  },
  {
    id: 'kr',
    title: 'Recursos clave',
    area: 'kr',
    current: [
      'Marca e inventario de Grupo Posadas (~200 hoteles)',
      'Landing de captación y call center',
      'Noches de cortesía como gancho de conversión',
    ],
    proposed: [
      'Marca e inventario se conservan',
      'App y datos first-party de Fiesta Rewards (~4 millones de socios)',
      'Catálogo de experiencias Invita (>200)',
    ],
    change: 'secondary',
    annotation: 'El recurso estratégico pasa a ser la relación, no la landing',
    detail:
      'Access Light hoy se apoya en una página de captura y en un equipo de ventas. El recurso más valioso de Posadas —cuatro millones de socios y el conocimiento de sus estancias— queda subutilizado. La propuesta pone la app, el dato propio y el catálogo Invita al mismo nivel que el inventario.',
    impact:
      'Menos dependencia de plantillas genéricas de captación. Más capacidad de reconocer al socio en el siguiente viaje y de ofrecer un beneficio inmediato, no solo un descuento diferido.',
  },
  {
    id: 'vp',
    title: 'Propuesta de valor',
    area: 'vp',
    current: [
      'Hasta 40% en Posadas e internacionales',
      '4 o 7 noches de cortesía (impuestos y propinas aparte)',
      '10% en alimentos y bebidas, membresía transferible, 3 años',
    ],
    proposed: [
      'Se conserva el ahorro (la membresía debe seguir pagándose sola)',
      'Se añade un club de experiencias entre estancias',
      'Reconocimiento inmediato: el beneficio no espera a la noche 20',
    ],
    change: 'modified',
    annotation: 'Del descuento que se vende al viaje que continúa',
    detail:
      'La oferta actual es clara y cuantificable: precio, noches, plazo. Eso no se tira. El hueco está en lo que ocurre entre un check-out y el siguiente check-in. Millennials y Gen Z comparan el earn-and-burn con recompensas inmediatas de otros sectores. La propuesta suma experiencias (Invita), reconocimiento en el momento y un relato de continuidad —el mismo que Posadas ya comunica con Diego Klein— sin abandonar el 40% ni las noches incluidas.',
    impact:
      'Access deja de competir solo contra “otra tarifa en internet” y empieza a competir por el tiempo del viajero entre viajes. Eso es lo que puede mover la ocupación de socios, estancada cerca del 37% desde hace una década.',
  },
  {
    id: 'cr',
    title: 'Relación con clientes',
    area: 'cr',
    current: [
      'Venta asistida de alta presión (escasez, “actívala ahora”)',
      'Seguimiento por teléfono y WhatsApp',
      'Relación transaccional de 36 meses',
    ],
    proposed: [
      'De cierre con urgencia a club / concierge continuo',
      'Contacto entre viajes, no solo para cobrar o reservar',
      'La membresía se vive; no se “activa en un minuto” y se olvida',
    ],
    change: 'modified',
    annotation: 'El tono de la web es el síntoma: vende, no acompaña',
    detail:
      'El sitio actual —urgencia, escasez, estrellas genéricas— trata al huésped como un lead. El reto de Posadas no es firmar más contratos; es que el socio vuelva a dormir en un hotel del grupo. La relación propuesta es la de un club: un concierge que aparece con un concierto, una tarifa de ciudad o una noche de cortesía cuando el calendario del socio lo pide, no cuando el closer tiene meta.',
    impact:
      'Baja la fricción reputacional de la venta en el WiFi y sube la probabilidad de un segundo viaje. La ocupación de Rewards puede moverse hacia la meta del 40% sin inflar el gasto en closers.',
  },
  {
    id: 'ch',
    title: 'Canales',
    area: 'ch',
    current: [
      'Portal WiFi del hotel (huésped cautivo)',
      'Landing, call center y WhatsApp',
      'Teléfono (443) 310 85 35',
    ],
    proposed: [
      'El WiFi sigue como momento de alta intención',
      'Se abren app Fiesta Rewards, campaña “Un viaje te lleva a otro” y tarjeta Santander',
      'El canal digital deja de ser una landing de captura y pasa a ser el club',
    ],
    change: 'modified',
    annotation: 'Salir del portal cautivo sin abandonar el hotel',
    detail:
      'Vender en el WiFi funciona porque el huésped ya está en la propiedad. El problema es que el canal termina ahí: no hay un camino de planeación para quien todavía no se hospedó, ni un recordatorio vivo para quien ya se fue. La propuesta mantiene el hotel y suma los canales donde millennials y Gen Z deciden el siguiente viaje: app, campaña de marca y el uso cotidiano de la tarjeta.',
    impact:
      'Se alcanza al viajero en la etapa de planeación —donde Posadas dice que necesita estar— y se reduce la dependencia de un único momento de captura, el del router del hotel.',
  },
  {
    id: 'cs',
    title: 'Segmentos de clientes',
    area: 'cs',
    current: [
      'Huésped ya hospedado, captado por el WiFi',
      'Familias que pueden compartir la membresía',
      'Viajero frecuente de ciudad y playa en México',
    ],
    proposed: [
      'Se conserva el huésped in-stay (sigue siendo el mejor momento)',
      'Se privilegian millennials y Gen Z domésticos, bleisure y quienes planean en app',
      'El socio Rewards que hoy no se traduce en ocupación extra entra al mismo club',
    ],
    change: 'modified',
    annotation: 'De cautivo del router a viajero que decide el siguiente destino',
    detail:
      'Access Light hoy habla con quien ya está en la habitación. Ese segmento no desaparece. El vacío está en millennials y Gen Z —motor del gasto turístico doméstico— y en el socio de Fiesta Rewards que acumula puntos pero no eleva la ocupación del sistema. El pivote nombra a esos segmentos y les ofrece un club que se usa entre estancias, no solo un descuento para “activar ahora”.',
    impact:
      'Se alinea el producto con quién realmente mueve la demanda en México (turismo interno, bleisure, generaciones más jóvenes) y se ataca el estancamiento del 37% de ocupación de socios.',
  },
  {
    id: 'cost',
    title: 'Estructura de costos',
    area: 'cost',
    current: [
      'Comisiones y operación del call center',
      'Noches de cortesía e inventario promocional',
      'Landing y pauta de captura',
    ],
    proposed: [
      'Los costos de inventario y noches se mantienen',
      'Parte del gasto de cierre se desplaza a contenido, app y curaduría',
      'El costo de adquirir un socio se diluye en más viajes, no en un solo contrato',
    ],
    change: 'unchanged',
    annotation: 'Sin cambio de fórmula; sí de énfasis',
    detail:
      'Este no es un pivote de rentabilidad. La estructura de costos no se rediseña: siguen existiendo noches de cortesía, descuentos y un equipo comercial. El efecto es de énfasis: menos presupuesto en la máquina de escasez de la landing y más en el sistema que hace volver al socio.',
    impact:
      'El costo de captación deja de concentrarse en el primer contrato. Si el socio viaja más veces, el mismo gasto de noches y descuento rinde más ocupación —el indicador que lleva diez años plano.',
  },
  {
    id: 'rev',
    title: 'Fuentes de ingreso',
    area: 'rev',
    current: [
      'Pago único de membresía a 3 años: $34,999 MXN',
      '24 meses sin intereses ($1,458 al mes)',
      'Ingreso hotelero posterior por tarifas de socio',
    ],
    proposed: [
      'La membresía Access se conserva como ancla',
      'Se abre un hilo de valor (no necesariamente de cobro extra) vía experiencias y redención',
      'El ingreso verdaderamente estratégico sigue siendo la noche de hotel del socio que vuelve',
    ],
    change: 'secondary',
    annotation: 'No se cambia el precio; se cambia para qué se paga',
    detail:
      'No proponemos, en este pivote, pasar a suscripción anual. Eso sería el pivote de rentabilidad. Aquí el precio de Access Light permanece. Lo que cambia es la justificación del pago: no solo “ahorra 40%”, sino “perteneces a un club que te da el siguiente viaje”. El ingreso incremental esperado es ocupación e ingresos de A&B y experiencias, no un nuevo SKU de membresía.',
    impact:
      'Se protege el ingreso actual de Access y se apuesta a que el mismo contrato produzca más noches. Encaja con la meta de llevar la ocupación de socios del 37% al 40%.',
  },
]
