import { useEffect, useState } from 'react';
import { ProjectsData } from './ProjectsData.js'
import ScrollToTop from './../Components/ScrollToTop/ScrollToTop'
import FadeInSection from './../Components/FadeInSection/FadeInSection';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="flex-1 py-10 bg-gradient-to-bl from-blue-400 to-black" id="projects">
      <ScrollToTop />
      <FadeInSection>
        <div className="py-10 px-6 sm:p-14 text-center text-white">
          <h2 className="text-center text-3xl font-bold mb-2">Proyectos</h2>
          <p className="text-xl sm:text-left">
            Aquí encontrará algunos de los proyectos personales y de clientes que he creado, en donde cada proyecto contiene su propio estudio de caso.
          </p>
        </div>
      </FadeInSection>

      {ProjectsData.map((project, index) => (
        <FadeInSection key={index}>
          <div className={`grid grid-rows-1 xl:grid-cols-2 gap-2 bg-gray-50 sm:mx-14 sm:my-8 sm:rounded-3xl transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex justify-center sm:py-8 sm:px-10">
              <img src={project.imageUrl} alt={project.title} className="rounded lg:object-contain w-full h-full" />
            </div>

            <div className="px-4 py-8">
              <h2 className="text-center md:text-left sm:pt-2 text-3xl font-bold pb-4 px-4">{project.title}</h2>
              
              <p className="py-4 md:p-4">{project.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
                <button className="bg-blue-400 hover:bg-blue-600 mt-4 py-2 px-8 text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                  <a href={project.link} className="text-center" target="_blank">Visitar</a>
                </button>
                <button className="bg-blue-400 hover:bg-blue-600 mt-4 py-2 px-8 text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                  <a href={project.repo} className="text-center" target="_blank">Ver Repositorio</a>
                </button>
              </div>
            </div>
          </div>
        </FadeInSection>
      ))}
    </main>
  );
};

export default Projects;