import { create } from 'zustand'

interface ToastState {
  show: boolean
  title: string
  description?: string
  notifyToast: (props: { title: string, description?: string }) => void
  unmountToast: () => void
}

export const useToastStore = create<ToastState>(set => ({
  show: false,
  title: '',
  message: '',
  notifyToast: ({ title, description }) => set(state => ({
    show: true,
    title,
    description
  })),
  unmountToast: () => set(state => ({
    show: false,
  })),
}))
