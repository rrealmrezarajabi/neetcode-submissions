class Solution {
   
    groupAnagrams(strs) {
       const map = new Map();

  for (let s of strs) {
    const key = s.split("").sort().join("");

    if (!map.has(key)) {
      map.set(key,[])
    }

    map.get(key).push(s)
  }

  const res = Array.from(map.values());

  return res;
    }
}
