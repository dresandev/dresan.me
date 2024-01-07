import clsx from 'clsx'
import { TextScroller } from '~/components/TextScroller'
import { CustomLink } from '~/components/CustomLink'
import { ArrowIcon } from '~/components/SVG'
import styles from './About.module.css'

export const About = () => {
  return (
    <section>
      <TextScroller text='Sobre mí' />

      <div className={clsx(
        'container',
        styles.container
      )}>
        <div>
          <p className={styles.aboutText}>
            ¡Hola, hola🌊! Me llamo Javier Andrés, puedes decirme Dresan. Desarrollador de software Colombiano enfocado en el Front-end, que disfruta del desarrollo de UX/UI🎨, la tecnología y aprender sobre arquitectura de software.🚀💻
          </p>

          <CustomLink
            className={styles.downloadCV}
            href='/files/Javier-Andres_Frontend.pdf'
            target='_blank'
            prefetch={false}
          >
            Descargar CV
            <ArrowIcon
              width={30}
              height={30}
              direction='UP_RIGHT'
            />
          </CustomLink>
        </div>

        <div>
          <h3 className={styles.subtitle}>Tecnologías</h3>
          <ul className={styles.technologiesList}>
            <li>✦ HTML</li>
            <li>✦ MongoDB</li>
            <li>✦ CSS</li>
            <li>✦ Git</li>
            <li>✦ JavaScript</li>
            <li>✦ Tailwind CSS</li>
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
