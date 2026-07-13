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
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const tree = new BinarySearchTree()

tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(8)

console.log(JSON.stringify(tree, null, 2))
