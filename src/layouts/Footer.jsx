import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';
import { LuArrowRight } from 'react-icons/lu';

export const Footer = () => {
  return (
    <footer className="relative w-full mt-auto overflow-hidden text-zinc-900 dark:text-zinc-100">
      {/* --- EFECTOS DE FONDO PARA RESPALDAR EL GLASSMORPHISM --- */}
      {/* Luces sutiles con blur para crear el efecto cristal */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand/10 dark:bg-brand/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-brand/5 dark:bg-brand/10 blur-[100px] rounded-full pointer-events-none" />
      
      {/* Capa de Cristal principal (Superpuesta a las luces) */}
      <div className="absolute inset-0 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-t border-white/60 dark:border-white/5 pointer-events-none transition-colors duration-500" />

      {/* Contenedor Principal (Contenido por encima del cristal) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-8">
        
        {/* Grid de Columnas Responsivo */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12 mb-16">
          
          {/* Columna 1: Branding y Perfil */}
          <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start xl:pr-10">
            <a href="#inicio" className="flex items-center gap-4 group mb-7">
              <div className="relative">
                {/* Glow del Logo al hacer hover */}
                <div className="absolute inset-0 bg-brand/40 blur-md rounded-full scale-50 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <img
                  src="/logo.png"
                  alt="Logo Miguelangel"
                  className="relative w-14 h-14 rounded-full border border-brand/20 p-1 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm group-hover:scale-105 transition-all duration-300 shadow-sm"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 group-hover:to-brand dark:group-hover:to-brand transition-all duration-300">
                  Miguelangel
                </span>
                <span className="text-sm font-medium text-brand tracking-wide">
                  Desarrollador Web                 
                </span>
              </div>
            </a>
            
            <p className="text-[15px] leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-md mb-8">
              Diseñando y desarrollando interfaces web con un alto enfoque en la estética, usabilidad y rendimiento.
            </p>

            {/* Etiqueta de Disponibilidad (Trend Profesional) */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand"></span>
              </span>
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 tracking-wide uppercase">
                Disponible para nuevos proyectos
              </span>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos (Efecto Nav Elegante) */}
          <div className="md:col-span-3 lg:col-span-2">
            <h3 className="text-[13px] font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-200 mb-6 relative inline-block">
              Navegación
              <span className="absolute -bottom-2 left-0 w-4 h-0.5 bg-brand rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4 mt-2">
              {['Inicio', 'Sobre Mí', 'Habilidades', 'Proyectos'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '-')}`} 
                    className="group flex items-center gap-2 text-[15px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium"
                  >
                    <span className="relative overflow-hidden pb-1">
                      {link}
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto y Redes */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col md:items-end">
            <h3 className="text-[13px] font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-200 mb-6 relative inline-block md:text-right hidden md:block">
              Redes Sociales
            </h3>
            
            <div className="flex items-center gap-4 mb-8 md:justify-end mt-2">
              {[
                { icon: FaGithub, href: "https://github.com/tu-usuario", label: "GitHub" },
                { icon: FaLinkedin, href: "https://linkedin.com/in/tu-usuario", label: "LinkedIn" },
                { icon: FaRegEnvelope, href: "mailto:tu-correo@ejemplo.com", label: "Correo" }
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    aria-label={social.label} 
                    className="relative group flex items-center justify-center w-[46px] h-[46px] rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-sm overflow-hidden"
                  >
                    {/* Fondo animado que se llena hacia arriba */}
                    <span className="absolute inset-x-0 bottom-0 h-0 bg-brand/90 group-hover:h-full transition-all duration-300 ease-out z-0" />
                    <Icon className="text-xl relative z-10 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
            
            <a 
              href="mailto:tu-correo@ejemplo.com" 
              className="group inline-flex items-stretch gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors font-medium border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 px-4 py-2 rounded-xl bg-transparent hover:bg-white/40 dark:hover:bg-zinc-900/40 backdrop-blur-sm md:mr-[-16px]"
            >
              ¿Charlamos por correo? 
              <LuArrowRight className="w-4 h-4 text-brand transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
            </a>
          </div>
          
        </div>

        {/* Separador y Copyright */}
        <div className="pt-8 border-t border-zinc-200/60 dark:border-zinc-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-zinc-500 dark:text-zinc-500 font-medium tracking-wide">
            © {new Date().getFullYear()} Miguelangel Monasterio
          </p>
          <p className="text-[13px] text-zinc-500 dark:text-zinc-500 font-medium flex items-center gap-1.5">
            Creado con 
            <span className="text-brand">♥</span>
            y mucho código.
          </p>
        </div>
      </div>
    </footer>
  );
};
