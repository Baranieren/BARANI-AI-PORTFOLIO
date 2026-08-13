import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Database,
  Globe,
  GitBranch,
  Cpu,
  Braces,
  Terminal,
} from "lucide-react";

const skills = [
  { name: "C Programming", icon: Terminal },
  { name: "Java", icon: Braces },
  { name: "JavaScript", icon: Code2 },
  { name: "React.js", icon: Globe },
  { name: "Node.js", icon: Cpu },
  { name: "Python", icon: Terminal },
  { name: "Machine Learning", icon: BrainCircuit },
  { name: "Data Science", icon: BrainCircuit },
  { name: "SQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Firebase", icon: Database },
  { name: "Git & GitHub", icon: GitBranch },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">

      <motion.div
        className="skills-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <p className="section-label">MY EXPERTISE</p>

        <h2>
          Skills & <span>Technologies</span>
        </h2>

        <p>
          Technologies and tools I use to transform ideas into
          intelligent and modern digital solutions.
        </p>
      </motion.div>

      <div className="skills-container">

        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
            >
              <div className="skill-icon">
                <Icon size={23} />
              </div>

              <span>{skill.name}</span>

              <div className="skill-number">
                {String(index + 1).padStart(2, "0")}
              </div>
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}