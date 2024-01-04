import clsx from 'clsx'
import styles from './TagPill.module.css'

interface TagPillProps {
  tagName: string
  withBlur?: boolean
}

export const TagPill: React.FC<TagPillProps> = ({
  tagName,
  withBlur = false
}) => {
  return (
    <div className={clsx(
      styles.tagPill,
      withBlur && styles.blurredTagPill
    )}>
      {tagName}
    </div>
  )
}
