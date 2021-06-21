import React from 'react'

const ProjectCard = ({title, description, tech, image, movie, deployed, git, device}) => {

  const renderDevice = () => {
    if(device === 'phone'){
      return (
        <div className="project-device-iphone">
          <div className=" device device-spacegray device-iphone-8">
            <div className="device-frame">
              <img className="device-content project-img" src={image}></img>
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
          </div>
        </div>
      )
    } else if(device === 'pc') {

      }
    }

  return(
    <div  className="project-card-container">
      <span className="anchor" id="work"></span>
      <div className="row justify-content-around ">
        <div className="col-sm-12 col-md-8 col-lg-6 project-card-info mt-5">
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="d-flex tech-icons">
           {tech.map((item) => {
             return <i className={item}></i>
           })}
          </div>
          <div className="d-flex mt-5">
            <div className="button mr-5" label="deployed">
              Site
              <a id="deployed" href={deployed} target="_blank" rel="noreferrer"><span></span></a>
            </div>
            <div className="button git" label="git">
              Code
              <a id="git" href={git} target="_blank" rel="noreferrer"><span></span></a>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-8 col-lg-4">
          {renderDevice()}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
