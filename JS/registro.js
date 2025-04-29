document.addEventListener("DOMContentLoaded", () => { //Asegura que el DOM esté cargado completamente antes de ejecutar el JS
    const form = document.getElementById("registroForm"); //capturamos en form el formulario a través del id registroForm

    form.addEventListener("submit", function (event) { //La función se ejecuta con el evento submit
        event.preventDefault();//permite validar desde el javascrip
        let isValid = true;//variable booleana que tiene que estar a true para validar todos los inputs

        const nombre = document.getElementById("nombre");  //con los ids de cada input los capturamos en 
        const password = document.getElementById("password");
        

        // Validación del nombre
        if (nombre.value.trim().length < 3) { // con .value sacamos el valor introduciodo.La función Trim nos limbia espacios en blanco antes y después
            isValid = false;
            alert("Nombre menor de 3 letras inválido");
        } 

       

        // Validación de la contraseña
        if (password.value.length < 6) {
            isValid = false;
            alert("Contraseña de 6 caractéres inválido");
        } 
    

        // Si el formulario es válido, enviarlo al backend (simulación)
        if (isValid) {
            const usuario = { //metemos en el objeto usuario los datos
                nombre: nombre.value.trim(),
                email: email.value.trim(),
                password: password.value.trim(),
                rol: rol.value,
            };

            console.log("Usuario registrado:", usuario);//comprobamos por cosola si el usuario ha sido registrado
            alert("Registro exitoso");
            form.reset();
        }
    });
});