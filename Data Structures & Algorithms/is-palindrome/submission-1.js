class Solution {
    
    isPalindrome(s) {

        let string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  

  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    if (string[left] !== string[right]) {
      return false;
    }
    left++;
    right--;
  }

 

  return true;
    }
}
