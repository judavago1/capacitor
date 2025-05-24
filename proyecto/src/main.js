import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


  // CODIGO AGREGSOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(sec => sec.classList.add("oculto"));
  document.getElementById(id).classList.remove("oculto");
}

document.addEventListener("DOMContentLoaded", () => {
  // Mostrar la sección 'inicio' por defecto
  mostrarSeccion('inicio');

  // Manejo del formulario
  const form = document.getElementById("form-sugerencia");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const mensaje = document.getElementById("mensaje").value;

      document.getElementById("respuesta").textContent =
        `Gracias por tu sugerencia, ${nombre}. ¡La tendremos en cuenta!`;

      this.reset();
    });
  }
});


// linkeo de productos 
function verProductos(tiendaId) {
  // Oculta todas las tiendas (si tienes más de una)
  const tiendas = document.querySelectorAll('.tienda');
  tiendas.forEach(t => t.style.display = 'none');

  // Muestra la sección de productos correspondiente
  const productos = document.getElementById('productos-' + tiendaId);
  if (productos) {
    productos.style.display = 'block';
  }
}

function volverAtras() {
  // Muestra todas las tiendas
  const tiendas = document.querySelectorAll('.tienda');
  tiendas.forEach(t => t.style.display = 'block');

  // Oculta todas las secciones de productos
  const productos = document.querySelectorAll('.productos');
  productos.forEach(p => p.style.display = 'none');
}
