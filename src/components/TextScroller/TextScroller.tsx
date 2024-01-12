import { Fragment } from 'react'
import clsx from 'clsx'
import { EmojisType } from '~/types'
import { ChangingEmoji } from '~/components/ChangingEmoji'
import styles from './TextScroller.module.css'

interface TextScrollerProps {
  text: string
  emojisType: EmojisType
}

const ELEMENTS_AMOUNT = 16

export const TextScroller: React.FC<TextScrollerProps> = ({
  text,
  emojisType,
}) => {
  const renderElements = () => {
    const texts = new Array(ELEMENTS_AMOUNT).fill(text)

    return texts.map((text, i) => {
      if (i === 0) {
        return (
          <Fragment key={i}>
            <h2 className={clsx(
              styles.item,
              styles.title
            )}>
              {text}
            </h2>
            <ChangingEmoji emojisType={emojisType} />
          </Fragment>
        )
      }

      return (
        <Fragment key={i}>
          <span
            aria-hidden
            className={styles.item}
          >
            {text}
          </span>
          <ChangingEmoji emojisType={emojisType} />
        </Fragment>
      )
    })
  }

  return (
    <div className={styles.scroller}>
      <div className={styles.scrollerInner}>
        {renderElements()}
      </div>
    </div>
  )
}
