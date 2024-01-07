interface ImageSizes {
  large: string
  medium: string
  small: string
}

interface Project {
  slug: string,
  cardImages: Omit<ImageSizes, 'medium'>
  desktopImages: ImageSizes[]
  mobileImages: Omit<ImageSizes, 'medium' | 'small'>[]
  title: string
  tags: string[]
  description: string
  year: number
  role: string
  liveUrl: string
  codeUrl: string
}

const IMAGES_BASE_PATH = '/images/projects'

export const projects: Project[] = [
  {
    slug: 'dreflix',
    cardImages: {
      large: `${IMAGES_BASE_PATH}/dreflix/home-card/800w.webp`,
      small: `${IMAGES_BASE_PATH}/dreflix/home-card/400w.webp`,
    },
    desktopImages: [
      {
        large: `${IMAGES_BASE_PATH}/dreflix/home-desktop/1530w.webp`,
        medium: `${IMAGES_BASE_PATH}/dreflix/home-desktop/1000w.webp`,
        small: `${IMAGES_BASE_PATH}/dreflix/home-desktop/500w.webp`,
      },
      {
        large: `${IMAGES_BASE_PATH}/dreflix/movie-details-desktop/1530w.webp`,
        medium: `${IMAGES_BASE_PATH}/dreflix/movie-details-desktop/1000w.webp`,
        small: `${IMAGES_BASE_PATH}/dreflix/movie-details-desktop/500w.webp`,
      },
      {
        large: `${IMAGES_BASE_PATH}/dreflix/upcoming-movies-desktop/1530w.webp`,
        medium: `${IMAGES_BASE_PATH}/dreflix/upcoming-movies-desktop/1000w.webp`,
        small: `${IMAGES_BASE_PATH}/dreflix/upcoming-movies-desktop/500w.webp`,
      },
    ],
    mobileImages: [
      {
        large: `${IMAGES_BASE_PATH}/dreflix/home-mobile/426w.webp`
      },
      {
        large: `${IMAGES_BASE_PATH}/dreflix/movie-details-mobile/426w.webp`,
      },
      {
        large: `${IMAGES_BASE_PATH}/dreflix/home-mobile/426w.webp`,
      },
    ],
    title: 'Dreflix',
    tags: ['Sitio Web', 'Proyecto Personal'],
    description: 'Sitio web dedicado a la exploración del mundo cinematográfico, donde descubrirás información sobre una amplia variedad de películas.\nPodrás acceder a detalles como la sinopsis, el tráiler, los actores principales y las plataformas de streaming disponibles para ver la película.\nAdemás, contamos con un innovador bot que te recomienda películas según tus preferencias personales.',
    year: 2023,
    role: 'Desarrollo, Diseño',
    liveUrl: 'https://dreflix.vercel.app/',
    codeUrl: 'https://github.com/dresandev/dreflix/',
  }
]
