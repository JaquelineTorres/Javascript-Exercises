/* 

Exercise #2 (sugerencia map())
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]


*/

/* 
El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
*/
const numbers = [1, 2, 4, 5];

const doubleNumber = numbers.map(currentValue => currentValue * 2);
console.log(doubleNumber);