import { Marquee } from '~/components/Marquee'
import styles from './Contact.module.css'
import { ContactForm } from '~/components/ContactForm'

export const Contact = () => {
  return (
    <section>
      <Marquee text='Contacto' />
      <ContactForm />
    </section>
  )
}
