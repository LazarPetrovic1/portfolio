import styled, { keyframes } from 'styled-components'

const turn = keyframes`
  from { transform: rotate3d(0, 0, 0, 0); }
  to { transform: rotate3d(1, 1, 0, 360deg); }
`;

const CubeWrapper = styled.section`
  position: relative;
  height: 900px;
  width: 900px;
  margin: auto;
  background-color: transparent;
  overflow: auto;
  transform: rotate3d(1, 1, 0, 45deg);
  transform-style: preserve-3d;
  animation: ${turn} 5s linear infinite
`;

export default CubeWrapper;