var imcCalculado;
var peso;
var altura;

do {
    var input = prompt("Introduce tu peso en Kilos: ");
} while (isNaN(input) || input.trim() === "" || input === null || input <= 0);
do {
    var input2 =  prompt("Introduce tu altura en Metros: ");
} while (isNaN(input2) || input2.trim() === "" || input2 === null || input2 <= 0);

peso = Number(input);
altura = Number(input2);

function calculaIMC(peso, altura) {
    let imc = parseInt(peso)/parseFloat(altura)**2;
    imcCalculado = Math.round(imc*100)/100;
    console.log("Peso: ", peso);
    console.log("Altura: ", altura);
    console.log(imc)
    return imcCalculado;
}

function regresaData(peso, altura) {
    document.write("Los datos ingresados son:<br>Peso: " + peso + " Kilos.<br>Altura: " + altura + " Metros.");
}

document.write("Tu IMC es de: ", calculaIMC(peso,altura) + "<br>")
if (imcCalculado < 22) {
    document.write("Tu IMC es bajo, haga una dieta para subir de peso<br>");
} else if (imcCalculado <= 22 || imcCalculado <=25) {
    document.write("Tu IMC es bueno<br>");
} else if (imcCalculado > 25) {
    document.write("Tu IMC esta sobre el nivel, se recomienda hacer ejercicio<br>")
}
regresaData(peso, altura);
