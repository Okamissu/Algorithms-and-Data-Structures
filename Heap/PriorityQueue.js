class PriorityQueue {
  values = [];

  enqueue(value, priority) {
    const node = { value, priority };

    this.values.push(node);
    this.bubbleUp();

    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      // Smaller priority number = higher priority
      if (this.values[index].priority >= this.values[parentIndex].priority) {
        break;
      }

      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];

      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;

    while (true) {
      const leftIndex = index * 2 + 1;
      const rightIndex = index * 2 + 2;

      let smallerChildIndex = index;

      // Check left child
      if (
        leftIndex < this.values.length &&
        this.values[leftIndex].priority <
          this.values[smallerChildIndex].priority
      ) {
        smallerChildIndex = leftIndex;
      }

      // Check right child
      if (
        rightIndex < this.values.length &&
        this.values[rightIndex].priority <
          this.values[smallerChildIndex].priority
      ) {
        smallerChildIndex = rightIndex;
      }

      // Current node already has the highest priority
      if (smallerChildIndex === index) {
        break;
      }

      [this.values[index], this.values[smallerChildIndex]] = [
        this.values[smallerChildIndex],
        this.values[index],
      ];

      index = smallerChildIndex;
    }
  }

  dequeue() {
    if (this.values.length === 0) {
      return undefined;
    }

    if (this.values.length === 1) {
      return this.values.pop();
    }

    const lastIndex = this.values.length - 1;

    [this.values[0], this.values[lastIndex]] = [
      this.values[lastIndex],
      this.values[0],
    ];

    const removedNode = this.values.pop();

    this.bubbleDown();

    return removedNode;
  }
}

const queue = new PriorityQueue();

queue.enqueue('Low priority', 10);
queue.enqueue('Medium priority', 5);
queue.enqueue('High priority', 2);
queue.enqueue('Critical', 1);

console.log(queue.values);

console.log('Removed:', queue.dequeue());
console.log('Removed:', queue.dequeue());
console.log('Removed:', queue.dequeue());
console.log('Removed:', queue.dequeue());
