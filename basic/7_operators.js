/**
 * Operators
 *
 * 연산자
 */

/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 3);

console.log("----------------------");

console.log(10 * (10+10));

/**
 * 증가와 감소
 */
let number = 1;

number++;
console.log(number);

number--;
console.log(number);
console.log('--------------------');

/**
 * 연산자의 위치
 * 에 따라 실행 시간이 다름
 * 그래서 연산자가 뒤에 있으면 number의 값이 ++되기 전에 result에 값을 저장한다.
 * 그러나 앞에다 쓰는 경우는 거의 없음 그냥 뒤에다 쓰는 걸로 생각하기
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++ number;
console.log(result, number);

result = -- number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +,- 사용하면 어떻게 될까?
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

sample = true;  // true는 1
console.log(+sample);
console.log(typeof +sample);

sample = false; // false는 0
console.log(+sample);
console.log(typeof +sample);

sample = '안유진';
// Nan -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);
console.log(typeof -sample);

/**
 * 할당 연산자 (assignment operator)
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');



