'use client'

import { useState, useEffect } from 'react'
import clsx from 'clsx'
import { Link } from '~/types'
import { links } from '~/data/links'
import { getRandomKey } from '~/utils/get-random-key'
import { useLinksStore } from '~/store/use-links-store'
import { getLinksByKeywords } from '~/helpers/get-links'
import { LinkCard } from '~/components/LinkCard'
import styles from './LinksSearchResults.module.css'

export const LinksSearchResults = () => {
  const { keywords } = useLinksStore()
  const [searchedLinks, setSearchedLinks] = useState<Link[]>([...links])

  useEffect(() => {
    const searchedLinks = getLinksByKeywords(keywords)
    setSearchedLinks(searchedLinks || [...links])
  }, [keywords])

  if (!searchedLinks.length) {
    return (
      <p className={styles.notFountMsg}>
        No se encontraron resultados para <span>{`"${keywords}"`}</span>
      </p>
    )
  }

  return (
    <div className={clsx(
      'slideInBottom',
      styles.gridContainer,
    )}>
      {
        searchedLinks.map(link => (
          <LinkCard
            key={getRandomKey()}
            {...link}
          />
        ))
      }
    </div>
  )
}
