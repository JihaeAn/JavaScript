/**
 * Variable 선언하기
 *
 * 1) var - 더 이상 쓰지 않는다.
 * 2) let
 * 3) const
 */
var name = '안지해';
console.log(name);

var age = 32;
console.log(age);

let ive = 'ive';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */
ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);
// newJeans = '안지해';  const는 값 변경 안 됨

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것
 * 2) 할당
 */
var name = '안지해 짱';
console.log(name);

let girlFriend;
console.log(girlFriend); // undefined 변수는 선언됐지만 정의는 되지 않았다는 뜻

// const girlFriend2; 값이 초기화된(할당된) 상태로 선언이 되어야 함
// java의 final과 같다.
