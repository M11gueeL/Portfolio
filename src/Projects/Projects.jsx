import { useEffect, useState } from 'react';
import { ProjectsData } from './ProjectsData.js'
import ScrollToTop from './../Components/ScrollToTop/ScrollToTop'
import FadeInSection from './../Components/FadeInSection/FadeInSection';

const Projects = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // small delay for entrance animation
    const t = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
  <main className="flex-1 py-14 bg-linear-to-bl from-slate-900 via-slate-800 to-black" id="projects">
      <ScrollToTop />

      <FadeInSection>
        <div className="py-10 px-6 sm:p-14 text-white max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Proyectos</h2>
          <p className="text-lg text-gray-200">Aquí encontrarás una selección de proyectos donde cada uno muestra diseño, arquitectura y código. Haz clic para ver demo o código fuente.</p>
        </div>
      </FadeInSection>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-10">
        {ProjectsData.map((project, index) => (
          <FadeInSection key={index}>
            <article className={`grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              {/* Image panel - large visual emphasis */}
              <div className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-72 sm:h-96 lg:h-[420px] object-cover transform transition duration-700 hover:scale-105"
                  />
                </a>

                {/* overlay title */}
                <div className="absolute bottom-6 left-6 bg-linear-to-r from-black/40 to-black/20 backdrop-blur-md px-4 py-2 rounded-lg text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Info panel */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-white/5 rounded-3xl p-6 md:p-8 shadow-inner relative">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                  </div>

                  {/* Project ID badge with icon */}
                  <div className="ml-4 shrink-0">
                    <div className="inline-flex items-center gap-2 bg-white/6 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <svg className="w-4 h-4 text-blue-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5v14M5 12h14" stroke="#93C5FD" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{index + 1}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4">
                  <div className="flex gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow-md transition">Ver proyecto</a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow-md transition">Ver repositorio</a>
                  </div>
                </div>
              </div>
            </article>
          </FadeInSection>
        ))}
      </div>
    </main>
  );
};

export default Projects;