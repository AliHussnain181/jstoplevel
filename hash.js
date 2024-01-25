// Hash Table Implementation
class HashTable {
    constructor() {
        this.table = {};
    }

    // Hashing function
    hash(key) {
        let hash = 0;

        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % 37; // Modulo to keep the hash within reasonable bounds
    }

    // Insert key-value pair
    put(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        this.table[index].push({ key, value });
    }

    // Get value by key
    get(key) {
        const index = this.hash(key);

        if (this.table[index]) {
            for (const entry of this.table[index]) {
                if (entry.key === key) {
                    return entry.value;
                }
            }
        }

        return undefined;
    }

    // Get all values
    getValues() {
        const values = [];

        for (const index in this.table) {
            if (this.table[index]) {
                for (const entry of this.table[index]) {
                    values.push(entry.value);
                }
            }
        }

        return values;
    }
}

// Word Frequency Counter
function wordFrequencyCounter(text) {
    const words = text.toLowerCase().split(/\W+/);
    const frequencyCounter = new Map();

    for (const word of words) {
        if (word) {
            frequencyCounter.set(word, (frequencyCounter.get(word) || 0) + 1);
        }
    }

    return frequencyCounter;
}

// Phone Number Directory
const phoneNumberDirectory = new Map();
phoneNumberDirectory.set("John", "555-1234");
phoneNumberDirectory.set("Alice", "555-5678");
phoneNumberDirectory.set("Bob", "555-8765");

// Anagram Grouping
function groupAnagrams(words) {
    const anagramGroups = new Map();

    for (const word of words) {
        const sortedWord = word.split("").sort().join("");
        if (!anagramGroups.has(sortedWord)) {
            anagramGroups.set(sortedWord, []);
        }
        anagramGroups.get(sortedWord).push(word);
    }

    return Array.from(anagramGroups.values());
}

// Sets - Symmetric Difference
function symmetricDifference(setA, setB) {
    const difference = new Set([...setA].filter(x => !setB.has(x)));
    return new Set([...difference, ...new Set([...setB].filter(x => !setA.has(x)))]);
}

// Two Sum
function twoSum(nums, target) {
    const numIndices = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }

        numIndices.set(nums[i], i);
    }

    return null;
}

// Longest Consecutive Sequence
function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let longestStreak = 0;

    for (const num of numSet) {
        if (!numSet.has(num - 1)) {
            let currentNum = num;
            let currentStreak = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum++;
                currentStreak++;
            }

            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }

    return longestStreak;
}

// Word Instance Counter Using Custom Hash Table
function wordInstanceCounter(text) {
    const words = text.toLowerCase().split(/\W+/);
    const instanceCounter = new HashTable();

    for (const word of words) {
        if (word) {
            instanceCounter.put(word, (instanceCounter.get(word) || 0) + 1);
        }
    }

    return instanceCounter;
}

// Example Usage:
console.log("Word Frequency Counter:", wordFrequencyCounter("Hello world! Hello JavaScript!"));

console.log("Phone Number Directory:");
console.log("John:", phoneNumberDirectory.get("John"));
console.log("Alice:", phoneNumberDirectory.get("Alice"));
console.log("Bob:", phoneNumberDirectory.get("Bob"));

const anagrams = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
console.log("Anagram Groups:", anagrams);

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
console.log("Symmetric Difference:", symmetricDifference(setA, setB));

const nums = [2, 7, 11, 15];
const target = 9;
console.log("Two Sum:", twoSum(nums, target));

const sequence = [100, 4, 200, 1, 3, 2];
console.log("Longest Consecutive Sequence:", longestConsecutive(sequence));

const instanceCounter = wordInstanceCounter("Hello world! Hello JavaScript!");
console.log("Word Instance Counter:", instanceCounter.getValues());
