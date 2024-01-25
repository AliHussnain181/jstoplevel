// Absolute Values Sum Minimization
function absoluteValuesSumMinimization(arr) {
    const isOddLength = arr.length % 2 === 1;
    return isOddLength ? arr[Math.floor(arr.length / 2)] : arr[arr.length / 2 - 1];
  }
  
  // Add
  function add(a, b) {
    return a + b;
  }
  
  // Add Border
  function addBorder(picture) {
    const borderedPicture = picture.map(row => `*${row}*`);
    const border = '*'.repeat(borderedPicture[0].length);
    borderedPicture.unshift(border);
    borderedPicture.push(border);
    return borderedPicture;
  }
  
  // Add Two Digits
  function addTwoDigits(n) {
    const digits = n.toString().split('').map(Number);
    return digits[0] + digits[1];
  }
  
  // Adjacent Elements Product
  function adjacentElementsProduct(inputArray) {
    let maxProduct = inputArray[0] * inputArray[1];
    for (let i = 1; i < inputArray.length - 1; i++) {
      const product = inputArray[i] * inputArray[i + 1];
      maxProduct = Math.max(maxProduct, product);
    }
    return maxProduct;
  }
  
  // All Longest Strings
  function allLongestStrings(inputArray) {
    const maxLength = Math.max(...inputArray.map(str => str.length));
    return inputArray.filter(str => str.length === maxLength);
  }
  
  // Almost Increasing Sequence
  function almostIncreasingSequence(sequence) {
    let count = 0;
    for (let i = 0; i < sequence.length - 1; i++) {
      if (sequence[i] >= sequence[i + 1]) {
        count++;
        if (count > 1 || (i > 0 && i < sequence.length - 2 && sequence[i - 1] >= sequence[i + 1] && sequence[i] >= sequence[i + 2])) {
          return false;
        }
      }
    }
    return true;
  }
  
  // Alphabetic Shift
  function alphabeticShift(inputString) {
    return inputString.split('').map(char => String.fromCharCode((char.charCodeAt(0) - 97 + 1) % 26 + 97)).join('');
  }
  
  // Alphabet Sub Sequence
  function alphabetSubsequence(s) {
    for (let i = 0; i < s.length - 1; i++) {
      if (s[i] >= s[i + 1]) {
        return false;
      }
    }
    return true;
  }
  
  // Alternating Sums
  function alternatingSums(a) {
    const team1 = a.filter((_, index) => index % 2 === 0).reduce((sum, weight) => sum + weight, 0);
    const team2 = a.filter((_, index) => index % 2 !== 0).reduce((sum, weight) => sum + weight, 0);
    return [team1, team2];
  }
  
  // Are Equally Strong
  function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    const yourStrength = yourLeft + yourRight;
    const friendsStrength = friendsLeft + friendsRight;
    return yourStrength === friendsStrength && Math.abs(yourLeft - yourRight) === Math.abs(friendsLeft - friendsRight);
  }
  
  // Are Similar
  function areSimilar(a, b) {
    const diff = [];
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        diff.push(i);
      }
    }
    return diff.length === 0 || (diff.length === 2 && a[diff[0]] === b[diff[1]] && a[diff[1]] === b[diff[0]]);
  }
  
  // Array Change
  function arrayChange(inputArray) {
    let moves = 0;
    for (let i = 1; i < inputArray.length; i++) {
      while (inputArray[i] <= inputArray[i - 1]) {
        inputArray[i]++;
        moves++;
      }
    }
    return moves;
  }
  
  // Array Conversion
  function arrayConversion(inputArray) {
    let isOdd = true;
    while (inputArray.length > 1) {
      inputArray = sumProduct(inputArray, isOdd);
      isOdd = !isOdd;
    }
    return inputArray[0];
  
    function sumProduct(arr, isOdd) {
      const result = [];
      for (let i = 0; i < arr.length; i += 2) {
        if (isOdd) {
          result.push(arr[i] + arr[i + 1]);
        } else {
          result.push(arr[i] * arr[i + 1]);
        }
      }
      return result;
    }
  }
  
  // Array Max Consecutive Sum
  function arrayMaxConsecutiveSum(inputArray, k) {
    let maxSum = 0;
    let currentSum = 0;
    for (let i = 0; i < k; i++) {
      currentSum += inputArray[i];
    }
    maxSum = currentSum;
    for (let i = k; i < inputArray.length; i++) {
      currentSum = currentSum - inputArray[i - k] + inputArray[i];
      maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
  }
  
  // Array Maximal Adjacent Difference
  function arrayMaximalAdjacentDifference(inputArray) {
    let maxDifference = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
      maxDifference = Math.max(maxDifference, Math.abs(inputArray[i] - inputArray[i + 1]));
    }
    return maxDifference;
  }
  
  // Array Previous Less
  function arrayPreviousLess(items) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
      let found = false;
      for (let j = i - 1; j >= 0; j--) {
        if (items[j] < items[i]) {
          result.push(items[j]);
          found = true;
          break;
        }
      }
      if (!found) {
        result.push(-1);
      }
    }
    return result;
  }
  
  // Array Replace
  function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    return inputArray.map(item => (item === elemToReplace ? substitutionElem : item));
  }
  
  // Avoid Obstacles
  function avoidObstacles(inputArray) {
    inputArray.sort((a, b) => a - b);
    const max = inputArray[inputArray.length - 1];
  
    for (let i = 2; i <= max + 1; i++) {
      if (inputArray.every(value => value % i !== 0)) {
        return i;
      }
    }
  
    return -1;
  }
  
  // Bishop and Pawn
  function bishopAndPawn(bishop, pawn) {
    const bishopX = bishop.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const bishopY = parseInt(bishop[1]);
    const pawnX = pawn.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const pawnY = parseInt(pawn[1]);
    return Math.abs(bishopX - pawnX) === Math.abs(bishopY - pawnY);
  }
  
  // Box Blur
  function boxBlur(image) {
    const result = [];
    for (let i = 1; i < image.length - 1; i++) {
      const row = [];
      for (let j = 1; j < image[i].length - 1; j++) {
        const sum =
          image[i - 1][j - 1] +
          image[i - 1][j] +
          image[i - 1][j + 1] +
          image[i][j - 1] +
          image[i][j] +
          image[i][j + 1] +
          image[i + 1][j - 1] +
          image[i + 1][j] +
          image[i + 1][j + 1];
        row.push(Math.floor(sum / 9));
      }
      result.push(row);
    }
    return result;
  }
  
  // Candies
  function candies(n, m) {
    return Math.floor(m / n) * n;
  }
  
  // Case Insensitive Palindrome
  function caseInsensitivePalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
  }
  
  // Century from Year
  function centuryFromYear(year) {
    return Math.ceil(year / 100);
  }
  
  // Character Parity
  function characterParity(symbol) {
    const digit = parseInt(symbol);
    return isNaN(digit) ? 'not a digit' : digit % 2 === 0 ? 'even' : 'odd';
  }
  
  // Check Palindrome
  function checkPalindrome(inputString) {
    const reversed = inputString.split('').reverse().join('');
    return inputString === reversed;
  }
  
  // Chess Board Cell Color
  function chessBoardCellColor(cell1, cell2) {
    const color1 = (cell1.charCodeAt(0) - 'A'.charCodeAt(0) + parseInt(cell1[1])) % 2;
    const color2 = (cell2.charCodeAt(0) - 'A'.charCodeAt(0) + parseInt(cell2[1])) % 2;
    return color1 === color2;
  }
  
  // Chunky Monkey
  function chunkyMonkey(arr, size) {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  







  // Circle of Numbers
function circleOfNumbers(n, firstNumber) {
    return (firstNumber + n / 2) % n;
  }
  
  // Common Character Count
  function commonCharacterCount(s1, s2) {
    const count = (str) => str.split('').reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
  
    const countS1 = count(s1);
    const countS2 = count(s2);
  
    return Object.keys(countS1).reduce((commonCount, char) => {
      return commonCount + Math.min(countS1[char] || 0, countS2[char] || 0);
    }, 0);
  }
  
  // Company Bot Strategy
  function companyBotStrategy(trainingData) {
    const validData = trainingData.filter(data => data[1] === 1);
    if (validData.length === 0) {
      return 0;
    }
  
    const sum = validData.reduce((acc, data) => acc + data[0], 0);
    return sum / validData.length;
  }
  
  // Compare Integers
  function compareIntegers(a, b) {
    const numA = parseInt(a);
    const numB = parseInt(b);
  
    if (numA < numB) {
      return 'less';
    } else if (numA > numB) {
      return 'greater';
    } else {
      return 'equal';
    }
  }
  
  // Compose Ranges
  function composeRanges(nums) {
    if (nums.length === 0) {
      return [];
    }
  
    const result = [];
    let start = nums[0];
    let end = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === end + 1) {
        end = nums[i];
      } else {
        result.push(start === end ? `${start}` : `${start}->${end}`);
        start = end = nums[i];
      }
    }
  
    result.push(start === end ? `${start}` : `${start}->${end}`);
    return result;
  }
  
  // Confirm Ending
  function confirmEnding(str, target) {
    return str.endsWith(target);
  }
  
  // Contains Close Nums
  function containsCloseNums(nums, k) {
    const indexMap = {};
  
    for (let i = 0; i < nums.length; i++) {
      if (indexMap[nums[i]] !== undefined && i - indexMap[nums[i]] <= k) {
        return true;
      }
      indexMap[nums[i]] = i;
    }
  
    return false;
  }
  
  // Contains Duplicates
  function containsDuplicates(nums) {
    const numSet = new Set(nums);
    return numSet.size !== nums.length;
  }
  
  // Convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
  }
  
  // Convert String
  function convertString(s, t) {
    const sMap = new Map();
    const tMap = new Map();
  
    for (let i = 0; i < s.length; i++) {
      if (!sMap.has(s[i])) {
        sMap.set(s[i], []);
      }
      sMap.get(s[i]).push(i);
    }
  
    for (let i = 0; i < t.length; i++) {
      if (!tMap.has(t[i])) {
        tMap.set(t[i], []);
      }
      tMap.get(t[i]).push(i);
    }
  
    for (let char of tMap.keys()) {
      if (!sMap.has(char) || !arraysEqual(sMap.get(char), tMap.get(char))) {
        return false;
      }
    }
  
    return true;
  
    function arraysEqual(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        return false;
      }
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
      }
      return true;
    }
  }
  
  // Crossing Sum
  function crossingSum(matrix, row, col) {
    const rowSum = matrix[row].reduce((sum, num) => sum + num, 0);
    const colSum = matrix.reduce((sum, row) => sum + row[col], 0);
    return rowSum + colSum - matrix[row][col];
  }
  
  // Deposit Profit
  function depositProfit(deposit, rate, threshold) {
    let years = 0;
    while (deposit < threshold) {
      deposit *= 1 + rate / 100;
      years++;
    }
    return years;
  }
  
  // Different Symbols Naive
  function differentSymbolsNaive(s) {
    const charSet = new Set(s);
    return charSet.size;
  }
  
  // Digit Degree
  function digitDegree(n) {
    if (n < 10) {
      return 0;
    }
    let degree = 0;
    while (n >= 10) {
      n = [...n.toString()].reduce((sum, digit) => sum + parseInt(digit), 0);
      degree++;
    }
    return degree;
  }
  
  // Domain Type
  function domainType(domains) {
    return domains.map(domain => {
      const extension = domain.split('.').pop();
      const typeMap = {
        'com': 'commercial',
        'org': 'organization',
        'net': 'network',
        'info': 'information'
      };
      return typeMap[extension] || 'unknown';
    });
  }
  
  // Election Winners
  function electionWinners(votes, k) {
    const maxVotes = Math.max(...votes);
    const remainingWinners = votes.filter(vote => vote + k > maxVotes).length;
    const isKUnique = votes.indexOf(maxVotes) === votes.lastIndexOf(maxVotes);
    return isKUnique ? 1 : remainingWinners;
  }
  
  // Enclose in Brackets
  function encloseInBrackets(inputString) {
    return `(${inputString})`;
  }
  
  // Even Digits Only
  function evenDigitsOnly(n) {
    return n.toString().split('').every(digit => parseInt(digit) % 2 === 0);
  }
  
  // Extract Each Kth
  function extractEachKth(inputArray, k) {
    return inputArray.filter((_, index) => (index + 1) % k !== 0);
  }
  
  // Extract Matrix Column
  function extractMatrixColumn(matrix, column) {
    return matrix.map(row => row[column]);
  }
  
  // Factorialize a Number
  function factorialize(num) {
    return num <= 1 ? 1 : num * factorialize(num - 1);
  }
  
  // Fancy Ride
  function fancyRide(l, fares) {
    const rideOptions = ['UberX', 'UberXL', 'UberPlus', 'UberBlack', 'UberSUV'];
    const maxFare = l * fares;
    for (let i = fares.length - 1; i >= 0; i--) {
      if (maxFare >= fares[i]) {
        return rideOptions[i];
      }
    }
  }
  
  // Fare Estimator
  function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    return cost_per_minute.map((minuteCost, index) => (ride_time * minuteCost) + (ride_distance * cost_per_mile[index]));
  }
  
  // Fermactor
  function fermactor(n) {
    for (let a = 1; a < n; a++) {
      for (let b = a + 1; b < n; b++) {
        const result = Math.pow(b, 2) - Math.pow(a, 2);
        if (result === n) {
          return [b, a];
        }
      }
    }
  }
  
  // Find the Closest Pair
  function findTheClosestPair(numbers, sum) {
    const indexMap = new Map();
    for (let i = 0; i < numbers.length; i++) {
      const complement = sum - numbers[i];
      if (indexMap.has(complement)) {
        return [indexMap.get(complement), i];
      }
      indexMap.set(numbers[i], i);
    }
    return -1;
  }
  
  // Find Email Domain
  function findEmailDomain(address) {
    const atIndex = address.lastIndexOf('@');
    return address.slice(atIndex + 1);
  }
  
  // First Digit
  function firstDigit(inputString) {
    return inputString.match(/\d/)[0];
  }
  
  // First Duplicate
  function firstDuplicate(a) {
    const seen = new Set();
    for (let num of a) {
      if (seen.has(num)) {
        return num;
      }
      seen.add(num);
    }
    return -1;
  }
  
  // First Not Repeating Character
  function firstNotRepeatingCharacter(s) {
    const charCount = {};
    for (let char of s) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char of s) {
      if (charCount[char] === 1) {
        return char;
      }
    }
    return '_';
  }
  
  // Flatten Array
  function flattenArray(arr) {
    return arr.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
  }
  
  // Growing Plant
  function growingPlant(upSpeed, downSpeed, desiredHeight) {
    if (desiredHeight <= upSpeed) {
      return 1;
    }
    return Math.ceil((desiredHeight - upSpeed) / (upSpeed - downSpeed)) + 1;
  }
  
  // House Number Sum
  function houseNumberSum(inputArray) {
    const zeroIndex = inputArray.indexOf(0);
    return inputArray.slice(0, zeroIndex).reduce((sum, num) => sum + num, 0);
  }
  
  // House of Cats
  function houseOfCats(legs) {
    const peopleCount = Math.floor(legs / 2);
    return Array.from({ length: peopleCount + 1 }, (_, i) => i);
  }
  
  // HTML End Tag by Start Tag
  function htmlEndTagByStartTag(startTag) {
    const tagName = startTag.match(/<\s*([a-zA-Z0-9]+)/)[1];
    return `</${tagName}>`;
  }
  
  // Incorrect Password Attempts
  function incorrectPasswordAttempts(passwords, attempts) {
    let consecutiveFailures = 0;
  
    for (let i = 0; i < attempts.length; i++) {
      if (passwords.includes(attempts[i])) {
        consecutiveFailures = 0;
      } else {
        consecutiveFailures++;
        if (consecutiveFailures >= 10) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  // Integer To String Of Fixed Width
  function integerToStringOfFixedWidth(number, width) {
    const str = number.toString();
    if (str.length === width) {
      return str;
    } else if (str.length < width) {
      return '0'.repeat(width - str.length) + str;
    } else {
      return str.slice(-width);
    }
  }
  
  // Internal Backups
  function internalBackups(logs, backups) {
    const backupSet = new Set(backups);
    const internalBackups = logs.filter(log => backupSet.has(log.split(' ')[1]));
    return internalBackups.map(log => {
      const [timestamp, filename] = log.split(' ');
      return {
        timestamp: parseInt(timestamp),
        filename
      };
    });
  }
  
  // Is Lucky
  function isLucky(n) {
    const digits = n.toString().split('').map(Number);
    const midpoint = digits.length / 2;
    const firstHalfSum = digits.slice(0, midpoint).reduce((sum, digit) => sum + digit, 0);
    const secondHalfSum = digits.slice(midpoint).reduce((sum, digit) => sum + digit, 0);
    return firstHalfSum === secondHalfSum;
  }
  
  // Is Tandem Repeat
  function isTandemRepeat(inputString) {
    const midpoint = inputString.length / 2;
    return inputString.slice(0, midpoint) === inputString.slice(midpoint);
  }
  
  // Largest of Four
  function largestOfFour(arr) {
    return arr.map(subArr => Math.max(...subArr));
  }
  
  // Largest Number
  function largestNumber(n) {
    return parseInt('9'.repeat(n));
  }
  
  // Late Ride
  function lateRide(n) {
    const hours = Math.floor(n / 60);
    const minutes = n % 60;
    return [...(hours.toString() + minutes.toString())].reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  
  // Launch Sequence Checker
  function launchSequenceChecker(systemNames, stepNumbers) {
    const stepMap = {};
  
    for (let i = 0; i < systemNames.length; i++) {
      const system = systemNames[i];
      const step = stepNumbers[i];
  
      if (!stepMap[system] || stepMap[system] < step) {
        stepMap[system] = step;
      } else {
        return false;
      }
    }
  
    return true;
  }
  
  // Longest Digits Prefix
  function longestDigitsPrefix(inputString) {
    return inputString.match(/^\d*/)[0];
  }
  
  // Make Array Consecutive 2
  function makeArrayConsecutive2(statues) {
    const minStatue = Math.min(...statues);
    const maxStatue = Math.max(...statues);
    const missingStatues = maxStatue - minStatue + 1 - statues.length;
    return missingStatues;
  }
  
  // Matrix Elements Sum
  function matrixElementsSum(matrix) {
    let sum = 0;
  
    for (let col = 0; col < matrix[0].length; col++) {
      for (let row = 0; row < matrix.length; row++) {
        if (matrix[row][col] === 0) {
          break;
        }
        sum += matrix[row][col];
      }
    }
  
    return sum;
  }
  
  // Max Multiple
  function maxMultiple(divisor, bound) {
    return Math.floor(bound / divisor) * divisor;
  }
  
// Missing Letters
function missingLetters(str) {
    for (let i = 0; i < str.length - 1; i++) {
      if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
        return String.fromCharCode(str.charCodeAt(i) + 1);
      }
    }
    return undefined;
  }
  
  // New Numeral System
  function newNumeralSystem(number) {
    const result = [];
    for (let i = 'A'.charCodeAt(0); i <= number.charCodeAt(0); i++) {
      result.push(`${String.fromCharCode(i)} + ${String.fromCharCode(number.charCodeAt(0) + 'A'.charCodeAt(0) - i)}`);
    }
    return result;
  }
  
  // Palindrome Rearranging
  function palindromeRearranging(inputString) {
    const charCount = {};
    for (const char of inputString) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    let oddCount = 0;
    for (const count of Object.values(charCount)) {
      if (count % 2 !== 0) {
        oddCount++;
      }
    }
    return oddCount <= 1;
  }
  
  // Pages Numbering with Ink
  function pagesNumberingWithInk(current, numberOfDigits) {
    let remainingDigits = numberOfDigits;
    while (remainingDigits >= current.toString().length) {
      remainingDigits -= current.toString().length;
      current++;
    }
    return current - 1;
  }
  
  // Pig Latin
  function pigLatin(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    if (vowels.includes(word[0].toLowerCase())) {
      result = word + 'way';
    } else {
      const firstVowelIndex = word.toLowerCase().search(/[aeiou]/);
      result = word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay';
    }
    return result.toLowerCase();
  }
  
  // Pro Categorization
  function proCategorization(pros, preferences) {
    const proMap = new Map();
  
    for (let i = 0; i < pros.length; i++) {
      const services = preferences[i];
      for (const service of services) {
        if (!proMap.has(service)) {
          proMap.set(service, []);
        }
        proMap.get(service).push(pros[i]);
      }
    }
  
    const result = [];
  
    for (const [service, pros] of proMap.entries()) {
      result.push([[service], pros.sort()]);
    }
  
    return result;
  }
  
  // Proper Noun Correction
  function properNounCorrection(noun) {
    return noun[0].toUpperCase() + noun.slice(1).toLowerCase();
  }
  
  // Rating Threshold
  function ratingThreshold(threshold, ratings) {
    const result = [];
    let sum = 0;
  
    for (let i = 0; i < ratings.length; i++) {
      sum += ratings[i];
      const average = sum / (i + 1);
      if (average < threshold) {
        result.push(i);
      }
    }
  
    return result;
  }
  
  // Reflect String
  function reflectString(inputString) {
    return inputString
      .split('')
      .map(char => String.fromCharCode('z'.charCodeAt(0) - (char.charCodeAt(0) - 'a'.charCodeAt(0))))
      .join('');
  }
  
  // Reverse a String
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Seats in Theater
  function seatsInTheater(nCols, nRows, col, row) {
    return (nCols - col + 1) * (nRows - row);
  }
  
  // Seek and Destroy
  function seekAndDestroy(arr1, arr2) {
    return arr1.filter(el => !arr2.includes(el));
  }
  
  // Shape Area
  function shapeArea(n) {
    return n * n + (n - 1) * (n - 1);
  }
  
  // Sort by Height
  function sortByHeight(a) {
    const sortedHeights = a.filter(h => h !== -1).sort((x, y) => x - y);
    let index = 0;
    return a.map(h => (h === -1 ? h : sortedHeights[index++]));
  }
  
  // Sort by Length
  function sortByLength(inputArray) {
    return inputArray.sort((a, b) => a.length - b.length);
  }
  
  // Stolen Lunch
  function stolenLunch(note) {
    const conversionMap = {
      'a': '0',
      'b': '1',
      'c': '2',
      'd': '3',
      'e': '4',
      'f': '5',
      'g': '6',
      'h': '7',
      'i': '8',
      'j': '9',
      '0': 'a',
      '1': 'b',
      '2': 'c',
      '3': 'd',
      '4': 'e',
      '5': 'f',
      '6': 'g',
      '7': 'h',
      '8': 'i',
      '9': 'j',
    };
  
    return note.split('').map(char => conversionMap[char] || char).join('');
  }
  
  // Strings Construction
  function stringsConstruction(a, b) {
    const charCountA = getCharCount(a);
    const charCountB = getCharCount(b);
  
    let minRatio = Infinity;
  
    for (const char in charCountA) {
      if (!charCountB[char]) {
        return 0;
      }
      minRatio = Math.min(minRatio, Math.floor(charCountB[char] / charCountA[char]));
    }
  
    return minRatio;
  }
  
  // Sum All Prime Numbers
  function sumAllPrimeNumbers(n) {
    function isPrime(num) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return num > 1;
    }
  
    let sum = 0;
    for (let i = 2; i <= n; i++) {
      if (isPrime(i)) {
        sum += i;
      }
    }
  
    return sum;
  }
  
  // Sum of Odd Fibonacci Numbers
  function sumOddFibonacciNumbers(num) {
    let sum = 0;
    let prev = 0;
    let current = 1;
  
    while (current <= num) {
      if (current % 2 !== 0) {
        sum += current;
      }
  
      const next = prev + current;
      prev = current;
      current = next;
    }
  
    return sum;
  }
  
  // Square Digits Sequence
  function squareDigitsSequence(a0) {
    const seen = new Set();
    let current = a0;
    let count = 0;
  
    while (!seen.has(current)) {
      seen.add(current);
      count++;
      current = sumOfSquareDigits(current);
    }
  
    return count + 1;
  }
  
  function sumOfSquareDigits(num) {
    return num
      .toString()
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit) ** 2, 0);
  }
  
  // Switch Lights
  function switchLights(a) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === 1) {
        for (let j = 0; j <= i; j++) {
          a[j] = 1 - a[j];
        }
      }
    }
    return a;
  }
  
  // Sum of Two
  function sumOfTwo(nums1, nums2, value) {
    const set = new Set(nums1);
    return nums2.some(num => set.has(value - num));
  }
  
  // Tasks Types
  function tasksTypes(deadlines, day) {
    let today = 0;
    let upcoming = 0;
    let later = 0;
  
    for (const deadline of deadlines) {
      if (deadline <= day) {
        today++;
      } else if (deadline <= day + 7) {
        upcoming++;
      } else {
        later++;
      }
    }
  
    return [today, upcoming, later];
  }
  
  // Unique Digit Products
  function uniqueDigitProducts(a) {
    const uniqueProducts = new Set();
    for (const num of a) {
      const product = getProductOfDigits(num);
      uniqueProducts.add(product);
    }
    return uniqueProducts.size;
  }
  
  function getProductOfDigits(num) {
    return num
      .toString()
      .split('')
      .reduce((product, digit) => product * parseInt(digit), 1);
  }
  
  // Valid Time
  function validTime(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
  }
  
  