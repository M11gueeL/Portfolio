import React from 'react';

const projectsData = [
  {
    title: "Proyecto 1",
    description: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Quod ullam, deserunt dicta corrupti expedita ipsa praesentium dolorum, eaque voluptas doloribus voluptatum similique blanditiis magni incidunt nobis rem sit, nulla. Nihil?",
    imageUrl: "https://assets.igovenezuela.com/imgs/64dd5abf76926977361786.jpg",
    link: "#",
    repo: "#"
  },
  {
    title: "Proyecto 1",
    description: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Quod ullam, deserunt dicta corrupti expedita ipsa praesentium dolorum, eaque voluptas doloribus voluptatum similique blanditiis magni incidunt nobis rem sit, nulla. Nihil?",
    imageUrl: "https://assets.igovenezuela.com/imgs/64dd5abf76926977361786.jpg",
    link: "#",
    repo: "#"
  },
  {
    title: "Proyecto 1",
    description: "Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Quod ullam, deserunt dicta corrupti expedita ipsa praesentium dolorum, eaque voluptas doloribus voluptatum similique blanditiis magni incidunt nobis rem sit, nulla. Nihil?",
    imageUrl: "https://assets.igovenezuela.com/imgs/64dd5abf76926977361786.jpg",
    link: "#",
    repo: "#"
  },
  // Puedes añadir más proyectos aquí
];

const Projects = () => {
  return (
    <main className="flex-1 py-10 bg-gradient-to-bl from-blue-400 to-black" id="projects">
      <div className="p-14 text-white">
        <h2 className="text-center text-3xl font-bold mb-2">Proyectos</h2>
        <p className="text-xl sm:text-left">
          Aquí encontrará algunos de los proyectos personales y de clientes que he creado, en donde cada proyecto contiene su propio estudio de caso.
        </p>
      </div>

      {projectsData.map((project, index) => (
        <div key={index} className="grid grid-rows-1 xl:grid-cols-2 gap-2 bg-gray-50 sm:mx-14 sm:my-8 md:rounded-3xl">
          
          <div className="flex justify-center md:p-12">
            <img src={project.imageUrl} alt={project.title} className="rounded object-cover w-full h-full" />
          </div>

          <div className="mt-4 p-14">
            <h2 className="text-center md:text-left text-3xl font-bold py-4 px-4">{project.title}</h2>
            
            <p className="pt-4 md:py-4 md:px-4">{project.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
              <button className="bg-blue-400 hover:bg-blue-600 mt-4 py-2 px-8 text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                <a href={project.link} className="text-center ">Visitar</a>
              </button>
              <button className="bg-blue-400 hover:bg-blue-600 mt-4 py-2 px-8 text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                <a href={project.repo} className="text-center ">Ver Repositorio</a>
              </button>
            </div>

          </div>
        </div>
      ))}
    </main>
  );
};

export default Projects;
