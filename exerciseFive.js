/* 
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
1. Write a command that prints out all of the people in the list.
2. Write the command to remove "Dani" from the array.
3. Write the command to remove "Juan" from the array.
4. Write the command to move "Luis" to the front of the array.
5. Write the command to add your name to the end of the array.
6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
7. Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.

*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Write a command that prints out all of the people in the list.
console.log("1. All people:");
for (let i = 0; i < people.length; i++) {
    console.log(`${i + 1}. ${people[i]}`)
};
console.log(people);

/*

Write the command to remove "Dani" from the array.
El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. 

*/

const removePerson = (array, people) => {
    const index = array.indexOf(people);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
};
console.log("2. After removing Dani:");
console.log(removePerson(people, "Dani"));

//Write the command to remove "Juan" from the array.
console.log("3. After removing Juan:");
console.log(removePerson(people, "Juan"));

//Write the command to move "Luis" to the front of the array.
console.log("4. After moving Luis to the front:");
people.splice(people.indexOf("Luis"), 1);
people.unshift("Luis");
console.log(people);

//Write the command to add your name to the end of the array.
console.log("5. After adding my name to the end:");
const addMyName = people.push("Jaque");
//console.log(addMyName);
console.log(people);

//Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
console.log("6. Loop and print until Maria:");
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Maria") {
        break;
    }
};

//Write the command that gives the indexOf where "Maria" is located.
console.log("7. Index of Maria:");
console.log(people.indexOf("Maria"));

console.log("Final state of the array (4 people):");
console.log(people);
