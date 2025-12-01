import React from "react";

const skills = [
    {
        id: "languages",
        title: "Languages",
        items: ["JavaScript", "TypeScript", "Java", "HTML", "CSS", "SQL"],
    },
    {
        id: "frontend",
        title: "Frontend",
        items: ["React", "Angular", "Next.js", "Bootstrap", "UX/UI Design"],
    },
    {
        id: "backend",
        title: "Backend",
        items: ["Spring Boot", "REST APIs", "Node.js"],
    },
    {
        id: "devops",
        title: "DevOps & Cloud",
        items: ["Docker", "Kubernetes", "Istio", "CI/CD pipelines"],
    },
    {
        id: "mobile",
        title: "Mobile Development",
        items: ["Android Development (Java, Android Studio)"],
    },
    {
        id: "tools-practices",
        title: "Tools & Practices",
        items: ["Git", "Github", "Snyk", "Agile Methodologies (Scrum)", "Figma", "VS Code"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="section">
            <div className="section-container skills-container">
                <h2>Skills</h2>

                <div>
                    {skills.map((group) => (
                        <div className="skills-card" key={group.id}>
                            <h3>{group.title}</h3>

                            <ul className="skills-list">
                                {group.items.map((skill) => (
                                    <li>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;