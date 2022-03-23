import React from 'react';
import './testimonials.css';
import UCF from '../../assets/ucf-logo.png';
import CCC from '../../assets/CCC-Logoa.png';
import Mouse from '../../assets/Mouse-Class-Travel.jpg';
import Eye from '../../assets/logo-png.png';

const Testimonials = () => {

    const data = [
        {
            avatar: Eye,
            name: 'Eye',
            review: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        },
        {
            avatar: Mouse,
            name: 'Mouse',
            review: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        },
        {
            avatar: UCF,
            name: 'UCF',
            review: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        },
        {
            avatar: CCC,
            name: 'CCC',
            review: 'I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.',
        },
    ]

    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <div className="container container-testimonials">
                {data.map(({avatar, name, review}, index) => {
                    return (
                        <article className="testimonial" key={index}>
                            <div className="client-avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <h5 className="client-name">{name}</h5>
                            <small className="client-review">{review}</small>
                        </article>
                    )
                })
            }
            </div>
        </section>
    );
};

export default Testimonials;