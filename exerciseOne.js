/* 
Exercise #1 (sugerencia: join())
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}


printOutString();
Complete the function to print out the string: This is a sentence.

 */

/* El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena. */

let arr = ["This", "is", "a", "sentence."];
function printOutString(arr) {
  console.log(arr.join(" "));
}

printOutString(arr);//This is a sentence.