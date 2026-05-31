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
