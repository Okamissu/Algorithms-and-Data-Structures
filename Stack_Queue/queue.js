class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(value) {
    const newNode = new Node(value)

    if (!this.last) {
      this.first = this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    this.size++
    return this
  }

  dequeue() {
    if (!this.first) return null

    const removedNode = this.first
    this.first = this.first.next

    if (!this.first) this.last = null

    removedNode.next = null
    this.size--

    return removedNode
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
