import React from 'react'

const AboutCard = () => {
    return(
        <div className="about-card-container">
            <div className="row justify-content-around p-5">
                <div className="col-sm-12 col-md-12 col-lg-6 about-card">
                        <h2>About Me</h2>
                        <h5><span>Hi, I’m Simon! </span></h5>
                        <p>Originally from Sweden 🇸🇪, but been living in Tokyo 🇯🇵 since 2015.</p>
                        <h5><span>Background</span></h5>
                        <p>Animation, design and movie history but my true love is code! 
                            I really love working on Frontend solutions and solving the puzzles of the backend.</p>
                        <h5><span>When I’m not coding</span></h5>
                        <p> I also love Judo, Video games and fine Cocktails!</p>
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