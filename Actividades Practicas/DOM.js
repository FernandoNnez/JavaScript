//wiskas
const articulos = document.querySelectorAll('h3');
const lineas = document.querySelectorAll('hr');
const listas = document.querySelectorAll('ul li');
const listaElementos = document.querySelectorAll('#elemen li');
const enlacesElementos = document.querySelectorAll('#elemen li a');
const listaMenu = document.querySelectorAll('#menu ul li');
const enlacesMenu = document.querySelectorAll('#menu ul li a');
const imagenes = document.querySelectorAll('img');
const imagenesArticulo2 = document.querySelectorAll('.imgAr2 img');
const imagenesArticulo3 = document.querySelectorAll('#imgAr3 img');
const enlaces = document.querySelectorAll('a');
const enlacesArticulo1 = document.querySelectorAll('#text1 a');

console.log("Número de Artículos en el documento:", articulos.length);

console.log("Número de líneas divisorias en el documento:", lineas.length);

console.log("Número de elementos en listas dentro del documento:", listas.length);

console.log("Número de elementos en la 'Lista Elementos':", listaElementos.length);

enlacesElementos.forEach((enlace, index) => {
    console.log(`Código del enlace en la 'Lista Elementos', elemento ${index + 1}:`, enlace.outerHTML);
});

console.log("Número de elementos en la lista 'Menú':", listaMenu.length);

console.log("Número de enlaces en la lista 'Menú':", enlacesMenu.length);

enlacesMenu.forEach((enlace, index) => {
    console.log(`Código del enlace en la 'Lista Menú', elemento ${index + 1}:`, enlace.outerHTML);
});

console.log("Número total de imágenes en el documento:", imagenes.length);

console.log("Número de imágenes en el 'Artículo 2':", imagenesArticulo2.length);

if (imagenesArticulo2.length > 0) {
    console.log("Primera imagen en el 'Artículo 2':", imagenesArticulo2[0].outerHTML);
}

console.log("Número de imágenes en el 'Artículo 3':", imagenesArticulo3.length);

if (imagenesArticulo3.length >= 2) {
    console.log("Código de la segunda imagen en el 'Artículo 3':", imagenesArticulo3[1].outerHTML);
}

if (imagenesArticulo3.length >= 4) {
    console.log("Código de la cuarta imagen en el 'Artículo 3':", imagenesArticulo3[3].outerHTML);
}

console.log("Número total de enlaces en el documento:", enlaces.length);

console.log("Número de enlaces en el 'Artículo 1':", enlacesArticulo1.length);

enlacesArticulo1.forEach((enlace, index) => {
    console.log(`Enlace ${index + 1} en 'Artículo 1':`, enlace.outerHTML);
});
