import React from 'react'

const IntroCard = () => {
    return (
        <div className='introCard-container'>
            <h1>Hi, I'm Simon</h1>
            <div className="intro-subtitle">
                <h2>I'm a fullstack developer</h2>
            </div>
            <div className="down-arrow" label="chevron-link">
              <i className="fas fa-chevron-down"></i>
              <a id="chevron-link" href="#about"><span></span></a>
            </div>
        </div>
    )
}

export default IntroCard
