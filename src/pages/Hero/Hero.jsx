import { FaReact, FaLaravel } from 'react-icons/fa';
import { LuArrowRight, LuDownload, LuCode, LuSparkles } from 'react-icons/lu';

export const Hero = () => {
  return (
    <section 
      id="inicio" 
      className="relative flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] w-full py-20 px-6 mt-12 mb-10 overflow-hidden"
    >
      {/* --- FONDOS Y LUCES GLASSMORPHISM PREMIUM --- */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand/20 dark:bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-sky-500/10 dark:bg-sky-500/5 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Elemento decorativo: Grid Pattern sutil en el fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Badge Superior Animado y Diferenciador */}
        <div className="group relative inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-default">
          <span className="absolute inset-0 bg-brand/5 dark:bg-brand/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 origin-center" />
          <LuSparkles className="w-4 h-4 text-brand relative z-10 animate-pulse" />
          <span className="text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 relative z-10">
            Desarrollador Web Full Stack
          </span>
        </div>

        {/* Titular Masivo e Impactante */}
        <h1 className="text-5xl md:text-7xl xl:text-[80px] font-extrabold text-zinc-900 dark:text-white tracking-tight leading-[1.05] mb-6 drop-shadow-sm">
          Transformando ideas en <br className="hidden md:block" />
          <span className="relative inline-block mt-2 md:mt-0">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-brand via-emerald-500 to-teal-400 drop-shadow-sm">
              experiencias modernas
            </span>
            {/* Subrayado decorativo que se revela en hover (requiere hover del contenedor principal o dejarlo estático) */}
          </span>
        </h1>

        {/* Presentación (Subtítulo) sin mencionar 'estudiante' */}
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10 font-light translate-y-0">
          Hola, soy <strong className="font-semibold text-zinc-900 dark:text-zinc-200">Miguelangel Monasterio</strong>. 
          Diseño y desarrollo interfaces atractivas con arquitecturas robustas y escalables, obsesionado con la calidad del código, el UX/UI y el rendimiento.
        </p>

        {/* Stack Principal Rápido (Micro-interacción) */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-300 shadow-sm hover:border-brand/40 dark:hover:border-brand/40 hover:text-brand transition-colors group">
            <FaReact className="w-5 h-5 group-hover:animate-spin-slow transition-transform" />
            <span className="text-sm font-medium">React</span>
          </div>
          <div className="flex gap-2 items-center text-zinc-300 dark:text-zinc-700">
            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-xl text-zinc-600 dark:text-zinc-300 shadow-sm hover:border-red-500/40 dark:hover:border-red-500/40 hover:text-red-500 transition-colors group">
            <FaLaravel className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
            <span className="text-sm font-medium">Laravel</span>
          </div>
        </div>

        {/* Botones de Acción (CTAs Modernos) */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          {/* CTA Principal */}
          <a 
            href="#proyectos" 
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl overflow-hidden transition-transform active:scale-95 shadow-xl hover:shadow-brand/20 dark:hover:shadow-brand/40"
          >
            {/* Efecto de relleno en hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors duration-300">
              Explorar Proyectos
              <LuArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-out" />
            </span>
          </a>

          {/* CTA Secundario - Glassmorphism */}
          <a 
            href="#contacto" 
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 backdrop-blur-xl text-zinc-900 dark:text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:-translate-y-1 active:translate-y-0"
          >
            Contactarme
          </a>
        </div>

      </div>

    </section>
  );
};
