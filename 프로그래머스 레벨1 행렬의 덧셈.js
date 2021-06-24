function solution(arr1, arr2) {

    // 맵을 사용하여 반복문을 겹쳐 코드를 간결하게 사용할 수 있다.
    return arr1.map((el1, i) => el1.map((el2, j) => el2 + arr2[i][j]));
}

console.log(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]]));
console.log(solution([[1], [2]], [[3], [4]]));