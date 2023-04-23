import React, {useState} from 'react'


const Navbar = () => {
    const [opened, setOpened] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const openLinks = () => setOpened(!opened)

    window.addEventListener('scroll', () => {
        if(window.scrollY >= 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    })


    return (
        <nav className={(scrolled && opened) ? 'navbar scrolled' : 'navbar'}>
            <div className={opened ? 'hamburger-menu open' : 'hamburger-menu'} onClick={openLinks}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={ opened ? 'navbar-links active' : 'navbar-links' }>
                <a href='#about'>About</a>
                <a href='#work'>Work</a>
                <a href='mailto:simon.bystrom@hyperisland.se?subject=Site-Contact'>Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
