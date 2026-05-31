// Ejercicio 1: Números primos entre 1 y 50
// Se usa un ciclo for para recorrer los números
// Dentro, otro ciclo verifica si el número es divisible por otro
// Si no tiene divisores, se considera primo

for (let num = 2; num <= 50; num++) {
  let esPrimo = true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      esPrimo = false;
      break;
    }
  }
  if (esPrimo) {
    console.log(num);
  }
}

// Ejercicio 2: Tabla de multiplicar personalizada
// El usuario ingresa un número y se muestra su tabla hasta el 12
// Se usa un ciclo while para repetir si el usuario desea otra tabla

let continuar = true;
while (continuar) {
  let numero = parseInt(prompt("Ingrese un número:"));
  for (let i = 1; i <= 12; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }
  continuar = confirm("¿Desea consultar otra tabla?");
}

// Ejercicio 3: Cajero automático
// El usuario inicia con un saldo y puede retirar varias veces
// Se valida que el retiro no supere el saldo disponible

const saldoInicial = 500000;
let saldo = saldoInicial;

while (saldo > 0) {
  let retiro = parseInt(prompt("Ingrese el valor a retirar:"));
  if (retiro <= saldo) {
    saldo -= retiro;
    console.log("Retiro exitoso. Saldo restante:", saldo);
  } else {
    console.log("Error: fondos insuficientes.");
  }
}

// Ejercicio 4: Promedio de notas
// Se ingresan 3 notas por cada estudiante
// Se calcula el promedio y se determina si aprueba o reprueba

for (let i = 1; i <= 5; i++) {
  let nota1 = parseFloat(prompt(`Ingrese nota 1 del estudiante ${i}:`));
  let nota2 = parseFloat(prompt(`Ingrese nota 2 del estudiante ${i}:`));
  let nota3 = parseFloat(prompt(`Ingrese nota 3 del estudiante ${i}:`));

  let promedio = (nota1 + nota2 + nota3) / 3;
  console.log(`Estudiante ${i} - Promedio: ${promedio}`);

  if (promedio >= 3.0) {
    console.log("Resultado: Aprobado");
  } else {
    console.log("Resultado: Reprobado");
  }
}
/* Ejercicio 5
Crea un programa que: simule la venta de productos. El usuario podrá registrar la 
compra de varios artículos hasta que decida no comprar más. Se debe calcular el total 
de la compra y aplicar un descuento del 10% si el valor supera los $100.000.*/

let totalCompra = 0;
let continuar = true;

while (continuar) {
    let precio = parseFloat(prompt("Ingrese el precio del producto (o 0 para terminar):"));

    if (precio === 0 || isNaN(precio)) {
        continuar = false;
    } else {
        totalCompra += precio;
    }
}

let descuento = 0;
if (totalCompra > 100000) {
    descuento = totalCompra * 0.10;
}

let precioFinal = totalCompra - descuento;

alert("Resumen de la compra:\n" +
      "Total sin descuento: $" + totalCompra.toLocaleString() + "\n" +
      "Descuento aplicado: $" + descuento.toLocaleString() + "\n" +
      "Total a pagar: $" + precioFinal.toLocaleString());



