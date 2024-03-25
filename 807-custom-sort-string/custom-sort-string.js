/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let orderMap = new Map();
    for(let i = 0; i < order.length; i++) {
        orderMap.set(order[i], i);
    }
    return s.split('').sort((a, b) => {
        let aOrder = orderMap.has(a) ? orderMap.get(a) : order.length;
        let bOrder = orderMap.has(b) ? orderMap.get(b) : order.length;
        return aOrder - bOrder;
    }).join('');
};