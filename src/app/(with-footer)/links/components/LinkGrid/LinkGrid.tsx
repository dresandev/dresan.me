import { Link } from '~/types'
import { getRandomKey } from '~/utils/get-random-key'
import { LinkCard } from '../LinkCard'
import styles from './LinkGrid.module.css'

interface LinkGridProps {
  links: Link[]
}

export const LinkGrid: React.FC<LinkGridProps> = ({ links }) => {
  return (
    <div className={styles.gridContainer}>
      {
        links.map(link => (
          <LinkCard
            key={getRandomKey()}
            {...link}
          />
        ))
      }
    </div>
  )
}
