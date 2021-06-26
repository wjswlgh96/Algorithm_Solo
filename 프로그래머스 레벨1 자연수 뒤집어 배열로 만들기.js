//! 문제 설명
/*
    자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
    예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
*/

//! 제한 사항
//? n은 10,000,000,000이하인 자연수입니다.

// 내가 한 문자열 처리 방법
function solution(n) {
    let str = String(n);
    let arr = str.split("");

    return arr.map((el) => Number(el)).reverse();
}

//! 숫자 처리 방법
// function solution(n) {
//     let arr = [];

//     while(0 < n) {
//         arr.push(n % 10);

//         n = Math.floor(n / 10);
//     }

//     return arr;
// }

//! 입출력 예시
console.log(solution(12345));   //* 결과: [5, 4, 3, 2, 1]