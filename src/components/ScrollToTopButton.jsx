import { useState, useEffect } from 'react';
import { LuArrowUp } from 'react-icons/lu';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando la página baje más de 300px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] p-3 rounded-full bg-zinc-900/90 dark:bg-white/90 text-white dark:text-zinc-900 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10 dark:border-zinc-900/10 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-110 hover:bg-brand dark:hover:bg-brand hover:text-white dark:hover:text-white hover:shadow-brand/30 group overflow-hidden ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
      }`}
    >
      <LuArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
      
      {/* Efecto de brillo sutil en el hover */}
      <span className="absolute inset-0 rounded-full border border-white/0 group-hover:border-white/20 transition-colors duration-300"></span>
    </button>
  );
};
