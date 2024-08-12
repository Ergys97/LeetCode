/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.k = k;
    this.minHeap = [];

    for (let num of nums) {
        this.add(num);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.minHeap.length < this.k) {
        this.minHeap.push(val);
        this.minHeap.sort((a, b) => a - b);
    } else if (val > this.minHeap[0]) {
        this.minHeap[0] = val;
        this.minHeap.sort((a, b) => a - b);
    }

    return this.minHeap[0];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */