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
                        <article className="about-card">
                            <FiUsers className="about-icon"/>
                            <h5>Testimonials</h5>
                        </article>
                        <article className="about-card">
                            <BiAward className="about-icon"/>
                            <h5>Experience</h5>
                        </article>
                        <article className="about-card">
                            <AiOutlineFolderOpen className="about-icon"/>
                            <h5>Projects</h5>
                        </article>
                    </div>
                    <p>
                        Lorem, ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit.    Lorem ipsum dolor sit amet consectetur adipisicing elit.    
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati iusto quidem nostrum animi doloribus vitae delectus repudiandae dolores. Expedita at rerum itaque explicabo molestiae sequi sit inventore sapiente eos?
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
