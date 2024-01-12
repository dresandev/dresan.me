import { DresanAnimalogo } from '~/components/SVG/DresanAnimalogo'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.hero}>
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
