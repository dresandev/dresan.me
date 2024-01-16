import { MetadataRoute } from 'next'
import { HOST_URL, APP_ROUTES } from '~/constants'
import { projects } from '~/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectURLs = projects.map(({ slug }) => ({
    url: `${HOST_URL}/project/${slug}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  const routes = APP_ROUTES.map(({ path }) => ({
    url: `${HOST_URL}/${path}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [
    ...projectURLs,
    ...routes
  ]
}
