import styles from './RBDuck.module.scss'
import Link from 'next/link'

export default function RBDuck () {
  return (
    <div className={styles.rbduck}>
      <h1>Font-End Developer</h1>
      <h1><Link style={{ color: '#FFF' }} target='_blank' href={'https://www.rbduck.com/about'}>Rubber Duck Enterprises</Link></h1>
      <p className='jetBrains-text'>I currently collaborate as a developer at Rubber Duck Enterprises, participating in the development of projects for various clients. My work includes:</p>
      <p className={`${styles.point} jetBrains-text`}>Migration of legacy applications to modern technologies, such as the conversion of a pure JavaScript project to the Astro framework.</p>
      <p className={`${styles.point} jetBrains-text`}>Complete development of a web application for transportation and delivery services, using Next.js and AWS.</p>
      <p className={`${styles.point} jetBrains-text`}>Implementation of efficient and scalable solutions with Next.js to improve performance and user experience.</p>
    </div>
  )
}