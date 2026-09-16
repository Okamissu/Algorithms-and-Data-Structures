class Graph {
  private adjacencyList: Record<string, string[]>;

  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!vertex) return;

    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: string, vertex2: string) {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
      return;
    }

    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2,
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1,
    );
  }

  removeVertex(vertex: string) {
    if (!this.adjacencyList[vertex]) return;

    for (const edge of [...this.adjacencyList[vertex]]) {
      this.removeEdge(vertex, edge);
    }

    delete this.adjacencyList[vertex];
  }

  depthFirstRecursive(start: string) {
    const result: string[] = [];
    const visited: Record<string, boolean> = {};

    const dfs = (vertex: string) => {
      if (!this.adjacencyList[vertex]) return;

      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          dfs(neighbor);
        }
      });
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
