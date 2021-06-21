import React from 'react'

const AboutCard = () => {
  return(
    <div id="about" className="about-card-container">
      <div className="row justify-content-around align-items-end">
        <div className="col-sm-12 col-md-8 col-lg-5 about-card">
                <h2>About Me</h2>
                <h5><span>Hi, I’m Simon! </span></h5>
                <p>Originally from Sweden 🇸🇪, but been living in Tokyo 🇯🇵 since 2015.</p>
                <h5><span>Background</span></h5>
                <p>Animation, design and movie history but my true love is code!
                    I really love working on Frontend solutions and solving the puzzles of the backend.</p>
                <h5><span>When I’m not coding</span></h5>
                <p> I also love Judo, Video games and fine Cocktails!</p>
        </div>
        <div className="col-sm-8 col-md-8 col-lg-5 about-skills">
          <h2>Languages</h2>
          <div className="mb-3 skill-icon-container">
              <i className="devicon-javascript-plain"></i>
              <i className="devicon-html5-plain"></i>
              <i className="devicon-css3-plain"></i>
              <i className="devicon-ruby-plain"></i>
              <i className="devicon-postgresql-plain"></i>
          </div>
          <h2>Frameworks and Libraries</h2>
          <div className="mb-3 skill-icon-container">
              <i className="devicon-react-original"></i>
              <i className="devicon-rails-plain"></i>
              <i className="devicon-bootstrap-plain"></i>
              <i className="devicon-sass-original"></i>
              <i className="devicon-github-original"></i>
          </div>
          <h2>Other technologies</h2>
          <div className="skill-icon-container">
            <i className="devicon-git-plain"></i>
            <i className="devicon-heroku-original"></i>
            <i className="devicon-firebase-plain"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
