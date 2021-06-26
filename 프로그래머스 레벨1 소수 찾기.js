//! 문제 설명
/*
    1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
    소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
    (1은 소수가 아닙니다.)
*/

//! 제한 사항
//? n은 2이상 1000000이하의 자연수입니다.

function isPrime(num) {

    let sqrt = parseInt(Math.sqrt(num));

    if (num === 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    if (num % 2 === 0) {
        return false;
    }

    for (let i = 3; i <= sqrt; i += 2) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

function solution(n) {

    let count = 0;

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }

    return count;
}

//! 입출력 예시
console.log(solution(10));  //* 결과: 4
console.log(solution(5));   //* 결과: 3