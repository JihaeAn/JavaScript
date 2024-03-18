/**
 * Data Types
 *
 * 여섯 개의 Primitive Type과
 * 한 개의 오브젝트 타입이 있다.
 *
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 *
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

/**
 *
 * @type {number}
 */
const age = 32;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof  temperature);
console.log(typeof pi);
console.log('---------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

/**
 * String 타입
 */
const codeFactory = '"코"드팩토리';
console.log(codeFactory);
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/**
 * Template Literal
 *
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하면 된다.
 */
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveJiHae = '아이브\t안지해';
console.log(iveJiHae);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

const iveJiHae2 = `아이브 '"//////
안지해`;
console.log(iveJiHae2);
// 영문으로 Tab키 위에 거 !

console.log(typeof iveJiHae2);

const groupName = '아이브';
console.log(groupName + ' 안지해');
console.log(`${groupName} 안지해`); //템플릿 리터럴

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isFalse);
console.log(typeof isTrue);

/**
 * Undefined
 *
 * 사용자가 직접 값ㅇ르 초기화하지 않았을 때
 * 지정되는 값이다.
 *
 * 직접 undefined로 값을 초기화하는 건 지양해야한다.
 */
let noInit;