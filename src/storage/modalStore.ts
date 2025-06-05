import { create } from "zustand";

interface ModalState {
  isOpen: boolean
  imageUrl: string | null
  imageAspectRatio: string | null
  // openModal: (imageUrl: string) => void
  openModal: (url: string, aspectratio: string) => void
  closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  imageUrl: null,
  imageAspectRatio: null,
  openModal: (url, aspectratio) => set({ isOpen: true, imageUrl: url, imageAspectRatio: aspectratio}),
  closeModal: () => {
    set({ isOpen: false })

    setTimeout(() => {
      set({ imageUrl: null, imageAspectRatio: null })
    }, 400)
  }
}))