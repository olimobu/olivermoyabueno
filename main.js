/* Restaurar el color de los enlaces de navegación tras :hover en móvil */

var x = document.querySelectorAll(".nav a");

for (let index = 0; index < x.length; index++) {
  x[index].addEventListener("click", function(event) {
    x[index].style.backgroundColor = "#0d171a";
  });
}
