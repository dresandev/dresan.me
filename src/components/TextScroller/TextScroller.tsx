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
          <h2
            key={getRandomKey()}
            className={styles.text}
          >
            {text} ✦
          </h2>
        )
      }

      return (
        <span
          key={getRandomKey()}
          className={styles.text}
          aria-hidden
        >
          {text} ✦
        </span>
      )
    })
  }

  return (
    <div className={styles.scroller}>
      <div className={styles.scrollerInner}>
        {renderTexts()}
      </div>
    </div>
  )
}
