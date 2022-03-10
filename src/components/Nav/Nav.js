import React from "react";
import {AiOutlineHome} from 'react-icons/ai';

const Nav = () => {
    return (
        <nav>
        <ul>
            <li>
            <a href="#home"><AiOutlineHome /></a>
            </li>
            <li>
            <a href="#about">About</a>
            </li>
            <li>
            <a href="#projects">Projects</a>
            </li>
            <li>
            <a href="#testimonials">Testimonials</a>
            </li>
            <li>
            <a href="#contact">Contact</a>
            </li>
        </ul>
        </nav>
    );
    }

    export default Nav;