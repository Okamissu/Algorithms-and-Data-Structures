import PriorityQueue from '../Heap/PriorityQueue.ts';
import WeightedGraph from '../Graph/WeightedGraph.ts';

class DijkstraWeightedGraph extends WeightedGraph {
  dijkstra(start: string, finish: string) {
    const nodes = new PriorityQueue<string>();
    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};

    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }

      previous[vertex] = null;
    }

    while (nodes.values.length) {
      const smallest = nodes.dequeue()?.value;

      if (!smallest) break;

      // Found the shortest path to the destination
      if (smallest === finish) {
        const path: string[] = [];
        let current: string | null = finish;

        // Walk backwards from finish to start
        while (current) {
          path.push(current);
          current = previous[current];
        }

        // Built the path backwards, so reverse it
        return path.reverse();
      }

      // No reachable vertices left
      if (distances[smallest] === Infinity) {
        break;
      }

      // Check every neighbour of the current vertex
      for (const neighbour in this.adjacencyList[smallest]) {
        const nextNode = this.adjacencyList[smallest][neighbour];

        // Distance: start -> current -> neighbour
        const candidate = distances[smallest] + nextNode.weight;

        const nextNeighbour = nextNode.node;

        // Is this route shorter?
        if (candidate < distances[nextNeighbour]) {
          distances[nextNeighbour] = candidate;
          previous[nextNeighbour] = smallest;

          nodes.enqueue(nextNeighbour, candidate);
        }
      }
    }

    // No path exists
    return [];
  }
}

const graph = new DijkstraWeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

const path = graph.dijkstra('A', 'E');

console.log(path);
