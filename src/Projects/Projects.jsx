import { ProjectsData } from './ProjectsData.js'

const Projects = () => {
  return (
    <main className="flex-1 py-10 bg-gradient-to-bl from-blue-400 to-black" id="projects">
      <div className="py-10 px-2 sm:p-14 text-center text-white">
        <h2 className="text-center text-3xl font-bold mb-2">Proyectos</h2>
        <p className="text-xl sm:text-left">
          Aquí encontrará algunos de los proyectos personales y de clientes que he creado, en donde cada proyecto contiene su propio estudio de caso.
        </p>
      </div>

      {ProjectsData.map((project, index) => (
        <div key={index} className="grid grid-rows-1 xl:grid-cols-2 gap-2 bg-gray-50 sm:mx-14 sm:my-8 sm:rounded-3xl">
          
          <div className="flex justify-center sm:py-8 sm:px-10">
            <img src={project.imageUrl} alt={project.title} className="rounded object-contain w-full h-full" />
          </div>

          <div className="px-14 py-6">
            <h2 className="text-center md:text-left sm:pt-2 text-3xl font-bold pb-4 px-4">{project.title}</h2>
            
            <p className="pt-4 md:p-4">{project.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3">
              <button className="bg-blue-400 hover:bg-blue-600 mt-4 py-2 px-8 text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                <a href={project.link} className="text-center" target="_blank">Visitar</a>
              </button>
              <button className="bg-blue-400 hover:bg-blue-600 mt-4 py-2 px-8 text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md">
                <a href={project.repo} className="text-center" target="_blank">Ver Repositorio</a>
              </button>
            </div>

          </div>
        </div>
      ))}
    </main>
  );
};

export default Projects;
