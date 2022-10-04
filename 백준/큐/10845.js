//? 큐

//? 1. 정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램 만들기

/*
    !명령 목록
    push X: 정수 X를 큐에 넣는 연산이다.
    pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    size: 큐에 들어있는 정수의 개수를 출력한다.
    empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
    front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
    back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
*/

// const input = "15\npush 1\npush 2\nfront\nback\nsize\nempty\npop\npop\npop\nsize\nempty\npop\npush 3\nempty\nfront".split("\n");
const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
const length = input.shift();

const queue = [];
let answer = "";

for (const command of input) {
    switch (command) {
        case "pop": {
            answer += queue.length !== 0 ? `${queue.shift()}\n` : "-1\n";
        } break;
        case "size": {
            answer += `${queue.length}\n`;
        } break;
        case "empty": {
            answer += queue.length === 0 ? "1\n" : "0\n";
        } break;
        case "front": {
            answer += queue[0] !== undefined ? `${queue[0]}\n` : "-1\n";
        } break;
        case "back": {
            answer += queue[queue.length - 1] !== undefined ? `${queue[queue.length - 1]}\n` : "-1\n"
        } break;
        default: {
            queue.push(command.split(' ')[1]);
        } break;
    }
}

console.log(answer);