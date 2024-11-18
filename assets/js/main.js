//img categoria del inicio
import { categorias } from "./catalogo.js";

import { renderizarCategorias } from "./funciones.js";

const contenedorCategorias = document.getElementById("grilla-categorias");
const cate = categorias.categorias;

renderizarCategorias(cate, contenedorCategorias);

//Para el title
import { titulos } from "./titulos.js";
import { tituloDinamico } from "./funciones.js";

tituloDinamico(titulos);
