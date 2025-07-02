'use client'

import styles from './Certifications.module.scss'
import ExpandIcon from '@public/assets/icons/decorations/expand.svg'
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
              className={styles.card}
              style={{
                aspectRatio: certValue.aspectratio,
                backgroundImage: `url(${certValue.path})`,
              }}
            >
              <ExpandIcon 
                className={styles.transferIcon}
                onClick={() => openModal('certifications', certValue.path, certValue.aspectratio)}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}