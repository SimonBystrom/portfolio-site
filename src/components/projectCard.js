import React from 'react'

const ProjectCard = ({title, description, tech, image, movie, deployed, git}) => {
  const device = 'phone'
  const renderDevice = () => {
    if(device === 'phone'){
      return (
        <div className="project-device-iphone">
          <div className="device device-iphone-x">
            <div className="device-frame">
              <img className="device-content"></img>
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
          </div>
        </div>
      )
    } else {

      }
    }

  return(
    <div id="work" className="project-card-container">
      <div className="row justify-content-around p-5 ">
        <div className="col-sm-12 col-md-6 project-card-info mt-5">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="d-flex">
            <p>rails</p>
            <p>CSS</p>
            <p>Bootstrap</p>
          </div>
          <div className="d-flex mt-5">
            <div className="button mr-5" label="deployed">
              <a id="deployed" href={deployed} target="_blank" rel="noreferrer">Site</a>
            </div>
            <div className="button git" label="git">
              <a id="git" href={git} target="_blank" rel="noreferrer">Code</a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          {renderDevice()}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
