import Link from 'next/link'
import clsx from 'clsx'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  className?: string
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  className
}) => {
  return (
    <figure className={clsx(
      styles.card,
      className
    )}>
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
