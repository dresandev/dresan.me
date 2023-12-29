import { PageLinks } from '~/components/PageLinks'
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <div>
        Popayán, CO
        <span>21:20</span>
      </div>

      <PageLinks />

      <div>
        {"Creatividad"}
      </div>
    </footer>
  )
}
