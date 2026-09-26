class Solution {
   
    maxArea(heights) {

         let r = heights.length - 1;
  let l = 0;
  let max = 0;

  while (l < r) {
    let area = (r - l) * Math.min(heights[l], heights[r]);

    if (area > max) {
      max = area;
    }

    if (heights[l] < heights[r]) {
      l++;
    } else {
      r--;
    }
  }

  return max;
    }
}
