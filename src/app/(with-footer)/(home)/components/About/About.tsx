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
            Hola ✋🏻, me llámo Javier Andrés, me puedes decir Dresan. Soy desarrollador de software enfocado en el Front-end.
            Fan del desarrollo de UX/UI, desarrollo de software, tecnologias web y CSS 💙.
          </p>

          <CustomLink
            className={styles.downloadCV}
            href='/'
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
