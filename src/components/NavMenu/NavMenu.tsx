'use client'

import Link from 'next/link'
import { useBoolean } from '~/hooks/use-boolean'
import { BurgerBtn } from './BurgerBtn'
import styles from './NavMenu.module.css'

export const NavMenu = () => {
  const {
    value: isMenuOpen,
    toggle: toggleMenu
  } = useBoolean(false)

  return (
    <div>
      <BurgerBtn
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      <nav className={styles.nav}>
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

        <a
          className={styles.contactBtn}
          href='mailto:javiandres.016@gmail.com'
        >
          ¿Algo en mente?
        </a>
      </nav>

    </div>
  )
}