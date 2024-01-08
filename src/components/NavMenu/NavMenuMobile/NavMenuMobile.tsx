'use client'

import clsx from 'clsx'
import { APP_ROUTES } from '~/constants'
import { useBoolean } from '~/hooks/use-boolean'
import { useToggleBodyOverflow } from '~/hooks/use-toggle-body-overflow'
import { useOnPathnameChange } from '~/hooks/use-on-pathname-change'
import { CustomLink } from '~/components/CustomLink'
import { ContactBtn } from '~/components/ContactBtn'
import { BurgerBtn } from './BurgerBtn'
import styles from './NavMenuMobile.module.css'

export const NavMenuMobile = () => {
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
        isMenuOpen && styles.navOpen,
      )}>
        <ul className={styles.navList}>
          {
            APP_ROUTES.map(({ path, label }) => (
              <li key={path}>
                <CustomLink
                  className={styles.navLink}
                  href={path}
                >
                  {label}
                </CustomLink>
              </li>
            ))
          }
        </ul>

        <ContactBtn className={styles.contactBtn} />
      </nav>
    </>
  )
}
