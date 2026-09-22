class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
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

  push(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if (!this.head) return undefined

    let current = this.head
    let newTail = current

    while (current.next !== null) {
      newTail = current
      current = current.next
    }

    this.tail = newTail
    this.tail.next = null
    this.length--

    if (this.length === 0) {
      this.head = null
      this.tail = null
    }

    return current
  }

  shift() {
    if (!this.head) return undefined

    const currentHead = this.head
    this.head = this.head.next
    currentHead.next = null
    this.length--

    if (this.length === 0) this.tail = null

    return currentHead
  }

  unshift(value) {
    const newNode = new Node(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if (index < 0 || index >= this.length) return null

    let current = this.head
    let counter = 0

    while (counter < index) {
      current = current.next
      counter++
    }

    return current
  }

  set(index, value) {
    const foundNode = this.get(index)

    if (!foundNode) return false

    foundNode.value = value
    return true
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) return !!this.push(value)
    if (index === 0) return !!this.unshift(value)
    else {
      const preNode = this.get(index - 1)
      const newNode = new Node(value)

      newNode.next = preNode.next
      preNode.next = newNode

      this.length++
      return true
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()

    const preNode = this.get(index - 1)
    const removedNode = preNode.next
    preNode.next = removedNode.next
    removedNode.next = null
    this.length--
    return removedNode
  }

  reverse() {
    ;[this.head, this.tail] = [this.tail, this.head]

    let currentPointer = this.tail
    let prevPointer = null
    let nextPointer = null

    while (currentPointer) {
      nextPointer = currentPointer.next
      currentPointer.next = prevPointer
      prevPointer = currentPointer
      currentPointer = nextPointer
    }

    return this
  }

  rotate(shift) {
    if (!this.head || this.length <= 1) return this

    shift = ((shift % this.length) + this.length) % this.length

    if (shift === 0) return this

    this.tail.next = this.head
    if (shift < 0) shift = this.length - shift

    let currentNode = this.head
    for (let i = 0; i < shift - 1; i++) {
      currentNode = currentNode.next
    }

    this.tail = currentNode
    this.head = currentNode.next

    currentNode.next = null
  }
}

const list = new SinglyLinkedList()
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)

list.print()

list.reverse()

list.print()

// push      O(1)
// pop       O(n)
// shift     O(1)
// unshift   O(1)
// get       O(n)
// set       O(n)
// insert    O(n)
// remove    O(n)
// reverse   O(n)
// rotate    O(n)
// print     O(n)
