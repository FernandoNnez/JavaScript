let pagoBase = Number(prompt("Ingresa la cantidad de Pago Base"));
let horasTrabajadas = Number(prompt("Ingresa la cantidad de horas trabajadas"));

function calcularPago(horas) {
    if (horas <= 40) {
        return pagoBase * horasTrabajadas;
    } else if (horas <= 47) {
        return (pagoBase * (horas - 40)) + ((pagoBase * 2) * horas);
    } else if (horas > 47) {
        return ((pagoBase * 40) + ((pagoBase * 2) * 7) + ((horas - 47) * (pagoBase * 3)));
    }
}
switch (true) {
    case (horasTrabajadas <= 40):
        document.write(`<br>El pago es de $${calcularPago(horasTrabajadas)} pesos, el sueldo es normal`);
        break;
    case (horasTrabajadas <= 47):
        document.write(`<br>El pago es de $${calcularPago(horasTrabajadas)} pesos, el sueldo es pago doble por hora extra`);
        break;
    case (horasTrabajadas > 47):
        console.log("hamud");
        document.write(`<br>El pago es de $${calcularPago(horasTrabajadas)} pesos, el sueldo es pago doble por hora extra más pago triple por hora extra sobre hora doble`);
        break;
}