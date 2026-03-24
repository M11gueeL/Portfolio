import { LuBriefcase, LuExternalLink } from 'react-icons/lu';
import { experienceData } from '../../data/experience';

export const Experience = () => {
  return (
    <section id="experience" className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-zinc-50 dark:bg-zinc-950/50 transition-colors duration-500">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 dark:bg-brand/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/2 left-1/4 w-[400px] h-[400px] bg-sky-500/5 dark:bg-sky-500/5 blur-[120px] rounded-full pointer-events-none -ml-[200px]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-sm mb-4">
            <LuBriefcase className="w-4 h-4 text-brand" />
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-700 dark:text-zinc-300">
              Mi Trayectoria
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Experiencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-500">Laboral</span>
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-zinc-200 dark:border-zinc-800 ml-4 md:ml-6 space-y-12">
          
          {experienceData.map((job, index) => (
            <div key={job.id} className="relative pl-8 md:pl-10 group">
              {/* Timeline Marker (Dot) */}
              <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-800 border-2 border-white dark:border-zinc-950 group-hover:border-brand group-hover:bg-brand transition-colors duration-300 shadow-sm" />
              
              {/* Card Container */}
              <div className="flex flex-col bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 p-6 md:p-8 rounded-3xl hover:border-brand/30 dark:hover:border-brand/30 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.05)] hover:-translate-y-1">
                
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                    {job.role}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-brand/10 text-brand w-fit text-center">
                    {job.period}
                  </span>
                </div>
                
                {/* Company Name */}
                <div className="text-lg font-medium text-zinc-600 dark:text-zinc-400 mb-4">
                  {job.company}
                </div>
                
                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Optional Project Link */}
                {job.link && (
                  <div className="mb-6">
                    <a 
                      href={job.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 transition-transform hover:-translate-y-0.5 shadow-md active:scale-95 group/link"
                    >
                      {job.linkText}
                      <LuExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                )}
                
                {/* Technologies Pilled */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {job.technologies.map((tech, i) => {
                    const TechIcon = tech.icon;
                    return (
                      <div 
                        key={i} 
                        className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                      >
                        <TechIcon className={`w-4 h-4 ${tech.color}`} />
                        {tech.name}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
