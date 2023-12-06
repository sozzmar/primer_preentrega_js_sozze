// Definición de variables
let peso = parseFloat(prompt("Por favor, ingresa tu peso en kilogramos"));
let altura = parseFloat(prompt("Por favor, ingresa tu altura en metros"));

// Función para calcular el IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

// Condicional para verificar los datos ingresados
if (isNaN(peso) || isNaN(altura)) {
    alert("Por favor, ingresa valores numéricos válidos");
} else {
    // Ciclo de iteración para repetir el cálculo si se desea
    do {
        let imc = calcularIMC(peso, altura);
        alert("Tu Índice de Masa Corporal (IMC) es " + imc.toFixed(2));
        var respuesta = confirm("¿Deseas realizar otro cálculo?");
        if (respuesta) {
            peso = parseFloat(prompt("Por favor, ingresa tu peso en kilogramos"));
            altura = parseFloat(prompt("Por favor, ingresa tu altura en metros"));
        }
    } while (respuesta);
}