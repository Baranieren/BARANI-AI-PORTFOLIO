import { motion } from "framer-motion";
import { BrainCircuit, Code2, Rocket } from "lucide-react";

const cards = [
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text: "Exploring AI and Machine Learning to build intelligent systems and practical real-world solutions.",
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    text: "Building modern web applications with clean interfaces, responsive design and scalable technologies.",
  },
  {
    icon: Rocket,
    title: "Building & Learning",
    text: "Continuously learning new technologies and turning ideas into useful projects.",
  },
];

export default function About() {
  return (
    <section className="about" id="about">

      <div className="about-header">

        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          ABOUT ME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Building with
          <span> Intelligence.</span>
        </motion.h2>

        <motion.p
          className="about-intro"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          I'm <span>BARANI S</span>, a B.Tech Artificial Intelligence
          and Machine Learning student passionate about building
          intelligent, useful and modern digital experiences.
        </motion.p>

      </div>

      <div className="about-boxes">

        {cards.map((card, index) => {

          const Icon = card.icon;

          return (
            <motion.div
              className="box"
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
            >

              <div className="box-icon">
                <Icon size={24} />
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}