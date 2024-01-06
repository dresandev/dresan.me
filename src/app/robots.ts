import { APP_HOST_URL } from '~/constants'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/'],
      },
    ],
    sitemap: `${APP_HOST_URL}/sitemap.xml`,
    host: APP_HOST_URL,
  }
}
