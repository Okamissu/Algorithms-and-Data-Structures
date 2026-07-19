class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
      return this
    }

    let currentNode = this.root

    while (true) {
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode
          return this
        }
        currentNode = currentNode.right
      }
    }
  }

  insertRecursive(value) {
    const insertNode = (node, value) => {
      if (node === null) {
        return new Node(value)
      }

      if (value < node.value) {
        node.left = insertNode(node.left, value)
      } else {
        node.right = insertNode(node.right, value)
      }

      return node
    }

    this.root = insertNode(this.root, value)
    return this
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

// Iterative insert
const iterativeTree = new BinarySearchTree()

;[10, 5, 15, 8, 3, 12, 18].forEach((value) => {
  iterativeTree.insert(value)
})

console.log('Iterative:')
console.log(JSON.stringify(iterativeTree, null, 2))

// Recursive insert
const recursiveTree = new BinarySearchTree()

;[10, 5, 15, 8, 3, 12, 18].forEach((value) => {
  recursiveTree.insertRecursive(value)
})

console.log('\nRecursive:')
console.log(JSON.stringify(recursiveTree, null, 2))

// Empty tree -> first insertion
const singleNodeTree = new BinarySearchTree()
singleNodeTree.insertRecursive(42)

console.log('\nSingle node:')
console.log(JSON.stringify(singleNodeTree, null, 2))

// Duplicates (duplicates go to the right)
const duplicateTree = new BinarySearchTree()

;[10, 10, 10].forEach((value) => {
  duplicateTree.insertRecursive(value)
})

console.log('\nDuplicates:')
console.log(JSON.stringify(duplicateTree, null, 2))
