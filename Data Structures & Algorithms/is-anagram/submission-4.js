class Solution {
  
    isAnagram(s, t) {
  const countS = {};
  const countT = {};

  if (s.length !== t.length) {
    return false;
  }

  for (let i of s) {
    countS[i] = (countS[i] || 0) + 1;
  }

  for (let i of t) {
    countT[i] = (countT[i] || 0) + 1;
  }

  for (let key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }

  return true
  
}
}
