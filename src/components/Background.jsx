import { motion } from "framer-motion";

export default function Background() {
  return (
    <div className="background">

      <motion.div
        className="blob blob1"
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="blob blob2"
        animate={{
          x: [0, -70, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="blob blob3"
        animate={{
          x: [0, 50, 0],
          y: [0, 80, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
        }}
      />

    </div>
  );
}