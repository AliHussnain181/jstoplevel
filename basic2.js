// FizzBuzz Array
function fizzBuzzArray(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

// Array Intersection
function arrayIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

// Display Likes
function displayLikes(likes) {
    if (likes.length === 0) {
        return "No one likes this";
    } else if (likes.length === 1) {
        return `${likes[0]} likes this`;
    } else if (likes.length === 2) {
        return `${likes[0]} and ${likes[1]} like this`;
    } else if (likes.length === 3) {
        return `${likes[0]}, ${likes[1]}, and ${likes[2]} like this`;
    } else {
        return `${likes[0]}, ${likes[1]}, and ${likes.length - 2} others like this`;
    }
}

// Find Missing Number
function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// Find Missing Letter
function findMissingLetter(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].charCodeAt() + 1 !== arr[i + 1].charCodeAt()) {
            return String.fromCharCode(arr[i].charCodeAt() + 1);
        }
    }
    return null;
}

// Are All Chars Unique?
function areAllCharsUnique(str) {
    const charSet = new Set();
    for (let char of str) {
        if (charSet.has(char)) {
            return false;
        }
        charSet.add(char);
    }
    return true;
}

// First Non-Repeating Character
function firstNonRepeatingCharacter(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

// Dice Game Simulation
function diceGameSimulation() {
    const outcomes = [1, 2, 3, 4, 5, 6];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}

// Format Phone Number
function formatPhoneNumber(number) {
    const digits = number.replace(/\D/g, '');
    const areaCode = digits.slice(0, 3);
    const firstPart = digits.slice(3, 6);
    const secondPart = digits.slice(6, 10);
    return `(${areaCode}) ${firstPart}-${secondPart}`;
}

// Validate Email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Example Usage
console.log("FizzBuzz Array:", fizzBuzzArray(15));

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6];
console.log("Array Intersection:", arrayIntersection(arr1, arr2));

const likesArray = ["John", "Alice", "Bob", "Charlie"];
console.log("Display Likes:", displayLikes(likesArray));

const missingNumberArray = [1, 2, 3, 5, 6];
console.log("Find Missing Number:", findMissingNumber(missingNumberArray));

const missingLetterArray = ['a', 'b', 'c', 'e'];
console.log("Find Missing Letter:", findMissingLetter(missingLetterArray));

const uniqueCharsString = "hello";
console.log("Are All Chars Unique?:", areAllCharsUnique(uniqueCharsString));

const nonRepeatingCharString = "abacabad";
console.log("First Non-Repeating Character:", firstNonRepeatingCharacter(nonRepeatingCharString));

console.log("Dice Game Simulation (Rolling a die):", diceGameSimulation());

const phoneNumber = "1234567890";
console.log("Format Phone Number:", formatPhoneNumber(phoneNumber));

const validEmail = "test@example.com";
const invalidEmail = "invalid-email@";
console.log("Validate Email:", validateEmail(validEmail), validateEmail(invalidEmail));
