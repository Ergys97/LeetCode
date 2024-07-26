/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
    const dist = Array.from({ length: n }, () => Array(n).fill(Infinity));
    for (let i = 0; i < n; i++) {
        dist[i][i] = 0;
    }

    for (const [from, to, weight] of edges) {
        dist[from][to] = weight;
        dist[to][from] = weight;
    }

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    let minReachableCities = Infinity;
    let resultCity = -1;

    for (let i = 0; i < n; i++) {
        let reachableCities = 0;
        for (let j = 0; j < n; j++) {
            if (i !== j && dist[i][j] <= distanceThreshold) {
                reachableCities++;
            }
        }

        if (reachableCities < minReachableCities || (reachableCities === minReachableCities && i > resultCity)) {
            minReachableCities = reachableCities;
            resultCity = i;
        }
    }

    return resultCity;
};