'use client'

import { useEffect, useState } from 'react'
import { useToastStore } from '~/store/use-toast-store'
import { InPortal } from '~/components/InPortal'
import styles from './Toast.module.css'

type TimeOut = string | number | NodeJS.Timeout | undefined

export const Toast = () => {
  const [hideToast, setHideToast] = useState(false)
  const { show, title, description } = useToastStore()
  const { unmountToast } = useToastStore()

  useEffect(() => {
    let hideToastTimeoutId: TimeOut
    let unmountTimeoutId: TimeOut

    if (show) {
      hideToastTimeoutId = setTimeout(() => setHideToast(true), 5000)
      unmountTimeoutId = setTimeout(() => unmountToast(), 6000)
    }

    return () => {
      clearTimeout(hideToastTimeoutId)
      clearTimeout(unmountTimeoutId)
    }
  }, [show, unmountToast])

  if (!show) return null

  const toastClasses = `${styles.toast} ${hideToast ? styles.hide : ''}`

  return (
    <InPortal id='portal-container'>
      <div className={toastClasses}>
        <div className={styles.title}>{title}</div>
        <p className={styles.description}>{description}</p>
      </div>
    </InPortal>
  )
}
