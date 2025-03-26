import { useLocation, useNavigate } from "react-router-dom";
import { useEventListener, useSize, useWindowSize } from "../hooks";
import { Footer, NavButton } from "../styled";
import { bgpostop, bgposbottom, bgposleft, bgposright, bgposmain } from '.';
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import background from '../assets/bg.mp4';

const transition = { duration: 1 };
const bcr = e => e.getBoundingClientRect();

function Layout({ children }) {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();
  const container = useRef(null);
  const containerDims = useSize(container);
  const footer = useRef(null);
  const footerDims = useSize(footer);
  const animations = location.pathname === "/projects" ? bgpostop :
    location.pathname === "/resume" ? bgposbottom :
    location.pathname === "/contact" ? bgposleft :
    location.pathname === "/about" ? bgposright : bgposmain;
  // useTabClose();
  useEventListener("keydown", e => {
    e.preventDefault();
    const [left, right, top, bottom] = [
      document.getElementById("left"),
      document.getElementById("right"),
      document.getElementById("top"),
      document.getElementById("bottom")
    ];
    switch (e.key) {
      case "4":
        if (location.pathname === "/contact") return;
        if (document.activeElement === left) {
          navigate("/contact");
          left.blur();
        }
        else left.focus();
        break;
      case "2":
        if (location.pathname === "/about") return;
        if (document.activeElement === right) {
          navigate("/about")
          right.blur();
        }
        else right.focus()
        break;
      case "1":
        if (location.pathname === "/projects") return;
        if (document.activeElement === top) {
          navigate("/projects")
          top.blur();
        }
        else {
          window.scrollTo(0, bcr(top).bottom, { behavior: 'smooth' });
          top.focus();
        }
        break;
      case "3":
        if (location.pathname === "/resume") return;
        if (document.activeElement === bottom) {
          navigate("/resume")
          bottom.blur();
        }
        else {
          window.scrollTo({ top: bcr(bottom).bottom, behavior: 'smooth' });
          bottom.focus();
        }
        break;
      case " ":
        if (location.pathname === "/") return;
        navigate("/portfolio");
        break;
      case "Escape":
        document.activeElement.blur();
        break;
      default:
        break;
    }
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const handleClick = (e, route) => {
    e.preventDefault();
    if (location.pathname === route) {
      e.target.blur();
      return;
    }
  }

  return (
    <motion.main
      className="main"
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={transition}
    >
      <div id="main_scroller" className="fluff" ref={container}>
        { children }
        <NavButton onClick={(e) => handleClick(e, "/projects")} id="top" axis="x" top={0} left={0} title="Projects">Projects</NavButton>
        <NavButton viewport={window.innerHeight} webPageHeight={containerDims.height + footerDims.height} onClick={(e) => handleClick(e, "/resume")} id="bottom" axis="x" bottom={0} left={0} title="My Resume">My Resume</NavButton>
        <NavButton viewport={window.innerHeight} webPageHeight={containerDims.height + footerDims.height} onClick={(e) => handleClick(e, "/contact")} id="left" axis="y" top={0} left={0} title="Contact information">Contact information</NavButton>
        <NavButton viewport={window.innerHeight} webPageHeight={containerDims.height + footerDims.height} onClick={(e) => handleClick(e, "/about")} id="right" axis="y" top={0} right={0} title="About me">About me</NavButton>
        {width >= 1100 && (
          <Footer ref={footer} location={location.pathname} webPageHeight={containerDims.height}>
            <footer>
              <div>
                <p>Additional navigation:</p>
                <p>Number one (1) to go to <b>Projects</b>.</p>
                <p>Number two (2) to go to <b>About me</b>.</p>
                <p>Number three (3) to go to <b>my Resume</b>.</p>
                <p>Number four (4) to go to <b>Contact info</b>.</p>
                <p>Press <i>Spacebar</i> to return to the <b>Main page</b>.</p>
              </div>
            </footer>
          </Footer>
        )}
        <video src={background} className="video_bg" autoPlay loop muted />
      </div>
    </motion.main>
  )
}

export default Layout;