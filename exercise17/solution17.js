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
    if (!this.head) {
      this.head = new ListNode(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    }
  }

  isPalindrome() {
    if (!this.head || !this.head.next) {
      return true;
    }

    let slow = this.head;
    let fast = this.head;

    // Find the middle of the list
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Reverse the second half of the list
    slow.next = this.reverseList(slow.next);

    // Compare the two halves
    slow = slow.next;
    let head = this.head;
    while (slow) {
      if (head.value !== slow.value) {
        return false;
      }
      head = head.next;
      slow = slow.next;
    }

    return true;
  }

  reverseList(head) {
    let prev = null;
    let current = head;
    while (current) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    return prev;
  }
}

module.exports = LinkedList; 

// // Example usage:
// let list = new LinkedList();
// list.add("r");
// list.add("a");
// list.add("c");
// list.add("e");
// list.add("c");
// list.add("a");
// list.add("r");

// console.log(list.isPalindrome()); // Should return true

// let list2 = new LinkedList();
// list2.add(1);
// list2.add(2);
// list2.add(3);

// console.log(list2.isPalindrome()); // Should return false
