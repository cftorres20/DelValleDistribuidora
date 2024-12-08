import { cargarJSON } from "./carga-json.js";

import { titulosTienda } from "./titulos.js";

import {
  tituloDinamico,
  renderizarCategorias,
  renderizarPromocionesInicio,
} from "./funciones.js";

//---Titulo
tituloDinamico(titulosTienda);

async function inicializarPagina() {
  const categoriasData = await cargarJSON("/assets/json/categorias.json");

  if (categoriasData) {
    const contenedorCategorias = document.getElementById("grilla-categorias");

    renderizarCategorias(categoriasData.categoria, contenedorCategorias);
  }

  const productosData = await cargarJSON("/assets/json/productos.json");

  if (productosData) {
    const contenedorPromociones = document.getElementById(
      "promociones-contenedor"
    );

    renderizarPromocionesInicio(productosData.productos, contenedorPromociones);
  }
}

inicializarPagina();
