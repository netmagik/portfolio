import React from "react";
import HeaderSocial from './headerSocials';
import "./header.css";
import CTA from './cta';
import Photo from '../../assets/irina.jpg';


const Header = () => {
    return (
        <header>
            <div className="header-container">
                <h1>Matthew Davis</h1>
                <h2>Full Stack Web Developer</h2>
                <CTA />
                <HeaderSocial />
                <div className="photo">
                    <img src={Photo} alt="Irina" />
                </div>
                <a href="#contact" className="scroll-down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;