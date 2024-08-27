import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-8">
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          
          <div className="mb-4 md:mb-0 max-w-md">
            <h1 className="text-3xl font-bold">Miguelangel Monasterio</h1>
            <p className="text-xs mt-2">
              Un apasionado desarrollador web que se dedica a crear y gestionar sitios y aplicaciones web que no solo cumplen con su función, sino que también impulsan el éxito de los productos y servicios que representan.         
            </p>
          </div>
          
          <div className="flex flex-col items-start md:items-center">
            <h1 className="text-3xl font-bold mb-2">Social</h1>
            <ul className="flex space-x-4 text-xl">
              <li><a href="https://www.linkedin.com/in/miguelangel-monasterio-a7b33530b"><i className="fa-brands fa-linkedin-in"></i></a></li>
              <li><a href="https://github.com/M11gueeL"><i className="fa-brands fa-github"></i></a></li>
              <li><a href="mailto:monasteriomiguelangel81@gmail.com" ><i className="fa-regular fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 md:mt-12">
          <hr className="border-t border-white opacity-30 mb-4" />
          <div className="text-center">
            <p className="text-sm">© Copyright 2024. Hecho por Miguelangel Monasterio</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
