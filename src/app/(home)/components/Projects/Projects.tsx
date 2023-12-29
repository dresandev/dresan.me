import { Marquee } from '~/components/Marquee'
import { ProjectCard } from '~/components/ProjectCard'
import styles from './Projects.module.css'

export const Projects = () => {
  return (
    <section>
      <Marquee text='Proyectos' />
      <div className={styles.projectsContainer}>
        <ProjectCard className={styles.projectCard} />
        <ProjectCard className={styles.projectCard} />
      </div>
    </section>
  )
}
