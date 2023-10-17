import styled from 'styled-components'

const num = "4.25rem";

const NavButton = styled.button`
  color: white;
  text-align: center;
  opacity: 0;
  border: 1px solid white;
  transition: all 350ms ease;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  user-events: none;
  ${props => props.id === "top" && `
    top: 0;
    left: 0;
    width: 100vw;
    height: ${num};
  `}
  ${props => props.id === "bottom" && `
    bottom: 0;
    left: 0;
    width: 100vw;
    height: ${num};
  `}
  ${props => props.id === "left" && `
    top: 0;
    left: 0;
    width: ${num};
    height: 100vh;
  `}
  ${props => props.id === "right" && `
    top: 0;
    right: 0;
    width: ${num};
    height: 100vh;
  `}
  top: ${props => props.top || null};
  left: ${props => props.left || null};
  right: ${props => props.right || null};
  bottom: ${props => props.bottom || null};
  &:focus {
    opacity: 1;
    outline: none;
    border: 1px solid blue;
    z-index: 2;
  }
`;

export default NavButton;