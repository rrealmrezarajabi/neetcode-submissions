class Solution {
   
    groupAnagrams(strs) {
       const obj = {};

  for (let s of strs) {
    const sorted = s.split("").sort().join("");

    if (!obj[sorted]) {
      obj[sorted] = [];
    }

    obj[sorted].push(s);
  }

  const res = Object.values(obj);

  return res;
    }
}
