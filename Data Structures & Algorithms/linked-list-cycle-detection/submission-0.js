

class Solution {
    
    hasCycle(head) {
        let current = head
        const seen = new Set()
        while(current !==null){
            if(seen.has(current)){
                return true
            }

            seen.add(current)
            current = current.next
        }

        return false
    }
}
