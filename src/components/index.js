import AnimatedPage from "./AnimatedPage";
import Layout from "./Layout";

export const animRight = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 }
}

export const animLeft = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 }
}

export const animTop = {
  initial: { opacity: 0, y: -100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 100 }
}

export const animBottom = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 }
}

export const animMain = {
  initial: { scale: 0, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0, opacity: 0 }
}

export const bgposleft = {
  initial: { backgroundPosition: "50% 50%" },
  animate: { backgroundPosition: "65% 50%" },
  exit: { backgroundPosition: "50% 50%" }
}

export const bgposright = {
  initial: { backgroundPosition: "50% 50%" },
  animate: { backgroundPosition: "35% 50%" },
  exit: { backgroundPosition: "50% 50%" }
}

export const bgpostop = {
  initial: { backgroundPosition: "50% 50%" },
  animate: { backgroundPosition: "50% 35%" },
  exit: { backgroundPosition: "50% 50%" }
}

export const bgposbottom = {
  initial: { backgroundPosition: "50% 50%" },
  animate: { backgroundPosition: "50% 65%" },
  exit: { backgroundPosition: "50% 50%" }
}

export const bgposmain = {
  initial: { backgroundPosition: "50% 50%" },
  animate: { backgroundPosition: "50% 50%" },
  exit: { backgroundPosition: "50% 50%" }
}

export { AnimatedPage, Layout };