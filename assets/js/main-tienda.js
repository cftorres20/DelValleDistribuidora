import { titulosTienda } from "./titulos.js";
import {
  tituloDinamico,
  renderizarPromocionesInicio,
  renderizarProductosTienda,
  renderizarProductoXCategoria,
  renderizarPromocionesTienda,
} from "./funciones.js";
//import { arrayProductos } from "./catalogo.js";

import { cargarJSON } from "./carga-json.js";

//---Titulo
tituloDinamico(titulosTienda);

async function inicializarPagina() {
  const productosData = await cargarJSON("/assets/json/productos.json");

  //Guardo el arreglo en una constante
  const arregloProductos = productosData.productos;

  if (arregloProductos) {
    //Renderizo promociones TIENDA
    const contenedorPromociones = document.getElementById(
      "promociones-contenedor"
    );

    renderizarPromocionesTienda(arregloProductos, contenedorPromociones);

    //Renderizo productos TIENDA
    const contenedorProductosTienda =
      document.getElementById("productos-venta");

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

    //FILTRADO DE PRODUCTOS POR CATEGORIA DESDE EL INDEX

    const idCategoriaSeleccionada = localStorage.getItem(
      "categoriaSeleccionada"
    );

    const contenedorProductosTiendaBuscado =
      document.getElementById("productos-venta");

    if (idCategoriaSeleccionada) {
      renderizarProductoXCategoria(
        idCategoriaSeleccionada,
        contenedorProductosTiendaBuscado,
        arregloProductos
      );

      localStorage.removeItem("categoriaSeleccionada");
    } else {
      renderizarProductosTienda(arregloProductos, contenedorProductosTienda);
    }
  }
}

inicializarPagina();

/*//---RENDERIZADO DE LAS PROMOCIONES
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

//FILTRADO DE PRODUCTOS POR CATEGORIA DESDE EL INDEX
const idCategoriaSeleccionada = localStorage.getItem("categoriaSeleccionada");

const contenedorProductosTiendaBuscado =
  document.getElementById("productos-venta");

if (idCategoriaSeleccionada) {
  renderizarProductoXCategoria(
    idCategoriaSeleccionada,
    contenedorProductosTiendaBuscado,
    arregloProductos
  );

  localStorage.removeItem("categoriaSeleccionada");
} else {
  renderizarProductosTienda(arregloProductos, contenedorProductosTienda);
}
*/
