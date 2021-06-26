//! 문제 설명
/*
    정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

//! 제한 사항
//? n은 0 이상 3000이하인 정수입니다.

function solution(n) {

    let result = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result += i;
        }
    }

    return result;
}

//! 입출력 예시
console.log(solution(12));  //* 결과: 28
console.log(solution(5));   //* 결과: 6