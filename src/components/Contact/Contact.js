import React, {useRef} from "react";
import './contact.css';
import {AiOutlineMail} from "react-icons/ai";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t9g4tub', 'template_lq8or8g', form.current, 'MPS_OTwbDTg3SSRFr')
    
      e.target.reset();
      
    };

    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                    <article className="contact-option">
                        <AiOutlineMail className="contact-icon"/>
                        <h4>Email</h4>
                        <a href="mailto:irina@netmagik.com" target="_blank">Send a message</a>
                    </article>
                    
                </div>
                {/* End of Contact Options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required />
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" cols="30" rows="7" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>

    );
}

export default Contact;


