import React from "react";
import HeaderSocial from './headerSocials';
import "./header.css";
import CTA from './cta';


const Header = () => {
    return (
        <header>
            <div className="header-container">
                <h1>Irina Blumenfeld</h1>
                <h2 className="sub-title">Full Stack Web Developer</h2>
                <CTA />
                <HeaderSocial />
                <a href="#contact" className="scroll-down">Scroll Down</a>
            </div>
        </header>
    );
}

export default Header;