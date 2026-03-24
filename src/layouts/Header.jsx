import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { 
  LuHouse, 
  LuUser, 
  LuCode, 
  LuBriefcase, 
  LuMail,
  LuMenu,
  LuX
} from 'react-icons/lu';
import { FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Evita el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Lista de secciones para la navegación con iconos
  const navLinks = [
    { name: 'Inicio', href: '/', icon: LuHouse },
    { name: 'Sobre Mí', href: '/about', icon: LuUser },
    { name: 'Habilidades', href: '/skills', icon: LuCode },
    { name: 'Experiencia', href: '/experience', icon: LuBriefcase },
    { name: 'Proyectos', href: '/projects', icon: LuBriefcase },
    { name: 'Contacto', href: '/contact', icon: LuMail },
  ];

  return (
    <>
      {/* CONTENEDOR FLOTANTE */}
      <header className="sticky top-6 z-50 w-full max-w-7xl mx-auto px-4 md:px-8">
        <nav className="py-3 px-6 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-white/40 dark:border-zinc-800/50 transition-colors duration-300">
          <div className="flex justify-between items-center relative">
            
            {/* 1. Izquierda: Logo y Título */}
            <Link to="/" className="flex items-center gap-4 group relative z-10" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/logo.png"
                alt="Logo Miguelangel Monasterio"
                className="w-11 h-11 rounded-full border border-brand/20 p-1 bg-white/80 dark:bg-zinc-900/80 group-hover:scale-105 transition-transform duration-300 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight transition-colors group-hover:text-brand dark:group-hover:text-brand">
                  Miguelangel
                </span>
                <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400 tracking-wide">
                  Desarrollador Web
                </span>
              </div>
            </Link>

            {/* 2. Medio: Navegación Limpia y Minimalista (Tablet+Desktop) */}
            <div className="hidden lg:flex gap-x-8 items-center absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="group relative flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand transition-colors duration-300 font-medium text-sm"
                  >
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                    <span>{link.name}</span>
                    
                    {/* Subrayado animado */}
                    <span className="absolute -bottom-1.5 left-1/2 w-0 h-0.5 bg-brand -translate-x-1/2 transition-all duration-300 group-hover:w-full opacity-0 group-hover:opacity-100 rounded-full"></span>
                  </Link>
                );
              })}
            </div>

            {/* 3. Derecha: ThemeToggle & Botón Menú */}
            <div className="flex items-center gap-3 z-10">
              <ThemeToggle />
              
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand group"
                aria-label="Abrir menú"
              >
                {/* Animación del icono de hamburguesa */}
                <LuMenu className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* OVERLAY DEL MENÚ MÓVIL FULLSCREEN */}
      <div 
        className={`fixed inset-0 z-100 bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-3xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col justify-between ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div 
          className={`h-full w-full flex flex-col transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            isMobileMenuOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-12 scale-95 opacity-0'
          }`}
        >
          {/* Top Bar for Mobile Menu */}
          <div className="flex justify-between items-center px-6 py-6 w-full shrink-0 border-b border-zinc-200/50 dark:border-zinc-800/50">
            {/* Logo y título duplicado para consistencia visual */}
             <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsMobileMenuOpen(false)}>
              <img
                src="/logo.png"
                alt="Logo Miguelangel"
                className="w-10 h-10 rounded-full border border-brand/20 p-1 bg-white/80 dark:bg-zinc-900/80 transition-transform duration-300 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
                  Miguelangel
                </span>
                <span className="text-[11px] font-medium text-brand tracking-wide">
                  Desarrollador Web
                </span>
              </div>
            </Link>
            
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-3 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white bg-zinc-100/50 hover:bg-zinc-200/50 dark:bg-zinc-900/50 dark:hover:bg-zinc-800/50 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand group"
              aria-label="Cerrar menú"
            >
              {/* Animación fluida de la X al cerrar/hover */}
              <LuX className="w-5 h-5 transition-transform duration-500 group-hover:rotate-90" />
            </button>
          </div>

          {/* Menú de Enlaces Elegante */}
          <div className="flex-1 flex flex-col justify-center px-10">
            <nav className="flex flex-col gap-6 w-full max-w-sm mx-auto">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    // Cascading delay para cada enlace al abrir
                    style={{ transitionDelay: isMobileMenuOpen ? `${100 + (index * 50)}ms` : '0ms' }}
                    className={`flex items-center gap-5 group transition-all duration-500 ease-out ${
                      isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                    }`}
                  >
                    <div className="flex items-center gap-6 text-3xl font-light text-zinc-600 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-all duration-300 group-hover:translate-x-3">
                      <Icon className="w-7 h-7 text-zinc-400 dark:text-zinc-500 group-hover:text-brand transition-colors" />
                      <span>{link.name}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Footer del Menú */}
          <div className="px-8 pb-10 w-full shrink-0">
            <div className="flex flex-col items-center gap-6 pt-8 border-t border-zinc-200 dark:border-zinc-800/60 max-w-sm mx-auto">
              <p className="text-center text-sm font-light leading-relaxed text-zinc-500 dark:text-zinc-400">
                Conecta conmigo en mis redes o envíame un correo. Respondo rápidamente y estoy abierto a nuevos proyectos.
              </p>
              
              {/* Redes Sociales Pulidas */}
              <div 
                className={`flex items-center justify-center gap-10 transition-all duration-700 delay-500 ${
                  isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <a href="https://github.com/M11gueeL" target="_blank" rel="noopener noreferrer" aria-label="GitHub" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-white hover:bg-brand dark:hover:bg-brand transition-all duration-300 transform hover:-translate-y-1.5 shadow-sm hover:shadow-brand/30">
                  <FaGithub className="text-xl" />
                </a>
                <a href="https://www.linkedin.com/in/miguelangel-monasterio-a7b33530b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-white hover:bg-brand dark:hover:bg-brand transition-all duration-300 transform hover:-translate-y-1.5 shadow-sm hover:shadow-brand/30">
                  <FaLinkedin className="text-xl" />
                </a>
                <a href="mailto:monasteriomiguelangel81@gmail.com" aria-label="Correo" 
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-white hover:bg-brand dark:hover:bg-brand transition-all duration-300 transform hover:-translate-y-1.5 shadow-sm hover:shadow-brand/30">
                  <FaRegEnvelope className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
