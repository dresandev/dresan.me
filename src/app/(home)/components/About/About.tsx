import { Marquee } from '~/components/Marquee'
import styles from './About.module.css'

export const About = () => {
  return (
    <section>
      <Marquee text='Sobre mí' />
      <div className={styles.wrapper}>
        <div>
          <p>
            Hola ✋🏻, me llámo Javier Andrés, me puedes decir Dresan, Soy desarrollador de software enfocado en el Front-end.
            Fan del desarrollo de UX/UI y la tecnología.
            Diseñádores y yo 🫱🏻‍🫲🏿.
          </p>

          <a href='/'>
            Descargar CV
          </a>
        </div>

        <div>
          <h3>Tecnologías</h3>
          <ul>
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
