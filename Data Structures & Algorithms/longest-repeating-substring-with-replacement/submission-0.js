class Solution {
    
    characterReplacement(s, k) {
        const count = new Map()
        let left = 0
        let result = 0
        let max = 0

        for(let right = 0 ; right < s.length ; right++){

            const rightChar = s[right]
            count.set(rightChar, (count.get(rightChar) || 0) + 1); 
             max = Math.max(max, count.get(rightChar))

            if((right - left + 1) - max > k){
            
                const leftChar = s[left]
                count.set(leftChar, count.get(leftChar) - 1)
                left++

            }

             result = Math.max(result, right - left + 1);

        }


        return result

       
    }
}
