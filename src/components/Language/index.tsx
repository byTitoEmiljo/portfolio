'use client'

import styles from './language.module.scss'
import { useLanguageStore } from '@/storage/languageStore'

export default function Language () {
  const {language, setLanguage} = useLanguageStore()
  
  const toggleLanguage = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    setLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  return (
    <div className={styles.glob}>
      <div className={styles.border}>
        <button onClick={toggleLanguage}>{language.toUpperCase()}</button>
      </div>
    </div>
  )
}