class Solution {
    encode(strs) {
        return strs.map(s => `${s.length}#${s}`).join("");
    }

    decode(str) {
        let arr = [];
        let i = 0;

        while (i < str.length) {
            let len = 0;

            while (str[i] !== "#") {
                len = len * 10 + Number(str[i]);
                i++;
            }

            i++;

            arr.push(str.substring(i, i + len));
            i += len;
        }

        return arr;
    }
}