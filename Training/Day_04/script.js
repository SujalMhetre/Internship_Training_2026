// ================================
// JavaScript Variables
// ================================

let name = "Sujal";
const age = 22;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// ================================
// Conditional Statements (if-else)
// ================================

let marks = 78;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// Voting eligibility check
let votingAge = 18;

if (age >= votingAge) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible for voting");
}

// ================================
// Loops
// ================================

// for loop: print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("For loop value:", i);
}

// while loop
let count = 1;
while (count <= 3) {
    console.log("While loop value:", count);
    count++;
}

// do-while loop
let num = 1;
do {
    console.log("Do-while loop value:", num);
    num++;
} while (num <= 2);

// ================================
// Arrays
// ================================

let numbers = [10, 20, 30, 40, 50];

// Accessing array elements
console.log("First element:", numbers[0]);
console.log("Array length:", numbers.length);

// Updating array value
numbers[2] = 35;
console.log("Updated array:", numbers);

// Loop through array
for (let i = 0; i < numbers.length; i++) {
    console.log("Array element:", numbers[i]);
}
