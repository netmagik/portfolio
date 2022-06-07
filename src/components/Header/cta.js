import React from "react";
import Resume from '../../assets/Resume.pdf';

const cta = () => {
    return (
        <div className="cta">
            <a className="btn" href={Resume} download="Irina Blumenfeld Resume">Download Resume</a>
            <a className="btn-primary" href="#contact">Contact</a>
        </div>

    );
}

export default cta;