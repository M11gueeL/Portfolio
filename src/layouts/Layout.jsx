import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    // min-h-screen asegura que el footer siempre se quede abajo aunque haya poco contenido
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 transition-colors duration-300 font-sans">
      <Header />
      
      {/* Aquí es donde Outlet "inyecta" el contenido de tus páginas (Hero, Proyectos, etc) */}
      <main className="flex-grow flex flex-col">
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
};