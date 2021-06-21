import React from 'react'

const AboutCard = () => {


  return(
    <div  className="about-card-container">
      <span className="anchor" id="about"></span>
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
        <div  className="col-sm-12 col-md-8 col-lg-5 about-skills">
          <h2>Languages</h2>
          <div  className="mb-3 skill-icon-container">
              <i data-aos="fade-left" data-aos-duration="500" className="devicon-javascript-plain"></i>
              <i data-aos="fade-left" data-aos-duration="1000" className="devicon-html5-plain"></i>
              <i data-aos="fade-left" data-aos-duration="1500" className="devicon-css3-plain"></i>
              <i data-aos="fade-left" data-aos-duration="2000" className="devicon-ruby-plain"></i>
              <i data-aos="fade-left" data-aos-duration="2500" className="devicon-postgresql-plain"></i>
          </div>
          <h2>Frameworks and Libraries</h2>
          <div data-aos="fade-left" className="mb-3 skill-icon-container">
              <i data-aos="fade-left" data-aos-duration="500" className="devicon-react-original"></i>
              <i data-aos="fade-left" data-aos-duration="1000" className="devicon-rails-plain"></i>
              <i data-aos="fade-left" data-aos-duration="1500" className="devicon-bootstrap-plain"></i>
              <i data-aos="fade-left" data-aos-duration="2000" className="devicon-sass-original"></i>
              <i data-aos="fade-left" data-aos-duration="2500" className="devicon-github-original"></i>
          </div>
          <h2>Other technologies</h2>
          <div data-aos="fade-left" className="skill-icon-container">
            <i data-aos="fade-left" data-aos-duration="500" className="devicon-git-plain"></i>
            <i data-aos="fade-left" data-aos-duration="1000" className="devicon-heroku-original"></i>
            <i data-aos="fade-left" data-aos-duration="1500" className="devicon-firebase-plain"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutCard
