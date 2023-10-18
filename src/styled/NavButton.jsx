import styled from 'styled-components'
const num = "4.25rem";
const numpx = 4.25 * 16;

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
    visibility: visible;
    display: block;
    height: ${num};
  `}
  top: ${props => props.id === "bottom" ? `${props.viewport < props.webPageHeight ? (props.webPageHeight - numpx) : props.viewport - numpx}px` : null};
  ${props => props.id === "bottom" && `
    left: 0;
    width: 100vw;
    visibility: visible;
    display: block;
    height: ${num};
  `}
  ${props => props.id === "left" && `
    top: 0;
    left: 0;
    width: ${num};
    visibility: visible;
    display: block;
    `}
    height: ${props => props.id === "left" || props.id === "right" ? `${props.viewport > props.webPageHeight ? props.viewport : props.webPageHeight}px` : null};
  ${props => props.id === "right" && `
    top: 0;
    right: 0;
    width: ${num};
    visibility: visible;
    display: block;
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