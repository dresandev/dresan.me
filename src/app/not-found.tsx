import { CustomLink } from '~/components/CustomLink'
import styles from './not-found.module.css'

export const metadata = {
  title: '404 — No encontrado',
}

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p>Parece que te perdiste, pero don guorri</p>
      <CustomLink
        className={styles.link}
        href='/'
      >
        Volver al inicio
      </CustomLink>
    </div>
  )
}