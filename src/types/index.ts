export type Direction = 'RIGHT' | 'UP_RIGHT' | 'UP_LEFT'
export type EmojisType = 'about' | 'contact' | 'projects' | 'viewMoreProjects'

export interface Link {
  id: string
  name: string
  description: string
  url: string
}
