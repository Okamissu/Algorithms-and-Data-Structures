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

  find(value) {
    let currentNode = this.root

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else {
        currentNode = currentNode.right
      }
    }

    return false
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

const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(2)
bst.insert(7)
bst.insert(12)
bst.insert(20)

console.log('find(10):', bst.find(10))
console.log('find(5):', bst.find(5))
console.log('find(15):', bst.find(15))
console.log('find(2):', bst.find(2))
console.log('find(7):', bst.find(7))
console.log('find(12):', bst.find(12))
console.log('find(20):', bst.find(20))
console.log('find(13):', bst.find(13))
console.log('find(-1):', bst.find(-1))
console.log('find(100):', bst.find(100))

const empty = new BinarySearchTree()
console.log('empty.find(5):', empty.find(5))

const single = new BinarySearchTree()
single.insert(42)
console.log('single.find(42):', single.find(42))
console.log('single.find(99):', single.find(99))
