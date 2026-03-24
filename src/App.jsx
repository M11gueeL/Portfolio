import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home'; 
import { Projects } from './pages/Projects/Projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Todas estas rutas cargan el Home, pero su path ayudará a scrollear */}
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="skills" element={<Home />} />
          <Route path="experience" element={<Home />} />
          <Route path="contact" element={<Home />} />
          
          {/* Esta es la ruta totalmente independiente */}
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
