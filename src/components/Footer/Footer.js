import React from "react";
import './footer.css';
import {FiTwitter, FiGithub, FiLinkedin, FiCodepen } from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href="#home" className="footer-logo">Irina Blumenfeld</a>
            <div className="permalinks">
                <a href="#" className="border-effect">Home</a>
                <a href="#about" className="border-effect">About</a>
                <a href="#experience" className="border-effect">Experience</a>
                <a href="#projects" className="border-effect">Projects</a>
                <a href="#testimonials" className="border-effect">Testimonials</a>
                <a href="#contact" className="border-effect">Contact</a>
            </div>
            <div className="footer-socials">
                <a href="https://www.twitter.com/irinablumenfeld" target="_blank" alt="Twitter" aria-label="Twitter"><FiTwitter /></a>
                <a href="https://github.com/netmagik/" target="_blank" alt="Github" aria-label="Github"><FiGithub /></a>
                <a href="https://www.linkedin.com/pub/irina-blumenfeld/4/a99/a15" target="_blank" alt="LinkedIn" aria-label="LinkedIn"><FiLinkedin /></a>
                <a href="https://codepen.io/netmagik/" target="_blank" alt="Codepen" aria-label="Codepen"><FiCodepen /></a>
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
