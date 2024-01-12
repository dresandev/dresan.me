import clsx from 'clsx'
import { EmojisType } from '~/types'
import styles from './ChangingEmoji.module.css'

interface ChangingEmojiProps {
  className?: string
  emojisType: EmojisType
}

export const ChangingEmoji: React.FC<ChangingEmojiProps> = ({
  className,
  emojisType,
}) => {
  return (
    <span
      className={clsx(
        styles.emoji,
        styles[emojisType],
        className
      )}
    >
    </span>
  )
}
