import React, {useState} from 'react'

const ProjectCard = ({title, description, tech, image, movie, deployed, git, device}) => {
  const [playVideo, setPlayVideo] = useState(false)

  const renderDevice = () => {
      return (
        <div className={`project-device-${device}`}>
          <div className={`device device-spacegray device-${device}`}>
            <div className="device-frame" onMouseEnter={() => setPlayVideo(true)} onMouseLeave={() => setPlayVideo(false)}>
                  {/* <video className="device-content" autoplay muted>
                    <source src='/Users/simonbystrom/code/SimonBystrom/portfolio/src/assets/videos/split-it.mp4' type="video/mp4" />
                  </video> */}
              { playVideo ?
                  <video className="device-content" autoplay muted>
                    <source src='/Users/simonbystrom/code/SimonBystrom/portfolio/src/assets/videos/split-it.mp4' type="video/mp4" />
                  </video>
                  :
                  <img className="device-content project-img" alt="project" src={image}></img>
                }
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
          </div>
        </div>
        )
      }

  return(
    <div  className="project-card-container">
      <span className="anchor" id="work"></span>
      <div className="row justify-content-between">
        <div className={"col-sm-12 col-md-11 col-lg-11 col-xl-6 project-card-info"}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="d-flex tech-icons flex-wrap">
           {tech.map((item, index) => {
             return <i key={`tech${index}`}className={item}></i>
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
        <div className={device === 'iphone-8' ? 'col-sm-12 col-md-12 col-lg-4' : 'col-sm-12 col-md-12 col-lg-8 col-xl-5'}>
          {renderDevice()}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
