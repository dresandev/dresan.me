'use client'

import { useLinksStore } from '~/store/use-links-store'
import styles from './LinksSearchBar.module.css'

export const LinksSearchBar = () => {
  const { keywords, setKeywords } = useLinksStore()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeywords(e.target.value)
  }

  return (
    <input
      className={styles.searchBar}
      role='searchbox'
      name='keywords'
      type='text'
      placeholder='Escribe una palabra clave'
      spellCheck={false}
      autoComplete='off'
      value={keywords}
      onChange={handleInputChange}
    />
  )
}
