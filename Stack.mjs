import { ListNode } from "./LinkedList.mjs";

class Stack {
  _size = 0;
  _head = null;

  push(value) {
    const node = new ListNode(value, this.head);
    if (this._head === null) {
      this._head = node;
    } else {
      node.next = this._head;
      this._head = node;
    }
    this._size++;
  }

  pop() {
    if (this._head === null) {
      throw Error("Stack is empty");
    }

    const value = this._head.value;
    this._head = this._head.next;
    this._size--;

    return value;
  }

  peek() {
    if (this._head === null) {
      throw Error("Stack is empty");
    }

    return this._head.value;
  }

  isEmpty() {
    return this._head === null;
  }

  get size() {
    return this._size;
  }
  print() {
    let current = this._head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }
}

class StackMin {
  _ms = new Stack();
  s = new Stack();

  push(value) {
    if (this._ms.isEmpty() || this._ms._head?.value > value) {
      this._ms.push(value);
    }
    this.s.push(value);
  }

  pop() {
    const value = this.s.pop();
    if (this._ms._head?.value === value) {
      this._ms.pop();
    }
    return value;
  }

  min() {
    return this._ms.peek();
  }
}

// Lab  3.2 Stack Min
// const lab1 = new StackMin();

// lab1.push(3);
// lab1.push(4);
// lab1.push(2);
// lab1.push(1);
// lab1.push(5);
// lab1.push(1);

// console.log('min   ->', lab1.min()); // 1
// console.log('pop() ->', lab1.pop()); // 1
// console.log('min   ->', lab1.min()); // 1
// console.log('pop() ->', lab1.pop())
// console.log('min   ->', lab1.min()); // 2

// Lab 3.5 Sort Stack
// Input [3, 1, 4, 2, 5]
// Output [1, 2, 3, 4, 5]

// 1) ss[3]
// 2) ss[3, 1]
// 3) cycle 2 ->

function sortStack(stack) {
  const sorted = new Stack();
  while (!stack.isEmpty()) {
    const value = stack.pop();
    if (sorted.isEmpty() || sorted.peek() > value) {
      sorted.push(value);
    } else {
      const tmpStack = new Stack();
      while (!sorted.isEmpty() && sorted.peek() < value)
        tmpStack.push(sorted.pop());

      sorted.push(value);
      while (!tmpStack.isEmpty()) sorted.push(tmpStack.pop());
    }
  }
  return sorted;
}

const randomStack = new Stack();
randomStack.push(3);
randomStack.push(1);
randomStack.push(4);
randomStack.push(2);
randomStack.push(5);

console.log("Should be: 1 -> 2 -> 3 -> 4 -> 5");
const sortedStack = sortStack(randomStack);
console.log("Output:");
sortedStack.print();
