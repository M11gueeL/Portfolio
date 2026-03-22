export const Footer = () => {
  return (
    <footer className="w-full p-6 text-center text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 transition-colors mt-auto">
      <p>© {new Date().getFullYear()} Miguel. Todos los derechos reservados.</p>
    </footer>
  );
};