import React from 'react';
import './DarkMode.scss';


const DarkMode = () => {
    const setDarkMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'dark')
        localStorage.setItem("selectedTheme", "dark")
    }

    const setLightMode = () => {
        document.querySelector("body")?.setAttribute('data-theme', 'light')
        localStorage.setItem("selectedTheme", "light")
    }

    const selectedTheme = localStorage.getItem("selectedTheme");

    if (selectedTheme === "dark") {
        setDarkMode();
    }

    if (selectedTheme === "light") {
        setLightMode();
    }


    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) setDarkMode();
        else setLightMode()
    }

    return (
        <div className="dark_mode">
            <input
                type="checkbox"
                className="dark_mode_input"
                id='darkmode-toggle'
                onChange={toggleTheme}
                defaultChecked={selectedTheme === "dark"}
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>

            </label>
        </div>
    )

}

export default DarkMode;