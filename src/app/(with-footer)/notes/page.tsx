import { Metadata } from 'next'
import { NoteCard } from '~/components/NoteCard'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Dresan — Notas',
  description: 'Notas sobre mi proceso de aprendizaje, algunos tutoriales, pensamientos, entre otros apuntes.',
}

export default function NotesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Notas</h1>
      <p className={styles.description}>
        Notas sobre mi proceso de aprendizaje, algunos tutoriales, pensamientos, entre otros apuntes.
      </p>

      <div className={styles.notes}>
        <NoteCard
          slug='/'
          title='Titulo de la nota'
          description='Redactando el contenido'
        />
        <NoteCard
          slug='/'
          title='Titulo de la nota'
          description='Redactando el contenido'
        />
        <NoteCard
          slug='/'
          title='Titulo de la nota'
          description='Redactando el contenido'
        />
      </div>
    </div>
  )
}
