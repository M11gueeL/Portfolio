import React from 'react';
import { skillsData } from './skillsData';

const Skills = () => {
  return (
    <section aria-labelledby="skills-heading">
      <h3 id="skills-heading" className="text-2xl font-bold mb-6 text-white">Mis habilidades</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skillsData.map((skill, i) => (
          <a
            key={i}
            href={skill.documentationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white/5 hover:bg-white/8 rounded-lg p-4 flex flex-col items-center gap-3 text-center transition transform hover:-translate-y-1 shadow-sm"
            aria-label={`Documentación de ${skill.name}`}
          >
            <div className="w-20 h-20 sm:w-20 md:w-24 rounded-full bg-white/6 flex items-center justify-center overflow-hidden">
              <img src={skill.imageUrl} alt={skill.name} className="w-14 h-14 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain" loading="lazy" />
            </div>
            <div className="text-sm font-semibold text-white">{skill.name}</div>
            <div className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition">Ver documentación</div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Skills;
