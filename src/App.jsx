import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './layouts/Layout';
import { Home } from './pages/Home'; 
import { Projects } from './pages/Projects/Projects';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme();

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
