import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Layout from './Layouts/Layout'; 
import Home from './Home/Home.jsx';
import Projects from './Projects/Projects.jsx'
import Contact from './Contact/Contact.jsx'
import Loader from './Components/Loader/Loader';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 700); // Wait for fade out transition
    }, 1000); // Show loader for 1 second

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader fadeOut={fadeOut} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />  
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}