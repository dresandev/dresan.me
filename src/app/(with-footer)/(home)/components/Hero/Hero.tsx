import { DresanAnimalogo } from '~/components/SVG/DresanAnimalogo'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <svg
        aria-hidden
        className={styles.titleBlur}
      >
        <filter id='f' x='-50%' y='-200%' width='200%' height='500%'>
          <feGaussianBlur stdDeviation='35'></feGaussianBlur>
          <feColorMatrix type='saturate' values='1.3'></feColorMatrix>
          <feComposite in='SourceGraphic'></feComposite>
        </filter>
      </svg>
      <h1 className={styles.title}>
        <div className={styles.titleName}>
          Javier Andres
        </div>
        Front-end Developer
      </h1>

      <DresanAnimalogo
        aria-hidden
        className={styles.animalogo}
      />
    </section>
  )
}
