import React, {useState} from "react";
import {AiOutlineHome} from 'react-icons/ai';
import "./nav.css";

const Nav = () => {

    const [activeNav, setActiveNav] = useState('#');

    return (

        <nav>
            <a href="#home"
                onClick={() => setActiveNav('#')}
                className={activeNav === '#' ? 'active' : ''} >
                <AiOutlineHome />
            </a>
             <a href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'active' : ''}>
                    About
            </a>

            <a href="#projects"
                onClick={() => setActiveNav('#projects')}
                className={activeNav === '#projects' ? 'active' : ''}>
                    Projects
            </a>
 
            <a href="#testimonials"
                onClick={() => setActiveNav('#testimonials')}
                className={activeNav === '#testimonials' ? 'active' : ''}>
                    Testimonials
            </a>
  
            <a href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={activeNav === '#contact' ? 'active' : ''}>
                    Contact
            </a>
        </nav>
    );
    }

    export default Nav;