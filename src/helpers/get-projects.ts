import { projects } from '~/data/projects'

export const getProjectBySlug = (slug: string) => {
  const project = projects.find(project => project.slug === slug)

  if (!project) return

  const index = projects.indexOf(project)
  return { ...project, index }
}

export const getPrevAndNextProjectSlug = (index: number) => {
  const prevIndex = (index === 0) ? projects.length - 1 : index - 1
  const nextIndex = (index === projects.length - 1) ? 0 : index + 1

  const prevProject = projects[prevIndex]
  const nextProject = projects[nextIndex]

  return {
    prevProjectSlug: prevProject.slug,
    nextProjectSlug: nextProject.slug
  }
}
