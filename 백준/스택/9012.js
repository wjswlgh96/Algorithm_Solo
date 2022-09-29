//? 괄호 - Stack 문제

const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

const length = input.splice(0, 1)[0];
const result = [];

for (let i = 0; i < length; i++) {
    let count = 0;

    for (const char of input[i]) {
        count += char === "(" ? 1 : -1;

        if (count < 0) break;
    }

    result.push(count == 0 ? "YES" : "NO");
}

console.log(result.join("\n"));