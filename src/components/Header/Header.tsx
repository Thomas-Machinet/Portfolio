import './Header.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [showLinks, setShowLinks] = useState(false)



    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`header__navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className='header__navbar-logo'>Logo</div>
            <ul className='header__navbar-links'>
                <li >
                    <Link to="/Projects" className='header__navbar-links-item'>Projects</Link>
                </li>
                <li >
                    <Link to="/Skills" className='header__navbar-links-item'>Skills</Link>
                </li>
                <li >
                    <Link to="/Contact" className='header__navbar-links-item'>Contact</Link>
                </li>
            </ul>
            <button className='header__navbar-burger'
                onClick={handleShowLinks}>
                <span className="header__navbar-burger-bar"></span>
            </button>
        </nav>
    )
}

export default Header;