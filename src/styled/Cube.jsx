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
  border: 2px solid #000;
  padding: 1rem;
  overflow-y: auto;
  z-index: 250;
  background-position: 50% 50%;
  left:0;
  top:0;
  right:0;
  bottom:0;
  -webkit-backface-visibility:hidden;
  color: white;
`

export const CubeWrapper = styled.div`
  perspective: 5000000000px;
  perspective-origin: 50% 50%;
  width: ${size}px;
  height: ${size}px;
  background: #fff;
  display: flex;
  position: relative;
  border: 1px solid #CCC;
`;

export const CubeItem = styled.section`
  transform-style: preserve-3d;
  transition: all 250ms linear;
  margin: auto;
  position: relative;
  height: ${size}px;
  width: ${size}px;
  transform: translateZ(-${size / 2}px);
  transition: transform 1s;
  &.show-front  { transform: translateZ(-${size / 2}px) rotateY(   0deg); }
  &.show-right  { transform: translateZ(-${size / 2}px) rotateY( -90deg); }
  &.show-back   { transform: translateZ(-${size / 2}px) rotateY(-180deg); }
  &.show-left   { transform: translateZ(-${size / 2}px) rotateY(  90deg); }
  &.show-top    { transform: translateZ(-${size / 2}px) rotateX( -90deg); }
  &.show-bottom { transform: translateZ(-${size / 2}px) rotateX(  90deg); }
`;

export const Face1 = styled.div`
  ${face}
  background-image: url(${bg1});
  transform: rotateY(0deg) translateZ(100px);
  transform: rotateY(0deg) translateZ(${size / 2}px);
`; // front

export const Face2 = styled.div`
  ${face}
  background-image: url(${bg2});
  transform: translateZ(-${size / 2}px) rotateY(180deg);
  transform: rotateY(180deg) translateZ(${size / 2}px);
`; // back
export const Face3 = styled.div`
  ${face}
  background-image: url(${bg1});
  transform: translateX(-${size / 2}px) rotateY(-90deg);
  transform: rotateY(-90deg) translateZ(${size / 2}px);
  `; // left
export const Face4 = styled.div`
  ${face}
  background-image: url(${bg2});
  transform: translateX(${size / 2}px) rotateY(90deg);
  transform: rotateY( 90deg) translateZ(${size / 2}px);
`; // right
export const Face5 = styled.div`
  ${face}
  background-image: url(${bg1});
  transform: translateY(-${size / 2}px) rotateX(90deg);
  transform: rotateX( 90deg) translateZ(${size / 2}px);
`; // top
export const Face6 = styled.div`
  ${face}
  background-image: url(${bg2});
  transform: translateY(${size / 2}px) rotateX(-90deg);
  transform: rotateX(-90deg) translateZ(${size / 2}px);
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