import { About, CV, Contact, Projects, Welcome } from './pages';
import { CubeWrapper, CubeItem, Face1, Face2, Face3, Face4, Face5, Face6, CubeControls } from './styled';
import { useState } from 'react';
import { generateTransforms } from './utils';

function Box() {
  const [transform, setTransform] = useState(() => generateTransforms());
  return (
    <div>
      <CubeWrapper>
        <CubeItem transform={transform}>
          <Face1><Welcome /></Face1>
          <Face2><About /></Face2>
          <Face3><Contact /></Face3>
          <Face4><Projects /></Face4>
          <Face5><CV /></Face5>
          <Face6><div>Hello... & goodbye!</div></Face6>
        </CubeItem>
      </CubeWrapper>
      <CubeControls>
        <button onClick={() => setTransform(() => generateTransforms("front"))}>Welcome page</button>
        <button onClick={() => setTransform(() => generateTransforms("back"))}>About page</button>
        <button onClick={() => setTransform(() => generateTransforms("top"))}>Resume</button>
        <button onClick={() => setTransform(() => generateTransforms("bottom"))}>👋</button>
        <button onClick={() => setTransform(() => generateTransforms("left"))}>Contact</button>
        <button onClick={() => setTransform(() => generateTransforms("right"))}>Projects</button>
      </CubeControls>
    </div>
  )
}

function App() {

  return <Box />
}

export default App;
