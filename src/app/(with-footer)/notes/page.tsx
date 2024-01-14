import clsx from 'clsx'
import { NoteCard } from '~/components/NoteCard'
import styles from './page.module.css'

export const metadata = {
  title: 'Dresan — Notas',
  description: 'Notas sobre mi proceso de aprendizaje, algunos tutoriales, pensamientos, entre otros apuntes.',
}

const NOTES = [
  {
    slug: '/',
    title: 'Titulo de la nota',
    description: 'Redactando contenido',
    trailingIcon: '🫡'
  },
  {
    slug: '/',
    title: 'Titulo de la nota',
    description: 'Redactando contenido',
    trailingIcon: '🤯'
  },
  {
    slug: '/',
    title: 'Titulo de la nota',
    description: 'Redactando contenido',
    trailingIcon: '🤔'
  },
  {
    slug: '/',
    title: 'Titulo de la nota',
    description: 'Redactando contenido',
    trailingIcon: '🫥'
  },
]

export default function NotesPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Notas</h1>
      <p className={styles.description}>
        Notas sobre mi proceso de aprendizaje, algunos tutoriales, pensamientos, entre otros apuntes.
      </p>

      <div className={clsx(
        'slideInBottom',
        styles.notes,
      )}>
        {
          NOTES.map(note => (
            <NoteCard
              key={note.slug}
              {...note}
            />
          ))
        }
      </div>
    </div>
  )
}
