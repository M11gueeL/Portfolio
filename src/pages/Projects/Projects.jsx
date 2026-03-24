import { useEffect } from 'react';
import { LuFolderGit2 } from 'react-icons/lu';

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
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white tracking-tight">
            Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-500">Proyectos</span>
          </h1>
          
        </div>
      </div>
    </div>
  );
};
