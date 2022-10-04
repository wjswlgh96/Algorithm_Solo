//? 요세푸스 문제 ( 환형 큐를 써서 나중에 풀어보기 )

const input = require("fs").readFileSync("dev/stdin").toString().trim().split(" ");
const length = input[0];
const targetNum = input[1];

const queue = Array.from({ length }).map((_, idx) => idx + 1);
let result = "";

let i = 1;

while (queue.length) {
    const current = queue.shift();

    if (i % targetNum === 0) {
        result += current + ", ";
    } else {
        queue.push(current);
    }

    i++;
}


console.log("<" + result.slice(0, result.length - 2) + ">");