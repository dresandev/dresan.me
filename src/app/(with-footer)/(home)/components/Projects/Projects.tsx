import clsx from 'clsx'
import { projects } from '~/data/projects'
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
        {projects.map(({ slug, title, tags, cardImage }, i) => (
          <ProjectCard
            key={i}
            className={styles.projectCard}
            slug={slug}
            image={cardImage}
            title={title}
            tags={tags}
          />
        ))}
      </div>
    </section>
  )
}
