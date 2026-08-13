import { motion } from "framer-motion";
import { GraduationCap, CalendarDays, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section className="education" id="education">

      <motion.div
        className="education-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">EDUCATION</p>

        <h2>
          My <span>Journey</span>
        </h2>

        <p>
          Currently building my foundation in Artificial Intelligence,
          Machine Learning and modern software development.
        </p>
      </motion.div>

      <div className="education-timeline">

        <motion.div
          className="education-card"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <div className="education-date">

            <div className="education-icon">
              <GraduationCap size={23} />
            </div>

            <div className="education-year">
              2025 — 2029
            </div>

            <div className="education-type">
              B.TECH
            </div>

          </div>

          <div className="education-content">

            <h3>
              Artificial Intelligence & Machine Learning
            </h3>

            <h4>
              Sir Isaac Newton College of Engineering and Technology
            </h4>

            <div className="education-meta">

              <span>
                <MapPin size={14} />
                Pappakovil, Nagapattinam
              </span>

              <span>
                <CalendarDays size={14} />
                2025 — 2029
              </span>

            </div>

            <p>
              Developing strong foundations in Artificial Intelligence,
              Machine Learning, programming, data science and software
              development while working on practical projects.
            </p>

            <span className="education-status">
              Currently Studying
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}