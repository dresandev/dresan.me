import { links } from '~/data/links'

export const getLinksByKeywords = (keywords: string) => {
  if (!keywords) return

  return links.filter(({ name }) => name
    .toLowerCase()
    .includes(keywords.toLowerCase())
  )
}
