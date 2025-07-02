import { create } from "zustand"

type ModalType = 'certifications' | 'normal'

interface ModalState {
  isOpen:             boolean
  cerImgUrl:          string | null
  cerImgAspectRatio:  string | null
  nomImg:             string | null
  nomTitle:           string | null
  nomBody:            string | null
  nomLink:            string | null
  modalType:          ModalType | null

  openModal: {
    (type: 'normal', title: string, body: string, path: string, link: string): void
    (type: 'certifications', url: string, aspectRatio: string): void
  }

  closeModal: () => void
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  cerImgUrl: null,
  cerImgAspectRatio: null,
  nomTitle: null,
  nomBody: null,
  nomImg: null,
  nomLink: null,
  modalType: null,

  openModal: (...args: any[]) => {
    const [type, a, b, c, d] = args

    if (type === 'certifications') {
      set({
        isOpen: true,
        modalType: type,
        cerImgUrl: a,
        cerImgAspectRatio: b,
        nomTitle: null,
        nomBody: null,
        nomImg: null,
        nomLink: null
      })
    } else if (type === 'normal') {
      set({
        isOpen: true,
        modalType: type,
        nomTitle: a,
        nomBody: b,
        nomImg: c,
        nomLink: d,
        cerImgUrl: null,
        cerImgAspectRatio: null,
      })
    }
  },

  closeModal: () => {
    set({ isOpen: false })
    setTimeout(() => {
      set({
        cerImgUrl: null,
        cerImgAspectRatio: null,
        nomTitle: null,
        nomBody: null,
        nomImg: null,
        nomLink: null,
        modalType: null
      })
    }, 400)
  }
}))
