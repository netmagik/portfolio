import React from "react";
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FiTwitter} from "react-icons/fi";
import {FaCodepen} from "react-icons/fa";

const headerSocials = () => { 
    return (
        <div className="header-socials">
        <a href="https://www.linkedin.com/in/matthew-c-davis-b9a9b917b/" target="_blank">
            <BsLinkedin />
        </a>
        <a href="https://www.linkedin.com/in/matthew-c-davis-b9a9b917b/" target="_blank">
            <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/matthew-c-davis-b9a9b917b/" target="_blank">
            <FiTwitter />
        </a>
        <a href="https://www.linkedin.com/in/matthew-c-davis-b9a9b917b/" target="_blank">
            <FaCodepen />
        </a>
        </div>
    )
}
 export default headerSocials;