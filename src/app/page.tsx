import styles from "./page.module.scss"
import Glitch from "@/components/Glitch";
import Cover from "@/components/Cover";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

import CleverCloud from "@/components/experience/CleverCloud";
import RBDuck from "@/components/experience/RBDuck";
import Certifications from "@/components/experience/Certifications";

export default function Home() {
  return (
    <div className={styles.home}>
        <Glitch text="Emilio Israel"/>
        <div className={styles.customGrid}>
          <Cover />
          <Contact />
        </div>
        
        <Skills />
        <CleverCloud />
        <RBDuck />
        
        <Certifications />
    </div>
  )
}
