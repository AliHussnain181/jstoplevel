// Stack Implementation
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Reverse String Using a Stack
function reverseStringWithStack(inputString) {
    const stack = new Stack();
    let reversedString = "";

    for (let char of inputString) {
        stack.push(char);
    }

    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

// Balanced Parenthesis Check using Stack
function isBalancedParenthesis(expression) {
    const stack = new Stack();

    for (let char of expression) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' && stack.pop() !== '(') {
            return false;
        } else if (char === ']' && stack.pop() !== '[') {
            return false;
        } else if (char === '}' && stack.pop() !== '{') {
            return false;
        }
    }

    return stack.isEmpty();
}

// Queue Implementation
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

// Reverse String With a Queue
function reverseStringWithQueue(inputString) {
    const queue = new Queue();
    let reversedString = "";

    for (let char of inputString) {
        queue.enqueue(char);
    }

    while (!queue.isEmpty()) {
        reversedString += queue.dequeue();
    }

    return reversedString;
}

// Palindrome Check with a Queue and Stack
function isPalindrome(inputString) {
    const stack = new Stack();
    const queue = new Queue();

    for (let char of inputString) {
        stack.push(char);
        queue.enqueue(char);
    }

    while (!stack.isEmpty() && !queue.isEmpty()) {
        if (stack.pop() !== queue.dequeue()) {
            return false;
        }
    }

    return true;
}

// Linked List Implementation
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
}

// Reverse String with a Linked List
function reverseStringWithLinkedList(inputString) {
    const linkedList = new LinkedList();

    for (let char of inputString) {
        linkedList.append(char);
    }

    let reversedString = "";
    let current = linkedList.head;

    while (current) {
        reversedString = current.data + reversedString;
        current = current.next;
    }

    return reversedString;
}

// Fast & Slow Pointers - Find Middle
function findMiddle(linkedList) {
    let slow = linkedList.head;
    let fast = linkedList.head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.data;
}

// Doubly Linked List Implementation
class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new DoublyNode(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
    }
}

// Find Pair Sum in Doubly Linked List
function findPairSum(doublyLinkedList, targetSum) {
    let left = doublyLinkedList.head;
    let right = doublyLinkedList.head;

    while (right.next) {
        right = right.next;
    }

    while (left && right && left !== right) {
        const currentSum = left.data + right.data;

        if (currentSum === targetSum) {
            return true;
        } else if (currentSum < targetSum) {
            left = left.next;
        } else {
            right = right.prev;
        }
    }

    return false;
}

// Example Usage:
const inputString = "HelloWorld";
console.log("Reverse String with Stack:", reverseStringWithStack(inputString));
console.log("Is Balanced Parenthesis:", isBalancedParenthesis("({})"));
console.log("Reverse String with Queue:", reverseStringWithQueue(inputString));
console.log("Is Palindrome:", isPalindrome("racecar"));
console.log("Reverse String with Linked List:", reverseStringWithLinkedList(inputString));

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
console.log("Middle Element:", findMiddle(linkedList));

const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.append(1);
doublyLinkedList.append(2);
doublyLinkedList.append(3);
console.log("Find Pair Sum in Doubly Linked List:", findPairSum(doublyLinkedList, 5));
