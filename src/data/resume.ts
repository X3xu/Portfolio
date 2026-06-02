export const PERSONAL = {
  name: 'Jesús Jiménez Dillana',
  role: 'Front-End Developer',
  tagline:
    '+5 años construyendo interfaces de alto rendimiento con React 19, Next.js y TypeScript. Especializado en Design Systems y Core Web Vitals.',
  location: 'Madrid, Spain',
  available: true,
  email: 'jesusjimenezfp@gmail.com',
  linkedin: 'https://linkedin.com/in/jesus-jimenez-dillana',
  github: 'https://github.com/X3xu',
  cv: '/cv.pdf',
  siteUrl: 'https://jesusjimenezdillana.vercel.app',
} as const

export interface Job {
  dateStart: string
  dateEnd: string
  period: string
  role: string
  company: string
  description: string
}

export const EXPERIENCE: Job[] = [
  {
    dateStart: '2025-06',
    dateEnd: '2026-05',
    period: 'Jun 2025 – May 2026',
    role: 'Front-End Specialist',
    company: 'CIVITATIS',
    description:
      'React 19, Next.js y Design System a escala en la plataforma de turismo líder en LATAM. Optimización de Core Web Vitals y desarrollo de componentes reutilizables.',
  },
  {
    dateStart: '2022-09',
    dateEnd: '2025-06',
    period: 'Sep 2022 – Jun 2025',
    role: 'Front-End Developer',
    company: 'THINKABIT',
    description:
      'Desarrollos a medida con Vue 3, análisis de requerimientos, CI/CD e integración continua. Testing e2e con Playwright y trato directo con cliente.',
  },
  {
    dateStart: '2021-12',
    dateEnd: '2022-09',
    period: 'Dic 2021 – Sep 2022',
    role: 'Front-End Developer',
    company: 'MINSAIT (Indra)',
    description:
      'Migración para cliente de banca privada en entornos Linux. Trato directo con el cliente y entrega de soluciones en plazos ajustados.',
  },
  {
    dateStart: '2021-03',
    dateEnd: '2021-12',
    period: 'Mar 2021 – Dic 2021',
    role: 'FullStack Developer',
    company: 'NTT DATA',
    description:
      'Desarrollo completo Back to Front con Java Spring Boot y Angular 11. Testing unitario con JUnit.',
  },
]

export interface SkillGroup {
  label: string
  skills: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Frontend',
    skills: ['React 19', 'Next.js', 'TypeScript', 'Vue 3', 'Angular', 'JavaScript ES6+', 'HTML5', 'CSS3 / SASS', 'Tailwind CSS'],
  },
  {
    label: 'Herramientas',
    skills: ['Git / GitHub', 'Astro', 'Storybook', 'Playwright', 'Docker', 'CI/CD'],
  },
  {
    label: 'Backend',
    skills: ['Java', 'Spring Boot', 'SQL', 'SonarQube'],
  },
]

export interface Project {
  title: string
  description: string
  tags: string[]
  demo: string
  repo: string
  image: string
}

export const PROJECTS: Project[] = [
  {
    title: 'UI Template — Waveless',
    description:
      'Template responsive desarrollada como prueba técnica con HTML, CSS y JavaScript vanilla. Diseño moderno con interacciones dinámicas.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    demo: 'https://waveless-blond.vercel.app/',
    repo: 'https://github.com/X3xu/waveless',
    image: '/waveless.webp',
  },
  {
    title: 'QuizzGame',
    description:
      'Juego de trivia interactivo con sistema de puntuación, feedback visual por respuesta y pantalla de resultados. Arquitectura de componentes con React Hooks.',
    tags: ['React 18', 'Vite', 'JavaScript', 'CSS'],
    demo: 'https://quizzzgame.vercel.app/',
    repo: 'https://github.com/X3xu/quizzGame',
    image: '/QuizzGame.webp',
  },
  {
    title: 'Star Wars SPA',
    description:
      'Aplicación SPA que consume la API pública de Star Wars para explorar personajes, naves y planetas.',
    tags: ['JavaScript'],
    demo: 'https://star-wars-seven-iota.vercel.app/',
    repo: 'https://github.com/X3xu/star-wars',
    image: '/SWAPI.webp',
  },
  {
    title: 'Portfolio JJD',
    description:
      'Este mismo portfolio — construido con Astro y SCSS, animaciones canvas, cursor personalizado, scroll reveal y sistema de temas claro/oscuro. Desplegado en Vercel.',
    tags: ['Astro', 'TypeScript', 'SCSS'],
    demo: 'https://jesusjimenezdillana.vercel.app/',
    repo: 'https://github.com/X3xu/Portfolio',
    image: '/Portfolio.webp',
  },
]
