/* 

Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

*/

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

/* 
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

Sintaxis
var newArray = arr.filter(callback(currentValue[, index[, array]])[, thisArg])

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((word) => word.length > 6);
console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

El método includes() determina si una matriz incluye un determinado elemento, devuelve true o false según corresponda.
*/

const commonCourses = student1Courses.filter((course) =>
    student2Courses.includes(course)
);
console.log(commonCourses);//Programming