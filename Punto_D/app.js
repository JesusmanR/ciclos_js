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
