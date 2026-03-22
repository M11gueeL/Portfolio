import { ThemeToggle } from '../components/ThemeToggle';

export const Header = () => {
  // Lista de secciones para la navegación
  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    // CONTENEDOR FLOTANTE PRINCIPAL
    // sticky: se queda arriba. 
    // top-4Inset-x-4: crea el espacio para que 'flote' arriba y a los lados.
    // max-w-7xl mx-auto: centra el contenido en pantallas grandes.
    <header className="sticky top-6 z-50 w-full max-w-7xl mx-auto px-3 md:px-20">
      {/* CAJA DEL HEADER (CASCARÓN)
        backdrop-blur-md + bg-white/80: efecto vidrio medio transparente.
        rounded-full: elegante y moderno.
        shadow-lg: profundidad.
        border: borde sutil.
      */}
      <nav className="py-3 px-6 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md rounded-full shadow-lg border border-zinc-200 dark:border-zinc-800 transition-colors">
        <div className="flex justify-between items-center px-8">
          
          {/* 1. Izquierda: Bloque de Logo, Nombre y Título (Actualizado con tu nombre completo) */}
          <a href="#inicio" className="flex items-center gap-5 group">
            <img
              src="/logo.png"
              alt="Logo Miguelangel Monasterio"
              className="w-12 h-12 rounded-full border border-brand/20 p-1 bg-white dark:bg-zinc-900 group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-zinc-900 dark:text-white tracking-tight leading-tight">
                Miguelangel Monasterio
              </span>
              {/* Título profesional usando tu nuevo color verde oliva */}
              <span className="text-sm font-medium text-brand dark:text-brand tracking-wide">
                Desarrollador Web
              </span>
            </div>
          </a>

          {/* 2. Medio: Navegación de Escritorio (Oculta en móviles) */}
          {/* DISEÑO TIPO PÍLDORA (Como tu imagen de referencia image_062ee2.png) */}
          <div className="hidden md:flex gap-x-1 items-center bg-zinc-100/50 dark:bg-zinc-900/50 p-1.5 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                // ANIMACIÓN PROFESIONAL: hover:scale-105 hover:bg-brand
                className="px-5 py-2 rounded-full text-zinc-700 dark:text-zinc-300 hover:text-white dark:hover:text-white hover:bg-brand dark:hover:bg-brand transition-all duration-300 ease-out font-semibold text-sm hover:scale-105 hover:shadow-md active:scale-95"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* 3. Derecha: ThemeToggle */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};