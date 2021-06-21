import React from 'react'
import {projects} from '../projects/projects'
import ProjectCard from './projectCard'

const ProjectList = () => {

  let projectsRender = projects.map((project, index) => {
   return( <ProjectCard
      key={index}
      title={project.title}
      description={project.description}
      tech={project.tech}
      image={project.image}
      deployed={project.deployed}
      git={project.git}
      device={project.device}
    ></ProjectCard>
   )
  })
  return(
    <div>
      {projectsRender}
    </div>
  )
}

export default ProjectList
