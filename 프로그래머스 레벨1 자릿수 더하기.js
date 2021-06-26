//! 문제 설명
/*
    자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
    예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
*/

//! 제한 사항
//? N의 범위 : 100,000,000 이하의 자연수

function solution(n) {
    let sum = 0;

    while (0 < n) {
        sum += n % 10;

        n = Math.floor(n / 10);
    }

    return sum;
}

//! 입출력 예시
console.log(solution(123)); //* 결과: 6
console.log(solution(987)); //* 결과: 24