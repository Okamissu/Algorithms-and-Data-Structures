type Vertex = {
  node: string;
  weight: number;
};

export default class WeightedGraph {
  private adjacencyList: Record<string, Vertex[]> = {};

  addVertex(vertex: string): void {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1: string, vertex2: string, weight: number): void {
    this.addVertex(vertex1);
    this.addVertex(vertex2);

    if (!this.adjacencyList[vertex1].some((v) => v.node === vertex2)) {
      this.adjacencyList[vertex1].push({ node: vertex2, weight });
      this.adjacencyList[vertex2].push({ node: vertex1, weight });
    }
  }
}
