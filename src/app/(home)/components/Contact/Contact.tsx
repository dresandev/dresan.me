import clsx from 'clsx'
import { Marquee } from '~/components/Marquee'
import { ContactForm } from '~/components/ContactForm'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <section>
      <Marquee text='Contacto' />
      <div className={clsx(
        'container',
        styles.container
      )}>
        <ContactForm />
      </div>
    </section>
  )
}
