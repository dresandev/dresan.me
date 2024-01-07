import { getRandomKey } from '~/utils/get-random-key'
import styles from './TextScroller.module.css'

interface TextScrollerProps {
  text: string
}

export const TextScroller: React.FC<TextScrollerProps> = ({
  text
}) => {
  const renderTexts = () => {
    const texts = new Array(24).fill(text)

    return texts.map((text, i) => {
      if (i === 0) {
        return (
          <li
            className={styles.item}
            key={getRandomKey()}
          >
            <h2 className={styles.title}>
              {text}
            </h2>
          </li>
        )
      }

      return (
        <li
          key={getRandomKey()}
          className={styles.item}
          aria-hidden
        >
          {text}
        </li>
      )
    })
  }

  return (
    <div className={styles.scroller}>
      <ul className={styles.scrollerInner}>
        {renderTexts()}
      </ul>
    </div>
  )
}
