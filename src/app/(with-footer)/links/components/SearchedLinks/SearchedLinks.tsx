'use client'

import { useState, useEffect } from 'react'
import { Link } from '~/types'
import { links } from '~/data/links'
import { useLinksStore } from '~/store/use-links-store'
import { getLinksByKeywords } from '~/helpers/get-links'
import { LinkGrid } from '../LinkGrid'
import styles from './SearchedLinks.module.css'

export const SearchedLinks = () => {
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
    <LinkGrid links={searchedLinks} />
  )
}
