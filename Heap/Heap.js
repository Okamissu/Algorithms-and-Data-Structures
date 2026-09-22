class MaxBinaryHeap {
  values = [];

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let index = this.values.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.values[index] <= this.values[parentIndex]) {
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

      let largerChildIndex = index;

      // Check left child
      if (
        leftIndex < this.values.length &&
        this.values[leftIndex] > this.values[largerChildIndex]
      ) {
        largerChildIndex = leftIndex;
      }

      // Check right child
      if (
        rightIndex < this.values.length &&
        this.values[rightIndex] > this.values[largerChildIndex]
      ) {
        largerChildIndex = rightIndex;
      }

      // Current node is already bigger than both children
      if (largerChildIndex === index) {
        break;
      }

      // Swap with the larger child
      [this.values[index], this.values[largerChildIndex]] = [
        this.values[largerChildIndex],
        this.values[index],
      ];

      index = largerChildIndex;
    }
  }

  remove() {
    if (this.values.length === 0) {
      return undefined;
    }

    // If there is only one element
    if (this.values.length === 1) {
      return this.values.pop();
    }

    // Swap root with last element
    const lastIndex = this.values.length - 1;

    [this.values[0], this.values[lastIndex]] = [
      this.values[lastIndex],
      this.values[0],
    ];

    // Remove the old maximum
    const removedNode = this.values.pop();

    // Restore max heap property
    this.bubbleDown();

    return removedNode;
  }
}

const heap = new MaxBinaryHeap();

heap.insert(39);
heap.insert(55);
heap.insert(44);
heap.insert(99);
heap.insert(1);
heap.insert(24);
heap.insert(34);
heap.insert(100);

console.log(heap.values);

console.log('Removed:', heap.remove());
console.log(heap.values);

console.log('Removed:', heap.remove());
console.log(heap.values);
