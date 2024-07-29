/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    let teams = 0;
    const n = rating.length;

    for (let j = 0; j < n; j++) {
        let lessLeft = 0, greaterLeft = 0;
        let lessRight = 0, greaterRight = 0;

        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) lessLeft++;
            if (rating[i] > rating[j]) greaterLeft++;
        }

        for (let k = j + 1; k < n; k++) {
            if (rating[k] < rating[j]) lessRight++;
            if (rating[k] > rating[j]) greaterRight++;
        }

        teams += lessLeft * greaterRight + greaterLeft * lessRight;
    }

    return teams;
};