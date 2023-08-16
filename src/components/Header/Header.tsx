import './Header.scss';
import { useState } from 'react';

function Header() {

    const [showLinks, setShowLinks] = useState(false)

    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`header__navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className='header__navbar-logo'>Logo</div>
            <ul className='header__navbar-links'>
                <li className='header__navbar-links-item'>Skills</li>
                <li className='header__navbar-links-item'>Projects</li>
                <li className='header__navbar-links-item'>Contact</li>
            </ul>
            <button className='header__navbar-burger'
                onClick={handleShowLinks}>
                <span className="header__navbar-burger-bar"></span>
            </button>
        </nav>
    )
}

export default Header;