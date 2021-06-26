//! 문제 설명
/*
    길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요.
    예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
*/

//! 제한 사항
//? n 은 길이 10,000 이하인 자연수입니다.

function solution(n) {
    let su = '수';
    let bak = '박';

    let result = '';

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            result += su;
        } else {
            result += bak;
        }
    }

    return result;
}

//! 입출력 예시
console.log(solution(3));   //* 결과: "수박수"
console.log(solution(4));   //* 결과: "수박수박"