import clsx from 'clsx'
import styles from './ContactBtn.module.css'

interface ContactBtnProps {
  className?: string
}

export const ContactBtn: React.FC<ContactBtnProps> = ({
  className
}) => {
  return (
    <a
      className={clsx(
        styles.contactBtn,
        className
      )}
      href='mailto:javiandres.016@gmail.com'
    >
      ¿Algo en mente?
    </a>
  )
}
