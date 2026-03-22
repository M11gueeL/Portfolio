import './css/index.css' // Asegúrate de importar tu CSS aquí si Vite no lo hace por defecto en main.jsx

function App() {
  return (
    // Estas clases de Tailwind centran el texto y ponen un fondo oscuro
    <div className="flex h-screen items-center justify-center bg-zinc-900 text-white p-4">
      <div className="text-center">
        {/* Usamos text-sky-400 para probar el color y font-bold para el grosor */}
        <h1 className="text-5xl font-extrabold text-sky-400 mb-4 tracking-tight">
          ¡Hello World!
        </h1>
        <p className="text-zinc-400 text-xl">
          Vite + React + Tailwind v4 están funcionando correctamente en tu Portfolio.
        </p>
      </div>
    </div>
  )
}

export default App