/**
 * 타입 변환
 * Type conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);
console.log('98' * 2);  // string에는 곱하는 개념이 없어서 암묵적(강제적)으로 number로 인식
console.log('98' - 2);  // string에는 빼기 개념이 없어서 ok?

console.log('------------------');

/**
 * 명시적 변환 몇 가지 더 배우기
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof  parseInt('0'), parseInt('0.99'));
console.log(typeof  parseInt('0.99'), parseFloat('0.99'));
console.log(typeof + '1', +'1');    // number로 인식함

/**
 * Boolean 타입으로의 변환
 */
console.log(!!'x');  // String 값 안에 값이 있으면 true를 반환함
console.log(!!'');  // 값이 있냐 없냐로 구분하기 때문에 false를 반환함

console.log(!!0);   // 숫자는 false를 반환함 !!!
console.log(!!'0');
console.log(!!'false'); // 문자열로 인식하니 당연히 true
console.log(!!false);
console.log(!!undefined);   // undefined & null도 false

console.log(!!{});  // object는 무조건 true !
console.log(!![]);  // array도 무조건 true !

/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 *
 * 모두 false로 반환한다.
 */