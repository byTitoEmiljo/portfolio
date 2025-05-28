import styles from './CleverCloud.module.scss'
import Link from 'next/link'

export default function CleverCloud () {
  return (
    <div className={styles.clevercloud}>
      <h1>Engineer Inter - <Link style={{ color: '#FFF' }} target='_blank' href={'https://www.clevercloud.mx/inicio'} >Clever Cloud</Link> </h1>
      <p className='jetBrains-text'>I worked 6 months in a company dedicated to the development of web applications. I participated in a project for a golf course (<Link style={{ color: '#FFF' }} target='_blank' href={'https://www.golf-hub.com.mx/inicio'}>Vista al Bosque</Link>), where I maintained and developed a customer oriented website to manage reservations, as well as an administration panel for owners, which allows them to manage schedules, reservations, prices, among other functions.</p>
    </div>
  )
}