import { Link } from 'react-router-dom';
import React from 'react';
import Skills from './Skills/Skills';
import WorkExperience from './WorkExperience/WorkExperience';

const Home = () => {
  return (
    <div className="flex-1 bg-gradient-to-bl from-blue-400 to-black pt-14">
      <div className="pt-10">
      	<section className="mb-12 justify-center max-w-2xl sm:mx-8 md:mx-auto bg-gray-100 shadow-lg sm:rounded-lg p-8">
	        <div className="flex justify-center mb-6">
          <img 
          src="https://i.pinimg.com/564x/d1/35/56/d13556ec053cffc2410a682ee33436d6.jpg"
          alt="Miguelangel" 
          className="rounded w-68 h-48" 
          />
        </div>
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
	          ¡Hola, soy Miguelangel Monasterio!
	        </h2>
	        <p className="text-center text-gray-600 mb-8">
	           Un apasionado desarrollador web que se dedica a crear y gestionar sitios y aplicaciones web que no solo cumplen con su función, sino que también impulsan el éxito de los productos y servicios que representan.
	        </p>
	        <div className="flex justify-center">
	          <button className="bg-blue-400   py-3 px-10 text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
	            <Link to="/projects" className="text-center text-xl">Proyectos</Link>
	          </button>
	        </div>
	      </section>
      </div>

      <section className="py-6 bg-gradient-to-b from-gray-50 via-gray-100 to-gray-50">
        <div className="px-8 text-left sm:text-center sm:p-14 mt-0">
          <h2 className="text-3xl text-center font-bold mb-6">Sobre mi</h2>
          <p className="text-xl sm:text-center text-left">
            Soy estudiante de Ingeniería en Informática en Venezuela, apasionado por el desarrollo web y la constante innovación.
            Me mantengo actualizado en las últimas tendencias tecnológicas y disfruto de aplicar mis conocimientos en proyectos prácticos.
            Actualmente busco oportunidades para seguir creciendo profesionalmente y contribuir al desarrollo de soluciones tecnológicas que generen resultados positivos.
          </p>
        </div>

        <Skills />
      </section>
      <WorkExperience />
    </div>
  );
};

export default Home;
