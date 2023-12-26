import Link from 'next/link'
import styles from './ProjectCard.module.css'

export const ProjectCard = () => {
  return (
    <figure className={styles.card}>
      <Link className={styles.wrapperLink} href='/'>
        Dreflix
      </Link>
      <div className={styles.tags}>
        <div className={styles.tagPill}>Aplicacíon web</div>
        <div className={styles.tagPill}>Proyecto Personal</div>
      </div>

      <img
        className={styles.image}
        src='/images/dreflix/card/dreflix.webp'
        alt=''
      />
      <figcaption className={styles.title}>
        Dreflix
      </figcaption>
    </figure>
  )
}
