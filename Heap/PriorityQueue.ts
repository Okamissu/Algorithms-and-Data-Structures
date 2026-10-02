type PriorityQueueNode<T> = { value: T; priority: number };

export default class PriorityQueue<T> {
  values: PriorityQueueNode<T>[] = [];

  enqueue(value: T, priority: number): this {
    const node: PriorityQueueNode<T> = { value, priority };

    this.values.push(node);
    this.bubbleUp();

    return this;
  }

  bubbleUp(): void {
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

  bubbleDown(): void {
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

  dequeue(): PriorityQueueNode<T> | undefined {
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

  peek(): PriorityQueueNode<T> | undefined {
    return this.values[0];
  }
}

// Example 1: Primitives (strings)
const stringQueue = new PriorityQueue<string>();
stringQueue.enqueue('Low priority task', 10);
stringQueue.enqueue('Urgent bug fix', 1);

const highestPriorityString = stringQueue.dequeue();
// Type: PriorityQueueNode<string> | undefined -> { value: "Urgent bug fix", priority: 1 }

// Example 2: Objects/Interfaces
interface UserTask {
  id: number;
  description: string;
}

const taskQueue = new PriorityQueue<UserTask>();
taskQueue.enqueue({ id: 101, description: 'Send weekly newsletter' }, 5);
taskQueue.enqueue({ id: 102, description: 'Database crash recovery' }, 1);

const topTask = taskQueue.dequeue();
// Type: PriorityQueueNode<UserTask> | undefined
