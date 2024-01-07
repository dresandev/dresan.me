import Link from 'next/link'
import styles from './NoteCard.module.css'

interface NoteCardProps {
  slug: string
  title: string
  description: string
  trailingIcon: string
}

export const NoteCard: React.FC<NoteCardProps> = ({
  slug,
  title,
  description,
  trailingIcon,
}) => {
  return (
    <Link
      href={slug}
      className={styles.noteCard}
    >
      <div>
        <div className={styles.title}>
          {title}
        </div>
        <p className={styles.description}>
          {description}
        </p>
      </div>
      <span className={styles.trailingIcon}>
        {trailingIcon}
      </span>
    </Link>
  )
}
