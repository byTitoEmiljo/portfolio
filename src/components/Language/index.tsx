'use client'

import styles from './language.module.scss'
import { useState } from 'react'
import World from '@public/icons/world-wide-black-symbol-svgrepo-com.svg'

export default function Language () {
  const [change, setChange] = useState(Boolean)

  const handleChange = (state: boolean) => {
    if (state) {
      setChange(false)
    } else {
      setChange(true)
    }
    // state ? setChange(false) : setChange(true)
  }

  return (
    <div className={styles.glob}>
      <button
        onClick={() => handleChange(change)}
        className={styles.mapContent}
      >
        <World height={48} width={48} />
      </button>
    </div>
  )
}