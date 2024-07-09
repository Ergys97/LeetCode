/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let totalWait = 0;
    let currentTime = 0;

    for (let i = 0; i < customers.length; i++) {
        const [arrival, time] = customers[i];
        if (currentTime <= arrival) {
            currentTime = arrival + time;
            totalWait += time;
        } else {
            currentTime += time;
            totalWait += currentTime - arrival;
        }
    }

    return totalWait / customers.length;
};