/**
 * REQUERIMIENTO: Función calcularInventario
 * Realiza la operación matemática y valida el estado.
 */
function calcularInventario(inicial, vendidos, recibidos) {
    // REQUERIMIENTO: Usar operadores matemáticos
    let final = inicial - vendidos + recibidos;

    // Retornamos el resultado para usarlo fuera de la función
    return final;
}

// --- FLUJO DEL PROGRAMA ---

// 1. Entradas solicitadas (convertimos a número con Number)
let stockInicial = Number(prompt("Ingrese la cantidad inicial del inventario:"));
let unidadesVendidas = Number(prompt("Ingrese la cantidad de unidades vendidas:"));
let unidadesRecibidas = Number(prompt("Ingrese la cantidad recibida en reposición:"));

// 2. REQUERIMIENTO: Validar valores negativos con condicionales
if (stockInicial < 0 || unidadesVendidas < 0 || unidadesRecibidas < 0) {
    alert(" Error: No se permiten valores negativos en el sistema.");
} else {
    
    // 3. Procesar datos usando la función
    let inventarioFinal = calcularInventario(stockInicial, unidadesVendidas, unidadesRecibidas);

    // 4. Salidas y lógica de estado crítico
    let mensajeEstado = "";

    // REQUERIMIENTO: Identificar si es crítico (menor a 5 unidades)
    if (inventarioFinal < 5) {
        mensajeEstado = " Inventario crítico";
    } else {
        mensajeEstado = " Inventario estable";
    }

    // Mostrar resultados finales del invcentario y estado
    alert("Inventario Final: " + inventarioFinal + "\nEstado: " + mensajeEstado);
}