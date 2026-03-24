import { Hero } from './Hero/Hero';
import { AboutMe } from './AboutMe/AboutMe';

export const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <AboutMe />
    </div>
  );
};
