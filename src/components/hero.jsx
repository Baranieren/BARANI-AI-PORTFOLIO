import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero" id="home">

      {/* LEFT CONTENT */}

      <div className="hero-content">

        <motion.p
          className="intro"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.2 }}
        >
          HELLO, I'M
        </motion.p>


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
</motion.h1>


        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.5,
          }}
        >
          AI & Machine Learning
          <br />

          <span>
            AI Engineer & Developer
          </span>
        </motion.h2>


        <motion.p
          className="description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.65,
          }}
        >
          B.Tech Artificial Intelligence and Machine Learning
          student passionate about Artificial Intelligence,
          Machine Learning, Full Stack Development and building
          real-world solutions.
        </motion.p>


        <motion.div
          className="buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 2.8,
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

      </div>


      {/* PROFILE */}

      <motion.div
        className="profile-card"
        initial={{
          opacity: 0,
          x: 80,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        transition={{
          duration: 1,
          delay: 2.4,
          type: "spring",
          stiffness: 70,
        }}
      >

        <motion.div
          className="profile"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >

          <img
            src="/profile.jpg"
            alt="BARANI  S"
            className="profile-img"
          />

        </motion.div>

 
        <h3>BARANI  S</h3>

        <p>
          AI / ML • FULL STACK DEVELOPER
        </p>


        <div className="profile-tech">

          <span>AI</span>
          <span>ML</span>
          <span>React</span>
          <span>Python</span>

        </div>

      </motion.div>

    </section>
  );
}