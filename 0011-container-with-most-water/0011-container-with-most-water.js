/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let start = 0;
    let end = height.length -1;

    while(start < end) {
        const startBorder = height[start];
        const endBorder = height[end];

        if(startBorder < endBorder) {
            max = Math.max(startBorder * (end - start), max);
            start++;
        } else {
            max = Math.max(endBorder * (end - start), max);
            end--;
        }
    }

    return max;
};