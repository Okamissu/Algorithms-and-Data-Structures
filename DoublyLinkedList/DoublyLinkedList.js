class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(value) {
    const newNode = new Node(value)

    if (this.head === null) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }

  pop() {
    if (this.tail === null) return undefined

    const currentTail = this.tail

    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.tail = currentTail.prev
      this.tail.next = null

      currentTail.prev = null
    }
    this.length--
    return currentTail
  }

  unshift(value) {
    const newNode = new Node(value)

    if (this.length === 0) {
      this.tail = this.head = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  shift() {
    if (this.head === null) return undefined

    const currentHead = this.head

    if (this.length === 1) {
      this.head = this.tail = null
    } else {
      this.head = currentHead.next
      this.head.prev = null

      currentHead.next = null
    }

    this.length--
    return currentHead
  }

  get(index) {
    if (index < 0 || index >= this.length) return null
    const middleIndex = Math.floor(this.length / 2)

    let foundNode
    if (index <= middleIndex) {
      foundNode = this.head
      for (let i = 0; i < index; i++) {
        foundNode = foundNode.next
      }
    } else {
      foundNode = this.tail
      for (let i = this.length - 1; i > index; i--) {
        foundNode = foundNode.prev
      }
    }

    return foundNode
  }

  set(index, value) {
    const foundNode = this.get(index)
    if (!foundNode) return false

    foundNode.value = value

    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false

    if (index === 0) {
      this.unshift(value)
      return true
    }

    if (index === this.length) {
      this.push(value)
      return true
    }

    const newNode = new Node(value)
    const foundNode = this.get(index)
    const prevNode = foundNode.prev

    prevNode.next = newNode
    newNode.prev = prevNode

    newNode.next = foundNode
    foundNode.prev = newNode

    this.length++
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined

    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const removedNode = this.get(index)
    const prevNode = removedNode.prev
    const nextNode = removedNode.next

    prevNode.next = nextNode
    nextNode.prev = prevNode

    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }

  reverse() {
    if (this.length <= 1) return this

    let currentNode = this.head
    while (currentNode) {
      ;[currentNode.prev, currentNode.next] = [
        currentNode.next,
        currentNode.prev,
      ]
      currentNode = currentNode.prev
    }
    ;[this.head, this.tail] = [this.tail, this.head]
    return this
  }

  print() {
    const values = []
    let current = this.head

    while (current) {
      values.push(current.value)
      current = current.next
    }

    console.log(values)
  }

  printDetailed() {
    const values = []
    let current = this.head

    while (current) {
      values.push(current)
      current = current.next
    }

    console.log(values)
  }
}

const list = new DoublyLinkedList()

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)

list.remove(0)
list.print()

list.remove(5)
list.print()

list.remove(2)

list.printDetailed()

// push      O(1)
// pop       O(1)
// shift     O(1)
// unshift   O(1)
// get       O(n)
// set       O(n)
// insert    O(n)
// remove    O(n)
// reverse   O(n)
// print      O(n)
// printDetailed O(n)
