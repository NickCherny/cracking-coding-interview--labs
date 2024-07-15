export class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor(value) {
    this.head = new ListNode(value);
  }

  add(value) {
    const node = new ListNode(value);

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;
  }

  remove(value) {
    let current = this.head;
    if (current.value === value) {
      this.head = current.next;
      return;
    }

    while (current.next !== null) {
      if (current.next.value === value) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

function main21() {
  // Remove publicates
  const list = new LinkedList(1);
  list.add(2);
  list.add(3);
  list.add(2);
  list.add(4);
  list.add(5);
  list.add(4);
  // expected: 1 -> 2 -> 3 -> 4 -> 5

  // Solution with O(n) + Space +1
  //   let hashmap = {};
  //   let current = list.head;
  //   let prev = list.head;
  //   while (current !== null) {
  //     if (hashmap[current.value]) {
  //       prev.next = current.next;
  //     } else {
  //       hashmap[current.value] = true;
  //       prev = current;
  //     }
  //     current = current.next;
  //   }

  let head = list.head;
  let fast = head?.next;

  list.print();
}

// main21();

// Question 2.2
// function removeNthEnd(head, nth) {
//   let stack = [];
//   let current = head;
//   while (current !== null) {
//     stack.push(current);
//     current = current.next;
//   }

//   for (let i = 0; i < nth; i++) {
//     stack.pop();
//   }
//   const prev = stack.pop();
//   prev.next = prev.next.next;

//   return head;
// }
// Solution with O(n) + Extra Space

// Solution with O(n)
// Without extra space
// function removeNthEnd(head, nth) {
//   let right = head;
//   let i = 0;
//   while (right.next !== null) {
//     right = right.next;
//     i++;
//   }

//   let current = head;
//   if (i - nth <= 1) {
//     head = head.next;
//   }

//   for (let j = 0; j < i - nth; j++) {
//     current = current.next;
//   }

//   current.next = current.next.next;

//   return head;
// }

// const list = new LinkedList(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);
// list.add(6);

// const head = removeNthEnd(list.head, 6);

// let current = head;
// while (current !== null) {
//   console.log(current.value);
//   current = current.next;
// }

// function removeMiddle(head) {
//   let slow = head;
//   let fast = head;
//   let prev = head;

//   while (fast !== null && fast.next !== null) {
//     fast = fast?.next?.next;
//     prev = slow;
//     slow = slow.next;
//   }

//   return (prev.next = slow.next);
// }

// const list = new LinkedList(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.add(5);

// removeMiddle(list.head);

// list.print();

// Question 2.4
// O(n) + extra space
function partition(head, value) {
  let current = head;
  let prev = null;
  let sortedList = new LinkedList(0);

  while (current !== null) {
    if (current.value < value) {
      sortedList.add(current.value);
      if (prev !== null) {
        prev.next = current.next;
      } else {
        head = current.next;
      }
    } else {
      prev = current;
    }
    current = current.next;
  }

  let c = head;
  while(c !== null) {
    sortedList.add(c.value);
    c = c.next;
  }

  return sortedList.head.next
}

console.log("Question: 2.4");
const list = new LinkedList(3);
list.add(5);
list.add(8);
list.add(5);
list.add(10);
list.add(2);
list.add(1);

let head = partition(list.head, 5);
while (head !== null) {
  console.log(head.value);
  head = head.next;
}
