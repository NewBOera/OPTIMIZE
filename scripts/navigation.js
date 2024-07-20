function openTab(evt, tabName) {
   // Ocultar todas las pestañas
   var tabContent = document.getElementsByClassName("tab-content");
   for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
   }

   // Remover la clase "active" de todos los botones
   var tabLinks = document.getElementsByClassName("tab-link");
   for (var i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.revome("active");
   }

   // Mostrar la pestaña actual y agregar la clase "active" al botón que la abrió
   document.getElementById(tabName).style.display = "block";
   evt.currentTarget.className += " active";
}
