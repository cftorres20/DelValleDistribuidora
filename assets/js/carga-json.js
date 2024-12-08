export async function cargarJSON(url) {
  const respuesta = await fetch(url);
  if (!respuesta.ok) {
    console.error(`Error al cargar el archivo ${url}`);
    return null;
  }
  return await respuesta.json();
}
