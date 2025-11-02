import React from 'react';
import { skillsData } from './skillsData';

const Skills = () => {
  return (
    <section aria-labelledby="skills-heading">
      <h3 id="skills-heading" className="text-3xl md:text-4xl font-bold mb-6 text-white">Mis habilidades</h3>

  {/* Mostrar 3 por fila en pantallas de escritorio (md+) para PC */}
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {skillsData.map((skill, i) => (
          <a
            key={i}
            href={skill.documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/6 hover:bg-white/10 rounded-xl p-6 flex flex-col items-center justify-center gap-4 text-center transition-transform transform-gpu hover:-translate-y-2 shadow-md hover:shadow-lg ring-1 ring-white/3"
            aria-label={`Documentación de ${skill.name}`}
          >
            {/* Contenedor circular con padding para que las imágenes no se recorten; la imagen usa object-contain y escala dentro */}
            <div className="w-20 h-20 sm:w-20 md:w-24 lg:w-24 rounded-full bg-white/6 flex items-center justify-center p-2">
              <img src={skill.imageUrl} alt={skill.name} className="max-w-full max-h-full object-contain" loading="lazy" />
            </div>
            <div className="text-base md:text-lg font-semibold text-white">{skill.name}</div>
            <div className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition">Ver documentación</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
