// Función para cargar un archivo JSON --> Se encarga de cargar un archivo JSON
//async indica que la función es asincronica, lo que significa que usará await para esperar el resultado de tareas que pueden tomar tiempo (como cargar datos desde una URL)
export async function cargarJSON(url) {
    //Realiza una petición a la URL especificada usando la funcion 'fetch' --> fetch hace una petición HTTP para obtener los datos del archivo ubicado en la URL que se pasa como argumento
    const respuesta = await fetch(url); //await hace que la ejecución del código espere hasta que la respuesta esté disponible (esto es necesario porque obtener datos de un archivo puede tomar tiempo).
    if (!respuesta.ok) { //Verifica si la respuesta fue exitosa
      console.error(`Error al cargar el archivo ${url}`); //Si la respuesta no fue exitosa muestra un mensaje de error en la consola
      return null; //Retorna null si hubo un error al cargar el archivo
    }
    return await respuesta.json(); //Si la respuesta fue exitosa, convierte el contenido del archivo JSON y lo retorna como un objeto JavaScript. Se usa await para asegurar que la conversion se haga antes de continuar con la ejecucion del codigo
}