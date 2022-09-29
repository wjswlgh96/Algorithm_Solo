//? 스택 수열

//? 1. 스택을 이용하여 오름차순 수열을 만들 수 있는지 없는지 판단해라


// const input = ["8", "4", "3", "6", "8", "7", "5", "2", "1"];
// const input = ["5", "1", "2", "5", "3", "4"];
const input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const length = input.shift();

const stack = [];
let result = "";

let num = 1;

for (let i = 0; i < length; i++) {
    const current = input.shift();

    while (num <= current) {
        stack.push(num++);
        result += "+\n"
    }

    const top = stack.pop();

    if (top > current) {
        result = "NO";
        break;
    }

    result += "-\n"
}

console.log(result);