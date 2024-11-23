//----Funcion para renderizar las categorias del inicio
export function renderizarCategorias(arrayCategorias, contenedorHTMl) {
  let contenidoHTML = "";

  arrayCategorias.forEach((categorias) => {
    contenidoHTML += `
      <div class="bloque-proyecto">
        <img class="imagenTendencia" src="${categorias.imagen}" alt="Sección de ${categorias.categoria}" loading="lazy">
        <div class="efecto-imagen">
          <div class="texto-imagen">${categorias.categoria}</div>
        </div>
      </div>`;
  });

  contenedorHTMl.innerHTML += contenidoHTML;
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
                        <span>$${precioPromocion}</span>
                    </div>
                    <div class="btn">
                        <button type="button">Agregar al carrito</button>
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
                                <button class="agregar-carrito">Agregar al carrito</button>
                            </div>
                        </div>                    
      `;

    if (index === arrayProductos.length - 1) {
      contenidoHTML += `</div>`;
    }
  });

  contenedorProductosTienda.innerHTML = contenidoHTML;
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
                                  <button class="agregar-carrito">Agregar al carrito</button>
                              </div>
                          </div>`;
    });

    contenidoHTML += `</div>`;

    contenedor.innerHTML = contenidoHTML;
  }
}
