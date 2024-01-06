import { APP_ROUTES } from '~/constants'
import { getRandomKey } from '~/utils/get-random-key'
import { CustomLink } from '~/components/CustomLink'
import { ContactBtn } from '~/components/ContactBtn'
import styles from './NavMenu.module.css'

export const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {
          APP_ROUTES.map(({ path, label }) => (
            <li key={getRandomKey()}>
              <CustomLink href={path}>
                {label}
              </CustomLink>
            </li>
          ))
        }
      </ul>

      <ContactBtn className={styles.contactBtn} />
    </nav>
  )
}
