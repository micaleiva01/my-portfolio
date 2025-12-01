
const projects = [
    {
    id: "movie-app",
    title: "MovieList – Full-Stack Movie Tracker",
    tech: ["React", "Spring Boot", "MySQL"],
    description:
      "Full-stack CRUD application to store and manage a personal movie list, with a React frontend consuming REST APIs from a Spring Boot backend connected to a MySQL database.",
  },
  {
    id: "k8s-app",
    title: "Cloud Native Microservices on Kubernetes",
    tech: ["Docker", "Kubernetes", "Istio", "CI/CD"],
    description:
      "Containerized microservices application deployed on Kubernetes, using Istio for traffic management, observability, and experiments with canary/A–B deployments and rollbacks.",
  },
  {
    id: "ecommerce-frontend",
    title: "E-Commerce Store Frontend (React & Angular)",
    tech: ["React", "Angular"],
    description:
      "Frontend for an online store implemented in both React and Angular to compare frameworks. Includes product listings, dynamic cart, stock handling, and an admin-style view for managing items.",
  },
  {
    id: "f1-app",
    title: "F1 Team Manager – Full-Stack Application",
    tech: ["React", "Spring Boot", "SQL", "Figma"],
    description:
      "Full-stack F1 management app to handle teams, drivers, and race data. UI prototyped in Figma, implemented in React, and backed by a Spring Boot API with a relational SQL database.",
  },
  {
    id: "splitwise-hybrid",
    title: "BillShare – Splitwise/Tricount Hybrid",
    tech: ["Next.js", "Ionic"],
    description:
      "Hybrid web/mobile app inspired by Splitwise and Tricount, built with Next.js and Ionic. Allows users to split expenses, calculate tips, and track balances between friends.",
  },
];

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="section-container projects-container">
                <h2>Projects</h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.id}>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-tech">{project.tech.join(" . ")}</p>
                            <p className="project-description">{project.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Projects;