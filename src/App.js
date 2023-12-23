import { About, CV, Contact, Projects, Welcome } from './pages';
import { CubeWrapper, CubeItem, Face1, Face2, Face3, Face4, Face5, Face6, CubeControls } from './styled';
import { useState } from 'react';

function Box() {
  const [dir, setDir] = useState(() => "right");
  const getTransform = (dir) => {
    setDir(() => dir);
  }
  return (
    <div>
      <CubeWrapper>
        <CubeItem className={`show-${dir}`}>
          <Face1><Projects /></Face1>
          <Face2><About /></Face2>
          <Face3><CV /></Face3>
          <Face4><Welcome /></Face4>
          <Face5><Contact /></Face5>
          <Face6><div>Hello... & goodbye!</div></Face6>
        </CubeItem>
      </CubeWrapper>
      <CubeControls>
        <button onClick={() => getTransform("front")}>Projects</button>
        <button onClick={() => getTransform("back")}>About page</button>
        <button onClick={() => getTransform("top")}>Contact</button>
        <button onClick={() => getTransform("bottom")}>👋</button>
        <button onClick={() => getTransform("left")}>Resume</button>
        <button onClick={() => getTransform("right")}>Welcome page</button>
      </CubeControls>
    </div>
  )
}

function App() {

  return <Box />
}

export default App;
