/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
function openLock(deadends, target) {
    const dead = new Set(deadends);
    const queue = [['0000', 0]];
    const seen = new Set(['0000']);
    
    for (let [node, turns] of queue) {
        if (node === target) return turns;
        if (dead.has(node)) continue;
        
        for (let i = 0; i < 4; i++) {
            for (let diff of [-1, 1]) {
                const newNode = node.slice(0, i) + ((+node[i] + diff + 10) % 10) + node.slice(i+1);
                if (!seen.has(newNode)) {
                    seen.add(newNode);
                    queue.push([newNode, turns + 1]);
                }
            }
        }
    }
    
    return -1;
}