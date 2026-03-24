import { FaGithub, FaReact, FaLaravel } from 'react-icons/fa';
import { SiMysql, SiTailwindcss } from 'react-icons/si';
import { LuGraduationCap, LuMapPin, LuBookOpen, LuArrowRight, LuUser } from 'react-icons/lu';

export const AboutMe = () => {
  return (
    <section id="about" className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-zinc-50 dark:bg-zinc-950/50 transition-colors duration-500">
      {/* Decorative Background Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 dark:bg-brand/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center md:items-start mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-sm mb-4">
            <LuUser className="w-4 h-4 text-brand" />
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-700 dark:text-zinc-300">
              Conóceme
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight text-center md:text-left">
            Sobre <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-500">Mí</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            <p>
              ¡Hola! Soy <strong className="font-semibold text-zinc-900 dark:text-zinc-200">Miguelangel Monasterio</strong>, un apasionado desarrollador web de Venezuela. Mi aventura en la tecnología se fundamenta en la curiosidad y la capacidad de transformar lógica compleja en experiencias visuales intuitivas.
            </p>
            <p>
              Actualmente curso mi último año de <strong className="font-medium text-zinc-800 dark:text-zinc-300">Ingeniería Informática</strong> y ya cuento con el título de <strong className="font-medium text-zinc-800 dark:text-zinc-300">TSU en Informática</strong>. Esta base académica me ha brindado sólidas habilidades de ingeniería de software para resolver problemas reales.
            </p>
            <p>
              Me considero un estudiante eterno de la tecnología. Estoy en <strong className="font-medium text-brand">constante aprendizaje y actualización</strong>, asegurándome de adoptar siempre las mejores prácticas y arquitecturas en mi código. Tengo hambre de aportar valor y estoy totalmente abierto a nuevos y emocionantes proyectos.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" 
                className="group relative inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-zinc-900/20 dark:shadow-white/20 active:scale-95">
                <FaGithub className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Visitar mi GitHub</span>
                <span className="absolute inset-0 bg-zinc-800 dark:bg-zinc-200 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
              </a>
              
              <a href="#proyectos" 
                className="group inline-flex items-center gap-2 px-6 py-3 bg-white/70 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md text-zinc-900 dark:text-white font-semibold rounded-xl transition-all duration-300 hover:border-brand/50 hover:bg-brand/5 dark:hover:bg-brand/10 hover:-translate-y-1">
                Ver mis proyectos
                <LuArrowRight className="w-4 h-4 text-brand transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Bento Box Info */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Educación */}
            <div className="sm:col-span-2 p-6 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 group hover:border-brand/30 dark:hover:border-brand/30 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 dark:bg-brand/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <LuGraduationCap className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Educación</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                último año de Ingeniería Informática. TSU en Informática graduado.
              </p>
            </div>

            {/* Card 2: Ubicación */}
            <div className="p-6 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 group hover:border-brand/30 dark:hover:border-brand/30 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <LuMapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">Ubicación</h3>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Venezuela</p>
                <img 
                  src="https://flagcdn.com/w20/ve.png" 
                  alt="Bandera de Venezuela" 
                  className="w-4 h-[auto] rounded-sm object-cover"
                />
              </div>
            </div>

            {/* Card 3: Mindset */}
            <div className="p-6 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 group hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-colors shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.05)]">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <LuBookOpen className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-1">Mindset</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Aprendizaje Constante</p>
            </div>

            {/* Card 4: Stack Principal con Iconos */}
            <div className="sm:col-span-2 p-6 rounded-3xl bg-gradient-to-br from-white/60 to-white/30 dark:from-zinc-900/60 dark:to-zinc-900/30 backdrop-blur-md border border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.05)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-[40px] rounded-full group-hover:bg-brand/20 transition-colors" />
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-4 relative z-10">Arsenal Principal</h3>
              
              <div className="flex gap-4 relative z-10">
                {/* React */}
                <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-500 hover:bg-sky-500 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-help" title="React">
                  <FaReact className="w-6 h-6 group-hover/react:animate-spin-slow" />
                </div>
                {/* Tailwind */}
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-help" title="Tailwind CSS">
                  <SiTailwindcss className="w-6 h-6" />
                </div>
                {/* Laravel */}
                <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-help" title="Laravel">
                  <FaLaravel className="w-6 h-6" />
                </div>
                {/* MySQL */}
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 dark:text-blue-500 hover:bg-blue-600 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-help" title="MySQL">
                  <SiMysql className="w-7 h-7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
