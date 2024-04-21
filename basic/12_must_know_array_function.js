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
// 몇 번 인덱스부터






