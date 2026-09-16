class Graph {
  private adjacencyList: Record<string, string[]> = {};

  addVertex(vertex: string): void {
    if (!vertex.trim()) return;

    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: string, vertex2: string): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    if (!this.adjacencyList[vertex1].includes(vertex2)) {
      this.adjacencyList[vertex1].push(vertex2);
    }

    if (!this.adjacencyList[vertex2].includes(vertex1)) {
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1: string, vertex2: string): void {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return;
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2,
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1,
    );
  }

  removeVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) return;

    for (const neighbor of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, neighbor);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start: string): string[] {
    const result: string[] = [];
    const visited = new Set<string>();

    const dfs = (vertex: string): void => {
      if (!this.adjacencyList[vertex]) return;

      visited.add(vertex);
      result.push(vertex);

      for (const neighbor of this.adjacencyList[vertex]) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(start);

    return result;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log(JSON.stringify(graph, null, 2));

console.log(graph.depthFirstRecursive('A'));
