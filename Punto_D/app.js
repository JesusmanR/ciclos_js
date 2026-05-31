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


/* Ejercicio 6
Crea un programa que: genere un número aleatorio entre 1 y 20. El usuario intentará 
adivinarlo y el ciclo repetirá los intentos hasta que lo logre. Cada vez que falle, 
el programa debe indicar si el número buscado es mayor o menor que el ingresado.
*/

const numeroSecreto = Math.floor(Math.random() * 20) + 1;

let intento;
let encontrado = false;

while (!encontrado) {
    intento = parseInt(prompt("Adivina el número (entre 1 y 20):"));

    if (intento === numeroSecreto) {
        alert("🎉 ¡Correcto! El número era " + numeroSecreto);
        encontrado = true;
    } else if (intento < numeroSecreto) {
        alert("❌ El número secreto es mayor que " + intento);
    } else if (intento > numeroSecreto) {
        alert("❌ El número secreto es menor que " + intento);
    } else {
        alert("⚠️ Ingresa un número válido.");
    }
}


/* Ejercicio 7
Crea un programa que: permita al usuario ingresar 10 números. Al final, muestra 
cuántos fueron pares y cuántos impares. */

let pares = 0;
let impares = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseInt(prompt("Ingrese el número " + i + ":"));

    if (isNaN(numero)) {
        alert("⚠️ Valor inválido, se contará como 0");
        numero = 0;
    }

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}

alert("Resultados:\n" +
      "Cantidad de números pares: " + pares + "\n" +
      "Cantidad de números impares: " + impares);


/* Ejercicio 8
Crea un programa que: solicite un usuario y contraseña. El programa debe permitir 
hasta 3 intentos; si el usuario falla en todos, mostrar un mensaje de “Acceso denegado”. 
Si acierta, mostrar “Bienvenido”. */

const USUARIO_CORRECTO = "admin";
const CONTRASENA_CORRECTA = "1234";

let intentos = 0;
let accesoConcedido = false;

while (intentos < 3 && !accesoConcedido) {
    let usuario = prompt("Ingrese su usuario:");
    let contrasena = prompt("Ingrese su contraseña:");

    if (usuario === USUARIO_CORRECTO && contrasena === CONTRASENA_CORRECTA) {
        alert("✅ Bienvenido");
        accesoConcedido = true;
    } else {
        intentos++;
        alert("❌ Usuario o contraseña incorrectos. Intento " + intentos + " de 3.");
    }
}

if (!accesoConcedido) {
    alert("🚫 Acceso denegado");
}
