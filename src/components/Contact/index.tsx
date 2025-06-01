import styles from './contact.module.scss'
import Link from 'next/link'
import Mail from '@public/assets/decorations/mail-5-svgrepo-com.svg'
import GitHub from '@public/assets/decorations/github-142-svgrepo-com.svg'
import LinkeIn from '@public/assets/decorations/linkedin-svgrepo-com.svg'

export default function Contact() {
  return (
    <div className={`${styles.contact} RGBCard`}>
      <h1>Contact</h1>
      <Link 
        href={'https://mail.google.com/mail/?view=cm&fs=1&to=emilioisrael.ph@gmail.com'} 
        target='_blank' 
      >
        <Mail />
        emilioisrael.ph@gmail.com
      </Link>
      <Link 
        href={'https://github.com/byTitoEmiljo'} 
        target='_blank' 
      >
        <GitHub />
        byTitoEmiljo
      </Link>
      <Link 
        href={'https://www.linkedin.com/in/emilio-israel-puga-hern%C3%A1ndez-a5a9a52a2/'} 
        target='_blank' 
      >
        <LinkeIn />
        Emilio Israel Puga Hernández
      </Link>
    </div>
  )
}