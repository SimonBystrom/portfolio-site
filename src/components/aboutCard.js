import React from 'react'

const AboutCard = () => {
    return(
        <div className="about-card-container">
            <div className="row justify-content-around p-5">
                <div className="col-sm-12 col-md-12 col-lg-6 about-card">
                        <h2>About Me</h2>
                        <p>💻 I am a full-stack developer</p> 
                        <p>🥋 A judo black-belt</p>
                        <p>💅 Passion for puzzle solving and nice clean design!</p>
                        <p>🎬 I have a background in design, animation and movie history</p>
                </div>
                <div className="col-sm-8 col-md-12 col-lg-6 about-skills">
                    <i className="fab fa-js-square"></i>
                    <i className="fab fa-css3-alt"></i>
                    <i className="fab fa-html5"></i>
                    <i className="fab fa-react"></i>
                    <i className="fab fa-bootstrap"></i>
                </div>
            </div>
        </div>
    )
}

export default AboutCard