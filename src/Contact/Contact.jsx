import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('manwlajr');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false); // Restablece el formulario después de 5 segundos
      }, 3000);
      return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
    }
  }, [submitted]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await handleSubmit(event);
    setSubmitted(true);
  };

  return (
    <main className="flex-1 pt-32 pb-8 bg-gradient-to-bl from-blue-400 to-black" id="contact">
      <section className="mb-12 max-w-2xl sm:mx-8 md:mx-auto bg-gray-50 shadow-lg sm:rounded-lg sm:p-8">
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Contáctame</h2>
          <p>No dude en ponerse en contacto conmigo completando y enviando el formulario a continuación y me pondré en contacto con usted lo antes posible.</p>
        </div>
        <div className="p-8 bg-gray-100 rounded">
          {submitted ? (
            <p className="text-center text-green-500 font-bold">Gracias por tu mensaje. ¡Te responderé pronto!</p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-500 text-sm font-bold mb-2">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese el asunto"
                  required
                />
                <ValidationError prefix="Subject" field="subject" errors={state.errors} />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-500 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingrese su email"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-500 text-sm font-bold mb-2">Mensaje</label>
                <textarea
                  name="message"
                  placeholder="Ingrese su mensaje"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline resize-none h-48"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>
              <div className="flex pt-6">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="bg-blue-400 rounded shadow-black-400 py-4 px-8 text-white font-bold rounded transition duration-300 ease-in-out transform hover:scale-105 shadow-md w-full md:w-auto shadow-2xl">Enviar
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Contact;