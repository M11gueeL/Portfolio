import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.pageYOffset > 300);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        aria-label="Ir arriba"
        onClick={scrollToTop}
        className={`
          pointer-events-auto
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          transform transition-all duration-300 ease-out
          bg-linear-to-br from-blue-600 to-blue-500 text-white
          p-3 sm:p-4 rounded-full shadow-2xl
          flex items-center justify-center
          w-11 h-11 sm:w-14 sm:h-14
          focus:outline-none focus:ring-4 focus:ring-blue-300/40
        `}
      >
        {/* chevron up SVG - crisp and lightweight */}
        <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 15l6-6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;