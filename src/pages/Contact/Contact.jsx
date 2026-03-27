import { useRef, useState } from 'react';
import { LuMail, LuSend, LuUser, LuMessageSquare, LuMapPin, LuTerminal, LuCircleCheck, LuCircleAlert, LuLoaderCircle } from 'react-icons/lu';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          form.current.reset();
          
          setTimeout(() => {
            setSubmitStatus(null);
          }, 6000);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);

          setTimeout(() => {
            setSubmitStatus(null);
          }, 6000);
        }
      );
  };

  return (
    <section id="contact" className="relative w-full py-24 px-6 md:px-12 lg:px-24 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
      {/* Decorative Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand/5 dark:bg-brand/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-sm mb-4">
            <LuMail className="w-4 h-4 text-brand" />
            <span className="text-sm font-bold tracking-widest uppercase text-zinc-700 dark:text-zinc-300">
              Contacto
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Trabajemos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-emerald-500">Juntos</span>
          </h2>
          <p className="mt-4 text-center text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg font-light">
            ¿Tienes un proyecto en mente o una oportunidad de trabajo? Estoy disponible para charlar y aportar valor a tu equipo.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Bento Cards */}
          <div className="flex flex-col gap-6">
            
            {/* Info Text */}
            <div className="prose dark:prose-invert">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
                Conectemos y hagámoslo <span className="text-brand">realidad</span>.
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 font-light text-lg mb-8">
                Ya sea para un proyecto completo desde cero, mantenimiento, consultoría técnica, o simplemente para saludar y hablar de código, no dudes en escribirme.
              </p>
            </div>
            
            {/* Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
              
              {/* Email Card */}
              <a href="mailto:monasteriomiguelangel81@gmail.com" className="sm:col-span-3 group flex flex-col gap-4 p-6 bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-md rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-brand/30 dark:hover:border-brand/30 transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5">
                <div className="w-12 h-12 flex items-center justify-center bg-brand/10 dark:bg-brand/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <LuMail className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-1">Escríbeme un correo</p>
                  <p className="text-base font-bold text-zinc-900 dark:text-white truncate" title="monasteriomiguelangel81@gmail.com">
                    monasteriomiguelangel81@gmail.com
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="sm:col-span-2 group flex flex-col gap-4 p-6 bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-md rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-sky-500/30 dark:hover:border-sky-500/30 transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-500/5 cursor-default">
                <div className="w-12 h-12 flex items-center justify-center bg-sky-500/10 dark:bg-sky-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <LuMapPin className="w-6 h-6 text-sky-600 dark:text-sky-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-1">Ubicación</p>
                  <p className="text-base font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                    Venezuela
                    <img src="https://flagcdn.com/w20/ve.png" alt="Bandera de Venezuela" className="w-4 h-[auto] rounded-sm object-cover" />
                  </p>
                </div>
              </div>

              {/* Work Preference Card */}
              <div className="sm:col-span-5 group flex items-center gap-5 p-6 bg-zinc-50 dark:bg-zinc-900/40 backdrop-blur-md rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 shadow-sm cursor-default overflow-hidden relative">
                <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/5 blur-[40px] rounded-full group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-emerald-500/10 dark:bg-emerald-500/20 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <LuTerminal className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div className="relative z-10">
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium mb-0.5">Disponibilidad</p>
                  <p className="text-base font-bold text-zinc-900 dark:text-white">
                    Abierto a contrataciones Full-Time o Freelance
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Form Container */}
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 sm:p-10 bg-zinc-50/80 dark:bg-zinc-900/40 backdrop-blur-xl rounded-[2rem] border border-zinc-200/80 dark:border-zinc-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] relative overflow-hidden group/form">
            {/* Ambient inner Form Glow */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-brand/5 dark:bg-brand/10 blur-[80px] rounded-full group-hover/form:bg-brand/15 transition-colors duration-500 pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 relative z-10">
              Envíame un mensaje
            </h3>

            {/* Input: Nombre */}
            <div className="relative z-10 group">
              <LuUser className="absolute left-4 top-4 w-5 h-5 text-zinc-400 group-focus-within:text-brand transition-colors" />
              <input 
                type="text" 
                name="user_name"
                placeholder="Tu nombre completo" 
                required 
                maxLength={60}
                className="w-full bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all backdrop-blur-sm peer disabled:opacity-60" 
                disabled={isSubmitting}
              />
            </div>

            {/* Input: Correo */}
            <div className="relative z-10 group">
              <LuMail className="absolute left-4 top-4 w-5 h-5 text-zinc-400 group-focus-within:text-brand transition-colors" />
              <input 
                type="email" 
                name="user_email"
                placeholder="Tu correo electrónico" 
                required 
                maxLength={100}
                className="w-full bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all backdrop-blur-sm peer disabled:opacity-60" 
                disabled={isSubmitting}
              />
            </div>

            {/* View: Textarea */}
            <div className="relative z-10 group">
              <LuMessageSquare className="absolute left-4 top-4 w-5 h-5 text-zinc-400 group-focus-within:text-brand transition-colors" />
              <textarea 
                name="message"
                placeholder="Desarrolla tu idea o déjame tu mensaje..." 
                required 
                rows={5} 
                maxLength={1000}
                className="w-full bg-white dark:bg-zinc-950/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand transition-all backdrop-blur-sm resize-none peer disabled:opacity-60" 
                disabled={isSubmitting}
              />
            </div>

            {/* Notifications */}
            {submitStatus === 'success' && (
              <div className="relative z-10 flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-2xl text-sm font-medium animate-fade-in-up">
                <LuCircleCheck className="w-5 h-5 flex-shrink-0" />
                <p>¡Mensaje enviado con éxito! Te responderé pronto.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="relative z-10 flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 rounded-2xl text-sm font-medium animate-fade-in-up">
                <LuCircleAlert className="w-5 h-5 flex-shrink-0" />
                <p>Ocurrió un error. Por favor, inténtalo de nuevo.</p>
              </div>
            )}

            {/* Submit Action */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="group relative inline-flex items-center justify-center gap-2 w-full mt-2 px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-2xl overflow-hidden transition-all active:scale-95 shadow-md hover:shadow-brand/20 z-10 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
            >
              {!isSubmitting && <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out" />}
              
              <span className={`relative z-10 flex items-center gap-2 transition-colors duration-300 ${!isSubmitting && 'group-hover:text-white'}`}>
                {isSubmitting ? (
                  <>
                    Enviando
                    <LuLoaderCircle className="w-5 h-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Enviar Mensaje
                    <LuSend className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 ease-out" />
                  </>
                )}
              </span>
            </button>
            <p className="text-center text-xs text-zinc-500 dark:text-zinc-500 mt-2 relative z-10 font-medium">
              Tus datos están seguros y no se compartirán con terceros.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
};
