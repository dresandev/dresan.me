import clsx from 'clsx'
import { TextScroller } from '~/components/TextScroller'
import { ContactForm } from '~/components/ContactForm'
import { CopyContactEmail } from '~/components/CopyContactEmail'
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <section>
      <TextScroller
        text='Contacto'
        emojisType='contact'
      />
      <div className={clsx(
        'container',
        styles.container
      )}>
        <ContactForm />
        <CopyContactEmail />
      </div>
    </section>
  )
}
