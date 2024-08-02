function openTab(evt, tabName) {
   // Ocultar todas las pestañas
   var tabContent = document.getElementsByClassName("tab-content");
   for (var i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
   }

   // Mostrar la pestaña actual y agregar la clase "active" al botón que la abrió
   document.getElementById(tabName).style.display = "flex";
   evt.currentTarget.className += " active";
   backToTop();
}

function backToTop() {
   window.scrollTo({ top: 0, behavior: "smooth" });
}
