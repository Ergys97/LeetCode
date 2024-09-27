var MyCalendarTwo = function() {
    this.singleBookings = [];
    this.doubleBookings = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for (let [s, e] of this.doubleBookings) {
        if (start < e && end > s) {
            return false;
        }
    }

    for (let [s, e] of this.singleBookings) {
        if (start < e && end > s) {
            this.doubleBookings.push([Math.max(start, s), Math.min(end, e)]);
        }
    }

    this.singleBookings.push([start, end]);
    return true;
};