import Link from 'next/link'
import { DresanLogo } from '~/components/SVG'
import { NavMenu } from '~/components/NavMenu'
import { NavMenuMobile } from '~/components/NavMenu/NavMenuMobile'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link
        aria-label='Go home'
        className={styles.homeLink}
        href='/'
      >
        <DresanLogo />
      </Link>

      <NavMenu />
      <NavMenuMobile />
    </header>
  )
}
