import { useState } from 'react'
import styles from './TextField.module.css'

type TextFieldProps = {
  id: string;
  label?: string;
  multiline?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  multiline = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const handleInputBlur = () => setIsFocused(false)
  const handleInputFocus = () => setIsFocused(true)

  const commonProps: TextFieldProps = {
    id,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    ...props
  }

  const renderInput = () => {
    if (multiline) {
      return (
        <textarea
          className={styles.textarea}
          {...commonProps}
        />
      )
    }

    return (
      <input
        className={styles.input}
        {...commonProps}
      />
    )
  }

  const labelClasses = `${styles.label} ${isFocused ? styles.focused : ''}`

  return (
    <div>
      <label
        className={labelClasses}
        htmlFor={id}
      >
        {label}
      </label>
      {renderInput()}
    </div>
  )
}
