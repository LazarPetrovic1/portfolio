import { Routes, Route, useLocation } from 'react-router-dom';
import { About, CV, Contact, Projects, Welcome } from './pages';
import { AnimatePresence } from 'framer-motion';
import { Layout, Nav } from './components';


function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Layout>
          <Nav />
          <Routes key={location.pathname} location={location}>
            <Route path='/portfolio' element={<Welcome />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </AnimatePresence>
    </>
  );
}

export default App;
