export default async function downloadResume(filename = 'Miguelangel_Monasterio_CV.pdf') {
  try {
    const res = await fetch('/resume.pdf');
    if (!res.ok) {
      throw new Error(`El servidor respondió con código ${res.status}`);
    }

    const contentType = res.headers.get('content-type') || '';
    if (!contentType.toLowerCase().includes('pdf')) {
      throw new Error(`Respuesta inesperada (content-type=${contentType})`);
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  } catch (err) {
    // Friendly fallback: alert + console
    console.error('Error downloading resume:', err);
    window.alert('No se pudo descargar el CV. Asegúrate de que el archivo /resume.pdf exista en la carpeta public y de que el servidor esté corriendo. Detalles: ' + err.message);
  }
}
