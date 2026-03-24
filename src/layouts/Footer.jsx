import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/60 transition-colors duration-500 mt-auto">
      {/* Contenedor Principal */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        
        {/* Grid de 3 Columnas Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 mb-16">
          
          {/* Columna 1: Branding y Perfil */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start xl:pr-10">
            <div className="flex items-center gap-4 mb-6">
              <a href="#inicio" className="flex items-center gap-4 group">
                <img
                  src="/logo.png"
                  alt="Logo Miguelangel Monasterio"
                  className="w-12 h-12 rounded-full border border-brand/20 p-1 bg-white dark:bg-zinc-900 group-hover:scale-105 transition-transform duration-300 shadow-sm"
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight group-hover:text-brand dark:group-hover:text-brand transition-colors">
                    Miguelangel Monasterio
                  </span>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    Desarrollador Web
                  </span>
                </div>
              </a>
            </div>
            
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-sm">
              Diseño y desarrollo interfaces con enfoque en usabilidad, accesibilidad y rendimiento. Disponible para proyectos freelance y colaboraciones.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-6 tracking-wide">
              Enlaces
            </h3>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#inicio" className="text-base text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand transition-colors font-medium">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#proyectos" className="text-base text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand transition-colors font-medium">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-base text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand transition-colors font-medium">
                  Contactarme
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col md:items-end">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-6 tracking-wide md:text-right hidden md:block">
              Contacto
            </h3>
            
            <div className="flex items-center gap-6 mb-8 md:justify-end">
              <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
                className="text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand transition-all transform hover:-translate-y-1">
                <FaGithub className="text-[28px]" />
              </a>
              <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
                className="text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand transition-all transform hover:-translate-y-1">
                <FaLinkedin className="text-[28px]" />
              </a>
              <a href="mailto:tu-correo@ejemplo.com" aria-label="Correo" 
                className="text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand transition-all transform hover:-translate-y-1">
                <FaRegEnvelope className="text-[28px]" />
              </a>
            </div>
            
            <p className="text-sm text-zinc-500 dark:text-zinc-400 md:text-right">
              ¿Prefieres contacto directo?{' '}
              <a href="mailto:tu-correo@ejemplo.com" className="text-zinc-900 dark:text-zinc-200 hover:text-brand dark:hover:text-brand underline underline-offset-4 decoration-zinc-300 dark:decoration-zinc-700 hover:decoration-brand dark:hover:decoration-brand transition-all font-medium">
                Envíame un correo
              </a>
            </p>
          </div>
          
        </div>

        {/* Branding Subliminal Inferior / Copyright */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800/60 flex flex-col items-center justify-center">
          <p className="text-sm text-zinc-500 dark:text-zinc-500 text-center">
            © {new Date().getFullYear()}. Desarrollado por Miguelangel Monasterio
          </p>
          {/* Subtle gradient accent */}
          <div className="w-full max-w-sm h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent mt-5"></div>
        </div>
      </div>
    </footer>
  );
};
