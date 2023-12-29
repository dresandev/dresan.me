'use client'

import clsx from 'clsx'
import { useBoolean } from '~/hooks/use-boolean'
import { BurgerBtn } from './BurgerBtn'
import { PageLinks } from '~/components/PageLinks'
import styles from './NavMenu.module.css'

export const NavMenu = () => {
  const {
    value: isMenuOpen,
    toggle: toggleMenu
  } = useBoolean(false)

  return (
    <>
      <BurgerBtn
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
      />

      <nav className={clsx(
        styles.nav,
        isMenuOpen && styles.navOpen
      )}>
        <PageLinks />

        <a
          className={styles.contactBtn}
          href='mailto:javiandres.016@gmail.com'
        >
          ¿Algo en mente?
        </a>
      </nav>
    </>
  )
}
