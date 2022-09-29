//? 균형잡힌 세상

//? 1. 소괄호와 중괄호가 들어가 있고 짝을 구분해야함

// const input = [
//     "So when I die (the [first] I will see in (heaven) is a score list).",
//     "[ first in ] ( first out ).",
//     "Half Moon tonight (At least it is better than no Moon at all].",
//     "A rope may form )( a trail in a maze.",
//     "Help( I[m being held prisoner in a fortune cookie factory)].",
//     "([ (([( [ ] ) ( ) (( ))] )) ]).",
//     " .",
//     "."
// ];

// const input = ["((((()[]"]

//! 푸는데 오래걸린 이유
//? 1. "." 만 들어오는 마지막 문자 예외처리를 안해줌
//? 2. 닫힌 괄호만 있을때 stack에 push를 안해주어 없는 문자나 마찬가지로 처리됨

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
const result = [];

for (let i = 0; i < input.length; i++) {
    const stack = [];

    if (input[i] == ".") {
        break;
    }

    for (let j = 0; j < input[i].length - 1; j++) {
        if (input[i][j] == ")" && stack[stack.length - 1] == "(") {
            stack.pop();
        } else if (input[i][j] == "]" && stack[stack.length - 1] == "[") {
            stack.pop();
        } else if (input[i][j] == "(" || input[i][j] == "[" || input[i][j] == ")" || input[i][j] == "]") {
            stack.push(input[i][j]);
        }
    }

    result.push(stack.length === 0 ? "yes" : "no")
}

console.log(result.join("\n"));