class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  push(value) {
    const newNode = new Node(value)

    if (!this.first) {
      this.first = this.last = newNode
    } else {
      newNode.next = this.first
      this.first = newNode
    }

    return ++this.size
  }

  pop() {
    if (!this.first) return null

    const popNode = this.first
    this.first = popNode.next
    this.size--

    if (!this.first) {
      this.last = null
    }

    popNode.next = null
    return popNode
  }
}

const stack = new Stack()

stack.push(1)
stack.push(2)
stack.push(3)

stack.pop()

console.log(stack)
stack.pop()

console.log(stack)
stack.pop()

console.log(stack)

// push   O(1)
// pop    O(1)
