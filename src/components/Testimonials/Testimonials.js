import React from 'react';
import './testimonials.css';
import UCF from '../../assets/ucf-logo.png';
import CCC from '../../assets/CCC-Logoa.png';
import Mouse from '../../assets/Mouse-Class-Travel.jpg';
import Eye from '../../assets/logo-png.png';

// import Swiper core and required modules
import { Autoplay, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


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
            <h2>Testimonials</h2>
            <Swiper className="container container-testimonials"
                modules={[ Autoplay, Pagination, A11y]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{
                    delay: 2500,
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