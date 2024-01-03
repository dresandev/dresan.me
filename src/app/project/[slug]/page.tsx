import { notFound } from 'next/navigation'
import { projects } from '~/data/projects'
import { getRandomKey } from '~/utils/get-random-key'
import { getProjectBySlug } from '~/helpers/get-projects'
import { ProjectInfo } from './components/ProjectInfo'
import { TextScroller } from '~/components/TextScroller'
import styles from './page.module.css'

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export function generateMetadata({
  params
}: ProjectPageProps) {
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
    tags,
    year,
    role,
    liveUrl,
    codeUrl,
  } = project

  return (
    <>
      <div className='container'>
        <article className={styles.article}>
          <div className={styles.topContent}>
            <ProjectInfo
              title={title}
              description={description}
              year={year}
              role={role}
              codeUrl={codeUrl}
              liveUrl={liveUrl}
              tags={tags}
            />

            <section className={styles.mobileImagesSection}>
              {
                mobileImages.map(image => (
                  <figure key={getRandomKey()}>
                    <img
                      className={styles.mobileImage}
                      src={image}
                      alt='Imagen de proyecto'
                    />
                  </figure>
                ))
              }
            </section>
          </div>

          <section className={styles.desktopImagesSection}>
            {
              desktopImages.map(image => (
                <figure key={getRandomKey()}>
                  <img
                    className={styles.desktopImage}
                    src={image}
                    alt='Imagen de proyecto'
                  />
                </figure>
              ))
            }
          </section>
        </article>
      </div>

      <TextScroller text='Ver más proyectos' />
    </>
  )
}
