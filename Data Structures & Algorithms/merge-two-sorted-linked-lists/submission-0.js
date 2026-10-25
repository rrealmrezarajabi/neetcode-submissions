

class Solution {

    mergeTwoLists(list1, list2) {


        let temp = {val:0 , next:null}
        let node = temp

        while(list1 !== null && list2 !==null){

            if(list1.val < list2.val){
                node.next = list1
                list1 = list1.next
            }
            else{
                node.next = list2
                list2 = list2.next
            }

            node = node.next
        }

        if(list1){
            node.next = list1
        }
        else{
            node.next = list2
        }

        return temp.next


    }
}
