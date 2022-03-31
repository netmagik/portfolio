import React from "react";
import './projects.css';
import CovidChart from '../../assets/covid-chart.jpeg';
import Weather from '../../assets/weather.jpeg';
import Wiki from '../../assets/wiki.jpeg';
import Shopping from '../../assets/shopping-cart.jpeg';
import Subreddit from '../../assets/subreddit.jpeg';
import DataGrid from '../../assets/DataGrid.jpeg';
import Casl from '../../assets/CASL-Screens.png';
import AI from '../../assets/AI-Screens.png';
import Eye from '../../assets/EyePhy-Screens.png';
import Disney from '../../assets/MouseClass-Screens.png';
import Divider from '../Divider/Divider';

const Projects = () => {
    const images = [
        {
            id: 1,
            image: CovidChart,
            title: 'Covid-19 Chart',
            github: 'https://github.com/netmagik/Covid-Tracker',
            demo: 'https://netmagik.github.io/Covid-Tracker',
        },
        {
            id: 2,
            image: Weather,
            title: 'Weather App',
            github: 'https://github.com/netmagik/Weather-App',
            demo: 'https://netmagik.github.io/Weather-App/',
        },
        {
            id: 3,
            image: Wiki,
            title: 'Wikipedia Search',
            github: 'https://github.com/netmagik/Wiki-Search',
            demo: 'https://netmagik.github.io/Wiki-Search/',
        },
        {
            id: 4,
            image: Shopping,
            title: 'Shopping Cart',
            github: 'https://github.com/netmagik/shopping-cart',
            demo: 'https://netmagik.github.io/shopping-cart/',
        },
        {
            id: 5,
            image: Subreddit,
            title: 'Subreddit Viewer',
            github: 'https://github.com/netmagik/Subreddit-feed-app',
            demo: 'https://netmagik.github.io/Subreddit-feed-app/',
        },
        {
            id: 6,
            image: DataGrid,
            title: 'React DataGrid',
            github: 'https://github.com/netmagik/datagrid',
            demo: 'https://netmagik.github.io/datagrid/',
        }
    ];

    const websites = [
        {
            id: 1,
            image: AI,
            title: 'UCF AI Initiative',
            about: 'https://www.netmagik.com/portfolio/website-for-ucf-ai-initiative/',
        },
        {
            id: 2,
            image: Casl,
            title: 'UCF Research Lab',
            about: 'https://www.netmagik.com/portfolio/website-for-ucf-research-laboratory/',
        },
        {
            id: 3,
            image: Eye,
            title: 'Eye Physicians',
            about: 'https://www.netmagik.com/portfolio/website-medical-practice/',
        },
        {
            id: 4,
            image: Disney,
            title: 'Disney Travel',
            about: 'https://www.netmagik.com/portfolio/website-for-disney-travel-agency/',
        },
    ]
    
    return (
        <section id="projects">
            <Divider />
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
                                <h3>{title}</h3>
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
           < Divider />
            <p className="sub-title">WordPress Websites</p>  
            <div className="container websites-container">
               {
                     websites.map(({id, image, title, about}) => {
                         return (
                            <article key={id} className="projects-item">
                                <div className="projects-item-image">
                                    <img className="single-image" src={image} alt={title} />
                                </div>
                                <h3>{title}</h3>
                                <div className="projects-item-cta">
                                    <a href={about} target="_blank" className="btn">About The Project
                                    </a>                                
                                </div>
                            </article>
                         );
                     })
                }
            </div>
        </section>
    ); 
}

export default Projects;