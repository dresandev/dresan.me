import clsx from 'clsx'
import { TextScroller } from '~/components/TextScroller'
import { ContactForm } from '~/components/ContactForm'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <section>
      <TextScroller text='Contacto' />
      <div className={clsx(
        'container',
        styles.container
      )}>
        <ContactForm />
      </div>
    </section>
  )
}
