class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        const res = {};

  for (let n of nums) {
    if (!res[n]) {
      res[n] = 0;
    }

    res[n]++;
  }

  const output = Object.entries(res)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((item) => Number(item[0]));
  return output;
     
}
}