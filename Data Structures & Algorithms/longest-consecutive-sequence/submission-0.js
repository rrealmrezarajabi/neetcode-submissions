class Solution {
    
    longestConsecutive(nums) {

        const set = new Set(nums);

        let longest = 0;

        for (let num of nums) {

            if (!set.has(num - 1)) {

                let current = num;
                let length = 1;

                while (set.has(current + 1)) {
                    current += 1;
                    length += 1;
                }

                longest = Math.max(longest, length);
            }
        }

        return longest;
    }
}