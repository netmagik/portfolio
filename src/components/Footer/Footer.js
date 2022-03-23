import React from "react";
import './footer.css';
import {FiTwitter, FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href="#" className="footer-logo">Logo</a>
            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-socials">
                <a href="#" target="_blank" alt="Twitter"><FiTwitter /></a>
                <a href="#" target="_blank" alt="Github"><FiGithub /></a>
                <a href="#" target="_blank" alt="LinkedIn"><FiLinkedin /></a>
                <a href="#" target="_blank" alt="Codepen"><FiCodepen /></a>
            </div>

            <div className="footer-copyright">
                <small>
                    &copy; Irina Blumenfeld. All rights reserved.
                </small>
            </div>
        </footer>

    );
}

export default Footer;
