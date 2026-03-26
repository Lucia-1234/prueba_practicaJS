/* Un catálogo de cursos necesita un sistema flexible de búsqueda que permita filtrar según
diferentes criterios definidos por un callback (categoría, duración o coincidencia en el
nombre). */

// Definimos la funcion que recibe la lista y el callback 
function buscarCursos(catalogo, callback) {
    // .filter(callback) recorre el catalogo, si el callback es verdadero, el curso se guarda en el nuevo arreglo.
    return catalogo.filter(callback);
}

//creamos la funcion que recibira los datos
function ejecutarSistemaCursos() {
    const cursos = [];

    // Pedimos al usuario la cantidad de cursos y lo convertimos a numero.
    const cantidad = parseInt(prompt("¿Cuantos cursos desea registrar?"));

    // usamos un ciclo para llenar nuestro catalogo segun la cantidad ingresada
    for (let i = 0; i < cantidad; i++) {
        alert("Registro del curso numero " + (i + 1));
        
        // Creamos un objeto con los datos cque recibimos del usuario
        const nombre = prompt("Nombre del curso:");
        const categoria = prompt("Categoria (Desarrollo, Diseño, Negocios):");
        const duracion = parseInt(prompt("Duracion en horas:"));

        // Guardamos el objeto en nuestro arreglo global
        cursos.push({ nombre, categoria, duracion });
    }


    // Mostramos las opciones de busqueda al usuario.
    const menu = "Seleccione filtro:\n1. Desarrollo\n2. Mas de 20 horas\n3. Buscar por nombre";
    const opcion = prompt(menu);
    
    let resultados = [];

    // Evaluamos la opcion para definir que hara el CALLBACK
    if (opcion === "1") {
        // enviamos una función a un parámetro (que internamente se guarda en una variable llamada callback). La función buscarCursos recibe esta y la aplica cuando la necesita.
        resultados = buscarCursos(cursos, (c) => c.categoria.toLowerCase() === "desarrollo");
    } 
    else if (opcion === "2") {
        // El callback (c) verifica si el numero de horas es mayor a 20.
        resultados = buscarCursos(cursos, (c) => c.duracion > 20);
    } 
    else if (opcion === "3") {
        const texto = prompt("Escriba el nombre a buscar:").toLowerCase();
        // El callback (c) busca si el texto ingresado esta contenido en el nombre.
        resultados = buscarCursos(cursos, (c) => c.nombre.toLowerCase().includes(texto));
    }

    // Si hay resultados, los mostramos. Si no, avisamos con un alert.
    if (resultados.length > 0) {
        // alert(resultados);
    
        // Tambien mostramos un resumen en alert para el usuario
        let resumen = "Cursos encontrados:\n";
        resultados.forEach(curso => {
            resumen += "- " + curso.nombre + " (" + curso.duracion + "h)\n";
        });
        alert(resumen);

    } else {
        alert("No se encontraron coincidencias.");
    }
}

// Ejecutamos la funcion principal
ejecutarSistemaCursos();