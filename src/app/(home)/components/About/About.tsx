import { Marquee } from '~/components/Marquee'
import { CustomLink } from '~/components/CustomLink'
import styles from './About.module.css'

export const About = () => {
  return (
    <section>
      <Marquee text='Sobre mí' />

      <div className={styles.wrapper}>
        <div>
          <p className={styles.aboutText}>
            Hola ✋🏻, me llámo Javier Andrés, me puedes decir Dresan, Soy desarrollador de software enfocado en el Front-end.
            Fan del desarrollo de UX/UI y la tecnología.
            Diseñádores y yo 🫱🏻‍🫲🏿.
          </p>

          <CustomLink
            className={styles.downloadCV}
            href='/'
            prefetch={false}
            label='Descargar CV ↗'
          />
        </div>

        <div>
          <h3 className={styles.subtitle}>Tecnologías</h3>
          <ul className={styles.technologiesList}>
            <li>✦ HTML</li>
            <li>✦ MongoDB</li>
            <li>✦ CSS</li>
            <li>✦ Git</li>
            <li>✦ JavaScript</li>
            <li>✦ Tailwind</li>
            <li>✦ TypeScript</li>
            <li>✦ GraphQL</li>
            <li>✦ React</li>
            <li>✦ PostgreSQL</li>
            <li>✦ Next.JS</li>
            <li>✦ Node.JS</li>
            <li>✦ Express</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
