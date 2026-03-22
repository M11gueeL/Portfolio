export const Hero = () => {
  return (
    // Corregido: py-20 md:py-32, px-6 (sin py redundante)
    <section id="inicio" className="flex flex-col items-center justify-center py-20 md:py-32 px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
        Hola, soy <span className="text-brand">Miguelangel</span> {/* Cambiado: text-brand */}
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-10">
        Estudiante de Ingeniería Informática y desarrollador Full-Stack apasionado por crear experiencias web modernas e innovadoras.
      </p>
      
      {/* Botones de ejemplo actualizados con el color de la marca */}
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-brand hover:bg-brand/90 text-white font-semibold rounded-lg transition-colors">
          Ver Proyectos
        </button>
        <button className="px-6 py-3 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-300 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-lg transition-colors">
          Contactarme
        </button>
      </div>
    </section>
  );
};