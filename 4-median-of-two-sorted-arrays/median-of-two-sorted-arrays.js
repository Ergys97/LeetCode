/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const x = nums1.length;
    const y = nums2.length;
    let start = 0;
    let end = x;

    while (start <= end) {
        const partitionX = (start + end) >> 1;
        const partitionY = ((x + y + 1) >> 1) - partitionX;

        const maxX = partitionX == 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const maxY = partitionY == 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

        const minX = partitionX == x ? Number.POSITIVE_INFINITY : nums1[partitionX];
        const minY = partitionY == y ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            const lowMax = Math.max(maxX, maxY);

            if ((x + y) % 2 == 1) {
                return lowMax;
            }

            return (lowMax + Math.min(minX, minY)) / 2;
        } else if (maxX < minY) {
            start = partitionX + 1;
        } else {
            end = partitionX - 1;
        }
    }
}