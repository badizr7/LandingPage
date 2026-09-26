// =========================================================
//  Script sencillo de la landing page
//  1. El botón flotante cambia el color de marca
//  2. Pone el año actual en el footer
// =========================================================

// --- 1. Color de marca ---

// Paleta de colores. Cada opción define el color normal y el oscuro
// (el que se usa al pasar el ratón por encima de un botón).
const colores = [
  { nombre: 'Azul',   brand: '#2f6df6', dark: '#1c4fd0' },
  { nombre: 'Verde',  brand: '#0ea672', dark: '#0a7a54' },
  { nombre: 'Rojo',   brand: '#e2504a', dark: '#c23b36' },
  { nombre: 'Morado', brand: '#7c4df6', dark: '#5f34c9' },
  { nombre: 'Negro',  brand: '#14161a', dark: '#000000' },
];

const boton = document.querySelector('#cambiar-color');
let indice = 0;

boton.addEventListener('click', function () {
  indice = (indice + 1) % colores.length;   // al llegar al final, vuelve al primero
  const color = colores[indice];

  // Cambiamos las variables CSS: botones, brillos y todo lo demás se actualiza solo
  document.documentElement.style.setProperty('--brand', color.brand);
  document.documentElement.style.setProperty('--brand-dark', color.dark);

  // El nombre del color aparece en el tooltip del botón
  boton.title = 'Color: ' + color.nombre;
});

// --- 2. Año actual en el footer ---

const textoFooter = document.querySelector('footer p');
const anio = new Date().getFullYear();
textoFooter.textContent = `© ${anio} Nimbus. Todos los derechos reservados.`;
