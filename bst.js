// Tree Node Class
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary Tree Implementation
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Depth-First Traversal
    depthFirstTraversal() {
        const result = [];

        function traverse(node) {
            if (node) {
                result.push(node.value);
                traverse(node.left);
                traverse(node.right);
            }
        }

        traverse(this.root);
        return result;
    }

    // Depth-First Traversal Using Recursion
    depthFirstTraversalRecursive(node = this.root) {
        if (!node) return [];
        
        const left = this.depthFirstTraversalRecursive(node.left);
        const right = this.depthFirstTraversalRecursive(node.right);

        return [node.value, ...left, ...right];
    }

    // Breadth-First Traversal
    breadthFirstTraversal() {
        const result = [];
        const queue = [];

        if (this.root) {
            queue.push(this.root);

            while (queue.length > 0) {
                const current = queue.shift();
                result.push(current.value);

                if (current.left) {
                    queue.push(current.left);
                }

                if (current.right) {
                    queue.push(current.right);
                }
            }
        }

        return result;
    }

    // Maximum Depth
    maxDepth(node = this.root) {
        if (!node) return 0;

        const leftDepth = this.maxDepth(node.left);
        const rightDepth = this.maxDepth(node.right);

        return Math.max(leftDepth, rightDepth) + 1;
    }
}

// Binary Search Tree Implementation
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert Node
    insert(value) {
        const newNode = new TreeNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    // Validate BST
    isValidBST(node = this.root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
        if (!node) return true;

        if (node.value <= min || node.value >= max) {
            return false;
        }

        return (
            this.isValidBST(node.left, min, node.value) &&
            this.isValidBST(node.right, node.value, max)
        );
    }
}

// Graph Implementation
class Graph {
    constructor() {
        this.vertices = [];
        this.adjacencyList = new Map();
    }

    addVertex(vertex) {
        this.vertices.push(vertex);
        this.adjacencyList.set(vertex, []);
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList.get(vertex1).push(vertex2);
        this.adjacencyList.get(vertex2).push(vertex1);
    }

    // Depth-First Traversal
    depthFirstTraversal(startingNode) {
        const visited = new Set();
        const result = [];

        function dfs(node) {
            visited.add(node);
            result.push(node);

            for (const neighbor of this.adjacencyList.get(node)) {
                if (!visited.has(neighbor)) {
                    dfs(neighbor);
                }
            }
        }

        dfs(startingNode);
        return result;
    }

    // Breadth-First Traversal
    breadthFirstTraversal(startingNode) {
        const visited = new Set();
        const result = [];
        const queue = [];

        visited.add(startingNode);
        queue.push(startingNode);

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current);

            for (const neighbor of this.adjacencyList.get(current)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }
}

// Example Usage:
const binaryTree = new BinaryTree();
binaryTree.root = new TreeNode(1);
binaryTree.root.left = new TreeNode(2);
binaryTree.root.right = new TreeNode(3);
binaryTree.root.left.left = new TreeNode(4);
binaryTree.root.left.right = new TreeNode(5);

console.log("Depth-First Traversal:", binaryTree.depthFirstTraversal());
console.log("Depth-First Traversal Recursive:", binaryTree.depthFirstTraversalRecursive());
console.log("Breadth-First Traversal:", binaryTree.breadthFirstTraversal());
console.log("Maximum Depth:", binaryTree.maxDepth());

const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(10);
binarySearchTree.insert(5);
binarySearchTree.insert(15);

console.log("Is Valid BST:", binarySearchTree.isValidBST());

const graph = new Graph();
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addEdge(1, 2);
graph.addEdge(1, 3);

console.log("Depth-First Traversal (Graph):", graph.depthFirstTraversal(1));
console.log("Breadth-First Traversal (Graph):", graph.breadthFirstTraversal(1));
