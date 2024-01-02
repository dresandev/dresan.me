import { notFound } from 'next/navigation'
import { projects } from '~/data/projects'
import { getProjectBySlug } from '~/helpers/get-projects'
import { CustomLink } from '~/components/CustomLink'
import { TextScroller } from '~/components/TextScroller'
import styles from './page.module.css'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) notFound()

  return {
    title: `Dresan — Proyecto | ${project.title}`,
    description: project.description
  }
}

export function generateStaticParams() {
  return projects.map(project => ({
    params: { slug: project.slug }
  }))
}

export default function ProjectPage({
  params
}: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) notFound()


  const {
    title,
    description,
    desktopImages,
    mobileImages,
    year,
    role,
    liveUrl,
    codeUrl,
  } = project

  return (
    <>
      <div className={styles.container}>
        <article className={styles.article}>
          <div className={styles.pinArea}>
            <h1 className={styles.title}>
              {title}
            </h1>
            <p className={styles.description}>
              {description}
            </p>

            <div className={styles.details}>
              <div>
                <div className={styles.details__caption}>Year</div>
                <div className={styles.details__text}>{year}</div>
              </div>
              <div>
                <div className={styles.details__caption}>Role</div>
                <div className={styles.details__text}>{role}</div>
              </div>

              <div className={styles.details__links}>
                <CustomLink
                  href={codeUrl}
                  target='_blank'
                >
                  Ver código
                </CustomLink>

                <CustomLink
                  href={liveUrl}
                  target='_blank'
                >
                  Ver proyecto
                </CustomLink>
              </div>
            </div>
          </div>
          <div className={styles.longImagesArea}>
            {
              mobileImages.map(image => {
                const uniqueKey = crypto.randomUUID()

                return (
                  <img
                    key={uniqueKey}
                    className={styles.longImagesArea__image}
                    src={image}
                    alt='Imagen de proyecto'
                  />
                )
              }
              )
            }
          </div>
        </article>

        <div className={styles.imagesArea}>
          {
            desktopImages.map(image => {
              const uniqueKey = crypto.randomUUID()

              return (
                <img
                  key={uniqueKey}
                  className={styles.imagesArea__image}
                  src={image}
                  alt='Imagen de proyecto'
                />
              )
            }
            )
          }
        </div>
      </div >

      <TextScroller text='Ver más proyectos' />
      {/* 
      <div className={styles.navigation}>
        <Link
          data-text='Anterior'
          className={`before-text-stoke ${styles.navigation__link}`}
          href={prevProjectSlug}
        >
          Anterior
        </Link>
        <Link
          data-text='Siguiente'
          className={`before-text-stoke ${styles.navigation__link}`}
          href={nextProjectSlug}
        >
          Siguiente
        </Link>
      </div> */}
    </>
  )
}
