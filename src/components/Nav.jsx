import { Link, useLocation } from "react-router-dom";
import { NavList, NavListItem, Navigation } from "../styled";
import { useWindowSize } from "../hooks";

function Nav() {
  const { pathname } = useLocation()
  const { width } = useWindowSize();

  return (
    <Navigation id="main-navigation">
      <NavList role="tablist">
        <NavListItem role="presentation">
          <Link role="tab" tabIndex={0} className={pathname.includes('projects') ? "active" : ""} to='/projects'>Projects {width > 530 ? "(1)" : ""}</Link>
        </NavListItem>
        <NavListItem role="presentation">
          <Link role="tab" tabIndex={0} className={pathname.includes('about') ? "active" : ""} to='/about'>About me {width > 530 ? "(2)" : ""}</Link>
        </NavListItem>
        <NavListItem role="presentation">
          <Link role="tab" tabIndex={0} className={pathname.includes('resume') ? "active" : ""} to='/resume'>Resume {width > 530 ? "(3)" : ""}</Link>
        </NavListItem>
        <NavListItem role="presentation">
          <Link role="tab" tabIndex={0} className={pathname.includes('contact') ? "active" : ""} to='/contact'>Contact {width > 530 ? "(4)" : ""}</Link>
        </NavListItem>
        <NavListItem role="presentation">
          <Link role="tab" tabIndex={0} className={pathname.includes('portfolio') ? "active" : ""} to='/portfolio'>Main page {width > 530 ? "(Space)" : ""}</Link>
        </NavListItem>
      </NavList>
    </Navigation>
  )
}

export default Nav;