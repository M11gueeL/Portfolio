import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from './Hero/Hero';
import { AboutMe } from './AboutMe/AboutMe';
import { Skills } from './Skills/Skills';
import { Experience } from './Experience/Experience';
import { ProjectsHook } from '../components/ProjectsHook';
import { Contact } from './Contact/Contact';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace('/', '');
    
    if (path) {
      // Intentamos ubicar el elemento por su ID
      const element = document.getElementById(path);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si estamos en / hacemos scroll hasta arriba
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <ProjectsHook />
      <Contact />
    </div>
  );
};
