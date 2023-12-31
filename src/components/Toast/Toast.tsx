'use client'

import { useEffect } from 'react'
import clsx from 'clsx'
import { useToastStore } from '~/store/use-toast-store'
import { InPortal } from '~/components/InPortal'
import styles from './Toast.module.css'

type TimeOut = string | number | NodeJS.Timeout | undefined

const HIDE_TOAST = 5000
const UNMOUNT_TOAST = HIDE_TOAST + 1000

export const Toast = () => {
  const {
    mount,
    hide,
    title,
    description,
    unmountToast,
    setHideToast,
  } = useToastStore()

  useEffect(() => {
    let hideToastTimeoutId: TimeOut
    let unmountTimeoutId: TimeOut

    if (mount) {
      hideToastTimeoutId = setTimeout(
        () => setHideToast(true),
        HIDE_TOAST
      )
      unmountTimeoutId = setTimeout(
        () => {
          unmountToast()
          setHideToast(false)
        },
        UNMOUNT_TOAST
      )
    }

    return () => {
      clearTimeout(hideToastTimeoutId)
      clearTimeout(unmountTimeoutId)
    }
  }, [mount, setHideToast, unmountToast])

  if (!mount) return null

  return (
    <InPortal id='portal-container'>
      <div className={clsx(
        styles.toast,
        hide && styles.hide
      )}>
        <div className={styles.title}>
          {title}
        </div>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </InPortal>
  )
}
