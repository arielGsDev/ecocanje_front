/** Site-wide content: it does not depend on any event. */
export interface FaqItem {
  question: string;
  answer: string;
}

export interface CycleStep {
  title: string;
  text: string;
}

export interface FooterLink {
  label: string;
  url?: string;
  icon?: string;
}

export interface FooterGroup {
  title: string;
  links: FooterLink[];
}

export const HERO = {
  title: 'Tus reciclables pueden convertirse en algo nuevo.',
  lead: 'Entrega tus materiales en una jornada de EcoCanje y recibe un incentivo ecológico.',
};

export const HOW_IT_WORKS = {
  title: 'Cómo funciona el canje',
  text: 'En las jornadas de EcoCanje podrás entregar materiales reciclables y recibir incentivos ecológicos. Compartiremos las condiciones antes de cada jornada para que puedas prepararte.',
  motto: 'Reciclar también puede hacer florecer el barrio.',
};

export const CYCLE_STEPS: CycleStep[] = [
  { title: 'Separa', text: 'Revisa los materiales aceptados y prepara tus reciclables según las indicaciones de la jornada.' },
  { title: 'Acércate', text: 'Lleva tus materiales al punto y en el horario que anunciaremos.' },
  { title: 'Registramos tu aporte', text: 'Nuestro equipo pesará los materiales y registrará tu entrega.' },
  {
    title: 'Recibe tu incentivo',
    text: 'Te indicaremos la recompensa que corresponde y cómo retirarla, según las equivalencias y la disponibilidad.',
  },
];

export const FAQ: FaqItem[] = [
  { question: '¿Qué materiales puedo llevar?', answer: 'Publicaremos los materiales aceptados antes de cada jornada.' },
  { question: '¿Cuándo y dónde son las jornadas?', answer: 'Aquí publicaremos los puntos y horarios confirmados.' },
  {
    question: '¿Qué incentivo recibo?',
    answer: 'Te indicaremos la recompensa que corresponde y cómo retirarla, según las equivalencias y la disponibilidad.',
  },
];

export const FOOTER: { tagline: string; signature: string; groups: FooterGroup[] } = {
  tagline: 'Cuidar, reciclar y unir al barrio.',
  signature: 'Fundación CEPVVS',
  groups: [
    {
      title: 'Contacto de Fundación CEPVVS',
      links: [
        { label: 'WhatsApp: +593 98 489 1602', url: 'https://wa.me/593984891602', icon: 'message' },
        { label: 'info@coalicionecuatoriana.org', url: 'mailto:info@coalicionecuatoriana.org', icon: 'mail' },
      ],
    },
    {
      title: 'Redes sociales',
      links: [
        { label: 'Instagram: @fundacion_cepvvs', url: 'https://www.instagram.com/fundacion_cepvvs' },
        { label: 'TikTok: @fundacion_cepvvs', url: 'https://www.tiktok.com/@fundacion_cepvvs' },
      ],
    },
    {
      title: 'Más sobre la fundación',
      links: [
        { label: 'Sitio web de CEPVVS', url: 'https://cepvvs.odoo.com/', icon: 'external' },
        { label: 'Blog CEPVVS Informa', url: 'https://cepvvs.odoo.com/blog/cepvvs-informa-2', icon: 'external' },
        { label: 'Video institucional de CEPVVS', url: 'https://youtu.be/5F7RBPZtwb4', icon: 'play' },
      ],
    },
  ],
};
