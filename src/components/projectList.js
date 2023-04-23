import React from 'react'
import {projects} from '../projects/projects'
import ProjectCard from './projectCard'

const ProjectList = () => {
  return (
    <div>
     {projects.map((project, index) => {
        return(
          <ProjectCard
            key={index}
            order={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            image={project.image}
            deployed={project.deployed}
            git={project.git || null}
            device={project.device || null}
            movie={project.movie || null}
          />
        )
      })
     }
    </div>
  )
}
export default ProjectList
