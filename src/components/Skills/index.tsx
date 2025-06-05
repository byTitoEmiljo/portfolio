'use client'

import styles from '@/components/Skills/skills.module.scss'
import { useTranslation } from '@/hooks/useTranslation'
import { useState } from 'react'

export default function Skills() {
  const [openLinux, setOpenLinux] = useState(false)

  const handleLinux = () => {
    if (openLinux) {
      setOpenLinux(false)
    } else {
      setOpenLinux(true)
    }
  }
  
  const { t } = useTranslation()
  if (!t) return null
  const groupSkills = t.skills.items

  return (
    <div className={`${styles.skills} RGBCard`}>
      <h1>{t.skills.title}</h1>
      {
        Object.entries(groupSkills).map(([groupKey, groupValue]) => {
          const JSONClass = groupKey;

          return (
            <div key={groupKey} className={styles[JSONClass]}>
              <h2>{groupValue.name}</h2>
              <div key={groupKey} className={styles.wrapper}>
                {
                  Object.entries(groupValue.items).map(([itemKey, itemValue]) => {
                    if (itemKey === 'linux') {
                      return (
                        <div key={itemKey} className={styles.linuxWrapper}>
                          <img 
                            src={itemValue.path} alt={itemValue.alt}
                            className={`${openLinux ? styles.linuxIconSticky : styles.linuxIconBreathe} ${styles.icons}`} 
                            onClick={handleLinux}
                          />
                          {openLinux && <span className={styles.linux}/>}
                        </div>
                      )
                    } else {
                      return <img key={itemKey} src={itemValue.path} alt={itemValue.alt} className={styles.icons}/>
                    }
                  })
                }
                {
                  (groupKey === 'devtools' && openLinux && groupValue.items.linux.distros) && 
                  <div className={styles.dropdown}>
                    {
                      Object.entries(groupValue.items.linux.distros).map(([itemKey, itemValue]) => (
                        <img key={itemKey} src={itemValue.path} alt={itemValue.alt} className={styles.icons} />
                      ))
                    }
                  </div>
                }
              </div>
            </div>
          );
        })
      }
    </div>
  )
}