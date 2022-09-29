//? 스택 구현 문제


class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);
    }

    pop() {
        if (this.size() == 0) return -1;

        return this.stack.pop();
    }

    size() {
        return this.stack.length;
    }

    empty() {
        return this.size() ? "0" : "1"
    }

    top() {
        return this.stack[0];
    }
}