'use client'

import { useEffect, useState } from 'react'
import styles from './CopyContactEmail.module.css'

const CONTACT_EMAIL = 'javiandres.016@gmail.com'
const RESET_TOOLTIP_TIME = 4000

export const CopyContactEmail = () => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    setTimeout(
      () => setIsCopied(false),
      RESET_TOOLTIP_TIME
    )
  }, [isCopied])

  const handleOnClick = async () => {
    await navigator.clipboard.writeText(CONTACT_EMAIL)
    setIsCopied(true)
  }

  return (
    <>
      <button
        className={styles.copyEmailBtn}
        onClick={handleOnClick}
      >
        {CONTACT_EMAIL}
      </button>
      <div className={styles.toolTip}>
        {
          isCopied
            ? 'Correo copiado'
            : 'Click para copiar correo'
        }
      </div>
    </>
  )
}
