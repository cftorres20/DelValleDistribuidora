//----Funcion para renderizar las categorias del inicio
export function renderizarCategorias(arrayCategorias, contenedorHTMl) {
  let contenidoHTML = "";

  arrayCategorias.forEach((categorias) => {
    contenidoHTML += `
      <div class="bloque-proyecto" data-id-categoria=${categorias.id}>
        <img class="imagenTendencia" src="${categorias.imagen}" alt="Sección de ${categorias.categoria}" loading="lazy">
        <div class="efecto-imagen">
          <div class="texto-imagen">${categorias.categoria}</div>
        </div>
      </div>`;
  });

  contenedorHTMl.innerHTML += contenidoHTML;

  const bloques = contenedorHTMl.querySelectorAll(".bloque-proyecto");
  bloques.forEach((bloque) => {
    bloque.addEventListener("click", () => {
      const idCategoria = bloque.getAttribute("data-id-categoria");
      localStorage.setItem("categoriaSeleccionada", idCategoria);
      window.location.href = "./tienda/index.html";
    });
  });
}

//----Funcion para modificar el title
export function tituloDinamico(titulo) {
  let i = 0;
  setInterval(() => {
    document.title = titulo[i];
    i = (i + 1) % titulo.length;
  }, 3000);
}

//----Funcion para renderizar promociones del inicio
export function renderizarPromocionesInicio(
  arrayProductos,
  contenedorPromociones
) {
  let contenidoHTML = "";

  arrayProductos.forEach((producto) => {
    if (producto.precio >= 10000) {
      let precioPromocion = producto.precio - producto.precio * 0.1;
      contenidoHTML += `
      <article class="card">
                    <div class="producto-imagen">
                        <img src=${producto.imagen} alt=${producto.nombre}
                            loading="lazy">
                    </div>
                    <div class="producto-info">
                        <span>${producto.nombre}</span>
                        <span>$${precioPromocion.toFixed(2)}</span>
                    </div>
                    <div class="btn">
                        <a href="./tienda/index.html#promociones-semana">
                            <button type="button"> Ver promociones</button>
                        </a>
                    </div>
                </article>
      `;
    }
  });

  contenedorPromociones.innerHTML = contenidoHTML;
}

//----Funcion para renderizar productos de la tienda

export function renderizarProductosTienda(
  arrayProductos,
  contenedorProductosTienda
) {
  let contenidoHTML = "";
  let categoriaActual = null;

  arrayProductos.forEach((producto, index) => {
    if (producto.idCategoria !== categoriaActual) {
      if (categoriaActual !== null) {
        contenidoHTML += `</div>`;
      }

      categoriaActual = producto.idCategoria;

      contenidoHTML += `<div class="tipo-producto">`;
    }

    contenidoHTML += `
                        <div class="producto-card">
                            <img src= ${producto.imagen} alt="${
      producto.nombre
    }"
                                loading="lazy">
                            <div class="producto-info">
                                <span class="producto-nombre">${
                                  producto.nombre
                                }</span>
                                <span class="producto-precio">$ ${producto.precio.toFixed(
                                  2
                                )}</span>
                                <button class="agregar-carrito" data-id="${
                                  producto.id
                                }">Agregar al carrito</button>
                            </div>
                        </div>                    
      `;

    if (index === arrayProductos.length - 1) {
      contenidoHTML += `</div>`;
    }
  });

  contenedorProductosTienda.innerHTML = contenidoHTML;

  //Eventos a boton de Agregar al carrito
  const botonesCarrito =
    contenedorProductosTienda.querySelectorAll(".agregar-carrito");
  botonesCarrito.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const productoId = e.target.dataset.id;
      const producto = arrayProductos.find(
        (prod) => prod.id.toString() === productoId
      );
      agregarAlCarrito(producto, carritoLista, carritoTotal);
    });
  });
}

//----Filtrar la busqueda de los productos en la tienda

export function renderizarProductoXCategoria(
  idCategoria,
  contenedor,
  productos
) {
  const productosFiltrados = productos.filter(
    (producto) => producto.idCategoria === parseInt(idCategoria)
  );

  contenedor.innerHTML = "";

  if (productosFiltrados.length > 0) {
    let contenidoHTML = `<div class="tipo-producto">`;

    productosFiltrados.forEach((producto) => {
      contenidoHTML += `<div class="producto-card">
                              <img src= ${producto.imagen} alt="${
        producto.nombre
      }"
                                  loading="lazy">
                              <div class="producto-info">
                                  <span class="producto-nombre">${
                                    producto.nombre
                                  }</span>
                                  <span class="producto-precio">$ ${producto.precio.toFixed(
                                    2
                                  )}</span>
                                  <button class="agregar-carrito" data-id="${
                                    producto.id
                                  }">Agregar al carrito</button>
                              </div>
                          </div>`;
    });

    contenidoHTML += `</div>`;

    contenedor.innerHTML = contenidoHTML;

    const botonesCarrito = contenedor.querySelectorAll(".agregar-carrito");
    botonesCarrito.forEach((boton) => {
      boton.addEventListener("click", (e) => {
        const productoId = e.target.dataset.id;
        const producto = productos.find(
          (prod) => prod.id.toString() === productoId
        );
        agregarAlCarrito(producto, carritoLista, carritoTotal); // Aca se agrega el producto al carrito
      });
    });
  }
}

//---Renderizar promociones de la TIENDA
export function renderizarPromocionesTienda(
  arrayProductos,
  contenedorPromociones,
  carritoLista,
  carritoTotal,
  agregarAlCarrito
) {
  let contenidoHTML = "";

  arrayProductos.forEach((producto) => {
    if (producto.precio >= 10000) {
      let precioPromocion = producto.precio - producto.precio * 0.1;
      contenidoHTML += `
      <article class="card">
                    <div class="producto-imagen">
                        <img src=${producto.imagen} alt=${producto.nombre}
                            loading="lazy">
                    </div>
                    <div class="producto-info">
                        <span>${producto.nombre}</span>
                        <span>$${precioPromocion.toFixed(2)}</span>
                    </div>
                    <div class="btn">
                      <button class="agregar-carrito-promocion" data-id="${
                        producto.id
                      }">Agregar al carrito</button>
                    </div>
                </article>
      `;
    }
  });

  contenedorPromociones.innerHTML = contenidoHTML;

  const botonesPromocion = contenedorPromociones.querySelectorAll(
    ".agregar-carrito-promocion"
  );

  botonesPromocion.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const productoId = e.target.dataset.id;
      const producto = arrayProductos.find(
        (prod) => prod.id.toString() === productoId
      );
      if (producto) {
        agregarAlCarrito(producto, carritoLista, carritoTotal);
      }
    });
  });
}

//--------------Funciones del carrito
export function agregarAlCarrito(producto, carritoLista, carritoTotal) {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  const productoExiste = carrito.find((prod) => prod.id === producto.id);

  if (productoExiste) {
    productoExiste.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito(carrito, carritoLista, carritoTotal);
}

export function actualizarCarrito(carrito, carritoLista, carritoTotal) {
  // Actualizo la lista del carrito
  carritoLista.innerHTML = "";
  let total = 0;

  carrito.forEach((prod, index) => {
    const item = document.createElement("li");
    item.innerHTML = `
      <img src="${prod.imagen}" alt="${
      prod.nombre
    }" class = "imagen-producto-carrito">
      <span class="cantidad-precio-carrito">x${prod.cantidad}</span>
      <span class="cantidad-precio-carrito">$${prod.precio.toFixed(2)}</span>
      <button class="eliminar-carrito" data-id="${prod.id}">Quitar</button>
    `;
    carritoLista.appendChild(item);
    total += prod.precio * prod.cantidad;

    const botonEliminar = item.querySelector(".eliminar-carrito");
    botonEliminar.addEventListener("click", () =>
      eliminarCarrito(prod.id, carrito, carritoLista, carritoTotal)
    );
  });

  carritoTotal.textContent = `Total: $${total.toFixed(2)}`;
}

export function eliminarCarrito(
  productoId,
  carrito,
  carritoLista,
  carritoTotal
) {
  const producto = carrito.find((prod) => prod.id === productoId);

  if (producto.cantidad > 1) {
    producto.cantidad--;
  } else {
    const carritoActualizado = carrito.filter((prod) => prod.id !== productoId);
    localStorage.setItem("carrito", JSON.stringify(carritoActualizado));
    actualizarCarrito(carritoActualizado, carritoLista, carritoTotal);
    return;
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito(carrito, carritoLista, carritoTotal);
}

//----Boton de confirmar compra

export function confirmarCompra() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoTotal = document.getElementById("carrito-total");

  if (carrito.length === 0) {
    mostrarToast("Carrito vacío, agrega productos.", "error");
    return;
  }

  const total = carritoTotal.textContent.replace("Total: $", "").trim();

  const confirmar = confirm(
    `El total de la compra es $${total}. ¿Deseas confirmar?`
  );

  if (confirmar) {
    mostrarToast(
      "¡Compra confirmada!\n Gracias por tu compra, regresa pronto.",
      "success"
    );

    localStorage.setItem("carrito", JSON.stringify([]));
    const carritoLista = document.getElementById("carrito-lista");
    carritoLista.innerHTML = "";
    carritoTotal.textContent = "Total: $0.00";
  } else {
    mostrarToast("La compra ha sido cancelada.", "warning");
  }
}

function mostrarToast(mensaje, tipo = "success") {
  // Eliminar cualquier toast existente
  const existingToast = document.getElementById("custom-toast");
  if (existingToast) {
    existingToast.remove();
  }

  // Crear elemento toast
  const toast = document.createElement("div");
  toast.id = "custom-toast";
  toast.style.cssText = `
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${
      tipo === "success"
        ? "rgb(76, 175, 80)"
        : tipo === "error"
        ? "rgb(248, 3, 2)"
        : "rgb(242, 198, 36)"
    };
    color: white;
    padding: 15px;
    border-radius: 5px;
    z-index: 1000;
    text-align: center;
    max-width: 300px;
    width: auto;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    white-space: pre-line;
    line-height: 1.4;
  `;

  toast.textContent = mensaje;

  // Añadir al body
  document.body.appendChild(toast);

  // Animación de entrada
  setTimeout(() => {
    toast.style.opacity = "1";
  }, 10);

  // Eliminar después de 3 segundos
  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3500);
}
