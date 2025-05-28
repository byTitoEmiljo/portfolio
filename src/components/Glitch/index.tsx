"use client"

import { useState, useEffect } from "react"
import styles from "./glitch.module.scss"

export default function Glitch({ text, className = "" }: { text: string; className?: string }) {
  const [glitchedText, setGlitchedText] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const cycleGlitch = () => {
      setIsGlitching(false) // Mantener el texto sin cambios
      setGlitchedText(text)

      setTimeout(() => {
        setIsGlitching(true) // Activar glitch después de 3 segundos

        const glitchInterval = setInterval(() => {
          setGlitchedText(
            text
              .split("")
              .map((char) => (Math.random() > 0.9 ? String.fromCharCode(Math.floor(Math.random() * 94) + 33) : char))
              .join("")
          )
        }, 100)

        setTimeout(() => {
          clearInterval(glitchInterval)
          setGlitchedText(text) // Restaurar el texto después de 1 segundo
          cycleGlitch() // Reiniciar el ciclo
        }, 1000)
      }, 1000)
    }

    cycleGlitch()
  }, [text])

  return (
    <h1 className={`${styles.glitchContainer} ${className}`}>
      <span className={`${styles.glitchText} jetBrains-text`}>{glitchedText}</span>
    </h1>
  )
}

