import React from 'react'

const ProjectCard = (props) => {

  return(
    <div id="work" className="project-card-container">
      <div className="row justify-content-around p-5">
        <div className="col-sm-12 col-md-6 project-card-info">
          <h1>Project name</h1>
          <p>Project description</p>
          <div className="d-flex">
            <p>tech</p>
            <p>tech</p>
            <p>tech</p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="project-device">
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
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
