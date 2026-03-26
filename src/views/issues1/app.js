/**
 * REQUERIMIENTO: Función que recibe el arreglo y el nombre a validar.
 * Aplica el método de búsqueda .includes()
 */
function validarAprendiz(lista, nombreBuscar) {
    // Retorna true si el nombre está en el arreglo, false si no.
    return lista.includes(nombreBuscar);
}

// --- FLUJO DEL PROGRAMA (Entradas solicitadas) ---

// 1. Entrada: Cantidad de aprendices
let cantidad = parseInt(prompt("Ingrese la cantidad de aprendices:"));
let aprendices = [];

// 2. Entrada: Nombre de cada aprendiz
for (let i = 0; i < cantidad; i++) {
    let nombre = prompt("Ingrese el nombre del aprendiz " + (i + 1) + ":");
    aprendices.push(nombre); // Almacenar en el arreglo
}

// 3. Entrada: Nombre a validar
let nombreAValidar = prompt("Ingrese el nombre que desea validar:");

// 4. Salida: Mensaje indicando si está inscrito o no
if (validarAprendiz(aprendices, nombreAValidar)) {
    alert(" El aprendiz '" + nombreAValidar + "' está inscrito.");
} else {
    alert(" El aprendiz '" + nombreAValidar + "' no está inscrito.");
}