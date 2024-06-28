/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    const connections = new Array(n).fill(0);
  for (const [a, b] of roads) {
    connections[a]++;
    connections[b]++;
  }
  
  const sortedCities = connections
    .map((count, index) => ({ index, count }))
    .sort((a, b) => b.count - a.count);

  const values = new Array(n);
  let value = n;
  for (const { index } of sortedCities) {
    values[index] = value--;
  }

  let totalImportance = 0;
  for (const [a, b] of roads) {
    totalImportance += values[a] + values[b];
  }

  return totalImportance;
};