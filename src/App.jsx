import { ThemeToggle } from './components/ThemeToggle';
import './css/index.css';

function App() {
  return (
    // bg-white es para modo claro, dark:bg-zinc-900 para modo oscuro
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-900 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-8">
        Prueba de Modo Oscuro
      </h1>
      
      <ThemeToggle />
      
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Haz clic en el botón para cambiar manualmente el tema.
      </p>
    </div>
  );
}

export default App;