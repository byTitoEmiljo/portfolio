import { create } from "zustand";

// Definir las claves posibles
type CertificationKey = keyof typeof mapCertifications

const mapCertifications = {
  recomendationCleverCloudLetter: {url: '/assets/certifications/Emilio_carta_de_recomendación.jpg', aspectRatio: '1700 / 2200'},
  finishCleverCloudLetter: {url: '/assets/certifications/EMILIO_ISRAEL_PUGA_HERNÁNDEZ_Certificado_Clever_Excelencia.jpg', aspectRatio: '2550 / 1803'},
  hakingUniversityUdemy: {url: '/assets/certifications/UC-3c1c69c5-f90c-4b8e-9a17-d48e33a0569d.jpg', aspectRatio: '1600 / 1190'}
} as const

interface ModalState {
  isOpen: boolean
  imageUrl: string | null
  imageAspectRatio: string | null
  // openModal: (imageUrl: string) => void
  openModal: (key: CertificationKey) => void
  closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  imageUrl: null,
  imageAspectRatio: null,
  openModal: (key) => set({ isOpen: true, imageUrl: mapCertifications[key].url, imageAspectRatio: mapCertifications[key].aspectRatio }),
  closeModal: () => {
    set({ isOpen: false })

    setTimeout(() => {
      set({ imageUrl: null, imageAspectRatio: null })
    }, 400)
  }
}))