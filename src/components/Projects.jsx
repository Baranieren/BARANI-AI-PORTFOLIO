import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Research Agent",
    image: "/images/research-agent.jpeg",
    category: "AI / RESEARCH",
    description:
      "An AI-powered research chatbot designed to process queries and generate useful research-oriented responses using modern AI APIs.",
    tech: ["AI", "OpenRouter API", "JavaScript"],
    status: "Completed",
  },

  {
    number: "02",
    title: "Personal Finance Chatbot",
    image: "/images/finance-chatbot.jpeg",
    category: "AI / FINTECH",
    description:
      "An intelligent finance assistant designed to help users understand and manage personal financial information through conversational interaction.",
    tech: ["Python", "AI", "Chatbot"],
    status: "Completed",
  },

  {
    number: "03",
    title: "Smart Care AI",
    image: "/images/smart-care-ai.jpeg",
    category: "MEDICAL AI",
    description:
      "An AI-powered medical assistant concept featuring symptom checking, patient intake and intelligent severity prediction.",
    tech: ["Python", "Machine Learning", "AI"],
    status: "Completed",
  },

  {
    number: "04",
    title: "AgriSense",
    category: "SMART AGRICULTURE",
    description:
      "A smart agriculture platform combining IoT and AI for crop monitoring, disease detection, weather prediction and intelligent recommendations.",
    tech: ["IoT", "AI", "Machine Learning", "Web"],
    status: "Under Development",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">

      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">MY WORK</p>

        <h2>
          Featured <span>Projects</span>
        </h2>

        <p className="projects-subtitle">
          A collection of AI, Machine Learning and Full Stack projects
          built while exploring technology and solving real-world problems.
        </p>
      </motion.div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.article
            className="premium-project-card"
            key={project.title}
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
          >

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>

            </div>

            <div className="project-icon">
              <Sparkles size={22} />
            </div>

            <div className="project-content">

              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">

                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}

              </div>

              <div className="project-status">
                <span></span>
                {project.status}
              </div>

            </div>

            <div className="project-links">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>

              <a href="#contact">
                <ExternalLink size={16} />
                Details
              </a>

            </div>

          </motion.article>
        ))}

      </div>

    </section>
  );
}