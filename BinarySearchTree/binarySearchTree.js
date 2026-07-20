class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (!this.root) {
      this.root = newNode
      return this
    }

    let currentNode = this.root

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode
          return this
        }

        currentNode = currentNode.left
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode
          return this
        }

        currentNode = currentNode.right
      }
    }
  }

  insertRecursive(value) {
    const insertNode = (node) => {
      if (!node) {
        return new Node(value)
      }

      if (value < node.value) {
        node.left = insertNode(node.left)
      } else {
        node.right = insertNode(node.right)
      }

      return node
    }

    this.root = insertNode(this.root)
    return this
  }

  find(value) {
    let currentNode = this.root

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }

      currentNode =
        value < currentNode.value ? currentNode.left : currentNode.right
    }

    return false
  }

  findRecursive(value) {
    const findNode = (node) => {
      if (!node) {
        return false
      }

      if (node.value === value) {
        return node
      }

      return value < node.value ? findNode(node.left) : findNode(node.right)
    }

    return findNode(this.root)
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(7)
bst.insert(12)
bst.insert(20)

console.log(bst.find(12))
console.log(bst.findRecursive(12))
console.log(bst.find(100))
console.log(bst.findRecursive(100))
