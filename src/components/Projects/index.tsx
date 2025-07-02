'use client'

import { useTranslation } from '@/hooks/useTranslation'
import { useModalStore } from '@/storage/modalStore'
import styles from './Projects.module.scss'

export default function Projects() {
  const {openModal, closeModal} = useModalStore()
  
  const { t } = useTranslation()
  if (!t) return null
  const groupProjects = t.projects.items

  return (
    <div className={`${styles.projectsWrapper} RGBCard`}>
      <h1>{t.projects.title}</h1>
        {
          Object.entries(groupProjects).map(([id, value]) => {
            return (
              <div key={id} className={styles.card} onClick={() => openModal('normal', value.name, value.description, value.path, value.link)}>
                <div className={styles.imgWrapper}>
                  <img src={value.path} alt="Wedding" />
                </div>
                <div className={styles.content}>
                  <h1>{value.name}</h1>
                  <p>{value.description}</p>
                </div>
              </div>
            )
          })
        }
    </div>
  )
}