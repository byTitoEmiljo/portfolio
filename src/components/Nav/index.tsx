import Image from 'next/image'
import styles from './nav.module.scss'

export default function Nav () {
  return (
    <header className={styles.nav}>
      <div className={styles.warapper}>
        <div className={styles.iconWarapper}>
          <Image 
            className={styles.icon}
            src='/icons/doomguyPIXEL.png' 
            alt='Icono' 
            height={48} 
            width={48} 
          ></Image>
        </div>
        
      </div>
    </header>
  )
}