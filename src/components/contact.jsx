import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Instagram,
  Github,
  Linkedin,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show success message
    setIsSent(true);
  };

  const handleAnotherMessage = () => {
    setIsSent(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">

        {/* =========================
            LEFT SIDE
        ========================= */}

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

            {/* EMAIL */}

            <div className="contact-item">
              <div className="contact-icon">
                <Mail size={18} />
              </div>

              <div>
                <span>EMAIL</span>
                <p>barani@example.com</p>
              </div>
            </div>


            {/* LOCATION */}

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


          {/* SOCIALS */}

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


        {/* =========================
            RIGHT SIDE
        ========================= */}

        <AnimatePresence mode="wait">

          {!isSent ? (

            /* =========================
               CONTACT FORM
            ========================= */

            <motion.form
              key="contact-form"
              className="contact-form"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
            >

              <div className="form-header">
                <span>01</span>

                <p>
                  SEND A MESSAGE
                </p>
              </div>


              {/* NAME */}

              <div className="input-group">

                <label>Name</label>

                <input
                  type="text"
                  placeholder="Your name"
                  required
                />

              </div>


              {/* EMAIL */}

              <div className="input-group">

                <label>Email</label>

                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                />

              </div>


              {/* SUBJECT */}

              <div className="input-group">

                <label>Subject</label>

                <input
                  type="text"
                  placeholder="Artificial Intelligence & Machine Learning"
                  required
                />

              </div>


              {/* MESSAGE */}

              <div className="input-group">

                <label>Message</label>

                <textarea
                  rows="5"
                  placeholder="Tell me about your idea..."
                  required
                />

              </div>


              {/* SEND BUTTON */}

              <button type="submit">

                Send Message

                <Send size={17} />

              </button>

            </motion.form>


          ) : (

            /* =========================
               SUCCESS SCREEN
            ========================= */

            <motion.div
              key="success-message"
              className="contact-form contact-success"
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.45 }}
            >

              <div className="form-header">
                <span>02</span>

                <p>
                  MESSAGE SENT
                </p>
              </div>


              <div className="success-content">

                {/* SUCCESS ICON */}

                <motion.div
                  className="success-icon"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.15,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 180,
                  }}
                >
                  <CheckCircle2 size={55} />
                </motion.div>


                {/* TITLE */}

                <motion.h3
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  Message Sent
                </motion.h3>


                {/* DESCRIPTION */}

                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  Thanks for reaching out!
                  <br />
                  Your message has been received successfully.
                </motion.p>


                {/* ANOTHER MESSAGE BUTTON */}

                <motion.button
                  type="button"
                  className="another-message-btn"
                  onClick={handleAnotherMessage}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                >
                  <ArrowLeft size={16} />

                  Send Another Message
                </motion.button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
}