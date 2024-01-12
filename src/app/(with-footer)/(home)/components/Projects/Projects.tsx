import clsx from 'clsx'
import { projects } from '~/data/projects'
import { TextScroller } from '~/components/TextScroller'
import { ProjectCard } from '~/components/ProjectCard'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <section>
      <TextScroller
        text='Proyectos'
        emojisType='projects'
      />
      <div className={clsx(
        'container',
        styles.container
      )}>
        {
          projects.map(({ slug, title, tags, cardImages }) => (
            <ProjectCard
              key={slug}
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
