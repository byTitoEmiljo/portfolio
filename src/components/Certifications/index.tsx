'use client'

import styles from './Certifications.module.scss'
import TrasferIcon from '@public/assets/icons/decorations/transfermajor.svg'

import { useTranslation } from '@/hooks/useTranslation';
import { useModalStore } from '@/storage/modalStore';

export default function Certifications () {
  const { openModal } = useModalStore()

  const { t } = useTranslation()
  if (!t) return null;
  const certifications = t.certifications.items

  return (
    <div className={`${styles.certWrapper} RGBCard`}>
      <h1>{t.certifications.title}</h1>
      <div className={styles.wrapper}>
        {
          Object.entries(certifications).map(([certKey, certValue]) => (
            <div 
              key={certKey} 
              onClick={() => openModal(certValue.path, certValue.aspectratio)}
              className={styles.card}
              style={{
                aspectRatio: certValue.aspectratio,
                backgroundImage: `url(${certValue.path})`,
              }}
            ><TrasferIcon className={styles.transferIcon}/></div>
          ))
        }
      </div>
    </div>
  )
}