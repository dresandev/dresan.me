import styles from './Marquee.module.css'

interface MarqueeProps {
  text: string
}

export const Marquee: React.FC<MarqueeProps> = ({
  text
}) => {
  const renderTexts = () => {
    const texts = new Array(12).fill(text)

    return texts.map((text, i) => {
      if (i === 0) {
        return (
          <>
            <h2 className={styles.text}>{text}</h2>
            <span className={styles.text}>✦</span>
          </>
        )
      }

      return (
        <>
          <span className={styles.text}>{text}</span>
          <span className={styles.text}>✦</span>
        </>
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
