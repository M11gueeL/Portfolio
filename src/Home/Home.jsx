import { Link } from 'react-router-dom';
import React from 'react';
import Skills from './Skills/Skills';
import WorkExperience from './WorkExperience/WorkExperience';
import ScrollToTop from './../Components/ScrollToTop/ScrollToTop';
import FadeInSection from './../Components/FadeInSection/FadeInSection';

const Home = () => {
  return (
    <main className="min-h-screen bg-linear-to-bl from-slate-900 via-slate-800 to-black text-gray-100 pt-20">
      <ScrollToTop />

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <FadeInSection>
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-blue-200">Miguelangel Monasterio</span>
                <span className="block text-lg text-gray-300 mt-2">Frontend Developer · UI / UX</span>
              </h1>

              <p className="text-lg text-gray-300 max-w-2xl">
                Creo interfaces limpias, accesibles y con performance. Diseño experiencias que conectan usuarios con producto, y construyo frontends sólidos usando React, Tailwind y buenas prácticas.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <button onClick={() => import('../utils/downloadResume').then(m => m.default())} className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-lg transition">Descargar CV</button>
                <Link to="/projects" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white/10 hover:bg-white/20 text-white font-medium">Ver proyectos</Link>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="relative mx-auto w-full max-w-md">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/6 bg-linear-to-tr from-white/3 to-white/6">
                <img
                  src="https://i.pinimg.com/564x/d1/35/56/d13556ec053cffc2410a682ee33436d6.jpg"
                  alt="Miguelangel"
                  className="w-full object-cover h-72 sm:h-96 transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="absolute -bottom-6 left-6 bg-linear-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-lg shadow-lg text-sm">Disponible para colaborar</div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About + Skills */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="md:flex md:items-start md:gap-10">
            <div className="md:w-1/3">
              <h2 className="text-2xl font-bold mb-3">Sobre mí</h2>
              <p className="text-gray-300">
                Soy estudiante de Ingeniería en Informática en Venezuela, apasionado por el desarrollo web y la constante innovación. Busco oportunidades para crear productos con impacto.
              </p>
            </div>

            <div className="md:flex-1 mt-8 md:mt-0">
              <FadeInSection>
                <Skills />
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <FadeInSection>
          <WorkExperience />
        </FadeInSection>
      </section>
    </main>
  );
};

export default Home;
