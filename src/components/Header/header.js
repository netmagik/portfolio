import React from "react";
import HeaderSocial from './headerSocials';
import "./header.css";
import CTA from './cta';
import LightMode from "../LightMode/LightMode";



const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="color-mode">
                    <LightMode />
                </div>
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