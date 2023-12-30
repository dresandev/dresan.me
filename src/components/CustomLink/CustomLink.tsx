import Link, { type LinkProps } from 'next/link'
import clsx from 'clsx'
import styles from './CustomLink.module.css'

type CustomLinkProps = {
  href: string
  label: string
} & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const CustomLink: React.FC<CustomLinkProps> = ({
  className,
  label,
  ...props
}) => {
  return (
    <>
      <Link
        className={clsx(
          styles.customLink,
          className
        )}
        {...props}
      >
        {label}
      </Link>
    </>
  )
}
