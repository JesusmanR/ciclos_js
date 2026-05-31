# 📘 Control de Flujo — Ciclos en JavaScript

**Programa:** Tecnología en Análisis y Desarrollo de Software — SENA  
**Actividad:** Introducción al control de flujo — ciclos  
**Formato:** GFPI-F-135 V04

---

## 🗂️ Estructura del repositorio

```
📁 ciclos-js/
├── 📁 apropiacion/
│   ├── 01_multiplos_de_3.js
│   ├── 02_ingreso_estudiantes.js
│   ├── 03_numeros_mayores_50.js
│   ├── 04_cajero_automatico.js
│   ├── 05_competencia_atletismo.js
│   ├── 06_venta_boletos_cine.js
│   ├── 07_suma_con_interrupcion.js
│   └── 08_filtro_por_edad.js
├── 📁 transferencia/
│   ├── 01_numeros_primos.js
│   ├── 02_tabla_multiplicar.js
│   ├── 03_cajero_automatico.js
│   ├── 04_promedio_notas.js
│   ├── 05_tienda_productos.js
│   ├── 06_juego_adivinador.js
│   ├── 07_contador_pares_impares.js
│   └── 08_control_acceso.js
└── README.md
```

---

## 🎯 Objetivo

Aplicar ciclos (`for`, `while`, `do...while`) junto con condicionales para resolver problemas que requieren repetición de instrucciones y toma de decisiones dentro de cada iteración.

---

## C. Apropiación del Conocimiento

> Los ejercicios de esta sección se entregan como **diagramas de flujo** en un documento Word. Cada diagrama debe representar el ciclo, la condición de parada y las decisiones internas.

---

### Ejercicio 1 — Múltiplos de 3 del 1 al 20

Diagrama de flujo que recorre los números del 1 al 20 e imprime únicamente los que son múltiplos de 3.

- Ciclo: del 1 al 20
- Condición interna: `número % 3 === 0`
- Salida: imprimir el número si cumple la condición

> 📄 Diagrama en documento Word — Ejercicio 1

---

### Ejercicio 2 — Registro de ingreso de 5 estudiantes

Diagrama de flujo que procesa el ingreso de 5 estudiantes a un salón. Si un estudiante no trae carné, no puede ingresar y el ciclo continúa con el siguiente.

- Ciclo: 5 iteraciones (un estudiante por iteración)
- Condición interna: ¿el estudiante trae carné?
- Salida: "Ingreso autorizado" o "Sin carné, no puede ingresar"

> 📄 Diagrama en documento Word — Ejercicio 2

---

### Ejercicio 3 — Números mayores que 50

Diagrama de flujo que solicita 10 números al usuario y muestra únicamente los que sean mayores que 50.

- Ciclo: 10 iteraciones
- Condición interna: `número > 50`
- Salida: imprimir solo los números que cumplen la condición

> 📄 Diagrama en documento Word — Ejercicio 3

---

### Ejercicio 4 — Cajero automático (ciclo con saldo)

Diagrama de flujo que simula un cajero automático. El proceso de retiro se repite mientras el saldo sea suficiente.

- Ciclo: se repite mientras `saldo >= montoRetiro`
- Condición de parada: saldo insuficiente
- Salida: saldo actualizado tras cada retiro o mensaje de fondos insuficientes

> 📄 Diagrama en documento Word — Ejercicio 4

---

### Ejercicio 5 — Competencia de atletismo con 8 corredores

Diagrama de flujo que representa una competencia. Cada corredor da 4 vueltas, pero puede detenerse antes si se cansa.

- Ciclo externo: 8 corredores
- Ciclo interno: hasta 4 vueltas por corredor
- Condición interna: ¿el corredor se cansa antes de terminar?
- Salida: resultado por corredor (completó o abandonó)

> 📄 Diagrama en documento Word — Ejercicio 5

---

### Ejercicio 6 — Venta de 15 boletos de cine

Diagrama de flujo que procesa la venta de 15 boletos. Si el comprador es menor de edad y la película es para adultos, se rechaza la venta.

- Ciclo: 15 iteraciones (un comprador por iteración)
- Condición interna: `menorDeEdad && peliculaParaAdultos`
- Salida: "Venta aprobada" o "Venta rechazada"

> 📄 Diagrama en documento Word — Ejercicio 6

---

### Ejercicio 7 — Suma del 1 al 100 con interrupción

Diagrama de flujo que suma los números del 1 al 100, pero interrumpe el ciclo si encuentra un número mayor a 90 que sea par.

- Ciclo: del 1 al 100
- Condición de interrupción: `número > 90 && número % 2 === 0`
- Salida: suma acumulada hasta el punto de interrupción

> 📄 Diagrama en documento Word — Ejercicio 7

---

### Ejercicio 8 — Filtro de personas por edad

Diagrama de flujo que lee el nombre y la edad de 5 personas y muestra en pantalla solo las que tienen 18 años o más.

- Ciclo: 5 iteraciones
- Condición interna: `edad >= 18`
- Salida: nombre de las personas que cumplen la condición

> 📄 Diagrama en documento Word — Ejercicio 8

---

## D. Transferencia del Conocimiento

> Los ejercicios de esta sección se entregan como **archivos `.js`** en la carpeta `transferencia/`, con comentarios que expliquen el uso de cada ciclo y condicional.

---

### Ejercicio 1 — Números primos entre 1 y 50

Programa que muestra todos los números primos entre 1 y 50 usando ciclos y condicionales para verificar la condición de primo.

- Ciclo externo: del 2 al 50
- Ciclo interno: verifica divisores del número
- Condición: un número es primo si solo es divisible por 1 y por sí mismo
- Salida: lista de números primos encontrados

> 📂 Archivo: `transferencia/01_numeros_primos.js`

---

### Ejercicio 2 — Tabla de multiplicar personalizada

Programa que solicita un número al usuario y muestra su tabla de multiplicar hasta el 12. El ciclo permite consultar otra tabla si el usuario lo desea.

- Ciclo externo: se repite mientras el usuario quiera consultar tablas
- Ciclo interno: del 1 al 12 para mostrar la tabla
- Entrada: número a multiplicar y respuesta de continuar (sí/no)
- Salida: tabla de multiplicar completa del número ingresado

> 📂 Archivo: `transferencia/02_tabla_multiplicar.js`

---

### Ejercicio 3 — Cajero automático con validación de saldo

Programa que simula un cajero automático. El usuario parte de un saldo constante y puede retirar varias veces mientras tenga fondos. Si intenta retirar más de lo disponible, aparece un mensaje de error.

- Saldo inicial: declarado con `const`
- Ciclo: `while` que se repite mientras el usuario desee retirar
- Condición: `montoRetiro <= saldoActual`
- Salida: saldo actualizado o mensaje `"Fondos insuficientes"`

> 📂 Archivo: `transferencia/03_cajero_automatico.js`

---

### Ejercicio 4 — Promedio de notas con aprobación

Programa que lee las notas de 5 estudiantes, calcula el promedio de cada uno y determina si aprueba o reprueba.

- Ciclo: 5 iteraciones (un estudiante por iteración)
- Por cada estudiante: solicita 3 notas y calcula el promedio
- Condición: `promedio >= 3.0` → `"Aprobado"` / `"Reprobado"`
- Salida: promedio y estado de cada estudiante

> 📂 Archivo: `transferencia/04_promedio_notas.js`

---

### Ejercicio 5 — Tienda de productos con descuento

Programa que simula la venta de productos. El usuario registra artículos hasta decidir no comprar más. Si el total supera $100.000, se aplica un descuento del 10%.

- Ciclo: `do...while` que continúa mientras el usuario quiera agregar artículos
- Acumulador: suma el precio de cada artículo
- Condición de descuento: `total > 100000`
- Salida: total sin descuento, descuento aplicado y total final

> 📂 Archivo: `transferencia/05_tienda_productos.js`

---

### Ejercicio 6 — Juego del adivinador

Programa que genera un número aleatorio entre 1 y 20. El usuario intenta adivinarlo y el ciclo se repite hasta lograrlo. Cada intento fallido indica si el número es mayor o menor.

- Número generado con: `Math.floor(Math.random() * 20) + 1`
- Ciclo: `while` que se repite mientras el usuario no adivine
- Condición de pista: `intento < numeroSecreto` → `"Es mayor"` / `"Es menor"`
- Salida: número de intentos usados y mensaje de éxito

> 📂 Archivo: `transferencia/06_juego_adivinador.js`

---

### Ejercicio 7 — Contador de pares e impares

Programa que solicita 10 números al usuario y al final muestra cuántos fueron pares y cuántos impares.

- Ciclo: `for` de 10 iteraciones
- Condición: `número % 2 === 0` → par / impar
- Contadores: `let pares = 0` y `let impares = 0`
- Salida: total de pares e impares al finalizar el ciclo

> 📂 Archivo: `transferencia/07_contador_pares_impares.js`

---

### Ejercicio 8 — Control de acceso con intentos limitados

Programa que solicita usuario y contraseña. Permite hasta 3 intentos; si falla en todos muestra "Acceso denegado", si acierta muestra "Bienvenido".

- Ciclo: `for` o `while` con máximo 3 iteraciones
- Condición de éxito: usuario y contraseña correctos con `&&`
- Condición de salida anticipada: `break` al acertar
- Salida: `"Bienvenido"` o `"Acceso denegado. Intentos agotados"`

> 📂 Archivo: `transferencia/08_control_acceso.js`

---

## 📚 Conceptos aplicados

| Concepto | Descripción | Cuándo usarlo |
|---|---|---|
| `for` | Ciclo con número fijo de iteraciones | Cuando se conoce cuántas veces repetir |
| `while` | Ciclo que evalúa la condición antes de ejecutar | Cuando no se sabe cuántas veces repetir |
| `do...while` | Ciclo que ejecuta al menos una vez | Cuando el bloque debe correr mínimo una vez |
| `break` | Interrumpe el ciclo inmediatamente | Cuando se cumple una condición de salida |
| `continue` | Salta a la siguiente iteración | Cuando se quiere omitir una iteración |
| `%` (módulo) | Obtiene el residuo de una división | Para detectar pares, impares o múltiplos |
| `Math.random()` | Genera un número decimal aleatorio entre 0 y 1 | Para valores aleatorios |
| `Math.floor()` | Redondea hacia abajo al entero más cercano | Combinado con `Math.random()` |
| Contador | Variable que se incrementa en cada iteración | Para llevar control de repeticiones |
| Acumulador | Variable que suma valores en cada iteración | Para calcular totales o promedios |

---

## 🛠️ Herramientas utilizadas

| Herramienta | Uso |
|---|---|
| Visual Studio Code | Editor de código |
| Navegador web + DevTools | Ejecución con `prompt()` y `console.log()` |
| Git / GitHub | Control de versiones y entrega de evidencias |

---

## 📋 Evidencias de aprendizaje

- [x] Documento Word con los 8 diagramas de flujo de la sección C
- [x] 8 archivos `.js` de la sección D con comentarios explicativos
- [x] Comentarios en el código describiendo el tipo de ciclo usado y por qué
- [x] Commits descriptivos por cada ejercicio en GitHub

---

## 🏫 Información académica

**Institución:** SENA  
**Programa:** Tecnología en Análisis y Desarrollo de Software — Código 3234206  
**Actividad:** Introducción al control de flujo — ciclos  
**Instructor:** John Freddy Becerra Castellanos  
**Formato:** GFPI-F-135 V04
