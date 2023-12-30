import { Marquee } from '~/components/Marquee'
import { ContactForm } from '~/components/ContactForm'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <section>
      <Marquee text='Contacto' />
      <div className={styles.container}>
        <ContactForm />
      </div>
    </section>
  )
}
