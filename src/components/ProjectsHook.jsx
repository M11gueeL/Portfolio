import { LuRocket, LuArrowRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';

export const ProjectsHook = () => {
  return (
    <section className="relative w-full py-20 px-6 overflow-hidden bg-brand/5 dark:bg-brand/5 border-y border-zinc-200/50 dark:border-zinc-800/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand/10 via-transparent to-transparent opacity-50 dark:opacity-30 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center justify-center animate-bounce duration-1000">
          <LuRocket className="w-8 h-8 text-brand" />
        </div>
        
        <h2 className="text-3xl md:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
          Soluciones digitales <span className="text-transparent bg-clip-text bg-linear-to-r from-brand to-emerald-500">que marcan la diferencia.</span>
        </h2>
        
        <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-xl">
          Descubre cómo he transformado problemas reales en soluciones digitales escalables. Echa un vistazo a mi portafolio de proyectos y plataformas completas.
        </p>

        <Link 
          to="/projects"
          className="group relative inline-flex items-center justify-center gap-3 mt-4 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl overflow-hidden transition-transform active:scale-95 shadow-xl hover:shadow-brand/20 dark:hover:shadow-brand/40"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
          <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
            Explorar todos mis proyectos
            <LuArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
          </span>
        </Link>
      </div>
    </section>
  );
};
