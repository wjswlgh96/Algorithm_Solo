//! 문제 설명
/*
    어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
    예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다.
    문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
*/

//! 제한 사항
//? 1. 공백은 아무리 밀어도 공백입니다.
//? 2. s 는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
//? 3. s 의 길이는 8000 이하 입니다.
//? 4. n 은 1 이상, 25 이하인 자연수입니다.

function solution(s, n) {
    let arr = s.split('');
    let str = '';

    // 아스키 코드
    // a = 97
    // z = 122
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            continue;
        } else if (arr[i].charCodeAt() >= 97) {
            // 소문자
            arr[i] = arr[i].charCodeAt();
            arr[i] += n;

            // z 의 코드를 넘어갈때
            if (arr[i] > 122) {
                arr[i] -= 26;
            }
        } else {
            // 대문자
            arr[i] = arr[i].charCodeAt();
            arr[i] += n;

            // Z 의 코드를 넘어갈때
            if (arr[i] > 90) {
                arr[i] -= 26;
            }
        }

        arr[i] = String.fromCharCode(arr[i]);
    }

    return arr.join('');
}

//! 입출력 예시
console.log(solution("AB", 1));     //* 결과: "BC"
console.log(solution("z", 1));      //* 결과: "a"
console.log(solution("a B z", 4));  //* 결과: "e F d"