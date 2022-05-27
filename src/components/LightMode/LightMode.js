import React from 'react';
import '/.lightmode.css';


const Toggle = () => {
    return (
        <div className="toggle-wrapper">
            <span>☀️</span>
            <label className="toggle-theme" htmlFor="checkbox">
                <input
                    type="checkbox"
                    id="checkbox"
                />
                <div className="slider round"></div>
            </label>
            <span>🌒</span>
        </div>
    )
}  

export default Toggle;  
    