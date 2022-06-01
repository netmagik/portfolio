import React from 'react';
import './lightmode.css';

    const setDark = () => {
        localStorage.setItem('theme', 'dark');
        document.documentElement.setAttribute('data-theme', 'dark');
    };

    const setLight = () => {
        localStorage.setItem('theme', 'light');
        document.documentElement.setAttribute('data-theme', 'light');
    };

    const currentTheme = localStorage.getItem('theme');

    const prefersDark= 
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    const defaultDark= 
        currentTheme === "dark" || (currentTheme === null && prefersDark);

    if (defaultDark) {
        setDark();
    } 

    const toggleTheme = (e) => {
        if (e.target.checked) {
            setLight();
        } else {
            setDark();
        }
    };

const Toggle = () => {

    return (
        <div className="toggle-wrapper">
            <span>🌒</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                    onChange={toggleTheme}
                    defaultChecked={defaultDark}
                />
                <div className="slider round"></div>
            </label>
            <span>☀️</span>
        </div>
    )
}  

export default Toggle;  
    