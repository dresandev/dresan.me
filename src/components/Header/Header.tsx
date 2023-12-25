import Link from 'next/link'
import { DresanLogo } from '~/components/SVG/DresanLogo'
import { ThemeSwitcher } from '~/components/ThemeSwitcher'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href='/'>
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

      <ThemeSwitcher />
    </header>
  )
}