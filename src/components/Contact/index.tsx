'use client'

import styles from './contact.module.scss'
import React from 'react'
import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'

export default function Contact() {
  const { t } = useTranslation()
  if (!t) return null
  const medias = t.contact.items

  return (
    <div className={`${styles.contact} RGBCard`}>
      <h1>{t.contact.title}</h1>
      {Object.entries(medias).map(([key, value]) => (
        <Link key={key} href={value.link} target="_blank">
          <img src={value.path} alt={value.name}/>
          {value.name}
        </Link>
      ))}
    </div>
  )
}