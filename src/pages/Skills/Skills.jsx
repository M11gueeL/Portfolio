import { LuCode } from 'react-icons/lu';
import { skillsData } from '../../data/skills';

export const Skills = () => {
  return (
    <section id="skills" className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand/5 dark:bg-brand/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 -ml-[250px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-sm mb-4">
            <LuCode className="w-4 h-4 text-brand" />
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-700 dark:text-zinc-300">
              Mi Stack Tecnológico
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight text-center">
            Habilidades <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-500">y Herramientas</span>
          </h2>
          <p className="mt-4 text-center text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg font-light">
            Ecosistema de tecnologías que domino y utilizo en el día a día para crear aplicaciones robustas, escalables y performantes.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <a
                key={skill.id}
                href={skill.url}
                target="_blank"
                rel="noopener noreferrer"
                title={`Ver documentación de ${skill.name}`}
                className="group relative flex flex-col items-center justify-center gap-4 p-6 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 hover:border-brand/30 dark:hover:border-brand/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-xl hover:shadow-brand/5 dark:hover:shadow-brand/10 overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-b from-transparent to-current ${skill.color.replace('group-hover:', '')}`} />
                
                {/* Icon Container */}
                <div className="relative w-14 h-14 flex items-center justify-center">
                  <Icon className={`w-full h-full text-zinc-600 dark:text-zinc-400 transition-colors duration-300 ${skill.color}`} />
                </div>
                
                {/* Text and subtle helper */}
                <div className="flex flex-col items-center text-center">
                  <span className="font-bold text-zinc-800 dark:text-zinc-200 text-sm">{skill.name}</span>
                  <span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-400 dark:text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                    Ver Docs
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
