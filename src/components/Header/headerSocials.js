import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FiTwitter} from "react-icons/fi";
import {FaCodepen} from "react-icons/fa";

const headerSocials = () => { 
    return (
        <div className="header-socials">
        <a href="https://www.linkedin.com/pub/irina-blumenfeld/4/a99/a15" target="_blank" aria-label="LinkedIn">
            <BsLinkedin />
        </a>
        <a href="https://github.com/netmagik/" target="_blank" aria-label="Github">
            <FaGithub />
        </a>
        <a href="https://www.twitter.com/irinablumenfeld" target="_blank" aria-label="Twitter">
            <FiTwitter />
        </a>
        <a href="https://codepen.io/netmagik/" target="_blank" aria-label="Codepen">
            <FaCodepen />
        </a>
        </div>
    )
}
 export default headerSocials;