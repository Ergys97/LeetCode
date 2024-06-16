/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function findMaximizedCapital(k, w, profits, capital) {
    const projects = profits.map((profit, i) => [capital[i], profit]).sort((a, b) => a[0] - b[0]);
    const maxHeap = new MaxHeap();
    let i = 0;
    while (k-- > 0) {
        while (i < projects.length && projects[i][0] <= w) {
            maxHeap.push(projects[i++][1]);
        }
        if (maxHeap.size() === 0) break;
        w += maxHeap.pop();
    }
    return w;
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }
    push(val) {
        this.heap.push(val);
        this._swim(this.size() - 1);
    }
    pop() {
        const max = this.heap[0];
        const end = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = end;
            this._sink(0);
        }
        return max;
    }
    size() {
        return this.heap.length;
    }
    _swim(k) {
        while (k > 0 && this._less(Math.floor((k - 1) / 2), k)) {
            this._swap(k, Math.floor((k - 1) / 2));
            k = Math.floor((k - 1) / 2);
        }
    }
    _sink(k) {
        const length = this.size();
        while (2 * k + 1 < length) {
            let j = 2 * k + 1;
            if (j < length - 1 && this._less(j, j + 1)) j++;
            if (!this._less(k, j)) break;
            this._swap(k, j);
            k = j;
        }
    }
    _less(i, j) {
        return this.heap[i] < this.heap[j];
    }
    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}