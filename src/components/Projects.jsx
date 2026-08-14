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
    github: "https://github.com/Baranieren/gemini-research-agent",
    live: "https://gemini-research-agent-dity49cyxqu3urxajxrq6n.streamlit.app/",
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
    github: "https://github.com/Baranieren/personal-finance-chatbot",
    live: "https://personal-finance-chatbot-m5l7rcvthgcwqem3ugaeyn.streamlit.app/",
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
    github: "https://github.com/Baranieren/Smart-Care-AI",
    live: "https://smart-care-ai-one.vercel.app/",
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

      {/* SECTION HEADER */}
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

      {/* PROJECT GRID */}
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

            {/* PROJECT TOP */}
            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-category">
                {project.category}
              </span>

            </div>

            {/* PROJECT ICON */}
            <div className="project-icon">
              <Sparkles size={22} />
            </div>

            {/* PROJECT CONTENT */}
            <div className="project-content">

              {/* IMAGE */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              )}

              {/* TITLE */}
              <h3>{project.title}</h3>

              {/* DESCRIPTION */}
              <p>{project.description}</p>

              {/* TECHNOLOGIES */}
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* STATUS */}
              <div className="project-status">
                <span></span>
                {project.status}
              </div>

            </div>

            {/* BUTTONS */}
            {project.github && project.live && (
              <div className="project-links">

                {/* GITHUB BUTTON */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github-link"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>

                {/* LIVE DEMO BUTTON */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link live-link"
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>

              </div>
            )}

          </motion.article>
        ))}

      </div>

    </section>
  );
}