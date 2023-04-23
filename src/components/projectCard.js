import React, {useState} from 'react'

const ProjectCard = ({title, description, tech, image, movie, deployed, git, device, order}) => {
  const [playVideo, setPlayVideo] = useState(false)
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)
  const renderDevice = () => {
      return (
        <div className={device === 'iphone-8' ? 'col-sm-12 col-md-12 col-lg-4' : 'col-sm-12 col-md-12 col-lg-8 col-xl-5'}>
          <div data-aos={device === "iphone-8" ? "zoom-in" : "flip-up"} className={`project-device-${device}`}>
            <div className={`device device-spacegray device-${device}`}>
              <div className="device-frame" onMouseEnter={() => setPlayVideo(true)} onMouseLeave={() => setPlayVideo(false)}>
                {/* <img className="device-content project-img" alt="project" src={image}></img> */}
                { playVideo ?
                    <video className="device-content" autoPlay muted loop>
                      <source src={movie} type="video/mp4" />
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
        </div>
        )
      }

  const renderInfo = () => {
      return (
        <div className="col-sm-12 col-md-11 col-lg-11 col-xl-6 project-card-info">
          <h1 className="border-bottom border-dark">{title}</h1>
          <p>{description}</p>
          <div className="d-flex tech-icons flex-wrap">
          {tech.map((item, index) => {
            return <i key={`tech${index}`}className={item}></i>
          })}
          </div>
          <div className="d-flex mt-5">
            {deployed &&
              <div className="button mr-5" label="deployed">
                Site
                <a id="deployed" href={deployed} target="_blank" rel="noreferrer"><span></span></a>
              </div>
            }
            {git &&
              <div className="button git" label="git">
                Code
                <a id="git" href={git} target="_blank" rel="noreferrer"><span></span></a>
              </div>
            }
          </div>
        </div>
      )
    }

  // dynamically renders the order of the device / info depending on screen size
  const renderOrder = () => {
    // Checks the current width of the screen and updates the state -> rerender if screen resizes
    function currentWidthChecker(e) {
      setCurrentWidth(this.innerWidth)
    }
    window.addEventListener('resize', currentWidthChecker)

    // displays the projects left -> right / right -> left if the screen size is bigger than 1200, if not device on bottom
    if(currentWidth > 1200){
      if(order % 2 === 0) {
        return(
         <div className="row justify-content-between">
            {renderInfo()}
            {renderDevice()}
         </div>
        )
      } else {
         return(
          <div className="row justify-content-between">
            {renderDevice()}
            {renderInfo()}
          </div>
        )
      }
    } else {
      return(
        <div className="row justify-content-between">
          {renderInfo()}
          {renderDevice()}
        </div>
      )
    }
  }

  return(
    <div  className="project-card-container">
      <span className="anchor" id="work"></span>
      {renderOrder()}
    </div>
  )
}

export default ProjectCard
