// Loops
// for
// do while
// while

// write a js program that prints from 1 to 10

// For loop

let val = 1;
for (let val = 1; val <= 10; val++) {
  console.log(val);
}

// do while loop

console.log("======================");
let result = 1;

do {
  console.log(result);
  result++;
} while (result <= 10);

// while loops

console.log("=====================");
let val1 = 1;
while (val1 <= 10) {
  console.log(val1);
  val1++;
}

// Write a multiplication table for 3

// using for loop

// console.log("=================")

// const number = prompt("enter an integers");
// for (let i = 1; i <= 10; i++) {
//   const result = i * number;
//   console.log(`${number} * ${i} = ${result}`);
// }

// using do while loop

console.log("=========================");

let i = 1;
const num = 3;
const result1 = num * i;
do {
  console.log(`${num} * ${i} = ${result1}`);
  i++;
} while (i <= 10);

// Write a js program to run factorial of a number(5)

console.log("==========================");

let temp = 1;
for (let j = 1; j <= 6; j++) {
  temp = temp * j;
}
console.log(temp);


// Comparison sign

/*

= assign the value
== value compare (?)
===

*/

let person ="string";
let person1 = "123";

console.log(person == person1);
