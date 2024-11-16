import { categorias } from "./catalogo.js";

import { renderizarCategorias } from "./funciones.js";

const contenedorCategorias = document.getElementById("grilla-categorias");
const cate = categorias.categorias;

renderizarCategorias(cate, contenedorCategorias);
