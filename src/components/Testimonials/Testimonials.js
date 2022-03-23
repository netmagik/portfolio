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
                <article className="testimonial">
                    <div className="client-avatar">
                        <img src={UCF} alt="UCF" />
                        <h5 className="client-name">UCF</h5>
                    </div>
                    <small className="client-review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, id, necessitatibus incidunt perspiciatis dolorem consequuntur dolores voluptates eum alias vitae sapiente maiores repudiandae totam? Earum, atque est! Expedita, autem quia.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptate asperiores corrupti ipsa architecto quas praesentium perspiciatis placeat iste cum eum magnam dolores, amet voluptates provident dolorem, sit porro nesciunt.
                    </small>
                </article>
                <article className="testimonial">
                    <div className="client-avatar">
                        <img src={UCF} alt="UCF" />
                        <h5 className="client-name">UCF</h5>
                    </div>
                    <small className="client-review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, id, necessitatibus incidunt perspiciatis dolorem consequuntur dolores voluptates eum alias vitae sapiente maiores repudiandae totam? Earum, atque est! Expedita, autem quia.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptate asperiores corrupti ipsa architecto quas praesentium perspiciatis placeat iste cum eum magnam dolores, amet voluptates provident dolorem, sit porro nesciunt.
                    </small>
                </article>
                <article className="testimonial">
                    <div className="client-avatar">
                        <img src={UCF} alt="UCF" />
                        <h5 className="client-name">UCF</h5>
                    </div>
                    <small className="client-review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, id, necessitatibus incidunt perspiciatis dolorem consequuntur dolores voluptates eum alias vitae sapiente maiores repudiandae totam? Earum, atque est! Expedita, autem quia.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptate asperiores corrupti ipsa architecto quas praesentium perspiciatis placeat iste cum eum magnam dolores, amet voluptates provident dolorem, sit porro nesciunt.
                    </small>
                </article>
                <article className="testimonial">
                    <div className="client-avatar">
                        <img src={UCF} alt="UCF" />
                        <h5 className="client-name">UCF</h5>
                    </div>
                    <small className="client-review">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, id, necessitatibus incidunt perspiciatis dolorem consequuntur dolores voluptates eum alias vitae sapiente maiores repudiandae totam? Earum, atque est! Expedita, autem quia.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse voluptate asperiores corrupti ipsa architecto quas praesentium perspiciatis placeat iste cum eum magnam dolores, amet voluptates provident dolorem, sit porro nesciunt.
                    </small>
                </article>

                
            </div>
        </section>
    );
};

export default Testimonials;