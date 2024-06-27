/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    const [firstEdge, secondEdge] = edges;
  if (firstEdge[0] === secondEdge[0] || firstEdge[0] === secondEdge[1]) {
    return firstEdge[0];
  } else {
    return firstEdge[1];
  }
};