/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    let total = 0, maxAdditional = 0, windowAdditional = 0;
    
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            total += customers[i];
        }
        else {
            windowAdditional += customers[i];
        }
        
        if (i >= minutes) {
            windowAdditional -= grumpy[i - minutes] * customers[i - minutes];
        }
        
        maxAdditional = Math.max(maxAdditional, windowAdditional);
    }
    
    return total + maxAdditional;
};