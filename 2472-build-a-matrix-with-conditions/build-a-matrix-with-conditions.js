/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function(k, rowConditions, colConditions) {
    function topologicalSort(edges, k) {
        const graph = new Map();
        const inDegree = new Array(k).fill(0);
        const order = [];
        const queue = [];

        for (let i = 0; i < k; i++) {
            graph.set(i, []);
        }

        for (const [u, v] of edges) {
            graph.get(u - 1).push(v - 1);
            inDegree[v - 1]++;
        }

        for (let i = 0; i < k; i++) {
            if (inDegree[i] === 0) queue.push(i);
        }

        while (queue.length) {
            const node = queue.shift();
            order.push(node);
            for (const next of graph.get(node)) {
                inDegree[next]--;
                if (inDegree[next] === 0) queue.push(next);
            }
        }

        return order.length === k ? order : null;
    }

    const rowOrder = topologicalSort(rowConditions, k);
    const colOrder = topologicalSort(colConditions, k);

    if (!rowOrder || !colOrder) return [];

    const matrix = Array.from({ length: k }, () => new Array(k).fill(0));
    const position = new Array(k);

    colOrder.forEach((num, index) => {
        position[num] = index;
    });

    rowOrder.forEach((num, rowIndex) => {
        matrix[rowIndex][position[num]] = num + 1;
    });

    return matrix;
};