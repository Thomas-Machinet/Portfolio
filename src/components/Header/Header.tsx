import './Header.scss';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { HashLink as Link } from "react-router-hash-link"
import logo from '../../../public/Logo.png'
import DarkMode from '../DarkMode/DarkMode';

function Header() {

    const [showLinks, setShowLinks] = useState(false)


    const location = useLocation()

    useEffect(() => {
        setShowLinks(false)
    }, [location])


    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }
    return (
        <nav className={`header__navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div></div>
            <ul className='header__navbar-links'>
                <li >
                    <Link to="#Projects" className='header__navbar-links-item'>Projects</Link>
                </li>
                <li >
                    <Link to="#Skills" className='header__navbar-links-item'>Skills</Link>
                </li>
                <li >
                    <Link to="#Contact" className='header__navbar-links-item'>Contact</Link>
                </li>
                <li className='header__navbar-links-item-darkmode'>
                    <DarkMode />
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