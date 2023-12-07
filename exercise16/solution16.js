class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    let newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  createLoop(index) {
    let current = this.head,
      startLoop = null,
      lastIndex = 0;

    while (current.next) {
      if (lastIndex === index) {
        startLoop = current;
      }
      current = current.next;
      lastIndex++;
    }

    if (startLoop) {
      current.next = startLoop;
    } else {
      console.log("Index out of bounds. No loop created.");
    }
  }

  findLoopStart() {
    let slow = this.head;
    let fast = this.head;

    // First part: finding if a loop exists
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow === fast) {
        // Collision point
        break;
      }
    }

    // No loop found
    if (!fast || !fast.next) {
      return null;
    }

    // Second part: finding the start of the loop
    slow = this.head;
    while (slow !== fast) {
      slow = slow.next;
      fast = fast.next;
    }

    return slow;
  }
}

module.exports = { ListNode, LinkedList }; 

// // Example usage:
// let list = new LinkedList();
// list.add(1);
// list.add(2);
// list.add(2);
// list.add(3);
// list.add(3);
// list.add(6);
// list.add(7);
// list.add(2);
// list.add(1);
// list.createLoop(3);

// let loopStart = list.findLoopStart();
// if (loopStart) {
//   console.log(`Loop starts at node with value: ${loopStart.value}`);
// } else {
//   console.log("No loop found in the list.");
// }
