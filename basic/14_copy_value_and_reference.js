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
console.log(yuJin1 === yuJin2);
console.log(yuJin1 === yuJin3);
console.log(yuJin2 === yuJin3);















