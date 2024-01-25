// Hello World (Starter Challenge)
function helloWorld() {
    console.log("Hello, World!");
}

// Get Sum (Starter Challenge)
function getSum(a, b) {
    return a + b;
}

// Calculator
function calculator(a, b, operation) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'subtract':
            return a - b;
        case 'multiply':
            return a * b;
        case 'divide':
            if (b !== 0) {
                return a / b;
            } else {
                return "Cannot divide by zero";
            }
        default:
            return "Invalid operation";
    }
}

// Count Occurrences
function countOccurrences(arr, target) {
    return arr.reduce((count, element) => (element === target ? count + 1 : count), 0);
}

// Find Max Number
function findMaxNumber(arr) {
    return Math.max(...arr);
}

// Title Case
function titleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Reverse String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Palindrome
function isPalindrome(str) {
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// Count Vowels
function countVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    return vowels ? vowels.length : 0;
}

// Remove Duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Example Usage
console.log("Hello World:");
helloWorld();

console.log("\nGet Sum:");
console.log(getSum(5, 3));

console.log("\nCalculator - Add:", calculator(3, 4, 'add'));
console.log("Calculator - Subtract:", calculator(7, 2, 'subtract'));
console.log("Calculator - Multiply:", calculator(2, 5, 'multiply'));
console.log("Calculator - Divide:", calculator(8, 2, 'divide'));

const occurrencesArray = [1, 2, 2, 3, 2, 4, 5, 2];
console.log("\nCount Occurrences:");
console.log(countOccurrences(occurrencesArray, 2));

const maxNumberArray = [8, 3, 12, 5, 9];
console.log("\nFind Max Number:");
console.log(findMaxNumber(maxNumberArray));

const titleCaseString = "hello world";
console.log("\nTitle Case:");
console.log(titleCase(titleCaseString));

const reverseStringInput = "reverse me";
console.log("\nReverse String:");
console.log(reverseString(reverseStringInput));

const palindromeString = "A man, a plan, a canal, Panama!";
console.log("\nPalindrome Check:");
console.log(isPalindrome(palindromeString));

const vowelsString = "hello world";
console.log("\nCount Vowels:");
console.log(countVowels(vowelsString));

const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
console.log("\nRemove Duplicates:");
console.log(removeDuplicates(duplicatesArray));
