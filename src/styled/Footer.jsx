import styled from 'styled-components'
import { device } from './device'

const Footer = styled.div`
  color: white;
  bottom: ${props => (props.location.includes("resume") ||
    props.location.includes("about")) ||
    props.location.includes("projects") ? props.webPageHeight : "4.25rem"};
  background: transparent;
  border: 3px ridge white;
  border-radius: 1rem;
  @media ${device.mobileS} { width: 100%; }
  @media ${device.mobileM} { width: 90%; }
  @media ${device.mobileL} { width: 80%; }
  @media ${device.tablet} { width: 65%; }
  @media ${device.laptop} { width: 40%; }
  @media ${device.laptopL} { width: 30%; }
  @media ${device.desktop} { width: 20%; }
  margin: 3rem auto 0 auto;
  & > footer { width: 90%; & > div { padding: 0.5rem; } }
`;

export default Footer;