import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="pt-12 pb-8 bg-linear-to-bl from-slate-900 via-slate-800 to-black text-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand / About */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center shadow-md">
                <img src="/icons/MiguelangelLogo.png" alt="Miguelangel logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Miguelangel Monasterio</h3>
                <p className="text-sm text-gray-400">Frontend Developer · UI/UX</p>
              </div>
            </div>

            <p className="mt-4 text-sm text-gray-300 max-w-sm">Diseño y desarrollo interfaces con enfoque en usabilidad, accesibilidad y rendimiento. Disponible para proyectos freelance y colaboraciones.</p>

            <div className="mt-6">
              <button onClick={() => import('../utils/downloadResume').then(m => m.default())} className="inline-flex download-cv-btn items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-md font-semibold shadow-md">Descargar CV</button>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex justify-start md:justify-center">
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="text-gray-300 hover:text-white transition">Inicio</Link></li>
                <li><Link to="/projects" className="text-gray-300 hover:text-white transition">Proyectos</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition">Contactarme</Link></li>
              </ul>
            </div>
          </div>

          {/* Social / Contact */}
          <div className="flex flex-col items-start md:items-end">
            <h4 className="text-lg font-semibold text-white mb-3">Contacto</h4>

            <div className="flex items-center gap-3 text-gray-300">
              <a href="https://github.com/M11gueeL" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-2xl">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/miguelangel-monasterio-a7b33530b" target="_blank" rel="noopener noreferrer" className="hover:text-white transition text-2xl">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="mailto:monasteriomiguelangel81@gmail.com" className="hover:text-white transition text-2xl">
                <i className="fa-regular fa-envelope"></i>
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-400">¿Prefieres contacto directo? <a className="text-white underline" href="mailto:monasteriomiguelangel81@gmail.com">Envíame un correo</a></p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          <div className="mb-2">© {new Date().getFullYear()}. Hecho por Miguelangel Monasterio</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
