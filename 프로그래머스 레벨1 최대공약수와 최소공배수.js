//! 문제 설명
/*
    두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요.
    배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다.
    예를 들어 두 수 3, 12의 최대공약수는 3,
    최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
*/

//! 제한 사항
//? 1. 두 수는 1이상 1000000이하의 자연수입니다.

//! 유클리드 호제법을 사용하여 풀었음

function Greatest(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

function Least(a, b, c) {
    return (a * b) / c;
}

function solution(n, m) {

    let greatest = Greatest(n, m);

    return [greatest, Least(n, m, greatest)];
}

console.log(solution(3, 12));   //* 결과 : [3, 12]
console.log(solution(2, 5));    //* 결과 : [1, 10]