import React from "react";
import uahlogo from "../assets/uah_logo.jpg";
import uflogo from "../assets/uf_logo.jpg";

const Schools = [
    {
        id: "uah",
        logo: uahlogo,
        alt: "Universidad de Alcalá",
        name: "Universidad de Alcalá",
        desc: "Master's degree in Software & Web Development"
    },
    {
        id: "uf",
        logo: uflogo,
        alt: "University of Florida",
        name: "University of Florida",
        desc: "Bachelor of Science in Telecommunications"
    },
];

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="section-container education-container">
                <h2>Education</h2>

                <div className="education-grid">
                    {Schools.map((school) => (
                        <div className="education-card" key={school.id}>
                            <div className="education-logo-wrapper">
                                <img src={school.logo} alt={school.alt} className="education-logo" />
                            </div>
                            <p className="education-name">{school.name}</p>
                            <h5 className="education-description">{school.desc}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;