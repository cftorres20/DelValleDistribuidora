//img categoria del inicio
//import { categorias, arrayProductos } from "./catalogo.js";

import { cargarJSON } from "./carga-json.js";

import { titulosTienda } from "./titulos.js";

import {
  tituloDinamico,
  renderizarCategorias,
  renderizarPromocionesInicio,
} from "./funciones.js";

//---Titulo
tituloDinamico(titulosTienda);

// Función principal para inicializar la página y maneja los datos
async function inicializarPagina() {
  // Llama a la funcion cargarJSON para cargar el archivo 'categorias.json'
  //'await' se usa para esperar a que la carga del archivo termine antes de continuar
  const categoriasData = await cargarJSON("/assets/json/categorias.json");
  //Verifica si los datos fueron cargados correctamente
  if (categoriasData) {
    //Si los datos de categorias se cargaron correctamente, selecciona el contenedor de categorias en el HTML donde se va a renderizar
    const contenedorCategorias = document.getElementById("grilla-categorias");
    //Llama a la funcion renderizarCategorias para mostrar las categorias
    renderizarCategorias(categoriasData.categoria, contenedorCategorias);
  }

  // Llama a la funcion cargarJSON para cargar el archivo "./productos.json"  (PROMOCIONES)
  const productosData = await cargarJSON("/assets/json/productos.json");
  //verifica si los datos de productos fueron cargados correctamente
  if (productosData) {
    //Si los datos de productos fueron cargados correctamente, selecciona el contenedor de promociones en el HTML donde se renderizan
    const contenedorPromociones = document.getElementById(
      "promociones-contenedor"
    );
    //Llama a la funcion renderizarPromocionesInicio para mostrar las promociones
    renderizarPromocionesInicio(productosData.productos, contenedorPromociones);
  }
}

// Llamar a la función principal para iniciar el proceso de carga y renderizado
inicializarPagina();

/*
const contenedorCategorias = document.getElementById("grilla-categorias");
const cate = categorias.categorias;

renderizarCategorias(cate, contenedorCategorias);

// Renderizar promociones del index

const contenedorPromociones = document.getElementById("promociones-contenedor");
const arregloProductos = arrayProductos.productos;

renderizarPromocionesInicio(arregloProductos, contenedorPromociones);

//Para el title
import { titulosInicio } from "./titulos.js";
import { tituloDinamico } from "./funciones.js";

tituloDinamico(titulosInicio);
*/
