import styles from './TextScroller.module.css'

interface TextScrollerProps {
  text: string
}

const ELEMENTS_AMOUNT = 16

export const TextScroller: React.FC<TextScrollerProps> = ({
  text
}) => {
  const renderElements = () => {
    const texts = new Array(ELEMENTS_AMOUNT).fill(text)

    return texts.map((text, i) => {
      if (i === 0) {
        return (
          <li
            key={i}
            className={styles.item}
          >
            <h2 className={styles.title}>
              {text}
            </h2>
          </li>
        )
      }

      return (
        <li
          key={i}
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
        {renderElements()}
      </ul>
    </div>
  )
}
