class Solution {
    
    isPalindrome(s) {

        let string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const arr = string.split("");

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  let result = arr.join("");

  if (string === result) {
    return true;
  }

  return false;
    }
}
