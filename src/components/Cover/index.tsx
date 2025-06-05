'use client'

import styles from './cover.module.scss'
import { useEffect, useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

export default function Cover() {
  const [isFront, setIsFront] = useState(true)
  const [glitchedTitle, setGlitchedTitle] = useState('')
  const [glitchedText, setGlitchedText] = useState('')
  const [isGlitching, setIsGlitching] = useState(false)
  const { t } = useTranslation()

  const text = {
    title: isFront ? t?.cover?.frontend?.title ?? '' : t?.cover?.backend?.title ?? '',
    body: isFront ? t?.cover?.frontend?.content ?? '' : t?.cover?.backend?.content ?? ''
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

  if (!t) return null

  return (
    <div className={`${styles.cover} RGBCard`}>
      <div className={styles.switch}>
        <span className={`${styles.bottonSwitch} ${isFront ? styles.front : styles.back}`} onClick={handleChange}></span>
        <p>Front</p><p className={styles.textBack}>Back</p>
      </div>
      <div className={styles.card}>
        <h1>{isGlitching ? glitchedTitle : text.title}</h1>
        <p className={styles.content}>{isGlitching ? glitchedText : text.body}</p>
      </div>
    </div>
  )
}
