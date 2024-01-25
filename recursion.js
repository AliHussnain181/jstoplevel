// Recursion Intro (Countdown)
function countdown(n) {
    if (n <= 0) {
        console.log("Blast Off!");
    } else {
        console.log(n);
        countdown(n - 1);
    }
}

// Recursive Unwinding
function recursiveUnwinding(n) {
    if (n > 0) {
        console.log("Entering level:", n);
        recursiveUnwinding(n - 1);
        console.log("Exiting level:", n);
    }
}

// Reverse String Using Recursion
function reverseStringRecursive(str) {
    if (str === "") {
        return "";
    } else {
        return reverseStringRecursive(str.substr(1)) + str[0];
    }
}

// Fibonacci Sequence
function fibonacci(n) {
    if (n <= 1) {
        return n;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Power
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else {
        return base * power(base, exponent - 1);
    }
}

// Array Sum
function arraySum(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + arraySum(arr.slice(1));
    }
}

// Number Range
function numberRange(start, end) {
    if (start > end) {
        return [];
    } else {
        return [start, ...numberRange(start + 1, end)];
    }
}

// Flatten Array
function flattenArray(arr) {
    let flattened = [];

    for (let element of arr) {
        if (Array.isArray(element)) {
            flattened = flattened.concat(flattenArray(element));
        } else {
            flattened.push(element);
        }
    }

    return flattened;
}

// Permutations
function permutations(arr) {
    if (arr.length === 0) {
        return [[]];
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const permutationsOfRest = permutations(rest);

        for (let perm of permutationsOfRest) {
            result.push([arr[i], ...perm]);
        }
    }

    return result;
}

// Example Usage
console.log("Recursion Intro (Countdown):");
countdown(5);

console.log("\nRecursive Unwinding:");
recursiveUnwinding(3);

console.log("\nReverse String Using Recursion:");
console.log(reverseStringRecursive("hello"));

console.log("\nFibonacci Sequence:");
console.log(fibonacci(5));

console.log("\nFactorial:");
console.log(factorial(5));

console.log("\nPower:");
console.log(power(2, 3));

console.log("\nArray Sum:");
console.log(arraySum([1, 2, 3, 4, 5]));

console.log("\nNumber Range:");
console.log(numberRange(3, 8));

console.log("\nFlatten Array:");
console.log(flattenArray([1, [2, [3, 4], 5], 6]));

console.log("\nPermutations:");
console.log(permutations([1, 2, 3]));
