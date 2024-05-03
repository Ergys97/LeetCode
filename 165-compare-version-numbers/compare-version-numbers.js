/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareVersion(version1, version2) {
    let parts1 = version1.split('.').map(Number);
    let parts2 = version2.split('.').map(Number);
    let maxLength = Math.max(parts1.length, parts2.length);
    for (let i = 0; i < maxLength; i++) {
        let part1 = i < parts1.length ? parts1[i] : 0;
        let part2 = i < parts2.length ? parts2[i] : 0;
        if (part1 < part2) {
            return -1;
        } else if (part1 > part2) {
            return 1;
        }
    }
    return 0;
}