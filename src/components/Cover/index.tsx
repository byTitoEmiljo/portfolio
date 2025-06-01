'use client'

import { useEffect, useState } from 'react'
import styles from './cover.module.scss'
// import Image from 'next/image'

export default function Cover() {
  const [isFront, setIsFront] = useState(true)
  const [glitchedTitle, setGlitchedTitle] = useState('')
  const [glitchedText, setGlitchedText] = useState('')
  const [isGlitching, setIsGlitching] = useState(false)

  const content = {
    frontEnd: 'I have experience in frontend development, highlighting my skills to analyze requirements and ensure the proper functioning of user interfaces. I focus on debugging, validation and status tracking, optimizing the performance of the systems I implement. In addition, I have experience in identifying and correcting errors (bugs) and continuously improving the code to ensure efficient operation.',
    backEnd: 'As for the backend, I have acquired knowledge that allows me to create and modify my own services, as well as perform basic implementations, thanks to my work in various projects and organizations. I have experience working in cloud development environments and manage version control tools such as Git, using frameworks such as SourceTree and Bitbucket. I am proficient in database administrators such as MongoDB, MySQL, Adminer.'
  }

  const text = {
    title: isFront ? 'Front-End' : 'Back-End',
    body: isFront ? content.frontEnd : content.backEnd
  }

  const handleChange = () => {
    if (!isGlitching) {
      setIsFront((prev) => !prev)
      setIsGlitching(true)

      setTimeout(() => {
        setIsGlitching(false)
      }, 1000)
    }
  }

  useEffect(() => {
    if (isGlitching) {
      setGlitchedTitle(text.title)
      setGlitchedText(text.body)

      const interval = setInterval(() => {
        setGlitchedTitle(
          text.title
            .split("")
            .map((char) => (Math.random() > 0.7 ? String.fromCharCode(Math.floor(Math.random() * 94) + 33) : char))
            .join("")
        )
        setGlitchedText(
          text.body
            .split("")
            .map((char) => (Math.random() > 0.9 ? String.fromCharCode(Math.floor(Math.random() * 94) + 33) : char))
            .join("")
        )
      }, 100)

      setTimeout(() => {
        clearInterval(interval)
        setGlitchedTitle(text.title)
        setGlitchedText(text.body)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [isGlitching, text.title, text.body])

  return (
    <div className={`${styles.cover} RGBCard`}>
      <div className={styles.switch}>
        <span className={`${styles.bottonSwitch} ${isFront ? styles.front : styles.back}`} onClick={handleChange}></span>
        <p>Front</p><p className={styles.textBack}>Back</p>
      </div>
      {/* <Image 
        className={styles.icon}
        src='/icons/doomguyPIXEL.png' 
        width={120} 
        height={120} 
        alt='Icon'
      /> */}
      <div className={styles.card}>
        <h1>{isGlitching ? glitchedTitle : text.title}</h1>
        <p className={styles.content}>{isGlitching ? glitchedText : text.body}</p>
      </div>
    </div>
  )
}
