import clsx from 'clsx'
import { projects } from '~/data/projects'
import { getRandomKey } from '~/utils/get-random-key'
import { TextScroller } from '~/components/TextScroller'
import { ProjectCard } from '~/components/ProjectCard'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <section>
      <TextScroller text='Proyectos' />
      <div className={clsx(
        'container',
        styles.container
      )}>
        {
          projects.map(({ slug, title, tags, cardImages }) => (
            <ProjectCard
              key={getRandomKey()}
              className={styles.projectCard}
              slug={slug}
              images={cardImages}
              title={title}
              tags={tags}
            />
          ))
        }
      </div>
    </section>
  )
}
