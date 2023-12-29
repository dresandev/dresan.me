import { APP_ROUTES } from '~/constants'
import { CustomLink } from '~/components/CustomLink'
import styles from './PageLinks.module.css'

export const PageLinks = () => {
  return (
    <ul className={styles.navList}>
      {
        APP_ROUTES.map(({ href, label }, i) => (
          <li key={i}>
            <CustomLink
              href={href}
              label={label}
            />
          </li>
        ))
      }
    </ul>
  )
}
