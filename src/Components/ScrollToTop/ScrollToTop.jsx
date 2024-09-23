import { useEffect, useState } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={`
          ${isVisible ? 'opacity-100' : 'opacity-0'}
          bg-blue-500 hover:bg-blue-600
          inline-flex items-center justify-center rounded-full text-white
          transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2
          w-10 h-10 sm:w-14 sm:h-14
          shadow-lg
        `}
      >
        <i className="fas fa-arrow-up text-sm sm:text-base" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default ScrollToTop;