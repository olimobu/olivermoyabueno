window.onload = function() {
  /* Restaurar el color de los enlaces de navegación tras :hover en móvil */
  var navLinks = document.querySelectorAll(".nav a");
  for (let index = 0; index < navLinks.length; index++) {
    navLinks[index].addEventListener("click", function(event) {
      navLinks[index].style.backgroundColor = "#0d171a";
    });
  }
  /* Introducir año actual en la información del Copyright */
  var date = new Date();
  var currentYear = date.getFullYear();
  document.getElementById("currentYear").innerText = currentYear;
};
