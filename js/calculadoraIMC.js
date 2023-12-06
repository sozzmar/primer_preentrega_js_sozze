// Definición de variables
let edad = parseFloat(prompt("Por favor, ingresa tu edad"));
let peso = parseFloat(prompt("Por favor, ingresa tu peso en kilogramos"));
let altura = parseFloat(prompt("Por favor, ingresa tu altura en metros"));

// Función para calcular el IMC
function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

// Función para determinar la categoría de peso
function determinarCategoria(imc) {
    if (imc < 18.5) {
        return "Peso bajo";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else {
        return "Obesidad";
    }
} 

// Condicional para verificar los datos ingresados
if (isNaN(peso) || isNaN(altura)) {
    alert("Por favor, ingresa valores numéricos válidos");
} else {

// Ciclo de iteración para repetir el cálculo si se desea
do {
    let imc = calcularIMC(peso, altura);
    let categoria = determinarCategoria(imc);
    alert("Tu Índice de Masa Corporal (IMC) es " + imc.toFixed(2) + ". Esto indica que tienes " + categoria);
    var respuesta = confirm("¿Deseas realizar otro cálculo?");
    if (respuesta) {
        edad = parseFloat(prompt("Por favor, ingresa tu edad"));
        peso = parseFloat(prompt("Por favor, ingresa tu peso en kilogramos"));
        altura = parseFloat(prompt("Por favor, ingresa tu altura en metros"));
    }
} while (respuesta);
}