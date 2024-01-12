import Link from 'next/link'
import { notFound } from 'next/navigation'
import { projects } from '~/data/projects'
import { getProjectBySlug } from '~/helpers/get-projects'
import { ProjectInfo } from './components/ProjectInfo'
import { TextScroller } from '~/components/TextScroller'
import styles from './page.module.css'

interface ProjectPageProps {
  params: { slug: string }
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
  return projects.map(({ slug }) => ({
    params: { slug }
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
        <article>
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
                mobileImages.map(({ large }, i) => (
                  <figure key={i}>
                    <img
                      className={styles.mobileImage}
                      src={large}
                      alt='Imagen de proyecto'
                      width={427}
                      height={926}
                    />
                  </figure>
                ))
              }
            </section>
          </div>

          <section className={styles.desktopImagesSection}>
            {
              desktopImages.map(({
                large,
                medium,
                small
              }, i) => (
                <figure key={i}>
                  <img
                    className={styles.desktopImage}
                    srcSet={`
                      ${large} 1530w,
                      ${medium} 1000w,
                      ${small} 500w,
                    `}
                    sizes='
                      (max-width: 550px) 500px,
                      (max-width: 1024px) 1000px,
                      1530px
                    '
                    src={large}
                    alt='Imagen de proyecto'
                    width={1530}
                    height={757}
                  />
                </figure>
              ))
            }
          </section>
        </article>
      </div>

      <TextScroller
        text='Ver más proyectos'
        emojisType='viewMoreProjects'
      />

      <nav className={styles.nav}>
        <Link
          data-text='Anterior'
          className={styles.navLink}
          href={'/'}
        >
          Anterior
        </Link>
        <Link
          data-text='Siguiente'
          className={styles.navLink}
          href={'/'}
        >
          Siguiente
        </Link>
      </nav>

      <div className={styles.pageTransition}></div>
    </>
  )
}
