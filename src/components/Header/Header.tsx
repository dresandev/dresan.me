import Link from 'next/link'
import { DresanLogo } from '~/components/SVG/DresanLogo'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.homeLink} href='/'>
        <DresanLogo />
      </Link>

      <nav>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLink} href='/'>
              Proyectos
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href='/'>
              Sobre mí
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href='/'>
              Contacto
            </Link>
          </li>
          <li>
            <Link className={styles.navLink} href='/'>
              Notas
            </Link>
          </li>
        </ul>
      </nav>

      <a
        className={styles.contactBtn}
        href='mailto:javiandres.016@gmail.com'
      >
        ¿Algo en mente?
      </a>
    </header>
  )
}