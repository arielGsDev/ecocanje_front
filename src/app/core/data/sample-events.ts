import { EventInfo } from './event.model';

/**
 * Demo data taken from the prototype. It lives only here: components, styles and animations
 * never reference it. Replace with API calls in EventsService; the views do not change.
 */
export const SAMPLE_EVENTS: EventInfo[] = [
  {
    id: 'nueva-aurora',
    featured: true,
    sample: true,
    name: 'EcoCanje en Nueva Aurora',
    place: 'Nueva Aurora, Guamaní, Quito',
    status: 'live',
    headline: 'Nos dio agua. Ahora nos toca cuidarla.',
    summary:
      'En julio de 2025, esta vertiente ayudó al barrio cuando faltó el agua. Hoy nos reunimos para cuidar su entorno, aprender y darle una nueva oportunidad a nuestros residuos.',
    photo: {
      src: 'images/spring-overview.jpg',
      alt: 'Vista amplia de la vertiente: un muro de ladrillo curvo, el agua cubierta de vegetación verde y árboles al fondo.',
    },
    highlights: [
      { value: 'Julio 2025', label: 'La vertiente ayudó al barrio' },
      { value: '28 nov', label: 'Primer taller comunitario' },
      { value: '4 etapas', label: 'Un camino en comunidad' },
    ],
    story: {
      title: 'Cuando faltó el agua, el barrio encontró aquí una ayuda.',
      paragraphs: [
        'Durante la emergencia hídrica de julio de 2025, familias de Nueva Aurora llegaron a esta vertiente con baldes, ollas y botellones. Su agua se convirtió en una ayuda para la comunidad.',
        'Hoy, la acumulación de residuos en sus alrededores nos invita a actuar. EcoCanje nace para recuperar este espacio y construir, junto al barrio, nuevas prácticas de cuidado y reciclaje.',
      ],
      quote: 'Cuidar este espacio también es cuidar a nuestra comunidad.',
      photo: {
        src: 'images/spring-reeds.jpg',
        alt: 'Juncos y plantas acuáticas en la vertiente, con los muros del parque al fondo.',
      },
      note: 'El entorno de la vertiente. Si se dispone de una fotografía de julio de 2025, va aquí con su fecha y contexto.',
    },
    path: {
      title: 'Un camino que construimos en comunidad.',
      summary:
        'Aprendemos, recuperamos el entorno y transformamos nuestros residuos en nuevas oportunidades para el barrio.',
      stages: [
        {
          title: 'Aprendemos juntos',
          icon: 'community',
          startsOn: '2026-11-28',
          photo: { alt: 'Foto del taller' },
          status: 'live',
          text: 'Nos encontramos en un taller para conversar sobre reciclaje, cuidado del parque y conservación de la vertiente.',
        },
        {
          title: 'Recuperamos el entorno',
          icon: 'drop',
          photo: {
            src: 'images/spring-weir.jpg',
            alt: 'Muro de concreto con una pequeña caída de agua en la vertiente, rodeado de vegetación.',
          },
          status: 'soon',
          text: 'Sumamos manos en una minga comunitaria para retirar residuos de los alrededores de la vertiente.',
        },
        {
          title: 'Activamos el EcoCanje',
          icon: 'recycle',
          photo: { alt: 'Foto de reciclables' },
          status: 'prep',
          text: 'Organizamos jornadas para entregar materiales reciclables y recibir incentivos ecológicos, según las condiciones de cada jornada.',
        },
        {
          title: 'Compartimos lo logrado',
          icon: 'camera',
          photo: {
            src: 'images/park-community.jpg',
            alt: 'Personas en el parque junto a la vertiente.',
          },
          status: 'ongoing',
          text: 'Publicamos las actividades, los materiales recuperados y los aprendizajes que vamos construyendo.',
        },
      ],
    },
    activitiesIntro: {
      text: 'Aquí encontrarás nuestras próximas actividades y los momentos que vamos compartiendo en Nueva Aurora.',
      notice: {
        title: 'Pronto compartiremos las fechas, los materiales aceptados y las condiciones de cada jornada.',
        linkLabel: 'Sigue las novedades en Instagram',
        url: 'https://www.instagram.com/fundacion.cepvvs/',
      },
    },
    activities: [
      {
        id: 'workshop',
        chip: 'Actividad 1',
        title: 'Taller comunitario',
        status: 'live',
        signupOpen: true,
        text: 'Nuestro primer encuentro para aprender sobre reciclaje y conversar sobre el cuidado del parque y la vertiente.',
        date: '28 de noviembre de 2026',
        startsOn: '2026-11-28',
        time: '14:30 a 16:00',
        place: 'Casa Somos del parque Nueva Aurora',
        photo: { alt: 'Foto del taller (se suma después de realizarlo)' },
      },
      {
        id: 'minga',
        chip: 'Actividad 2',
        title: 'Minga por la vertiente',
        status: 'soon',
        text: 'Nos organizaremos para recuperar juntos los alrededores de este espacio.',
        photo: {
          src: 'images/spring-cleanup.jpg',
          alt: 'Residuos flotando en el agua de la vertiente, cerca de una caída de agua.',
        },
      },
      {
        id: 'sessions',
        chip: 'Actividad 3',
        title: 'Jornadas de EcoCanje',
        status: 'prep',
        text: 'Prepárate para separar tus reciclables y participar en las próximas jornadas de intercambio.',
        photo: { alt: 'Foto de materiales reciclables' },
      },
    ],
    sessionsNotice: {
      status: 'prep',
      text: 'Estamos preparando las primeras jornadas. Aquí publicaremos los puntos, horarios, materiales y recompensas confirmados.',
    },
    team: {
      title: 'Juventudes y comunidad, cuidando un mismo lugar.',
      paragraphs: [
        'EcoCanje es una iniciativa impulsada por un equipo juvenil e implementada por la Fundación Coalición Ecuatoriana de Personas que Viven con VIH/Sida (CEPVVS), junto a la participación de vecinos y actores del sector.',
        'Creemos en lo que podemos construir cuando compartimos nuestros conocimientos, nuestro tiempo y las ganas de cuidar el barrio.',
      ],
      logo: 'Logo oficial de la Fundación CEPVVS',
      role: 'Organización implementadora',
      photo: { alt: 'Fotografía real del equipo' },
    },
    community: {
      status: 'soon',
      title: 'Una comunidad que suma.',
      text: 'Muy pronto podrás conocer los aportes que, juntos, estamos haciendo al EcoCanje.',
    },
    supportText:
      'Este proyecto es posible gracias al apoyo del Municipio de Quito, a través del Fondo Ambiental, en el marco del Youth Climate Action Fund, un proyecto patrocinado por Rockefeller Philanthropy Advisors.',
    supportLogos: 'Logos de Youth Climate Action Fund, Bloomberg Philanthropies y Alcaldía Metropolitana de Quito',
  },
];
