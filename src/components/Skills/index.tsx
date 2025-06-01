'use client'

import styles from '@/components/Skills/skills.module.scss'
// Front-End
import VueIcon from '@public/icons/skills/frontend/vue.svg'
import ReactIcon from '@public/icons/skills/frontend/react.svg'
import NextJsIcon from '@public/icons/skills/frontend/nextjs.svg'
import ScssIcon from '@public/icons/skills/frontend/scss.svg'
import HtmlIcon from '@public/icons/skills/frontend/html.svg'
import CssIcon from '@public/icons/skills/frontend/css.svg'
import Bootstrap from '@public/icons/skills/frontend/bootstrap.svg'
// Programing Lenguages
import JsIcon from '@public/icons/skills/frontend/js.svg'
import TypeScriptIcon from '@public/icons/skills/lenguages/typescript.svg'
import PythonIcon from '@public/icons/skills/lenguages/python.svg'
import GoIcon from '@public/icons/skills/lenguages/go.svg'
import PhpIcon from '@public/icons/skills/backend/php.svg'
import SQLIcon from '@public/icons/skills/lenguages/sql.svg'
// Back-End
import MongoDBIcon from '@public/icons/skills/backend/mongodb.svg'
import PostmanIcon from '@public/icons/skills/backend/postman.svg'
// Dev Tools
import LinuxIcon from '@public/icons/skills/devtools/linux.svg'
import BitBucketIcon from '@public/icons/skills/devtools/bitbucket.svg'
import TrelloIcon from '@public/icons/skills/devtools/trello.svg'
import SourceTreeIcon from '@public/icons/skills/devtools/sourcetree.svg'
// Linux
import ArchIcon from '@public/icons/skills/devtools/linux/arch-linux.svg'
import KaliIcon from '@public/icons/skills/devtools/linux/kalilinux.svg'
import DebianIcon from '@public/icons/skills/devtools/linux/debian.svg'
import UbuntuIcon from '@public/icons/skills/devtools/linux/ubuntu.svg'

import { useState } from 'react'

export default function Skills() {

  const [openLinux, setOpenLinux] = useState(false)

  const handleLinux = () => {
    if (openLinux) {
      setOpenLinux(false)
    } else {
      setOpenLinux(true)
    }
  }

  return (
    <div className={`${styles.skills} RGBCard`}>
      <h1>Technical Skills</h1>
      <div className={styles.programing}>
        <h2>Progaming Lenguages</h2>
        <div className={styles.wrapper}>
          <TypeScriptIcon className={styles.icons} />
          <JsIcon className={styles.icons} />
          <SQLIcon className={styles.icons} />
          <PythonIcon className={styles.icons} />
          <GoIcon className={styles.icons} />
          <PhpIcon className={styles.icons} />
        </div>
      </div>
      <div className={styles.devtools}>
        <h2>Dev Tools</h2>
        <div className={styles.wrapper}>
          <LinuxIcon 
            className={`${openLinux ? styles.linuxIconSticky : styles.linuxIconBreathe} ${styles.icons}`} 
            onClick={handleLinux}
          />
          <BitBucketIcon className={styles.icons} />
          <TrelloIcon className={styles.icons} />
          <SourceTreeIcon className={styles.icons} />
          { openLinux && 
            <div className={styles.dropdown}>
              <ArchIcon className={styles.icons} />
              <KaliIcon className={styles.icons} />
              <DebianIcon className={styles.icons} />
              <UbuntuIcon className={styles.icons} />
            </div>
          }
        </div>
      </div>
      <div className={styles.frontend}>
        <h2>Front End</h2>
        <div className={styles.wrapper}>
          <VueIcon className={styles.icons}/>
          <ReactIcon className={styles.icons} />
          <NextJsIcon className={styles.icons} />
          <ScssIcon className={styles.icons} />
          <Bootstrap className={styles.icons} />
          <HtmlIcon className={styles.icons} />
          <CssIcon className={styles.icons} />
          <JsIcon className={styles.icons} />
        </div>
        <h2>Others</h2>
        <div className={styles.wrapper}>
          <MongoDBIcon className={styles.icons} />
          <PostmanIcon className={styles.icons} />
        </div>
      </div>
    </div>
  )
}