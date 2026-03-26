/* EJERCICIO 7: REGISTRO DINAMICO DE PRODUCTOS
Meta: Permitir el registro de multiples productos sin duplicados.
Tecnica: Parametros REST (...) y validacion manual.
*/

//ponemos rest como parametro de la funcion para que este lo que haga es coger las variables sueltas y agregarlas a una lista
function registrarProductos(...productos) {
    const listaLimpia = [];

    //usamos for ya que necesitamos recorrer todo un arreglo y el .lengt se usa para que el bucle vea la longitud de este arreglo
    for (let i = 0; i < productos.length; i++) {
        const nombre = productos[i];

        // El metodo .includes revisa si el nombre ya existe en 'listaLimpia',Si NO existe (!), lo agregamos. Si ya existe, el programa lo ignora parq eu no hayan duplicados
        if (nombre !== "" && !listaLimpia.includes(nombre)) {
            //si cumple la condicion agrega el producto(nombre) a lista limpia
            listaLimpia.push(nombre);
        //si esta vacio o duplicado lo omite y manda un mensaje el cual le indica al usuario que ya esta
        } else if (nombre !== "") {
            alert(`Aviso: "${nombre}" ya esta registrado. Se omitira el duplicado.`);
        }
    }

    // Retornamos el arreglo final sin duplicados
    return listaLimpia;
}


//creamos una funcion que llevara los datos los cuales le pediremos al usuario
function iniciarPrograma() {


    const entradasTemporales = [];
    let finalizar = false;

    while (!finalizar) {
        let producto = prompt(`Ingrese productos. Escriba 'fin' para terminar.
Producto: `);

        if (producto.toLowerCase() === "fin") {
            finalizar = true;
        } else {
            // Guardamos todo lo que el usuario escribe en una bolsa temporal.
            entradasTemporales.push(producto);
        }
    }

    // usamos spread ya que si pasaramos 'entradasTemporales' solo, la funcion recibiria un solo arreglo Al usar ..., rompemos el arreglo y enviamos los nombres sueltos para que el parametro REST los reciba bien.
    const resultadoFinal = registrarProductos(...entradasTemporales);

    alert(`Lista final de productos: ${resultadoFinal}`);
}

// Arrancamos el ejercicio
iniciarPrograma();