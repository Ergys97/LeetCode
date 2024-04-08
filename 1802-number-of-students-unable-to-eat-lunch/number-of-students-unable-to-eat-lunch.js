/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let queue = students;
    let stack = sandwiches.reverse();
    let rotations = 0;

    while (queue.length > 0) {
        if (queue[0] === stack[stack.length - 1]) {
            queue.shift();
            stack.pop();
            rotations = 0;
        } else {
            queue.push(queue.shift());
            rotations++;
        }

        if (rotations === queue.length) {
            break;
        }
    }

    return queue.length;
};