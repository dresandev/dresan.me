import Link from 'next/link'
import clsx from 'clsx'
import styles from './CustomLink.module.css'

interface CustomLinkProps {
  className?: string
  href: string
  label: string
}

export const CustomLink: React.FC<CustomLinkProps> = ({
  className,
  href,
  label,
}) => {
  return (
    <>
      <Link
        className={clsx(
          styles.customLink,
          className
        )}
        href={href}
      >
        {label}
      </Link>
    </>
  )
}
