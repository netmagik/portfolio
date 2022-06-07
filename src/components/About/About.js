import React from "react";
import Photo from '../../assets/irina.jpg';
import "./about.css";
import {BiAward} from 'react-icons/bi';
import {FiUsers} from 'react-icons/fi';
import {AiOutlineFolderOpen} from 'react-icons/ai';

const About = () => {
    return (
        <section id="about">
            <h2>About Me</h2>
            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-image">
                        <img src={Photo} alt="About Image" />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                    <a href="#testimonials">
                        <article className="about-card">
                            <FiUsers className="about-icon"/>
                            <h5>Testimonials</h5>
                        </article>
                    </a>
                    <a href="#experience">
                        <article className="about-card">
                            <BiAward className="about-icon"/>
                            <h5>Experience</h5>
                        </article>
                    </a>
                    <a href="#projects">
                        <article className="about-card">
                            <AiOutlineFolderOpen className="about-icon"/>
                            <h5>Projects</h5>
                        </article>
                    </a>
                    </div>
                    <p>
                        Hi there! My name is Irina, and I'm a passionate developer who loves building things with code. 
                        I've been building things on the web starting with static sites, and then transitioning to WordPress CMS. 
                        <br />
                        My passion has always been user experience and web performance. 
                        <br />
                        My strengths are the experience of working with clients with the ability to transform their vision into reality,
                        and self-motivation to keep up with the latest technologies.
                    </p>
                    <a href="#contact" className="btn btn-primary">
                    Let's Talk
                </a>
                </div>
               
            </div>
        </section>
    );
}

export default About;
