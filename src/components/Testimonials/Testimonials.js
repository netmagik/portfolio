import React from 'react';
import './testimonials.css';
import AI from '../../assets/AI-logo.png';
import UCF from '../../assets/ucf-logo.png';
import CCC from '../../assets/CCC-Logo.png';
import Mouse from '../../assets/Mouse-Class-logo.png';
import Eye from '../../assets/eye-logo.png';

// import Swiper core and required modules
import { Autoplay, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Divider from '../Divider/Divider';

const Testimonials = () => {

    const data = [
        {
            avatar: UCF,
            name: 'Ivan Garibay, Ph.D. - UCF Complex Adaptive Systems Laboratory',
            review: 'Irina developed a new website for my research laboratory and I could not be happier with the result. She is extremely professional, knowledgeable, and fun to work with. She delivered a great, good looking website on time and on budget.',
        },
        {
            avatar: AI,
            name: 'Dr. Daniel M. Eilen - UCF AI Initiative',
            review: 'I have worked with Irina on several different web initiates over the years. Our center develops bleeding edge technologies and we work with the best in the business. That\'s why we kept going back to her. Irina has been instrumental in developing our web presence and helping us grow our research scope and increase our messaging reach.',
        },
        {
            avatar: Eye,
            name: 'Dr. Robert Gold - Eye Physicians',
            review: 'Irina has done an amazing job on our practice web site, from when we instituted the site many years ago and most recently as we made it up to today\'s standards. Irina knows what is new, trending and what works to get the attention of the viewers and we are convinced that the modernization of our web site is critical to the success of our practice.',
        },
        {
            avatar: Mouse,
            name: 'Lisa Thompson - Mouse Class Travel',
            review: 'Irina has been nothing short of amazing to work with. She not only shows you how to manage your own tasks she can also perform them for you. She can do things for me at a reasonable price, or show me how to do it for a flat fee. The new website she designed for me is running amazing, quote forms are seamless, ad tracking and reports are consistent.',
        },
        {
            avatar: CCC,
            name: 'Ken Wheeler - Class Crest Collection',
            review: 'NetMagik has been a refreshing "breath of fresh air" for our e-commerce WordPress website business. When engaged, they took charge and immediately updated plug-ins and site security, helped us get set up on a more robust financial transaction program, and drove a lot of traffic to our site. They know their business and are worth every dollar you will spend with them.',
        },
    ]

    return (
        <section id="testimonials">
            <Divider />
            <h2>Testimonials</h2>
            <Swiper className="container container-testimonials"
                modules={[ Autoplay, Pagination, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay:5000,
                    disableOnInteraction: true,
                }}
                pagination={{ clickable: true }}
            >
                
                {data.map(({avatar, name, review}, index) => {
                    return (
                        <SwiperSlide className="testimonial" key={index}>
                            <div className="client-avatar">
                                <img src={avatar} alt={name} />
                            </div>
                            <h5 className="client-name">{name}</h5>
                            <small className="client-review">{review}</small>
                        </SwiperSlide>
                    )
                })
            }
            </Swiper>
        </section>
    );
};

export default Testimonials;