import React from 'react'

const Socials = () => {
  return(
    <div className="socials-container">
      <div label="github-link" id="github-social">
        <i className="fab fa-github github-icon"></i>
        <a id="github-link" href="https://github.com/SimonBystrom" target="_blank" rel="noreferrer"><span></span></a>
      </div>
      <div id="linkedin-social">
        <i className="fab fa-linkedin-in linkedin-icon"></i>
      </div>
      <div id="insta-social">
        <i class="fab fa-instagram insta-icon"></i>
      </div>

    </div>
  )
}

export default Socials
