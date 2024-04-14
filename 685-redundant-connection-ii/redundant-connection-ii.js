var findRedundantDirectedConnection = function(edges) {
    let parent = [];
    let candA = [];
    let candB = [];
    for (let i = 0; i <= edges.length; i++) {
        parent[i] = i;
    }
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0], v = edges[i][1];
        if (parent[v] === v) {
            parent[v] = u;
        } else {
            candA = [parent[v], v];
            candB = [u, v];
            edges[i][1] = 0;
        }
    }
    for (let i = 0; i <= edges.length; i++) {
        parent[i] = i;
    }
    for (let i = 0; i < edges.length; i++) {
        let u = edges[i][0], v = edges[i][1];
        if (v === 0) continue;
        if (find(u, parent) === v) {
            if (candA.length > 0) return candA;
            return edges[i];
        }
        parent[v] = u;
    }
    return candB;
};

function find(u, parent) {
    if (u !== parent[u]) {
        parent[u] = find(parent[u], parent);
    }
    return parent[u];
}