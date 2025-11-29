import React from "react";

const About = () => {
    return (
        <section id="about" className="section">
            <div className="section-container about-container">
                <h2>A little bit about me!</h2>
                <p>
                I'm a software & web developer from Argentina with a background in media and technology.
                I enjoy building clean, user-friendly interfaces and connecting them
                with robust backends.
                </p>
                <p>
                Right now I'm focused on full-stack software development,
                and I'm constantly learning new tools and patterns to improve my
                code and UX.
                </p>

                <div className="about-actions">
                    <a href="/Micaela_Leiva_Resume.pdf" className="btn-primary" download>Download Resume</a>
                </div>
            </div>
        </section>
    );
};

export default About;