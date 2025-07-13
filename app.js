const prompt=  require("prompt-sync")();

// 1. Variables y tipos de datos

// Ejercicio 1
let nombre = "Juan Jose";
let edad = 25;
let esEstudiante = true;

// Ejercicio 2
let sinValor 
let valorNulo = null;
console.log("sinValor: ", sinValor)
console.log("sinValor: ", valorNulo)

let tuNombre = prompt("Ingresa tu nombre: ");
console.log("Hola, " + tuNombre);

// 2. Ingreso de datos por teclado

// Ejercicio 1
let year = prompt("Ingrese su año de nacimiento: ")
let años = 2025 - year
console.log("Tue edad es: ", años)

// Ejercicio 2
let num1 = parseInt(prompt("Ingresa numero 1: "))
let num2 = parseInt(prompt("Ingresa numero 2: "))

console.log(num1+num2)

// 3. Condicional if

// Ejercicio 1
let edadUsuario = parseInt(prompt("Ingresa tu edad: "))

if (edadUsuario >= 18) console.log("Puedes entrar")
else console.log("No puedes entrar")

// Ejercicio 2
let num = parseInt(prompt("Ingresa un numero: "))
if (num> 0) console.log("Es positivo")
else if (num < 0) console.log("Es negativo")
else if (num == 0) console.log("Es cero") 

// 4. Bucle while

// Ejercicio 1
let number  = parseInt(prompt("Ingresa un numero: "))
let contador = 0
while (contador != number) {
    contador += 1
    console.log(contador)
}

// Ejercicio 2
let contra = prompt("Ingrese contraseña: ")
let pass = "1234"

while(contra != pass){
    console.log("Contraseña incorrecta")
    contra = prompt("Ingrese contraseña: ")
}
console.log("Contraseña correcta")

// 5. Bucle for

// Ejercicio 1
for (let i = 1; i<11; i++) {
    console.log(i)
}

// Ejercicio 2
let otroNumero = parseInt(prompt("Ingrese numero: "))
for (let i = 1; i <= 10; i++) {
    console.log(`${otroNumero} * ${i} = ${otroNumero*i}`)
}