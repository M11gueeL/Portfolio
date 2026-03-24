import { Hero } from './Hero/Hero';
import { AboutMe } from './AboutMe/AboutMe';
import { Skills } from './Skills/Skills';

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutMe />
      <Skills />
    </div>
  );
};
