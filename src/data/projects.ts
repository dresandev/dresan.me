import { IMAGES_BASE_PATH } from '~/constants'

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

export const projects: Project[] = [
  {
    slug: 'dreflix',
    cardImages: {
      large: `${IMAGES_BASE_PATH}dreflix/home-card/800W.webp`,
      small: `${IMAGES_BASE_PATH}dreflix/home-card/400W.webp`,
    },
    desktopImages: [
      {
        large: `${IMAGES_BASE_PATH}dreflix/home-desktop/1530W.webp`,
        medium: `${IMAGES_BASE_PATH}dreflix/home-desktop/1000W.webp`,
        small: `${IMAGES_BASE_PATH}dreflix/home-desktop/500W.webp`,
      },
      {
        large: `${IMAGES_BASE_PATH}dreflix/movie-details-desktop/1530W.webp`,
        medium: `${IMAGES_BASE_PATH}dreflix/movie-details-desktop/1000W.webp`,
        small: `${IMAGES_BASE_PATH}dreflix/movie-details-desktop/500W.webp`,
      },
      {
        large: `${IMAGES_BASE_PATH}dreflix/upcoming-movies-desktop/1530W.webp`,
        medium: `${IMAGES_BASE_PATH}dreflix/upcoming-movies-desktop/1000W.webp`,
        small: `${IMAGES_BASE_PATH}dreflix/upcoming-movies-desktop/500W.webp`,
      },
    ],
    mobileImages: [
      {
        large: `${IMAGES_BASE_PATH}dreflix/home-mobile/426W.webp`
      },
      {
        large: `${IMAGES_BASE_PATH}dreflix/movie-details-mobile/426W.webp`,
      },
      {
        large: `${IMAGES_BASE_PATH}dreflix/home-mobile/426W.webp`,
      },
    ],
    title: 'Dreflix',
    tags: ['Aplicacíon web', 'Proyecto Personal'],
    description: 'Sitio web dedicado a la exploración del mundo cinematográfico, donde descubrirás información sobre una amplia variedad de películas.\nPodrás acceder a detalles como la sinopsis, el tráiler, los actores principales y las plataformas de streaming disponibles para ver la película.\nAdemás, contamos con un innovador bot que te recomienda películas según tus preferencias personales.',
    year: 2023,
    role: 'Desarrollo, "Diseño"',
    liveUrl: 'https://dreflix.vercel.app/',
    codeUrl: 'https://github.com/dresandev/dreflix/',
  }
]
