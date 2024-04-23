/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 *
 * 1) 기본적으로 모든 primitive 값은 copy by value
 * 2) 객체는 copy by reference
 */
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안지해 입니다.';
console.log(original);
console.log(clone);

let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);


console.log('========================');


originalObj['group'] = '뉴진스';
console.log(originalObj);
console.log(cloneObj);      // 둘이 같은 값 출력

console.log(originalObj === cloneObj);  // true
console.log(original === clone);        // false

// Object 안에 값이 같다고 해서 같은 값이 아님
originalObj = {
    name: '최지호',
    group: '코드팩토리',
}
cloneObj = {
    name: '최지호',
    group: '코드팩토리',
}
console.log(originalObj === cloneObj);  // false

/**
 * Copy by Value
 * 값 그대로를 복사
 *
 * Copy by Reference
 * 참조 객체 공간(주소)을 복사
 *  => 그러니 오리지널 값이 바뀌면 참조하고 있는 모든 값들도 변함!
 */
console.log('==================================');

const yuJin1 = {
    name: '안유진',
    group: '아이브',
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
}
console.log(yuJin1 === yuJin2); // ture
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

/**
 * Spread Operator
 *
 * Array 뿐만 아니라 객체에서도 존재한다.
 * Spread Operator는 call by value 일까 reference일까?
 * 당연히 value ! 서로 다른 값을 참조하고 있음
 */
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3); // false

const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);    // { year: 2003, name: '안유진', group: '아이브' }

// 코드팩토리라고 name을 넣어줬더라도 spread operator가 있으므로 덮어쓰기 된다.
const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);    // { name: '안유진', group: '아이브' }

// BUT !!! 밑에다가 써주면 spread operator된 이후에 값이 변경되는 것이므로 값이 변경이 될 수 있다.
// ⭐️ 순서가 중요
const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin7);    // { name: '코드팩토리', group: '아이브' }

// Array도 마찬가지로 위치가 중요하다.
// Array는 앞에 써도 출력되네 ! 가 아니고, 덮어쓰기 될 객체의 요소가 아니라 그렇다.
const numbers = [1, 3, 5, 10];
const numbers2 = [
    10,
    ... numbers,
];
console.log(numbers2);  // [ 10, 1, 3, 5, 10 ]










