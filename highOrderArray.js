// Simple Examples

// Example 1: Sum Of Even Squares
function sumOfEvenSquares(nums) {
    return nums
        .filter(num => num % 2 === 0)
        .map(num => num ** 2)
        .reduce((sum, square) => sum + square, 0);
}

// Example 2: Calculate Total Sales
function calculateTotalSales(sales) {
    return sales.reduce((total, sale) => total + sale, 0);
}

// Example 3: Highest Scoring Word
function highestScoringWord(words) {
    return words.reduce((maxWord, currentWord) =>
        maxWord.length < currentWord.length ? currentWord : maxWord
    );
}

// Example 4: Valid Anagrams
function validAnagrams(str1, str2) {
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

// Example 5: Hashtag Generator
function hashtagGenerator(phrase) {
    const words = phrase.split(' ');
    const hashtag = words.map(word => `#${word.charAt(0).toUpperCase() + word.slice(1)}`).join('');
    return hashtag;
}

// Example 6: Valid IPv4
function isValidIPv4(ip) {
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;
    return ipv4Pattern.test(ip);
}

// Example 7: Analyze Car Mileage
function analyzeCarMileage(mileageData) {
    const averageMileage = mileageData.reduce((sum, mileage) => sum + mileage, 0) / mileageData.length;
    const maxMileage = Math.max(...mileageData);
    const minMileage = Math.min(...mileageData);

    return { averageMileage, maxMileage, minMileage };
}

// Example 8: Password Validator
function isStrongPassword(password) {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
}

// Example 9: Find Missing Letter Refactor
function findMissingLetterRefactor(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].charCodeAt() + 1 !== arr[i + 1].charCodeAt()) {
            return String.fromCharCode(arr[i].charCodeAt() + 1);
        }
    }
    return null;
}

// Example Usage
const numsForSquares = [1, 2, 3, 4, 5];
console.log("Sum Of Even Squares:", sumOfEvenSquares(numsForSquares));

const salesData = [100, 200, 300, 400];
console.log("Calculate Total Sales:", calculateTotalSales(salesData));

const wordList = ["apple", "banana", "grape", "pineapple"];
console.log("Highest Scoring Word:", highestScoringWord(wordList));

const anagram1 = "listen";
const anagram2 = "silent";
console.log("Valid Anagrams:", validAnagrams(anagram1, anagram2));

const phraseForHashtag = "coding is fun";
console.log("Hashtag Generator:", hashtagGenerator(phraseForHashtag));

const ipv4Address = "192.168.0.1";
console.log("Valid IPv4:", isValidIPv4(ipv4Address));

const carMileages = [30, 25, 35, 40, 22];
console.log("Analyze Car Mileage:", analyzeCarMileage(carMileages));

const password = "Passw0rd!";
console.log("Password Validator:", isStrongPassword(password));

const missingLetterArr = ['a', 'b', 'c', 'e'];
console.log("Find Missing Letter Refactor:", findMissingLetterRefactor(missingLetterArr));
