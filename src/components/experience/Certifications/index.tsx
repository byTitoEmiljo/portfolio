'use client'

import styles from './Certifications.module.scss'
import Trasfer from '@public/icons/decorations/transfermajor.svg'

import { useModalStore } from '@/storage/modalStorage/modalStorage';

export default function Certifications () {

  const { openModal } = useModalStore()

  return (
    <div className={`${styles.certWrapper} RGBCard`}>
      <h1>Certifications</h1>
      <div className={styles.wrapper}>
        <div className={styles.cleverRecomendationLetter}>
          <Trasfer onClick={() => openModal('recomendationCleverCloudLetter')} className={styles.transferIcon}/>
        </div>
        <div className={styles.cleverFinishLetter}>
          <Trasfer onClick={() => openModal('finishCleverCloudLetter')} className={styles.transferIcon}/>
        </div>
        <div className={styles.universidadHaking}>
          <Trasfer onClick={() => openModal('hakingUniversityUdemy')} className={styles.transferIcon}/>
        </div>
      </div>
    </div>
  )
}