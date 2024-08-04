import { Link, useLocation } from "react-router-dom";
import { NavList, NavListItem, Navigation } from "../styled";

function Nav() {
  const { pathname } = useLocation()
  
  return (
    <Navigation id="main-navigation">
      <NavList role="tablist">
        <NavListItem role="presentation">
          <Link role="tab" tabIndex={0} className={pathname.includes('projects') ? "active" : ""} to='/projects'>Projects (1)</Link>
        </NavListItem>
        <NavListItem role="presentation">
          <Link role="tab" tabIndex={0} className={pathname.includes('about') ? "active" : ""} to='/about'>About me (2)</Link>
        </NavListItem>
        <NavListItem role="presentation">
          <Link role="tab" tabIndex={0} className={pathname.includes('resume') ? "active" : ""} to='/resume'>Resume (3)</Link>
        </NavListItem>
        <NavListItem role="presentation">
          <Link role="tab" tabIndex={0} className={pathname.includes('contact') ? "active" : ""} to='/contact'>Contact (4)</Link>
        </NavListItem>
        <NavListItem role="presentation">
          <Link role="tab" tabIndex={0} className={pathname.includes('portfolio') ? "active" : ""} to='/portfolio'>Main page (Space)</Link>
        </NavListItem>
      </NavList>
    </Navigation>
  )
}

export default Nav;