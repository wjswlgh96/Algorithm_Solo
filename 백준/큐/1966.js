//? 프린터

//? 프린터에 중요도가 있음 => 나머지 문서중 중요도가 높은 문서가 하나라도 있으면 인쇄하지 않고 Queue의 가장 뒤에 재배치

const input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let [n, ...testCases] = input;

const lengthArr = [];
const fileArr = [];

testCases.map((el, idx) => {
    if (idx % 2 === 0) {
        lengthArr.push(el.split(" ")[1]);
    } else {
        fileArr.push(el.split(" "));
    }
})

for (let i = 0; i < n; i++) {
    const queue = fileArr[i];

    let count = 1;
    let targetNum = +lengthArr[i];

    while (true) {
        const current = queue.shift();

        if (Math.max(...queue) <= current && targetNum === 0) {
            console.log(count);
            break;
        } else if (Math.max(...queue) > current && targetNum === 0) {
            queue.push(current);
            targetNum = queue.length - 1;
        } else if (Math.max(...queue) > current) {
            queue.push(current);
            targetNum -= 1;
        } else if (Math.max(...queue) <= current) {
            count += 1;
            targetNum -= 1;
        }
    }
}