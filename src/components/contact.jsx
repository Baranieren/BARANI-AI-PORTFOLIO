import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Instagram,
  Github,
  Linkedin,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-container">

        {/* LEFT SIDE */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="section-label">
            GET IN TOUCH
          </p>

          <h2>
            Let's build
            <br />
            something <span>great.</span>
          </h2>

          <p>
            Have an idea, project or opportunity in mind?
            Feel free to reach out. I'm always interested in
            learning, collaborating and building something meaningful.
          </p>


          <div className="contact-details">

            <div className="contact-item">

              <div className="contact-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>EMAIL</span>
                <p>barani@example.com</p>
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                <MapPin size={18} />
              </div>

              <div>
                <span>LOCATION</span>
                <p>Nagapattinam, Tamil Nadu</p>
              </div>

            </div>

          </div>


          <div className="contact-socials">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

          </div>

        </motion.div>


        {/* FORM */}

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          onSubmit={(e) => e.preventDefault()}
        >

          <div className="form-header">
            <span>01</span>

            <p>
              SEND A MESSAGE
            </p>
          </div>


          <div className="input-group">

            <label>Name</label>

            <input
              type="text"
              placeholder="Your name"
            />

          </div>


          <div className="input-group">

            <label>Email</label>

            <input
              type="email"
              placeholder="your@email.com"
            />

          </div>


          <div className="input-group">

            <label>Subject</label>

            <input
              type="text"
              placeholder="Artificial Intelligence & Machine Learning"
            />

          </div>


          <div className="input-group">

            <label>Message</label>

            <textarea
              rows="5"
              placeholder="Tell me about your idea..."
            />

          </div>


          <button type="submit">

            Send Message

            <Send size={17} />

          </button>

        </motion.form>

      </div>

    </section>
  );
}