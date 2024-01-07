import Link, { type LinkProps } from 'next/link'
import clsx from 'clsx'
import styles from './CustomLink.module.css'

type CustomLinkProps = {}
  & LinkProps
  & React.AnchorHTMLAttributes<HTMLAnchorElement>

export const CustomLink: React.FC<CustomLinkProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <>
      <Link
        className={clsx(
          styles.customLink,
          className,
        )}
        {...props}
      >
        {children}
      </Link>
    </>
  )
}
