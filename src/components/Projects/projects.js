import React from "react";
import './projects.css';
import CovidChart from '../../assets/covid-chart.png';
import Weather from '../../assets/weather.png';
import Wiki from '../../assets/wiki.png';
import Shopping from '../../assets/shopping-cart.png';
import Subreddit from '../../assets/subreddit.png';

const Projects = () => {
    const images = [
        {
            id: 1,
            image: CovidChart,
            title: 'Covid Chart',
            github: 'https://github.com',
            demo: 'https://covid-chart.netlify.app/',
        },
        {
            id: 2,
            image: Weather,
            title: 'Weather App',
            github: 'https://github.com',
            demo: 'https://weather-app-netlify.netlify.app/',
        },
        {
            id: 3,
            image: Wiki,
            title: 'Wikipedia Viewer',
            github: 'https://github.com',
            demo: 'https://wikipedia-viewer-netlify.netlify.app/',
        },
        {
            id: 4,
            image: Shopping,
            title: 'Shopping Cart',
            github: 'https://github.com',
            demo: 'https://shopping-cart-netlify.netlify.app/',
        },
        {
            id: 5,
            image: Subreddit,
            title: 'Subreddit Viewer',
            github: 'https://github.com',
            demo: 'https://subreddit-viewer-netlify.netlify.app/',
        },
    ];
    
    return (
        <section id="projects">
            <h2>Projects</h2>
            <p className="sub-title">react apps</p>
            <div className="container projects-container">
               {
                     images.map(({id, image, title, github, demo}) => {
                         return (
                            <article key={id} className="projects-item">
                                <div className="projects-item-image">
                                    <img className="single-image" src={image} alt={title} />
                                </div>
                                <h3>Project Name</h3>
                                <div className="projects-item-cta">
                                    <a href={github} target="_blank" className="btn">Github
                                    </a>
                                    <a href={demo} target="_blank" className="btn btn-primary">Live Demo</a>
                                </div>
                            </article>
                         );
                     })
                }
            </div>
            <p className="sub-title">WordPress Websites</p>  
        </section>
    ); 
}

export default Projects;