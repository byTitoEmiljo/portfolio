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
      <section className={styles.section1}>
        <Glitch text="Emilio Israel" />
        <div className={styles.subSection1}>
          <div className={styles.cover}>
            <Cover />
          </div>
          <div className={styles.contact}>
            <Contact />
          </div>
          <div className={styles.technicalSkils}>
            <Skills />
          </div>
        </div>
      </section>
      
      <section className={styles.section2}>
        <div className={styles.clever}>
          <CleverCloud />
        </div>
        <div className={styles.rbduck}>
          <RBDuck />
        </div>

        <div className={styles.certifications}>
          <Certifications />
        </div>
        <div style={{ height: '32px' }}></div>
      </section>
    </div>
  )
}
