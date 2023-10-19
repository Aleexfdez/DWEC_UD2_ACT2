function separarNumeros() {

    var numero = 1;
    var guardarNumeros = [];

    parseInt(numero);
    for (var i = 0; i < arguments.length; i++) {
        if (typeof (arguments[i]) == typeof (numero)) {
            guardarNumeros.push(arguments[i]);
        }
    }
    return guardarNumeros;
}

console.log(separarNumeros("Hola"));
console.log(separarNumeros("Hola", "Adiós"));
console.log(separarNumeros("Hola", "Adiós", 123));
console.log(separarNumeros("Hola", "Adiós", undefined, 22222));
console.log(separarNumeros("Hola", "Adiós", 123, "22222", 7893838, new Date()));