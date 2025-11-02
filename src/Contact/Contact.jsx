import React, { useState, useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ScrollToTop from './../Components/ScrollToTop/ScrollToTop';
import FadeInSection from './../Components/FadeInSection/FadeInSection';

const Contact = () => {
  const [state, handleSubmit] = useForm('manwlajr');
  const [isLoaded, setIsLoaded] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null); // 'success' | 'error' | null

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const formRef = useRef(null);

  // Watch formspree state for submission result
  useEffect(() => {
    if (!state.submitting) {
      if (state.succeeded) {
        setSubmissionResult('success');
        // clear form fields after successful submit
        try {
          formRef.current && formRef.current.reset();
        } catch (e) {
          // ignore
        }
      } else if (state.errors && state.errors.length > 0) {
        setSubmissionResult('error');
      }
    }
  }, [state.submitting, state.succeeded, state.errors]);

  // auto-hide modal after 3s
  useEffect(() => {
    if (submissionResult) {
      const t = setTimeout(() => setSubmissionResult(null), 3000);
      return () => clearTimeout(t);
    }
  }, [submissionResult]);

  const handleFormSubmit = (event) => {
    // use Formspree's handler; it updates `state` asynchronously
    handleSubmit(event);
  };

  return (
    <main className="flex-1 pt-32 pb-8 bg-linear-to-bl from-slate-900 via-slate-800 to-black" id="contact">
      <ScrollToTop />
      <FadeInSection>
        <section className={`mb-12 max-w-3xl sm:mx-8 md:mx-auto bg-white/5 backdrop-blur-sm shadow-lg rounded-2xl sm:p-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-3 text-white">Contáctame</h2>
            <p className="text-gray-300">Completa el formulario y te responderé lo antes posible. También puedes escribirme directamente a mi correo.</p>
          </div>

          <div className="p-6 sm:p-8 bg-white/3 rounded-lg">
            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-200 mb-2">Asunto</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Ingrese el asunto"
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="tu@correo.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-md border border-white/10 bg-transparent px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Cuéntame sobre tu proyecto o consulta..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full md:w-auto inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg transition transform disabled:opacity-60"
                >
                  {state.submitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </div>
            </form>
          </div>
        </section>
      </FadeInSection>

      {/* Centered modal for success / error */}
      {submissionResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSubmissionResult(null)}></div>

          <div className={`relative max-w-md w-full mx-auto rounded-2xl p-6 text-center shadow-2xl ring-1 ${submissionResult === 'success' ? 'bg-linear-to-br from-emerald-600 to-emerald-500' : 'bg-linear-to-br from-red-600 to-red-500'}`}>
            <div className="flex flex-col items-center gap-4">
              {submissionResult === 'success' ? (
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17l-5-5" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                <svg className="w-16 h-16 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}

              <h3 className="text-xl font-bold text-white">
                {submissionResult === 'success' ? 'Mensaje enviado' : 'Error al enviar'}
              </h3>

              <p className="text-white/90">
                {submissionResult === 'success'
                  ? 'Gracias por contactar. Te responderé en breve.'
                  : 'Ocurrió un error al enviar el mensaje. Por favor inténtalo nuevamente o escríbeme por correo.'}
              </p>

              <div className="mt-2">
                <button onClick={() => setSubmissionResult(null)} className="inline-flex items-center px-4 py-2 bg-white/10 text-white rounded-md">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Contact;