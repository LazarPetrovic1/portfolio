import { useLocation, useNavigate } from "react-router-dom";
import { useEventListener, useTabClose } from "../hooks";
import { Footer, NavButton } from "../styled";
import { bgpostop, bgposbottom, bgposleft, bgposright, bgposmain } from '.';
import { motion } from "framer-motion";

const transition = { duration: 1 };

function Layout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const animations = location.pathname === "/projects" ? bgpostop :
    location.pathname === "/resume" ? bgposbottom :
    location.pathname === "/contact" ? bgposleft :
    location.pathname === "/about" ? bgposright : bgposmain;
  useTabClose();
  useEventListener("keydown", e => {
    e.preventDefault();
    const [left, right, top, bottom] = [
      document.getElementById("left"),
      document.getElementById("right"),
      document.getElementById("top"),
      document.getElementById("bottom")
    ];
    console.log("KI", e.key);
    switch (e.key) {
      case "ArrowLeft":
      case "4":
        if (document.activeElement === left) {
          navigate("/contact");
          left.blur();
        }
        else left.focus()
        break;
      case "ArrowRight":
      case "2":
          if (document.activeElement === right) {
          navigate("/about")
          right.blur();
        }
        else right.focus()
        break;
      case "ArrowUp":
      case "1":
        if (document.activeElement === top) {
          navigate("/projects")
          top.blur();
        }
        else top.focus()
        break;
      case "ArrowDown":
      case "3":
        if (document.activeElement === bottom) {
          navigate("/resume")
          bottom.blur();
        }
        else bottom.focus()
        break;
      case " ":
      case "Enter":
        navigate("/");
        break;
      default:
        break;
    }
  });
  return (
    <motion.main
      className="main"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      <div className="fluff">{ children }</div>
      <NavButton id="top" axis="x" top={0} left={0}>Projects</NavButton>
      <NavButton id="bottom" axis="x" bottom={0} left={0}>My Resume</NavButton>
      <NavButton id="left" axis="y" top={0} left={0}>Contact information</NavButton>
      <NavButton id="right" axis="y" top={0} right={0}>About me</NavButton>
      <Footer location={location.pathname}>
        <footer>
          <div style={{ textAlign: 'center' }}>There is no navigation bar. Navigate using the keyboard as such:</div>
          <div>
            <p>The up arrow (&#x2191;) or number one (1) to go to <b>Projects</b>.</p>
            <p>The right arrow (&#x2192;) or number two (2) to go to <b>About me</b>.</p>
            <p>The down arrow (&#x2193;) or number three (3) to go to <b>my Resume</b>.</p>
            <p>The left arrow (&#x2190;) or number four (4) to go to <b>Contact info</b>.</p>
            <p>Press <i>Spacebar</i> or <i>Enter</i> to return to the <b>Main page</b>.</p>
          </div>
        </footer>
      </Footer>
    </motion.main>
  )
}

export default Layout;