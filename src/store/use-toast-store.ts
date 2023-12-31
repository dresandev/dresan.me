import { create } from 'zustand'

interface ToastState {
  title: string
  description?: string
  mount: boolean
  hide: boolean
  notifyToast: (props: { title: string, description?: string }) => void
  unmountToast: () => void
  setHideToast: (hide: boolean) => void
}

export const useToastStore = create<ToastState>(set => ({
  title: '',
  description: '',
  mount: false,
  hide: false,
  notifyToast: ({ title, description }) => set(state => ({
    mount: true,
    title,
    description
  })),
  unmountToast: () => set(state => ({
    mount: false,
  })),
  setHideToast: (hide) => set(state => ({
    hide,
  })),
}))
