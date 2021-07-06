//! 문제 설명
/*
    문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
    예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
*/

//! 제한 사항
//? s는 길이 1 이상, 길이 8 이하인 문자열입니다.

function solution(s) {
    // s 의 길이가 4 or 6 이거나 숫자로만 구성되어있는지

    let length = s.length;
    let check = /\d/;

    if (length !== 4 && length !== 6) {
        return false;
    }

    for (let i = 0; i < length; i++) {
        if (!check.test(s[i])) {
            return false;
        }
    }

    return true;
}

//! 입출력 예시
console.log(solution("a234"));  //* 결과: false
console.log(solution("1234"));  //* 결과: true