/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function(quality, wage, k) {
    let workers = quality.map((q, i) => ({ratio: wage[i] / q, q, w: wage[i]}));
    workers.sort((a, b) => a.ratio - b.ratio);

    let totalQ = 0, maxHeap = [], res = Number.MAX_VALUE;
    for (let worker of workers) {
        totalQ += worker.q;
        maxHeap.push(worker.q);
        if (maxHeap.length > k) {
            totalQ -= maxHeap.sort((a, b) => b - a).shift();
        }
        if (maxHeap.length === k) {
            res = Math.min(res, totalQ * worker.ratio);
        }
    }

    return res;
};