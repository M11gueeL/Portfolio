import { useTheme } from '../hooks/useTheme';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-medium transition-colors"
    >
      {theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}
    </button>
  );
};