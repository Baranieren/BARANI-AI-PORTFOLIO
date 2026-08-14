import { motion } from "framer-motion";
import {
  Github,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">

      <motion.div
        className="footer-content"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <a href="#home" className="footer-logo">
          BARANI
        </a>

        <p>
          AI & Machine Learning Student · AI Engineer · Full Stack Developer
        </p>


        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>

        </div>


        <div className="footer-social">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={16} />
            GitHub
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>

          <a
            href="#"
            aria-label="Instagram"
          >
            <Instagram size={16} />
            Instagram
          </a>

        </div>


        <div className="footer-line"></div>


        <div className="footer-bottom">

          <p className="copyright">
            © {new Date().getFullYear()} BARANI  S All rights reserved.
          </p>

          <a
            href="#home"
            className="back-top"
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </a>

        </div>

      </motion.div>

    </footer>
  );
}