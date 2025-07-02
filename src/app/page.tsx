import styles from "./page.module.scss"
import Glitch from "@/components/Glitch";
import Cover from "@/components/Cover";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <div className={styles.home}>
        <Glitch text="Emilio Israel"/>
        <div className={styles.customGrid}>
          <Cover />
          <Contact />
        </div>
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
    </div>
  )
}
