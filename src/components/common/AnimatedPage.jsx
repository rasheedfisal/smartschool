import { motion } from "framer-motion";
import TransitionEffect from "./TransitionEffect";

const variants = {
  inactive: {
    opacity: 1,
    transition: {
      // delay: 0.4,
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  out: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  in: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const AnimatedPage = ({ children }) => {
  return (
    <>
      <TransitionEffect />
      <motion.div
        initial="in"
        animate="inactive"
        exit="out"
        variants={variants}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimatedPage;
