/**
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function(formula) {
  const stack = [new Map()];
  let i = 0;
  while (i < formula.length) {
    if (formula[i] === '(') {
      stack.push(new Map());
      i++;
    } else if (formula[i] === ')') {
      const top = stack.pop();
      i++;
      let iStart = i;
      while (i < formula.length && !isNaN(formula[i])) i++;
      const multiplier = i > iStart ? parseInt(formula.substring(iStart, i)) : 1;
      for (let [atom, count] of top) {
        stack[stack.length - 1].set(atom, (stack[stack.length - 1].get(atom) || 0) + count * multiplier);
      }
    } else {
      let iStart = i++;
      while (i < formula.length && formula[i] >= 'a' && formula[i] <= 'z') i++;
      const atom = formula.substring(iStart, i);
      iStart = i;
      while (i < formula.length && !isNaN(formula[i])) i++;
      const count = i > iStart ? parseInt(formula.substring(iStart, i)) : 1;
      stack[stack.length - 1].set(atom, (stack[stack.length - 1].get(atom) || 0) + count);
    }
  }

  const atomCounts = Array.from(stack.pop()).sort((a, b) => a[0].localeCompare(b[0]));
  return atomCounts.map(([atom, count]) => `${atom}${count > 1 ? count : ''}`).join('');
}