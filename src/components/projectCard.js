import React from 'react'

const ProjectCard = ({title, description, tech, device, image, movie, deployed, git}) => {

  return(
    <div id="work" className="project-card-container">
      <div className="row justify-content-around p-5">
        <div className="col-sm-12 col-md-6 project-card-info">
          <h1>Test Title</h1>
          <p>Project description: Lorem ipsum Loren Ipusom Loreijsdfa asdasd aLorem ipsun We used Loreus ipsin Lores sumsp Lfijasd askdaer jasdujf asdijda djasjd  ds d s aksjdjsdf asdjadfkjasd asjdiajsd asijsadfasf  asda sdasd  dd das asdasda sdsad asd </p>
          <div className="d-flex">
            <p>rails</p>
            <p>CSS</p>
            <p>Bootstrap</p>
          </div>
          <div className="d-flex">
            <a href={deployed} target="_blank" rel="noreferrer"> Deployed site</a>
            <a href={deployed} target="_blank" rel="noreferrer">See code</a>
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
