/**
 * Array Function
 */
let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '이서',
    '리즈'
];
console.log(iveMembers);

// push()
// 배열 마지막에 element 추가하고, 반환값을 가지는데 배열의 길이를 반환해준다.
console.log(iveMembers.push('코드팩토리'));  // 7
console.log(iveMembers);

// pop()
// 배열 맨 마지막 element를 삭제하고, 삭제한 값을 반환해준다.
console.log(iveMembers.pop());
console.log(iveMembers);

// shift()
// 배열 0번째 element를 삭제하고, 삭제한 값을 반환해준다.
console.log(iveMembers.shift());    // 안유진
console.log(iveMembers);            // 안유진을 뺀 나머지 배열

// unshift()
// push와 비슷하지만 배열 맨 앞에 추가되고, 새로 생겨난 배열의 길이를 반환해준다.
console.log(iveMembers.unshift('안유진')); // 6
console.log(iveMembers);

// splice()
// spiice(인덱스 번호, 자를 데이터 갯수) -> ex) 0번째 인덱스부터 3개 삭제
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);

// 위에 함수들은 요즘은 잘 쓰지 않는 함수들이다.
// 밑에 함수들을 눈 여겨 보자

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '이서',
    '리즈'
];

// concat()
// 끝에 내가 추가한 요소를 추가해서 새로운 Array를 반환해준다.
// 아예 다른 메모리 공간의 값을 저장해주는 것
console.log(iveMembers.concat('안지해'));
console.log(iveMembers);

// slice()
// 몇 번 인덱스부터 몇 개의 요소를 잘라낼 건지
// 새로운 Array를 반환해준다.
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator
// 새로운 Array를 반환해준다.
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

// 이 코드는 List 안에 List를 넣은 거라 위와 같은 내용을 출력하지 않고, 겉에 []가 한 겹 더 있는 결과값을 출력함
let iveMembers3 = [
  iveMembers,
];
console.log(iveMembers3);

let iveMembers4 = iveMembers;
console.log(iveMembers4);

console.log(iveMembers4);
console.log(iveMembers === iveMembers4);

console.log([
    ...iveMembers,
] === iveMembers);  // 완전히 새로운 Array를 반환하므로 false

// join()
// ,를 기준으로 string 타입으로 반환해준다.
// 모든 값들을 string으로 엮을 때 많이 사용한다.
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(' 님, '));



// sort()
// 오름차순 정렬이고, 반환값이 없다.
// 원래 Array가 변경이 된다.
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    5,
    7,
    3,
];
console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 두려면) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 두려면) 0보다 작은 숫자를 반환
// 3) 원래 순서를 그대로 두려면 0을 반환
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map()
// map()은 모든 값들을 순회한다.
// 새로운 Array를 반환한다.
console.log('-----------------------------------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x)=>{
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else {
        return x;
    }
}));
console.log(iveMembers);

// filter()
numbers = [1, 9, 4, 6, 7];
console.log(numbers.filter((x) => x % 2 === 0));

// find()
// filter()와는 다르게 첫번째로 걸린 하나의 값만 return 해줌
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

/**
 * 1) 초기값인 0이 p에 입력된다.
 * 2) numbers Array의 첫 번째 값인 1이 n에 입력된다.
 * 3) p + n 즉, 0 + 1의 결과값인 1이 반환된다.
 * 4) 3에서 반환한 값(1)이 p에 입력된다.
 * 5) Array의 두 번째 값인 8이 n에 입력된다.
 * 6) p + n 즉, 1 + 8의 결과값인 9가 반환된다.
 * 7) 6에서 반환한 값(9)가 p에 입력된다.
 * 8) numbers 리스트의 모든 값들을 다 순회할 때까지 반복
 *    결국 모든 값을 다 더한 25가 반환된다.
 */

// reduce() 퀴즈
// reduce() 함수를 사용해서 iveMembers 변수에 있는 모든 스트링 값들의 길이를 더해서 반환하라
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0));



















