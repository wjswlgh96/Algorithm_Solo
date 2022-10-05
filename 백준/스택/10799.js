//? 쇠막대기
//? 막대기 하나에 들어가있는 괄호 + 1 이 총 잘린 갯수

const input = require("fs").readFileSync("dev/stdin").toString().trim().split("");
const stack = [];

let result = 0;

for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
        stack.push(input[i]);
    } else {
        stack.pop();

        if (input[i - 1] === "(") {
            result += stack.length;
        } else {
            result += 1;
        }
    }
}

console.log(result);