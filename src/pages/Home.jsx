import { Hero } from './Hero/Hero';
import { AboutMe } from './AboutMe/AboutMe';
import { Skills } from './Skills/Skills';
import { Experience } from './Experience/Experience';
import { Contact } from './Contact/Contact';

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
};
