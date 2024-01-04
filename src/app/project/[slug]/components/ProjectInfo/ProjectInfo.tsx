import { getRandomKey } from '~/utils/get-random-key'
import { CustomLink } from '~/components/CustomLink'
import { TagPill } from '~/components/TagPill'
import styles from './ProjectInfo.module.css'

interface ProjectInfoProps {
  title: string
  description: string
  year: number
  role: string
  codeUrl: string
  liveUrl: string
  tags: string[]
}

export const ProjectInfo: React.FC<ProjectInfoProps> = ({
  title,
  description,
  year,
  role,
  codeUrl,
  liveUrl,
  tags,
}) => {
  return (
    <section className={styles.info}>
      <h1 className={styles.title}>
        {title}
      </h1>
      <p className={styles.description}>
        {description}
      </p>

      <div className={styles.tags}>
        {
          tags.map(tag => (
            <TagPill
              key={getRandomKey()}
              tagName={tag}
            />
          ))
        }
      </div>

      <div className={styles.stats}>
        <div>
          <div className={styles.statsCaption}>Año</div>
          <div>{year}</div>
        </div>
        <div className={styles.statsRole}>
          <div className={styles.statsCaption}>Rol</div>
          <div>{role}</div>
        </div>

        <div className={styles.statsLinks}>
          <CustomLink
            href={codeUrl}
            target='_blank'
            prefetch={false}
          >
            Ver código
          </CustomLink>

          <CustomLink
            href={liveUrl}
            target='_blank'
            prefetch={false}
          >
            Ver proyecto
          </CustomLink>
        </div>
      </div>
    </section>
  )
}
