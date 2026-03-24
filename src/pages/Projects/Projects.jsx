import { useEffect } from 'react';
import { LuFolderGit2, LuExternalLink } from 'react-icons/lu';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../../data/projects';

export const Projects = () => {  
  // Cuando se monta el componente (al cambiar de ruta), nos aseguramos de estar arriba del todo.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen pt-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-zinc-950">
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-sm mb-4">
            <LuFolderGit2 className="w-4 h-4 text-brand" />
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-700 dark:text-zinc-300">
              Portafolio Completo
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Mis <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-emerald-500">Proyectos</span>
          </h1>
          <p className="mt-4 text-center text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg font-light">
            Desde aplicaciones web completas hasta herramientas de código abierto, cada proyecto refleja mi pasión por resolver problemas reales con soluciones digitales elegantes y eficientes.
          </p>

        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
          {projectsData.map((project) => (
            <div 
              key={project.id} 
              className="group flex flex-col bg-white/60 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(16,185,129,0.1)] dark:hover:shadow-[0_20px_40px_rgb(16,185,129,0.05)]"
            >
              {/* Imagen del Proyecto con Overlay */}
              <div className="relative h-56 overflow-hidden bg-zinc-100 dark:bg-zinc-800 shrink-0 border-b border-zinc-200/50 dark:border-zinc-800/50">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-0" />
                <img 
                  src={project.image} 
                  alt={`Captura del proyecto ${project.title}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Contenido principal de la Card */}
              <div className="flex flex-col grow p-6 md:p-8">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-brand transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 mb-6 grow">
                  {project.description}
                </p>

                {/* Etiquetas de Tecnología */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((techItem, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1.5 text-xs font-medium tracking-wide bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg border border-zinc-200/50 dark:border-zinc-700/50 transition-colors hover:border-brand/30"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Acciones (Botones Condicionales) */}
                <div className="flex flex-wrap items-center gap-3 mt-auto pt-6 border-t border-zinc-100 dark:border-zinc-800/60">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-brand text-white text-sm font-semibold rounded-xl hover:bg-[#0ea5e9] transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      <LuExternalLink className="w-4 h-4" />
                      Ver Proyecto
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 text-sm font-semibold rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      <FaGithub className="w-4 h-4" />
                      Repositorio
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
