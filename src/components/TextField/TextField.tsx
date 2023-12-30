import clsx from 'clsx'
import styles from './TextField.module.css'

type TextFieldProps = {
  label?: string;
  multiline?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export const TextField: React.FC<TextFieldProps> = ({
  className,
  label,
  multiline = false,
  ...props
}) => {
  return (
    <label className={clsx(
      styles.label,
      className
    )}>
      {label}
      {
        (multiline)
          ? (
            <textarea
              className={styles.textarea}
              {...props}
            />
          )
          : (
            <input
              className={styles.input}
              {...props}
            />
          )
      }
    </label>
  )
}
