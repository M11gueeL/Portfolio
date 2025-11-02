import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(v => !v);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu on navigation (useful for mobile)
  const handleNavClick = () => setIsMenuOpen(false);

  const NavItem = ({ to, children }) => (
    <NavLink
      to={to}
      onClick={handleNavClick}
      className={({ isActive }) =>
        `relative font-semibold px-3 py-2 transition-transform duration-300 transform hover:-translate-y-0.5 ${
          isActive
            ? 'text-blue-400 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-8 after:h-0.5 after:bg-blue-400'
            : 'text-gray-200 hover:text-blue-300'
        }`
      }
    >
      {children}
    </NavLink>
  );

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
  <div className="mx-auto max-w-6xl bg-linear-to-r from-gray-900/60 via-black/60 to-gray-900/60 backdrop-blur-md border border-gray-800/30 rounded-2xl shadow-2xl">
        <div className="flex items-center justify-between gap-4 p-4">
          {/* Logo */}
          <NavLink to="/" onClick={handleNavClick} className="flex items-center gap-3">
            <div className="rounded-full w-10 h-10 flex items-center justify-center bg-linear-to-br from-blue-400 via-blue-500 to-blue-700 shadow-md">
              {/* improved logo: abstract wave / M mark */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="20" height="20" rx="6" fill="#0F172A" opacity="0.08" />
                <path d="M4 16c2-4 4-8 7-8s5 4 7 8" stroke="#EFF6FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12c2-2 4-4 7-4s5 2 7 4" stroke="#BFDBFE" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-sm font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-blue-500 to-blue-600">Miguelangel Monasterio</div>
              <div className="text-[11px] text-gray-400">Frontend · UI / UX</div>
            </div>
          </NavLink>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/projects">Proyectos</NavItem>
            {/* Work removed as requested */}
            <NavItem to="/contact">Contactarme</NavItem>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a href="/resume.pdf" className="hidden md:inline-block text-sm font-medium px-4 py-2 rounded-lg bg-linear-to-r from-blue-600 to-blue-500 border border-blue-700 text-white hover:shadow-lg transition-all">Descargar CV</a>

            {/* Mobile menu button */}
            <button
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 text-gray-100 transition-transform duration-300"
            >
              {isMenuOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6l12 12" stroke="url(#g)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  <defs>
                    <linearGradient id="g" x1="0" x2="1">
                      <stop offset="0" stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="#F3F4F6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
      >
        {/* backdrop: clicking it closes the menu */}
        <div onClick={() => setIsMenuOpen(false)} className={`absolute inset-0 bg-black/60 backdrop-blur-sm`}></div>
        <div onClick={(e) => e.stopPropagation()} className={`relative min-h-full flex flex-col justify-between text-center px-6 py-8`}>
          {/* close button top-right inside overlay */}
          <button onClick={() => setIsMenuOpen(false)} aria-label="Cerrar menú" className="absolute top-6 right-6 p-2 rounded-full bg-white/6 border border-white/10 text-white">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18L18 6M6 6l12 12" stroke="#E0F2FE" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* mini header */}
          <div className="pt-6">
            <div className="flex items-center justify-center gap-3">
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-linear-to-br from-blue-500 via-blue-600 to-blue-700 shadow-md">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="2" width="20" height="20" rx="6" fill="#0F172A" opacity="0.06" />
                  <path d="M4 16c2-4 4-8 7-8s5 4 7 8" stroke="#EFF6FF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-white">Miguelangel Monasterio</div>
                <div className="text-xs text-gray-300">Frontend · UI / UX</div>
              </div>
            </div>
          </div>

          {/* body: links */}
          <div className="flex flex-col items-center justify-center gap-6">
            <NavLink to="/" onClick={handleNavClick} className="text-2xl font-bold text-white hover:text-blue-300 transition">Home</NavLink>
            <NavLink to="/projects" onClick={handleNavClick} className="text-2xl font-bold text-white hover:text-blue-300 transition">Proyectos</NavLink>
            <NavLink to="/contact" onClick={handleNavClick} className="text-2xl font-bold text-white hover:text-blue-300 transition">Contactarme</NavLink>
            <a href="/resume.pdf" onClick={handleNavClick} className="mt-2 inline-block px-8 py-3 rounded-md bg-blue-600 text-white font-semibold shadow-lg">Descargar CV</a>
          </div>

          {/* mini footer: social links */}
          <div className="mt-6">
            <p className="text-sm text-gray-300 max-w-xs mx-auto mb-4">Conecta conmigo en mis redes o envíame un correo. Respondo rápidamente y estoy abierto a nuevos proyectos.</p>
            <div className="flex items-center justify-center gap-6 mb-4">
              <a href="https://github.com/M11gueeL" target="_blank" rel="noopener noreferrer" className="text-white text-2xl"><i className="fa-brands fa-github"></i></a>
              <a href="https://www.linkedin.com/in/miguelangel-monasterio-a7b33530b" target="_blank" rel="noopener noreferrer" className="text-white text-2xl"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="mailto:monasteriomiguelangel81@gmail.com" className="text-white text-2xl"><i className="fa-regular fa-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;