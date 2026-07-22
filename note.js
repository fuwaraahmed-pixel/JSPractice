// ========================================
// JavaScript Function - Quick Revision Note
// ========================================

// 1. Function Declaration
// ------------------------------
// Function তৈরি করার নিয়ম

function firstFunction() {
    console.log("Hello World");
}

// মনে রাখবে:
// function -> Keyword
// firstFunction -> Function Name
// () -> Parameter
// {} -> Function Body



// 2. Function Call
// ------------------------------

// Function চালানোর নিয়ম

firstFunction();

// মনে রাখবে:
// Function তৈরি করলে কাজ করবে না
// Call করলে Execute হবে



// 3. Parameter & Argument
// ------------------------------

function divide(num1, num2) {
    const result = num1 / num2;
    console.log(result);
}

divide(500, 8);

// Parameter:
// num1
// num2

// Argument:
// 500
// 8



// 4. Return
// ------------------------------

function doMath(a, b) {
    return a + b;
}

const total = doMath(10, 20);

console.log(total);

// মনে রাখবে:
// return Function থেকে Value বাইরে পাঠায়
// return এর পরে Function শেষ হয়ে যায়



// 5. Function Call using Variable
// ------------------------------

const result = 100;
const denominator = 4;

divide(result, denominator);

// Variable এর Value Argument হিসেবে যায়



// ========================================
// 30 Second Revision
// ========================================

// ✔ Function Declare
// ✔ Function Call
// ✔ Parameter
// ✔ Argument
// ✔ Return
// ✔ Variable দিয়েও Function Call করা যায়