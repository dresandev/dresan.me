'use client'

import clsx from 'clsx'
import { APP_ROUTES } from '~/constants'
import { getRandomKey } from '~/utils/get-random-key'
import { useBoolean } from '~/hooks/use-boolean'
import { useToggleBodyOverflow } from '~/hooks/use-toggle-body-overflow'
import { useOnPathnameChange } from '~/hooks/use-on-pathname-change'
import { BurgerBtn } from './BurgerBtn'
import { CustomLink } from '~/components/CustomLink'
import styles from './NavMenu.module.css'

export const NavMenu = () => {
  const {
    value: isMenuOpen,
    toggle: toggleMenu,
    setFalse: closeMenu,
  } = useBoolean(false)
  useToggleBodyOverflow(isMenuOpen)
  useOnPathnameChange(closeMenu)

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
        <ul className={styles.navList}>
          {
            APP_ROUTES.map(({ href, label }) => (
              <li key={getRandomKey()}>
                <CustomLink
                  className={styles.navLink}
                  href={href}
                >
                  {label}
                </CustomLink>
              </li>
            ))
          }
        </ul>

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
