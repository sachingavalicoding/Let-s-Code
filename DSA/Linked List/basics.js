// A linked list is a linear data structure used to store data.
// A linked list consists of multiple nodes that are connected
// sequentially.
// Each node contains:
// 1. Data
// 2. A reference/pointer to the next node
// Linked lists are useful for insertion and deletion,
// especially when we already have a reference to the position/node.
// To access a particular node, we generally need to traverse
// the list from the head until we reach the target node.
// Types of linked lists:
// 1. Singly Linked List
// 2. Doubly Linked List
// 3. Circular Linked List

// single linked list 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);
head.next.next.next = new Node(40);

// let i = head;
// while (i !== null) {
//     console.log("data ", i.data)
//     i = i.next;
// }

// noraml iterator 
// const traverserLinkedList = (head) => {
//     let temp = head;
//     console.log(head);
//     console.log();
//     while (temp != null) {
//         console.log(temp.data, "temp");
//         temp = temp.next;
//     }
// }
// recursive 
const traverserLinkedList = (head) => {
    if (head == null) {
        console.log();
        return;
    }
    console.log(head.data);
    head = head.next;
    traverserLinkedList(head)
}
traverserLinkedList(head);