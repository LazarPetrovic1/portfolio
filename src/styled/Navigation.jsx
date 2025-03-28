import styled from 'styled-components'

const Navigation = styled.nav`
  position: absolute;
  top: 0.5rem;
  left: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  z-index: 5;
`;

const NavList = styled.ul`
  list-style-type: none;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const NavListItem = styled.li`
  & > a {
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    cursor: pointer;
    &.active {
      color: yellow;
      text-decoration: underline;
    }
  }
  @media (max-width: 620px) {
    font-size: 0.8rem;
  }
  @media (max-width: 410px) {
    & > a {
      padding: 0.2rem 0.4rem;
    }
  }
`;

export { Navigation, NavList, NavListItem };