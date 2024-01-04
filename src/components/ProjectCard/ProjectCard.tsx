import Link from 'next/link'
import clsx from 'clsx'
import { getRandomKey } from '~/utils/get-random-key'
import { TagPill } from '~/components/TagPill'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  className?: string
  slug: string
  image: string
  title: string
  tags: string[]
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  slug,
  title,
  tags,
  image,
}) => {
  return (
    <figure className={clsx(
      styles.card,
      className
    )}>
      <Link
        className={styles.wrapperLink}
        href={`/project/${slug}`}
      >
        {title}
      </Link>
      <div className={styles.tags}>
        {
          tags.map(tag => (
            <TagPill
              key={getRandomKey()}
              tagName={tag}
              withBlur
            />
          ))
        }
      </div>

      <img
        className={styles.image}
        src={image}
        alt=''
      />
      <figcaption className={styles.title}>
        {title}
      </figcaption>
    </figure>
  )
}
