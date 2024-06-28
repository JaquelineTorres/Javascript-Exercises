/* 
Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/

const arrayNumbers = [1, 2, 3, 4];

const sumAndProduct = (arrayNumbers) => {
    //Suma
    const resultSum = arrayNumbers.reduce((sum, currentVal) => sum + currentVal, 0);

    //Multiplicación
    const resultProduct = arrayNumbers.reduce((sum, currentVal) => sum * currentVal);

    return `The sum is ${resultSum}. The product is ${resultProduct}.`;

};

console.log(sumAndProduct(arrayNumbers));//The sum is 10. The product is 24.

