import styled from 'styled-components'
import bg1 from '../assets/background.png';
import bg2 from '../assets/background-2.png';

const size = 600;

const face = `
  position: absolute;
  box-sizing: border-box;
  height: ${size}px;
  width: ${size}px;
  opacity: 0.95;
  border: 1px solid #000;
  padding: 1rem;
  overflow-y: auto;
  z-index: 250;
  background-position: 50% 50%;
`

export const CubeWrapper = styled.div`
  perspective: 50000px;
  perspective-origin: 50% 50%;
  width: 100vw;
  height: 100vh;
  background: #fff;
  display: flex;
  position: relative;
`

export const CubeItem = styled.section`
  transform-style: preserve-3d;
  transition: all 250ms linear;
  margin: auto;
  position: relative;
  height: ${size}px;
  width: ${size}px;
  transform: ${props => props.transform};
`;

export const Face1 = styled.div`
  ${face}
  background-image: url(${bg1});
  transform: translateZ(${size / 2}px);
`; // front

export const Face2 = styled.div`
  ${face}
  background-image: url(${bg2});
  transform: translateZ(-${size / 2}px) rotateY(180deg);
`; // back
export const Face3 = styled.div`
  ${face}
  background-image: url(${bg1});
  transform: translateX(-${size / 2}px) rotateY(-90deg);
`; // left
export const Face4 = styled.div`
  ${face}
  background-image: url(${bg2});
  transform: translateX(${size / 2}px) rotateY(90deg);
`; // right
export const Face5 = styled.div`
  ${face}
  background-image: url(${bg1});
  transform: translateY(-${size / 2}px) rotateX(90deg);
`; // top
export const Face6 = styled.div`
  ${face}
  background-image: url(${bg2});
  transform: translateY(${size / 2}px) rotateX(-90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  color: white;
`; // bottom

export const CubeControls = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 25;
  background: #111;
  color: white;
  border-radius: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
    & button {
      padding: 0.25rem 0.5rem;
      cursor: pointer;
      width: 100%;
      background: transparent;
      color: #eee;
      border: none;
      &:focus { outline: none; }
  }
`;