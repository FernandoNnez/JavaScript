function calDes(total) {
    let descuento = 0;
    if (total >= 2000 && total <= 3999) {
        descuento = 0.25; 
    } else if (total >= 4000 && total <= 5999) {
        descuento = 0.40;  
    } else if (total >= 6000) {
        descuento = 0.50;  
    }
    return descuento;
}

function calTotal() {
    const iva = 0.05; 
    let productos = [];
    let numProductos = parseInt(prompt("Ingrese el número de productos:"));

    for (let i = 0; i < numProductos; i++) {
        let costo = parseFloat(prompt(`Ingrese el costo del producto ${i + 1}:`));
        productos.push(costo);
    }

    console.log("Lista de productos y costos:");
    productos.forEach((costo, index) => {
        console.log(`Producto ${index + 1}: $${costo.toFixed(2)}`);
    });

    let totalSinDesc = productos.reduce((acc, curr) => acc + curr, 0);
    console.log(`\nCosto total sin descuento aplicado ni IVA: $${totalSinDesc.toFixed(2)}`);

    let descuento = calDes(totalSinDesc);
    let totalConDesc = totalSinDesc - (totalSinDesc * descuento);
    console.log(`Costo total con descuento aplicado sin IVA: $${totalConDesc.toFixed(2)}`);

    let totalConIVA = totalConDesc + (totalConDesc * iva);
    console.log(`Costo total con descuento aplicado y con IVA: $${totalConIVA.toFixed(2)}`);
}

// Ejecutar la función
calTotal();
