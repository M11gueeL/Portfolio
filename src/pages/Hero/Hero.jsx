export const Hero = () => {
  return (
    // Cambiamos 'min-h-screen' por 'py-20 md:py-32' (padding vertical) y arreglamos el padding lateral a 'px-6'
    <section id="inicio" className="flex flex-col items-center justify-center py-20 md:py-32 px-6 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
        Hola, soy <span className="text-sky-500">Miguel</span>
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
        Estudiante de Ingeniería Informática y desarrollador web.
      </p>
    </section>
  );
};