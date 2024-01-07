import { LinksSearchBar } from './components/LinksSearchBar'
import { LinksSearchResults } from './components/LinksSearchResults'
import styles from './page.module.css'

export const metadata = {
  title: 'Dresan — Links',
  description: 'Colección de links con recursos y herramientas sobre desarrollo de software que me han sido útiles.',
}

export default function LinksPage() {
  return (
    <div className='container'>
      <h1 className={styles.title}>
        Links
      </h1>
      <p className={styles.description} >
        Coleccion de links con recursos y herramientas sobre desarrollo de software que me han sido utiles.
      </p>
      <LinksSearchBar />
      <LinksSearchResults />
    </div>
  )
}
