import clsx from 'clsx'
import { Marquee } from '~/components/Marquee'
import { ProjectCard } from '~/components/ProjectCard'
import styles from './Projects.module.css'
import { projects } from '~/data/projects'

export const Projects = () => {
  return (
    <section>
      <Marquee text='Proyectos' />
      <div className={clsx(
        'container',
        styles.container
      )}>
        {projects.map(({ slug, title, tags, image }, i) => (
          <ProjectCard
            key={i}
            className={styles.projectCard}
            slug={slug}
            image={image}
            title={title}
            tags={tags}
          />
        ))}
      </div>
    </section>
  )
}
