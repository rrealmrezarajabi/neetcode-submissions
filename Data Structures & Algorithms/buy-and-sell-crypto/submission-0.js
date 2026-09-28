class Solution {
    
    maxProfit(prices) {


let l = 0;
let r = 1;
let max = 0;

while (r < prices.length) {
  if (prices[l] >= prices[r]) {
    l = r;
    r++;
    continue;
  }

  let res = prices[r] - prices[l];

  if (res > max) {
    max = res;
  }

  r++;
}

return max


    }
}
