function solution(x, n) {
    let result = [];
    let temp = 0;

    for (let i = 0; i < n; i++) {
        temp += x;

        result.push(temp);
    }

    return result;
}

// 입출력 예시
console.log("test1:", solution(2, 5));
console.log("test2:", solution(4, 3));
console.log("test3:", solution(-4, 2));