const find = (x) => parent[x] == x ? x : parent[x] = find(parent[x]);

const union = (x, y) => {
    let px = find(x);
    let py = find(y);
    parent[px] = py;
    sum[py] += sum[px];
};

const BMOD = BigInt(1e9 + 7);
let parent, sum;
const maxSumMinProduct = (a) => {
    let n = a.length;
    let pos = Array(n).fill(0);
    let visit = Array(n).fill(0);
    parent = Array(n).fill(0);
    sum = Array(n).fill(0n);
    for (let i = 0; i < n; i++) {
        parent[i] = i;
        sum[i] = BigInt(a[i]);
        pos[i] = i;
    }
    pos.sort((x, y) => a[y] - a[x]);
    let res = 0n;
    for (const i of pos) {
        if (i - 1 >= 0 && visit[i - 1]) union(i - 1, i);
        if (i + 1 < n && visit[i + 1]) union(i, i + 1);
        visit[i] = 1;
        let tmp = BigInt(a[i]) * sum[find(i)];
        if (tmp > res) res = tmp;
    }
    return Number(res % BMOD);
};