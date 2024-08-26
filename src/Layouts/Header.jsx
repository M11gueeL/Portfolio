import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="sm:text-xl font-bold hover:text-blue-500">Miguelangel Monasterio</h1>
        <nav className="hidden md:flex space-x-4 font-bold">
        	<Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
      		<Link to="/projects" className="text-gray-700 hover:text-blue-500">Proyectos</Link>
      		<Link to="/contact" className="text-gray-700 hover:text-blue-500">Contactarme</Link>
        </nav>
        <button onClick={toggleMenu} className="md:hidden text-gray-700 focus:outline-none">
          <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden">
          	<Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-blue-400 hover:text-white">Home</Link>
      		<Link to="/projects" className="block px-4 py-2 text-gray-700 hover:bg-blue-400 hover:text-white">Proyectos</Link>
      		<Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-blue-400 hover:text-white">Contactarme</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
