document.addEventListener("DOMContentLoaded", () => {//Asegura que el DOM esté cargado completamente antes de ejecutar el JS
    function loadTemplate(id, file) {//fnción para cargar los templates
        const placeholder = document.getElementById(id);
        if (placeholder) { //  Solo si existe,no todas las páginas tienen todos los templates
            fetch(file)
                .then(response => response.text())// cogemos la respuesta y la pasamos a texto
                .then(data => placeholder.innerHTML = data) // lo insertamos
                .catch(error => console.error(`Error cargando ${file}:`, error));
        }
    }
    

    loadTemplate("navbar-placeholder", "templates/navbar.html");//template del menú de navegación
    loadTemplate("footer-placeholder", "templates/footer.html");//template del footer
    loadTemplate("accesos-placeholder", "templates/accesos.html");//template de los accesos a las partes
    loadTemplate("carrusel-placeholder", "templates/carrusel.html");//template del carrusel de imagenes

});