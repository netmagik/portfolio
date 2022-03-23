import React from "react";
import './experience.css';
import {BsFillCheckCircleFill} from 'react-icons/bs';

const Experience = () => {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="container experience-container">
                <div className="experience-frontend">
                    <h3>Frontend Development</h3>
                        <div className="experience-content">
                            <article className="experience-details">
                                <BsFillCheckCircleFill className="experience-details-icon"/>
                                <div>
                                    <h4>HTML</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience-details">
                                <BsFillCheckCircleFill className="experience-details-icon"/>
                                <div>
                                    <h4>CSS</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                            <article className="experience-details">
                                <BsFillCheckCircleFill className="experience-details-icon"/>
                                <div>
                                    <h4>JavaScript</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience-details">
                                <BsFillCheckCircleFill className="experience-details-icon"/>
                                <div>
                                    <h4>React</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience-details">
                                <BsFillCheckCircleFill className="experience-details-icon"/>
                                <div>
                                    <h4>Bootstrap</h4>
                                    <small className="text-light">Experienced</small>
                                </div>
                            </article>
                        </div>
                </div>
                {/******* End of Frontend ******/}
                <div className="experience-backend">
                    <h3>Backend Development</h3>
                    <div className="experience-content">
                            <article className="experience-details">
                                <BsFillCheckCircleFill className="experience-details-icon"/>
                                <div>
                                    <h4>Node JS</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience-details">
                                <BsFillCheckCircleFill className="experience-details-icon"/>
                                <div>
                                    <h4>PHP</h4>
                                    <small className="text-light">Intermediate</small>
                                </div>
                            </article>
                            <article className="experience-details">
                                <BsFillCheckCircleFill className="experience-details-icon"/>
                                <div>
                                    <h4>MySQL</h4>
                                    <small className="text-light">Basic</small>
                                </div>
                            </article>
                        </div>
                </div>
                {/******* End of Backend ******/}
            </div>
        </section>
    );
};

export default Experience;