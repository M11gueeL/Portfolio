import React from 'react';
import { skillsData } from './skillsData';

const Skills = () => {
  return (
    <main className="p-8">
      <h2 className="text-3xl font-bold mb-4">Mis habilidades</h2>
      <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex justify-center items-center">
            <a href={skill.documentationUrl} target="_blank" rel="noopener noreferrer">
              <img 
                src={skill.imageUrl} 
                alt={skill.name} 
                className="object-cover py-8 px-2 w-full h-42 md:h-50 lg:h-48 transition duration-300 ease-in-out transform hover:scale-125"
              />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Skills;
