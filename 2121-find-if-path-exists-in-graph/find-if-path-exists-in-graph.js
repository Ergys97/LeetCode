/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
function validPath(n, edges, source, destination) {
    let graph = Array.from({length: n}, () => []);
    for (let [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }
    let queue = [source];
    let visited = Array(n).fill(false);
    visited[source] = true;
    while (queue.length > 0) {
        let vertex = queue.shift();
        if (vertex === destination) return true;
        for (let neighbor of graph[vertex]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }
    return false;
}