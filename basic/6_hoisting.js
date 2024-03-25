/**
 * Hoisting
 */
console.log("Hello");
console.log("World");

// console.log(name);
// var name = '코드팩토리';
// console.log(name);
/**
 * Hoisting은 무엇인가?
 *
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 */
// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

console.log(yuJin);
let yuJin = '안유진';

/** var를 쓰지말라고 하는 이유가 이걸 막기 위해서라고 한다.
 *  위에 var로 된 애들을 출력하면 undefined가 찍히면서 돌아가지만
 *  let, const로 된 애들은 ReferenceError: yuJin is not defined라고 오류가 난다.
*/