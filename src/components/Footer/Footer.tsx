import { CustomLink } from '~/components/CustomLink'
import styles from './Footer.module.css'

const SOCIAL_NETWORKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/dresandev',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dresandev/',
  },
  {
    label: 'CodePen',
    href: 'https://codepen.io/dresandev',
  },
]

export const Footer = () => {
  return (
    <footer>
      <div>
        Popayán, CO
        <span>21:20</span>
      </div>

      <ul className={styles.navList}>
        {
          SOCIAL_NETWORKS.map(({ href, label }, i) => (
            <li key={i}>
              <CustomLink
                className={styles.navLink}
                prefetch={false}
                href={href}
                target='_blank'
                label={label}
              />
            </li>
          ))
        }
      </ul>

      <div>
        {"Creatividad"}
      </div>
    </footer >
  )
}
