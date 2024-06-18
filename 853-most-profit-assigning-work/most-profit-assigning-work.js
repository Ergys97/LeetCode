/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let jobs = [];
    for (let i = 0; i < difficulty.length; i++) {
        jobs.push({difficulty: difficulty[i], profit: profit[i]});
    }
    jobs.sort((a, b) => a.difficulty - b.difficulty);
    worker.sort((a, b) => a - b);

    let i = 0, maxProfit = 0, totalProfit = 0;
    for (let ability of worker) {
        while (i < jobs.length && jobs[i].difficulty <= ability) {
            maxProfit = Math.max(maxProfit, jobs[i].profit);
            i++;
        }
        totalProfit += maxProfit;
    }

    return totalProfit;
};