import { titulosTienda } from "./titulos.js";
import {
  tituloDinamico,
  renderizarPromocionesInicio,
  renderizarProductosTienda,
  renderizarProductoXCategoria,
} from "./funciones.js";
import { arrayProductos } from "./catalogo.js";

//---Titulo
tituloDinamico(titulosTienda);

//---RENDERIZADO DE LAS PROMOCIONES
const contenedorPromociones = document.getElementById("promociones-contenedor");
const arregloProductos = arrayProductos.productos;

renderizarPromocionesInicio(arregloProductos, contenedorPromociones);

//RENDERIZADO DE LOS PRODUCTOS DE LA TIENDA
const contenedorProductosTienda = document.getElementById("productos-venta");
renderizarProductosTienda(arregloProductos, contenedorProductosTienda);

//RENDERIZADO DE LOS PRODUCTOS DE LA TIENDA FILTRADOS POR CATEGORIA
const enlaceCategoria = document.querySelectorAll(".categoria-enlace");

enlaceCategoria.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    const idCategoria = enlace.getAttribute("data-id-categoria");
    renderizarProductoXCategoria(
      idCategoria,
      contenedorProductosTienda,
      arregloProductos
    );
  });
});
