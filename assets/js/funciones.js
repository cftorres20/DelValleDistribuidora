//Funcion para renderizar las categorias del inicio
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

//Funcion para modificar el title
export function tituloDinamico(titulo) {
  let i = 0;
  setInterval(() => {
    document.title = titulo[i];
    i = (i + 1) % titulo.length;
  }, 3000);
}

//Funcion para renderizar promociones del inicio
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
                        <img src="${producto.imagen}" alt="Harina Cañuelas"
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
