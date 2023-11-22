/* 1. Crear un array vacío, luego generar 10 números al azar 
y guardarlos en un array. Mostrar en consola el resultado del array. */

let arr = []

while (arr.length < 10){
    let nuevoElemento = prompt('Elige un número')
    arr.push(nuevoElemento)
}
console.log(arr)

/* 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se 
deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). 
Mostrar en consola dicho resultado. */

let elemento = prompt('Escribe 5 numeros separados por una coma')
let arr2 = elemento.split(',')
console.log(arr2)

/* 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: 
El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. 
Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.*/

const arr3 = [10, 40, 30, 20, 15, 5];
function comparar ( a, b ){ return a - b; }
arr3.sort(comparar)
console.log(arr3)

console.log(arr3[0])
console.log(arr3[5])


