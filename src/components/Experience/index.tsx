'use client'

import Link from 'next/link'
import { useTranslation } from '@/hooks/useTranslation'
import styles from './Experience.module.scss'

export default function Experience() {
  const { t } = useTranslation()
  if (!t) return null
  const jobs = t.experience.items

  return (
    Object.entries(jobs).map(([jobKey, jobValue]) => (
      <div key={jobKey} className={`${styles.experience} RGBCard`}>
        <h1>{jobValue.jobname} - <Link href={jobValue.company.link} target='_blank'>{jobValue.company.name}</Link></h1>
        <div dangerouslySetInnerHTML={{ __html: jobValue.description }}/>
      </div>
    ))
  )
}