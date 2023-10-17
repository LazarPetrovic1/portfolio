import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { animBottom, animLeft, animMain, animRight, animTop } from ".";

const transition = { duration: 1 }

function AnimatedPage({ children }) {
  const location = useLocation();
  const animations = location.pathname === "/projects" ? animTop :
    location.pathname === "/resume" ? animBottom :
    location.pathname === "/contact" ? animLeft :
    location.pathname === "/about" ? animRight : animMain;
  return (
    <motion.div
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >{ children }</motion.div>
  )
}

export default AnimatedPage;