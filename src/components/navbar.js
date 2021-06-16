import React, {useState} from 'react'


const Navbar = () => {
    const [opened, setOpened] = useState(false)

    const openLinks = () => setOpened(!opened)

    return (
        <nav> 
            <div className='navbar'>
                <div className={opened ? 'hamburger-menu open' : 'hamburger-menu'} onClick={openLinks}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className={ opened ? 'navbar-links active' : 'navbar-links' }>
                    <a>About</a>
                    <a>Work</a>
                    <a>Contact</a>
                </div>
            </div>
        </nav>
    )
}

export {Navbar}
