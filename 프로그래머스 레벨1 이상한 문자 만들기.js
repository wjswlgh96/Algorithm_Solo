//! 문제 설명
/*
    문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
    각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
    각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.
 */

//! 제한 사항
//? 1. 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
//? 2. 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

//! 메모
/*
    이번에는 테스트 케이스가 많아서 고생좀했다.
    중간에 오는 공백의 갯수가 2개 이상이면 그 만큼의 공백을 보존을 해서 출력을 해주어야했다.

    처음에 맞게 푼 것 같아서 계속 시도했다가 안되었었는데.. 문제에 설명을 좀 더 해주었으면 좋았을텐데
    테스트 케이스도 무엇이 들어오는지 안보이는게 단점인 것 같다..

    밑에 코드를 보면 split(" ", -1) 을 써주었는데 이렇게 사용하면 공백이 한개만 있을때는 분리가 되지만
    2 개 이상이되면 배열에 공백 한 개가 담긴다.

    ex) str = 'test---haha', 공백을 '-'로 대체한것
    arr = str.split(" ", -1); 을 해주면
    arr = ['test', '', '', 'haha'] 가 들어가게 된다.
*/

function solution(s) {
    let arr = s.split(" ", -1);
    let result = [];

    console.log("arr:", arr);

    for (let i = 0; i < arr.length; i++) {
        let temp = '';

        if (arr[i] === " ") {
            temp += ' ';
        }

        for (let j = 0; j < arr[i].length; j++) {
            if (j % 2 === 0) {
                temp += arr[i][j].toUpperCase();
            } else {
                temp += arr[i][j].toLowerCase();
            }
        }

        result.push(temp);
    }

    return result.join(' ');
}

//! 입출력 예시
console.log(solution("try hello  world")); //* 결과: "TrY_HeLlO__WoRlD" 일부러 공백은 _로 대체해서 썼다.