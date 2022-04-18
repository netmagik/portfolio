import React, {useRef} from "react";
import './contact.css';
import {AiOutlineMail} from "react-icons/ai";
import emailjs from 'emailjs-com';
import Divider from "../Divider/Divider";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_t9g4tub', 'template_lq8or8g', form.current, 'MPS_OTwbDTg3SSRFr')
    
      e.target.reset();
      
    };

    return (
        <section id="contact">
            <Divider />
            <h2>Contact Me</h2>
            <div className="container contact-container">
                <div className="contact-options">
                <a href="mailto:irina@netmagik.com" target="_blank">
                    <article className="contact-option">
                        <AiOutlineMail className="contact-icon"/>
                        <h4>Email</h4>
                        <p>Send a Message</p>
                    </article>
                </a>
                    
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


