//! 문제 설명
/*
    정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
*/

//! 제한 사항
//? 1. num은 int 범위의 정수입니다.
//? 2. 0은 짝수입니다.

function solution(num) {
    return num % 2 === 0 ? 'Even' : 'Odd'
}

console.log(solution(3));   //* 출력결과 : 'Odd'
console.log(solution(4));   //* 출력결과 : 'Even'