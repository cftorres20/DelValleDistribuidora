//img categoria del inicio
import { categorias, arrayProductos } from "./catalogo.js";

import {
  renderizarCategorias,
  renderizarPromocionesInicio,
} from "./funciones.js";

const contenedorCategorias = document.getElementById("grilla-categorias");
const cate = categorias.categorias;

renderizarCategorias(cate, contenedorCategorias);

// Renderizar promociones del index

const contenedorPromociones = document.getElementById("promociones-contenedor");
const arregloProductos = arrayProductos.productos;

renderizarPromocionesInicio(arregloProductos, contenedorPromociones);

//Para el title
import { titulos } from "./titulos.js";
import { tituloDinamico } from "./funciones.js";

tituloDinamico(titulos);
