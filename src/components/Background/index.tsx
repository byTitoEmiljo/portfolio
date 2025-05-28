import styles from './background.module.scss'

export default function Backgraund () {
  return (
    <div className={styles.lines}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  )
}