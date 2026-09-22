class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }

        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      }
    }
  }

  insertRecursive(value) {
    const insertNode = (node) => {
      if (!node) {
        return new Node(value);
      }

      if (value < node.value) {
        node.left = insertNode(node.left);
      } else {
        node.right = insertNode(node.right);
      }

      return node;
    };

    this.root = insertNode(this.root);
    return this;
  }

  find(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value === value) {
        return currentNode;
      }

      currentNode =
        value < currentNode.value ? currentNode.left : currentNode.right;
    }

    return false;
  }

  findRecursive(value) {
    const findNode = (node) => {
      if (!node) {
        return false;
      }

      if (node.value === value) {
        return node;
      }

      return value < node.value ? findNode(node.left) : findNode(node.right);
    };

    return findNode(this.root);
  }

  getInorderSuccessor(currentNode) {
    currentNode = currentNode.right;
    while (currentNode && currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  remove(value, currentNode = this.root) {
    if (!currentNode) return currentNode;

    if (value < currentNode.value) {
      currentNode.left = this.remove(value, currentNode.left);
    } else if (value > currentNode.value) {
      currentNode.right = this.remove(value, currentNode.right);
    } else {
      if (!currentNode.right) return currentNode.left;
      if (!currentNode.left) return currentNode.right;

      const successor = this.getInorderSuccessor(currentNode);
      currentNode.value = successor.value;
      currentNode.right = this.remove(successor.value, currentNode.right);
    }

    return currentNode;
  }

  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) return undefined;

    let parent = null;
    let current = this.root;

    while (current.right) {
      parent = current;
      current = current.right;
    }

    if (current.left) {
      current = current.left;

      while (current.right) {
        current = current.right;
      }

      return current.value;
    }

    return parent.value;
  }

  findSecondLargestRecursive() {
    if (!this.root || (!this.root.left && !this.root.right)) return undefined;

    const largest = (node) => {
      if (!node.right) return node;

      return largest(node.right);
    };

    const secondLargest = (node, parent = null) => {
      if (!node.right) {
        if (node.left) return largest(node.left).value;

        return parent.value;
      }

      return secondLargest(node.right, node);
    };

    return secondLargest(this.root);
  }

  isBalanced() {
    const dfs = (node) => {
      if (!node) return { balanced: true, height: 0 };

      const left = dfs(node.left);
      const right = dfs(node.right);

      return {
        balanced:
          left.balanced &&
          right.balanced &&
          Math.abs(left.height - right.height) <= 1,
        height: 1 + Math.max(left.height, right.height),
      };
    };

    return dfs(this.root).balanced;
  }

  bfs() {
    if (!this.root) return [];

    const queue = [this.root];
    const data = [];

    for (let i = 0; i < queue.length; i++) {
      const node = queue[i];

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);

      data.push(node.value);
    }

    return data;
  }

  dfs(order = 'inorder') {
    const data = [];

    const traverse = (node) => {
      if (!node) return;

      if (order === 'preorder') data.push(node.value);

      traverse(node.left);

      if (order === 'inorder') data.push(node.value);

      traverse(node.right);

      if (order === 'postorder') data.push(node.value);
    };

    traverse(this.root);

    return data;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log(bst.bfs());
console.log(bst.dfs('preorder'));
console.log(bst.dfs('inorder'));
console.log(bst.dfs('postorder'));
