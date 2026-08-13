import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./App.css";
import Background from "./components/Background";
import LoadingScreen from "./components/LoadingScreen";

const skills = [
  "C Programming",
  "Java",
  "JavaScript",
  "HTML",
  "CSS",
  "React",
  "Node.js",
  "SQL",
  "Git & GitHub",
  "Machine Learning",
  "Data Science",
];

const projects = [
  {
    number: "01",
    title: "Research Agent",
    image: "/images/research-agent.jpeg",
    description:
      "An AI-powered research assistant built to collect, process and present useful information through an intelligent chatbot experience.",
    tech: ["AI", "OpenRouter API", "JavaScript", "Chatbot"],
  },
  {
    number: "02",
    title: "Personal Finance Chatbot",
    image: "/images/finance-chatbot.jpeg",
    description:
      "An intelligent finance assistant designed to help users understand expenses, manage financial information and interact with an AI chatbot.",
    tech: ["AI", "Python", "Chatbot", "Finance"],
  },
  {
    number: "03",
    title: "Smart Care AI",
    image: "/images/smart-care-ai.jpeg",
    description:
      "A medical AI assistant concept featuring symptom checking, patient intake and AI-based severity prediction.",
    tech: ["AI", "Machine Learning", "Python", "Healthcare"],
  },
  {
    number: "04",
    title: "AgriSense",
    description:
      "A smart agriculture platform combining IoT, crop monitoring, disease detection, weather prediction and AI recommendations.",
    tech: ["IoT", "AI", "ML", "Agriculture"],
  },
];

function App() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // PROJECT DETAILS
  const [selectedProject, setSelectedProject] = useState(null);

  // TYPING ANIMATION
  const [typingText, setTypingText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingWords = [
    "AI & Machine Learning",
    "AI Engineer & Developer",
    "Full Stack Developer",
  ];

  useEffect(() => {
    const currentWord = typingWords[typingIndex];

    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(
          currentWord.substring(0, typingText.length + 1)
        );

        if (typingText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setTypingText(
          currentWord.substring(0, typingText.length - 1)
        );

        if (typingText === "") {
          setIsDeleting(false);
          setTypingIndex(
            (prev) => (prev + 1) % typingWords.length
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typingText, isDeleting, typingIndex]);

  // CONTACT FORM STATES
  const [sending, setSending] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setMessageStatus("");

    emailjs
      .sendForm(
        "service_ev5zgke",
        "template_v7hgfwg",
        e.target,
        "UPJtBjPGyvhWf-7HM"
      )
      .then(
        () => {
          setSending(false);
          setMessageStatus("success");
          e.target.reset();

          setTimeout(() => {
            setMessageStatus("");
          }, 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setSending(false);
          setMessageStatus("error");

          setTimeout(() => {
            setMessageStatus("");
          }, 3000);
        }
      );
  };

  return (
    <>
      {/* LOADING SCREEN */}

      <AnimatePresence>
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      {/* BACKGROUND */}

      <Background />

      <div className="portfolio">

        {/* NAVBAR */}

        <motion.nav
          className="navbar"
          initial={{ opacity: 0, y: -30 }}
          animate={
            !loading
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: -30 }
          }
          transition={{ duration: 0.7 }}
        >
          <a
            href="#home"
            className="logo"
            onClick={() => setMenuOpen(false)}
          >
            BARANI
          </a>

          <div
            className={`nav-links ${
              menuOpen ? "menu-open" : ""
            }`}
          >
            <a
              href="#home"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
            >
              Skills
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>

            <a
              href="#education"
              onClick={() => setMenuOpen(false)}
            >
              Education
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="nav-button"
            onClick={() => setMenuOpen(false)}
          >
            Let's Talk
          </a>

          {/* HAMBURGER */}

          <button
            className={`hamburger ${
              menuOpen ? "active" : ""
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </motion.nav>

        {/* HERO */}

        <section className="hero" id="home">

          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={
              !loading
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
          >
            <p className="intro">HELLO, I'M</p>

            <motion.h1
              id="hero-name"
              initial={{ opacity: 0, y: 30 }}
              animate={
                !loading
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              BARANI{" "}
              <span className="last-initial">S</span>
              <span className="dot"></span>
            </motion.h1>

            {/* TYPING ANIMATION */}

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              animate={
                !loading
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 25 }
              }
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
            >
              <span className="typing-text">
                {typingText}
                <span className="typing-cursor">|</span>
              </span>
            </motion.h2>

            <motion.p
              className="description"
              initial={{ opacity: 0, y: 25 }}
              animate={
                !loading
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 25 }
              }
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
            >
              B.Tech Artificial Intelligence & Machine Learning
              student passionate about building intelligent
              applications, modern web experiences and practical
              AI solutions.
            </motion.p>

            <motion.div
              className="buttons"
              initial={{ opacity: 0, y: 25 }}
              animate={
                !loading
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 25 }
              }
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
            >
              <a
                href="#projects"
                className="btn primary"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download="BARANI-S-Resume.pdf"
                className="btn secondary"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* PROFILE */}

          <motion.div
            className="profile-card"
            initial={{
              opacity: 0,
              x: 70,
              scale: 0.85,
            }}
            animate={
              !loading
                ? {
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }
                : {
                    opacity: 0,
                    x: 70,
                    scale: 0.85,
                  }
            }
            transition={{
              duration: 1,
              delay: 0.25,
              type: "spring",
              stiffness: 70,
            }}
          >
            <motion.div
              className="profile"
              animate={
                !loading
                  ? {
                      y: [0, -10, 0],
                    }
                  : {}
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img
                src="/profile.jpg"
                alt="BARANI S"
                className="profile-img"
              />
            </motion.div>

            <h3>BARANI S</h3>

            <p>AI / ML • FULL STACK</p>

            <div className="profile-tech">
              <span>AI</span>
              <span>ML</span>
              <span>React</span>
              <span>Python</span>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}

        <motion.section
          className="about"
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            01 — ABOUT ME
          </div>

          <h2>
            Building with
            <br />
            <span>intelligence.</span>
          </h2>

          <p>
            I'm <span>Barani</span>, a B.Tech Artificial
            Intelligence and Machine Learning student focused
            on developing practical and meaningful technology.
            I enjoy exploring Artificial Intelligence, Machine
            Learning, Full Stack Development, Cloud Computing
            and problem solving.
          </p>

          <div className="about-boxes">
            <div className="box">
              <h3>Artificial Intelligence</h3>
              <p>
                Exploring intelligent systems, AI applications
                and real-world problem solving.
              </p>
            </div>

            <div className="box">
              <h3>Full Stack</h3>
              <p>
                Building modern and responsive web applications
                using current development technologies.
              </p>
            </div>

            <div className="box">
              <h3>Problem Solving</h3>
              <p>
                Learning continuously and turning ideas into
                useful technical projects.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SKILLS */}

        <motion.section
          className="skills"
          id="skills"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">
            02 — TECHNOLOGIES
          </div>

          <h2>My Skills</h2>

          <div className="skills-container">
            {skills.map((skill, index) => (
              <motion.div
                className="skill-card"
                key={skill}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.04,
                }}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}

        <section
          className="projects"
          id="projects"
        >
          <motion.div
            className="projects-header"
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
          >
            <p className="section-label">
              03 — SELECTED WORK
            </p>

            <h2>
              Featured <span>Projects</span>
            </h2>

            <p className="projects-subtitle">
              A collection of AI, machine learning and
              full-stack projects built while learning and
              experimenting with modern technologies.
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                className="premium-project-card"
                key={project.number}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="project-top">
                  <span className="project-number">
                    {project.number}
                  </span>
                </div>

                <div className="project-content">

                  {/* PROJECT IMAGE */}

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
                </div>

                {/* PROJECT DETAILS BUTTON */}

                <div className="project-links">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECT DETAILS MODAL */}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  y: 30,
                }}
                transition={{
                  duration: 0.3,
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="project-modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  ×
                </button>

                {selectedProject.image && (
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="project-modal-image"
                  />
                )}

                <p className="project-modal-number">
                  PROJECT {selectedProject.number}
                </p>

                <h2>{selectedProject.title}</h2>

                <p className="project-modal-description">
                  {selectedProject.description}
                </p>

                <div className="project-modal-tech">
                  {selectedProject.tech.map((tech) => (
                    <span key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="project-modal-button"
                  onClick={() => setSelectedProject(null)}
                >
                  Close Project
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* EDUCATION */}

        <motion.section
          className="education"
          id="education"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="education-header">
            <p className="section-label">
              04 — EDUCATION
            </p>

            <h2>
              My <span>Journey</span>
            </h2>

            <p>
              Currently building my foundation in Artificial
              Intelligence and Machine Learning while
              developing practical projects.
            </p>
          </div>

          <div className="education-timeline">
            <div className="education-card">
              <div>
                <p className="education-year">
                  2025 — 2029
                </p>

                <p className="education-type">
                  B.TECH
                </p>
              </div>

              <div className="education-content">
                <h3>
                  Artificial Intelligence & Machine Learning
                </h3>

                <h4>
                  Sir Isaac Newton College of Engineering
                  and Technology
                </h4>

                <p>
                  Pappakovil – Nagapattinam
                </p>

                <span className="education-status">
                  Currently Studying
                </span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}

        <motion.section
          className="contact"
          id="contact"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <div className="contact-container">

            <div className="contact-info">
              <p className="section-label">
                05 — CONTACT
              </p>

              <h2>
                Let's build
                <br />
                <span>something.</span>
              </h2>

              <p>
                Have an idea, project or opportunity?
                Feel free to get in touch. I'm always
                interested in learning, building and
                collaborating.
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <span>NAME</span>
                  <p>BARANI S</p>
                </div>

                <div className="contact-item">
                  <span>FIELD</span>
                  <p>
                    Artificial Intelligence & Machine Learning
                  </p>
                </div>

                <div className="contact-item">
                  <span>STATUS</span>
                  <p>
                    Open to Learning & Opportunities
                  </p>
                </div>
              </div>
            </div>

            {/* EMAILJS CONTACT FORM */}

            <form
              className="contact-form"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Tell me about your project..."
                required
              />

              {/* MESSAGE STATUS */}

              {sending ? (
                <button
                  type="button"
                  disabled
                  className="sending-message"
                >
                  Sending...
                </button>
              ) : messageStatus === "success" ? (
                <button
                  type="button"
                  disabled
                  className="success-message"
                >
                  Message Sent Successfully ✓
                </button>
              ) : messageStatus === "error" ? (
                <button
                  type="button"
                  className="error-message"
                  onClick={() => setMessageStatus("")}
                >
                  Failed to Send — Try Again
                </button>
              ) : (
                <button type="submit">
                  Send Message →
                </button>
              )}
            </form>

          </div>
        </motion.section>

        {/* FOOTER */}

        <footer className="footer">
          <div className="footer-content">

            <div className="footer-logo">
              BARANI
            </div>

            <p>
              AI & Machine Learning • Full Stack Developer
            </p>

            <div className="footer-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-social">

              <a
                href="https://github.com/Baranieren"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/barani-s-6410653ba"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/barani_fxt"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>

              <a href="#contact">
                Contact
              </a>

            </div>

            <div className="footer-line" />

            <p className="copyright">
              © {new Date().getFullYear()} BARANI S
              Built with React & passion for AI.
            </p>

          </div>
        </footer>

      </div>
    </>
  );
}

export default App;