let caracter;

do {
    caracter = prompt("Por favor, ingresa UN SOLO carácter:");
  } while (caracter === null || caracter.length !== 1);

function trianguloInverso() {
    let a = 10; 
    let result = "";
    for (let i = 1; i <= a; i++) {
        for (let k = 1; k <= (a - i); k++) {
            result += " ";
        }
        for (let j = 1; j <= i; j++) {
            result += caracter;
        }
        result += "<br>";
    }
    document.write(`Triangulo Inverso: <br> ${result}`);
}

// Triángulo Creciente y Decreciente (Programa 006)
function trianguloCrecienteDecreciente() {
    let b = 4; 
    let result = "";
    for (let i = 1; i <= b; i++) {
        for (let j = 1; j <= i; j++) {
            result += caracter;
        }
        result += "<br>";
    }
    // Parte decreciente
    for (let i = b - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            result += caracter;
        }
        result += "<br>";
    }
    document.write(`<br>Triangulo Creciente-Decreciente: <br> ${result}`);
}

// Medio Pinol (Programa 007)
function medioPinol() {
    let ciclos = parseInt(prompt("Introduce el número de ciclos:"));
    let result = "";
    for (let i = 1; i <= ciclos; i++) {
        for (let j = 1; j <= i; j++) {
            for (let k = 1; k <= j; k++) {
                result += caracter;
            }
            result += "<br>";
        }
    }
    document.write(`<br>Medio Pino: <br> ${result}`);
}

trianguloInverso(), trianguloCrecienteDecreciente(), medioPinol();