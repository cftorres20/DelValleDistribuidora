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
