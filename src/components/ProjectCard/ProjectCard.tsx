import Link from 'next/link'
import clsx from 'clsx'
import { TagPill } from '~/components/TagPill'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  className?: string
  slug: string
  images: { large: string, small: string }
  title: string
  tags: string[]
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  className,
  slug,
  title,
  tags,
  images,
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
          tags.map((tag, i) => (
            <TagPill
              key={i}
              tagName={tag}
              withBlur
            />
          ))
        }
      </div>

      <img
        className={styles.image}
        srcSet={`
          ${images.large} 800w,
          ${images.small} 400w,
        `}
        sizes='
          (max-width: 445px) 400px,
          800px
        '
        src={images.large}
        alt=''
      />
      <figcaption className={styles.title}>
        {title}
      </figcaption>
    </figure>
  )
}
