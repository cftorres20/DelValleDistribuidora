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
const numeroCategoria = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

numeroCategoria.forEach((idCategoria) => {
  const enlace = document.getElementById(`categoria-${idCategoria}`);
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    renderizarProductoXCategoria(
      idCategoria,
      contenedorProductosTienda,
      arregloProductos
    );
  });
});
