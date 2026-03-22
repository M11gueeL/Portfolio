import { useTheme } from '../hooks/useTheme';
// Importamos los iconos profesionales de Lucide (Sun y Moon)
import { LuSun, LuMoon } from "react-icons/lu";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full text-zinc-600 dark:text-zinc-400 hover:text-brand dark:hover:text-brand bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 transition-all group focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950"
      aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
    >
      {/* Usamos un div envoltorio para manejar la animación de rotación */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        {theme === 'light' ? (
          // Icono del Sol (Modo Claro) con animación de giro en hover
          <LuMoon className="w-5 h-5 transition-transform duration-500 group-hover:-rotate-90" />
        ) : (
          // Icono de la Luna (Modo Oscuro) con animación de giro en hover
          <LuSun className="w-5 h-5 transition-transform duration-500 group-hover:rotate-90" />
          
        )}
      </div>
    </button>
  );
};