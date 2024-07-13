/**
 * @param {number[]} positions
 * @param {number[]} healths
 * @param {string} directions
 * @return {number[]}
 */
var survivedRobotsHealths = function(positions, healths, directions) {
    let robots = positions.map((pos, index) => ({
    pos,
    health: healths[index],
    dir: directions[index],
    index: index
  }));

  robots.sort((a, b) => a.pos - b.pos);

  let stack = [];
  robots.forEach(robot => {
    let collision = false;
    while (stack.length > 0 && !collision) {
      let top = stack[stack.length - 1];
      if (top.dir === 'R' && robot.dir === 'L') {
        if (top.health > robot.health) {
          top.health -= 1;
          collision = true;
        } else if (top.health < robot.health) {
          robot.health -= 1;
          stack.pop();
        } else {
          stack.pop();
          collision = true;
        }
      } else {
        break;
      }
    }
    if (!collision) {
      stack.push(robot);
    }
  });

  let survivors = stack.map(robot => ({index: robot.index, health: robot.health}));
  survivors.sort((a, b) => a.index - b.index);

  return survivors.map(robot => robot.health);
};