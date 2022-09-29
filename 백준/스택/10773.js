//? 제로

//? 1. 잘못된 수를 부를 때마다 0을 외침
//? 2. 모든 수를 받아 적은 후 그 수의 합을 알아야함
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const length = input.splice(0, 1)[0];

const stack = [];

for (let i = 0; i < length; i++) {
    switch (input[i]) {
        case "0": {
            stack.pop();
        } break;
        default: {
            stack.push(+input[i]);
        } break;
    }
}

console.log(stack.reduce((a, c) => a + c, 0));