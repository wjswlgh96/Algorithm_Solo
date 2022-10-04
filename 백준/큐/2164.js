//? 카드2

const input = require("fs").readFileSync("dev/stdin").toString().trim().split("\n");
const length = Number(input.shift());

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size += 1;
    }

    dequeue() {
        const value = this.head.value;
        this.head = this.head.next;
        this.size -= 1;
        return value;
    }

    peek() {
        return this.head.value;
    }
}

const queue = new Queue();
let i = 1;

for (let i = 1; i <= length; i++) {
    queue.enqueue(i);
}

while (queue.size !== 1) {
    const current = queue.dequeue();

    if (i % 2 === 0) {
        queue.enqueue(current);
    }

    i++;
}

console.log(queue.peek());
