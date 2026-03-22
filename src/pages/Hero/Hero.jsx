export const Hero = () => {
  return (
    <section id="inicio" className="flex flex-col items-center justify-center min-h-screen text-center p-6 md:p-12">
      <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-6">
        Hola, soy <span className="text-sky-500">Miguel</span>
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
        Estudiante de Ingeniería Informática y desarrollador.
      </p>
    </section>
  );
};