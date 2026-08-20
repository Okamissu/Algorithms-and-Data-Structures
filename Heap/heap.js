class MaxBinaryHeap {
  values = [];

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index = this.values.length - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);

      if (this.values[index] <= this.values[parentIndex]) break;

      [this.values[index], this.values[parentIndex]] = [
        this.values[parentIndex],
        this.values[index],
      ];

      index = parentIndex;
    }
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

console.log(heap);
