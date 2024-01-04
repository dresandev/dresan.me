import { create } from 'zustand'

interface LinksState {
  keywords: string
  setKeywords: (keywords: string) => void
}

export const useLinksStore = create<LinksState>(set => ({
  keywords: '',
  setKeywords: (keywords) => set(state => ({
    keywords,
  })),
}))
