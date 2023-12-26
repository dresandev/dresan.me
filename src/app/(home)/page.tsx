import { Marquee } from '~/components/Marquee'
import { ProjectCard } from '~/components/ProjectCard'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <h1 className={styles.title}>
          <div className={styles.titleName}>
            Javier Andres
          </div>
          Front-end Developer
        </h1>
      </section>

      <section>
        <Marquee text='Proyectos' />

        <div>
          <ProjectCard />
        </div>
      </section>
    </>
  )
}
