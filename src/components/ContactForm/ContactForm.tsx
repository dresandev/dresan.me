'use client'

import type { FC, FormEvent } from 'react'
import { useState } from 'react'
import clsx from 'clsx'
import { FORMSPREE_ID } from '~/constants'
import { useToastStore } from '~/store/use-toast-store'
import { TextField } from '~/components/TextField'
import styles from './ContactForm.module.css'

interface ContactFormProps {
  className?: string
}

export const ContactForm: FC<ContactFormProps> = ({
  className
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const { notifyToast } = useToastStore()

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      const url = `https://formspree.io/f/${FORMSPREE_ID}`
      const formData = new FormData(e.target as HTMLFormElement)
      const formDataObject: Record<string, any> = {}

      formData.forEach((value, key) => {
        formDataObject[key] = value as string
      })

      setIsLoading(true)
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formDataObject),
      })
      setIsLoading(false)

      notifyToast({
        title: 'Mensaje recibido',
        description: 'Gracias, te responderé lo antes posible'
      })
    } catch (error: any) {
      setIsLoading(false)
      notifyToast({
        title: 'Algo salió mal, intenta más tarde',
        description: error.response.data.error
      })
    } finally {
      (e.target as HTMLFormElement).reset()
      setIsLoading(false)
    }
  }

  return (
    <form
      className={clsx(
        styles.form,
        className,
      )}
      method='POST'
      action={`https://formspree.io/f/${FORMSPREE_ID}`}
      onSubmit={handleOnSubmit}
    >
      <TextField
        className={styles.nameInput}
        name='name'
        label='Nombre'
        type='text'
        autoComplete='off'
        autoCorrect='off'
      />
      <TextField
        className={styles.emailInput}
        name='email'
        label='Correo'
        type='email'
        autoComplete='off'
        autoCorrect='off'
        required
      />
      <TextField
        className={styles.messageInput}
        name='message'
        label='Mensaje'
        autoCorrect='off'
        multiline
      />
      <button
        className={styles.submitBtn}
        type='submit'
        disabled={isLoading}
      >
        Enviar
      </button>
    </form>
  )
}
