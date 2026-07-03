class Stack {
  constructor() {
    this.mainQueue = new Queue()
    this.helpQueue = new Queue()
    this.size = 0
  }

  push(val) {
    this.helpQueue.enqueue(val)

    while (this.mainQueue.size) {
      this.helpQueue.enqueue(this.mainQueue.dequeue())
    }

    ;[this.mainQueue, this.helpQueue] = [this.helpQueue, this.mainQueue]

    this.size++
    return this
  }

  pop() {
    if (!this.mainQueue.size) return null

    this.size--

    return this.mainQueue.dequeue()
  }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }

  enqueue(data) {
    var node = new Node(data)

    if (!this.first) {
      this.first = node
      this.last = node
    } else {
      this.last.next = node
      this.last = node
    }

    return ++this.size
  }

  dequeue() {
    if (!this.first) return null

    var temp = this.first

    if (this.first == this.last) {
      this.last = null
    }

    this.first = this.first.next
    this.size--

    return temp.value
  }
}
