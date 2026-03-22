import { ThemeToggle } from '../components/ThemeToggle';

export const Header = () => {
  return (
    <header className="w-full p-4 flex justify-between items-center bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="font-bold text-2xl text-zinc-900 dark:text-white tracking-tighter">
        Miguel<span className="text-sky-500">.dev</span>
      </div>
      
      <nav className="hidden md:flex gap-6 text-zinc-600 dark:text-zinc-400 font-medium">
        <a href="#proyectos" className="hover:text-sky-500 transition-colors">Proyectos</a>
        <a href="#habilidades" className="hover:text-sky-500 transition-colors">Habilidades</a>
        <a href="#contacto" className="hover:text-sky-500 transition-colors">Contacto</a>
      </nav>

      <ThemeToggle />
    </header>
  );
};