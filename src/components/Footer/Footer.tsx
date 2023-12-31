import { SOCIAL_MEDIA } from './Footer.constants'
import { CustomLink } from '~/components/CustomLink'
import { CurrentTime } from '~/components/CurrentTime'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.countryAndTime}>
        <span>
          Popayán, CO
        </span>
        <span className={styles.time}>
          <CurrentTime />
        </span>
      </div>

      <ul className={styles.socialNetworksList}>
        {
          SOCIAL_MEDIA.map(({ href, label }) => (
            <li key={href}>
              <CustomLink
                className={styles.navLink}
                prefetch={false}
                href={href}
                target='_blank'
              >
                {label}
              </CustomLink>
            </li>
          ))
        }
      </ul>

      <div>
        {'"Creatividad" 👀'}
      </div>
    </footer >
  )
}
