import { useTheme } from '../hooks/useTheme';
import { LuSun, LuMoon } from "react-icons/lu";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative overflow-hidden p-2.5 rounded-full outline-none
        transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
        group backdrop-blur-md shadow-sm hover:shadow-md active:scale-95
        ${theme === 'light' 
          ? 'bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/80 text-zinc-600 hover:text-brand' 
          : 'bg-zinc-900 hover:bg-zinc-800 border border-zinc-800/80 text-zinc-400 hover:text-brand'
        }
      `}
      aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
      title={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
    >
      {/* 
        Efecto de resplandor (Glow) sutil en hover
      */}
      <div className="absolute inset-0 w-full h-full bg-brand/10 dark:bg-brand/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />

      {/* Contenedor relativo para posicionamiento superpuesto y animación cruzada */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        
        {/* ICONO DEL SOL (Aparece en dark mode para pasar a light mode) */}
        <LuSun 
          className={`
            absolute w-5 h-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${theme === 'dark' 
              ? 'scale-100 opacity-100 rotate-0 group-hover:rotate-45 group-hover:text-brand' 
              : 'scale-0 opacity-0 -rotate-90'
            }
          `} 
        />
        
        {/* ICONO DE LA LUNA (Aparece en light mode para pasar a dark mode) */}
        <LuMoon 
          className={`
            absolute w-5 h-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]
            ${theme === 'light' 
              ? 'scale-100 opacity-100 rotate-0 group-hover:-rotate-12 group-hover:text-brand' 
              : 'scale-0 opacity-0 rotate-90'
            }
          `} 
        />
      </div>
    </button>
  );
};
