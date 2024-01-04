import { Link } from '~/types'
import { ArrowIcon } from '~/components/SVG'
import styles from './LinkCard.module.css'

interface LinkCardProps extends Link { }

export const LinkCard: React.FC<LinkCardProps> = ({
  name,
  description,
  url,
}) => {
  return (
    <a
      className={styles.linkCard}
      href={url}
      target='_blank'
    >
      <p className={styles.description}>
        {description}
      </p>

      <div className={styles.name}>
        {name}
        <ArrowIcon
          className={styles.arrowIcon}
          direction='UP_RIGHT'
        />
      </div>
    </a>
  )
}
