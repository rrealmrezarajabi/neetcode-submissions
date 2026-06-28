class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let arr1 = s.split('').sort()
        let arr2 = t.split('').sort()

        let isEqual = JSON.stringify(arr1) === JSON.stringify(arr2)

        if(isEqual){
            return true
        }

        return false


    }
}
