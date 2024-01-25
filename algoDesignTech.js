// Divide and Conquer: Merge Sort
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Dynamic Programming: Fibonacci Memoization
function fibonacci(n, memo = {}) {
    if (n <= 1) {
        return n;
    }

    if (memo[n]) {
        return memo[n];
    }

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}

// Greedy Algorithms: Coin Change
function coinChange(coins, amount) {
    coins.sort((a, b) => b - a);
    let count = 0;

    for (let i = 0; i < coins.length; i++) {
        while (amount >= coins[i]) {
            amount -= coins[i];
            count++;
        }
    }

    if (amount === 0) {
        return count;
    } else {
        return -1; // No exact change possible
    }
}

// Backtracking Algorithms: N-Queens Problem
function solveNQueens(n) {
    const result = [];

    function placeQueens(row, queens) {
        if (row === n) {
            result.push([...queens]);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValidPlacement(row, col, queens)) {
                queens.push(col);
                placeQueens(row + 1, queens);
                queens.pop();
            }
        }
    }

    function isValidPlacement(row, col, queens) {
        for (let i = 0; i < row; i++) {
            const prevCol = queens[i];
            if (prevCol === col || prevCol - i === col - row || prevCol + i === col + row) {
                return false;
            }
        }
        return true;
    }

    placeQueens(0, []);
    return result;
}

// Testing the algorithms
const array = [8, 4, 3, 7, 1, 5, 6, 2];
const sortedArray = mergeSort(array);
console.log("Merge Sort:", sortedArray);

const fibResult = fibonacci(6);
console.log("Fibonacci:", fibResult);

const coins = [1, 2, 5];
const amount = 11;
const coinChangeResult = coinChange(coins, amount);
console.log("Coin Change:", coinChangeResult);

const nQueensResult = solveNQueens(4);
console.log("N-Queens Solutions:", nQueensResult);
