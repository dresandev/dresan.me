'use client'

import { FormEvent, useState } from 'react'
import clsx from 'clsx'
import { useToastStore } from '~/store/use-toast-store'
import { useForm } from '~/hooks/use-form'
import { TextField } from '~/components/TextField'
import styles from './ContactForm.module.css'

interface ContactFormProps {
  className?: string
}

interface ContactFormStatus {
  submitting: boolean
  hasError: boolean
}

export const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const { formData, handleInputChange, resetForm } = useForm({
    initState: {
      name: '',
      email: '',
      message: '',
    }
  })
  const [status, setStatus] = useState<ContactFormStatus>({
    submitting: false,
    hasError: false,
  })
  const { notifyToast } = useToastStore()

  const { name, email, message } = formData

  const handleServerResponse = (
    ok: boolean,
    title: string,
    msg: string
  ) => {
    setStatus({
      submitting: false,
      hasError: !ok,
    })
    notifyToast({
      title,
      description: msg
    })
    resetForm()
  }

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setStatus(prevStatus => ({
      ...prevStatus,
      submitting: true
    }))

    try {
      await fetch('https://formspree.io/f/xoqoayzk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(formData),
      })

      handleServerResponse(
        true,
        'Mensaje recibido',
        'Gracias, te responderé lo antes posible'
      )
    } catch (error: any) {
      handleServerResponse(
        false,
        'Algo salio mal',
        error.response.data.error
      )
    }
  }

  return (
    <form
      className={clsx(
        styles.form,
        className,
      )}
      onSubmit={handleOnSubmit}
    >
      <TextField
        className={styles.nameInput}
        name='name'
        label='Nombre'
        type='text'
        autoComplete='off'
        autoCorrect='off'
        value={name}
        onChange={handleInputChange}
      />
      <TextField
        className={styles.emailInput}
        name='email'
        label='Correo'
        type='email'
        autoComplete='off'
        autoCorrect='off'
        required
        value={email}
        onChange={handleInputChange}
      />
      <TextField
        className={styles.messageInput}
        name='message'
        label='Mensaje'
        autoCorrect='off'
        multiline
        value={message}
        onChange={handleInputChange}
      />
      <button
        className={styles.submitBtn}
        disabled={status.submitting}
      >
        Enviar
      </button>
    </form>
  )
}
