import { Routes, Route, useLocation } from 'react-router-dom';
import { About, CV, Contact, Projects, Welcome } from './pages';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './components';

function App() {
  const location = useLocation();
  console.log("LOCATION", location);
  return (
    <>
      <AnimatePresence mode="wait">
        <Layout>
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Welcome />} />
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
