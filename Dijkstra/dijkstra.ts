import PriorityQueue from '../Heap/PriorityQueue.ts';
import WeightedGraph from '../Graph/WeightedGraph.ts';

class DijkstraWeightedGraph extends WeightedGraph {
  dijkstra(start: string, finish: string): [number, string[]] | [] {
    const nodes = new PriorityQueue<string>();
    const distances: Record<string, number> = {};
    const previous: Record<string, string | null> = {};

    // Initialize distances and previous vertices
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

      if (smallest === undefined) {
        break;
      }

      // Found the shortest path to the destination
      if (smallest === finish) {
        const path: string[] = [];
        let current: string | null = finish;

        // Walk backwards from finish to start
        while (current !== null) {
          path.push(current);
          current = previous[current];
        }

        // Path was built backwards
        path.reverse();

        return [distances[finish], path];
      }

      // No reachable vertices left
      if (distances[smallest] === Infinity) {
        break;
      }

      // Check every neighbour
      for (const nextNode of this.adjacencyList[smallest]) {
        const candidate = distances[smallest] + nextNode.weight;

        const nextNeighbour = nextNode.node;

        // Found a shorter route
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

const result = graph.dijkstra('A', 'E');

console.log(result);
