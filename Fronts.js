class SLLNode {             // Classes singal link list node
    constructor(val) {
        this.value = val;    // holds value for this new_node
        this.next = null;   // points to next node
    }
}
class SLL {                 // Class single linked list node (itself)
    constructor() {         // will start with no nodes
        this.head = null;   // head points to first node
    }

    // Add Front
    // Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

    // accepts a value
    addFront(value) {

        let new_node = new SLLNode(value); // create a new node
        new_node.next = this.head       // assign it to the list head / assign the head to be the next node to the new node
        this.head = new_node            // returns a pointer to the new head node / assign the new_node to be the new head of the list
        return this.head;               //OR return "this"
    }


    // Remove Front
    // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

    removeFront() {
        // If the list is empty, place the new node as the head 
        if (this.head == null) {        //if list is empty do nothing
            return this.head;
        }
        var removedNode = this.head;    // creates variable to hold node to remove
        this.head = removedNode.next;   // assigns the new head of the list to be the next node
        removedNode.next = null;        // clear the removedNode from head to null (removed from the list)
        return this.head;
    }
    // Front
    // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.value;
        }

        //Ternary operator option
        // return this.head ? this.head.value : null;
    }
}


var mySLL = new SLL();
mySLL.addFront(10);
mySLL.addFront(5);
mySLL.addFront(3);
mySLL.removeFront();

console.log(mySLL);
console.log(mySLL.head.next);