import { titulosTienda } from "./titulos.js";
import {
  tituloDinamico,
  renderizarProductosTienda,
  renderizarProductoXCategoria,
  renderizarPromocionesTienda,
  agregarAlCarrito,
  confirmarCompra,
} from "./funciones.js";

import { cargarJSON } from "./carga-json.js";

//---Titulo
tituloDinamico(titulosTienda);

async function inicializarPagina() {
  const productosData = await cargarJSON("/assets/json/productos.json");

  const arregloProductos = productosData.productos;

  const carritoLista = document.getElementById("carrito-lista");
  const carritoTotal = document.getElementById("carrito-total");
  const navProductos = document.querySelector(".nav-productos");
  const navTotal = document.getElementById("nav-total");

  if (arregloProductos) {
    const contenedorPromociones = document.getElementById(
      "promociones-contenedor"
    );

    const contenedorProductosTienda =
      document.getElementById("productos-venta");

    renderizarPromocionesTienda(
      arregloProductos,
      contenedorPromociones,
      carritoLista,
      carritoTotal,
      (producto) =>
        agregarAlCarrito(
          producto,
          carritoLista,
          carritoTotal,
          navProductos,
          navTotal
        )
    );
    renderizarProductosTienda(arregloProductos, contenedorProductosTienda);

    contenedorProductosTienda.addEventListener("click", (e) => {
      if (e.target.classList.contains("agregar-carrito")) {
        const productoId = e.target.dataset.id;
        const producto = arregloProductos.find(
          (prod) => prod.id.toString() === productoId
        );
        if (producto) {
          agregarAlCarrito(
            producto,
            carritoLista,
            carritoTotal,
            navProductos,
            navTotal
          );
        }
      }
    });

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

  const botonComprar = document.getElementById("boton-comprar");

  botonComprar.addEventListener("click", confirmarCompra);

  //EVENTO PARA COMPRAR LOS PRODUCTOS DEL CARRITO

  document
    .getElementById("boton-comprar")
    .addEventListener("click", confirmarCompra);

  document
    .getElementById("boton-comprar-responsive")
    .addEventListener("click", confirmarCompra);
}

inicializarPagina();
