import { titulosTienda } from "./titulos.js";
import { tituloDinamico, renderizarPromocionesInicio } from "./funciones.js";
import { arrayProductos } from "./catalogo.js";

//---Titulo
tituloDinamico(titulosTienda);

//---RENDERIZADO DE LAS PROMOCIONES
const contenedorPromociones = document.getElementById("promociones-contenedor");
const arregloProductos = arrayProductos.productos;

renderizarPromocionesInicio(arregloProductos, contenedorPromociones);
