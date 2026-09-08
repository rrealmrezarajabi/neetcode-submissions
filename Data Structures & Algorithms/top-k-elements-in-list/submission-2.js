class Solution {
   topKFrequent(nums,k) {
  const map = new Map();

  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  const result = [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => item[0]);

  return result
}
}