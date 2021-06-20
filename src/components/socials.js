import React from 'react'

const Socials = () => {
  return(
    <div className="socials-container">
      <div label="github-link" id="github-social">
        <i className="fab fa-github github-icon"></i>
        <a id="github-link" href="https://github.com/SimonBystrom" target="_blank" rel="noreferrer"><span></span></a>
      </div>
      <div label="linkedin-link" id="linkedin-social">
        <i className="fab fa-linkedin-in linkedin-icon"></i>
        <a id="linkedin-link" href="https://www.linkedin.com/in/simon-bokedal-bystrom/" target="_blank" rel="noreferrer"><span></span></a>
      </div>
      <div label="insta-link" id="insta-social">
        <i className="fab fa-instagram insta-icon"></i>
        <a id="insta-link" href="https://www.instagram.com/simon.bystrom/" target="_blank" rel="noreferrer"><span></span></a>
      </div>

    </div>
  )
}

export default Socials
