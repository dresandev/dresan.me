'use client'

import { useState, useEffect } from 'react'
import { Link } from '~/types'
import { useLinksStore } from '~/store/use-links-store'
import { links } from '~/data/links'
import { getLinksByKeywords } from '~/helpers/get-links'
import { LinkGrid } from '../LinkGrid'
import styles from './SearchedLinks.module.css'

export const SearchedLinks = () => {
  const { keywords } = useLinksStore()
  const [searchedLinks, setSearchedLinks] = useState<Link[]>()

  useEffect(() => {
    const links = getLinksByKeywords(keywords)
    setSearchedLinks(links)
  }, [keywords])

  const linksToRender = searchedLinks || links

  return (linksToRender.length === 0)
    ? (
      <p className={styles.notFountMsg}>
        No se encontraron resultados para <span>{`"${keywords}"`}</span>
      </p>
    ) : (
      <LinkGrid links={linksToRender} />
    )
}
