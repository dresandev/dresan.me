import { Fragment } from 'react'
import styles from './Marquee.module.css'

interface MarqueeProps {
  text: string
}

export const Marquee: React.FC<MarqueeProps> = ({
  text
}) => {
  const renderTexts = () => {
    const texts = new Array(16).fill(text)

    return texts.map((text, i) => {
      if (i === 0) {
        return (
          <Fragment key={i}>
            <h2 className={styles.text}>{text}</h2>
            <span className={styles.text}>✦</span>
          </Fragment>
        )
      }

      return (
        <Fragment key={i}>
          <span className={styles.text} aria-hidden>{text}</span>
          <span className={styles.text} aria-hidden>✦</span>
        </Fragment>
      )
    })
  }

  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeTrack}>
        {renderTexts()}
      </div>
    </div>
  )
}
