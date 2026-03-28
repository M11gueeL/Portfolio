import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AnimatePresence } from 'framer-motion';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home'; 
import { Projects } from './pages/Projects/Projects';
import { useTheme } from './hooks/useTheme';
import { Loader } from './components/Loader';

function App() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  // Simulación de carga inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de pantalla de carga
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer 
        position="top-right"
        autoClose={3500}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme}
      />
      
      <AnimatePresence>
        {isLoading && <Loader key="loader" />}
      </AnimatePresence>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="skills" element={<Home />} />
          <Route path="experience" element={<Home />} />
          <Route path="contact" element={<Home />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
