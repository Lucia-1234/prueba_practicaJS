// Definición de la función principal para procesar las calificaciones
function calcularPromedio(notas) {
    // Se inicializa una variable en cero para acumular la suma de las notas
    let suma = 0;

    // Ciclo que recorre el arreglo desde la posición 0 hasta el final
    for (let i = 0; i < notas.length; i++) {
        // En cada vuelta, se suma el valor de la nota actual al total acumulado
        suma = suma + notas[i];
    }

    // Se calcula el promedio dividiendo el total de la suma entre la cantidad de notas
    let promedio = suma / notas.length;
    
    // Variable para almacenar el texto de la categoría de rendimiento
    let rendimiento = "";

    // Evaluación de la primera condición: si el promedio es 4.0 o más
    if (promedio >= 4.0) {
        // Si se cumple, se asigna el nivel de rendimiento como Alto
        rendimiento = "Alto";
    } 
    // Evaluación de la segunda condición: si el promedio está entre 3.0 y 3.9
    else if (promedio >= 3.0) {
        // Si se cumple, se asigna el nivel de rendimiento como Medio
        rendimiento = "Medio";
    } 
    // Si no se cumple ninguna de las anteriores (promedio menor a 3.0)
    else {
        // Se asigna el nivel de rendimiento como Bajo
        rendimiento = "Bajo";
    }

    // La función entrega un mensaje final con el promedio y el rendimiento obtenido
    return "Promedio: " + promedio.toFixed(2) + " - Rendimiento: " + rendimiento;
}

// --- Inicio de la interacción con el usuario ---

// Se solicita al usuario la cantidad de notas y se convierte el texto a número entero
let cantidad = parseInt(prompt("¿Cuántas notas desea ingresar?"));

// Se crea un arreglo vacío para almacenar las notas que se van a ingresar
let listaDeNotas = [];

// Ciclo para solicitar cada nota una por una según la cantidad definida
for (let i = 0; i < cantidad; i++) {
    // Se pide la nota al usuario y se convierte a número decimal (float)
    let notaIngresada = parseFloat(prompt("Ingrese la nota número " + (i + 1) + ":"));
    
    // Se guarda la nota capturada dentro del arreglo listaDeNotas
    listaDeNotas.push(notaIngresada);
}

// Se llama a la función pasándole el arreglo de notas y se guarda el resultado
let resultadoFinal = calcularPromedio(listaDeNotas);

// Se muestra el resultado final en una ventana emergente en el navegador
alert(resultadoFinal);