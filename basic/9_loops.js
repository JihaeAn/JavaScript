/**
 * Loops
 *
 * 1) for
 * 2) while
 */
for(let i = 0; i < 10; i++){
    console.log(i);
}

console.log('------------------');

for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log('------------------');

for(let i = 0; i < 3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i,j);
    }
}
console.log('------------------');

// *을 이용해서 6x6 정사각형을 출력해라
let square = '';
let side = 6;

for(let i = 0; i < side; i++){
    for(let j = 0; j < side; j++){
        square += '*';
    }
    square += '\n';
}
console.log(square);

/**
 * for...in
 */

/**
 * Object를 for...in Loops를 사용해주면 key값을 반환하고,
 * Array에서는 index값을 반환한다.
 */

const yuJin = {
    name: '안유진',
    year: 2003,
    group: 'ive',
}

for(let key in yuJin){
    console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이', '리즈', '이서', '장원영'];
for(let key in iveMembersArray){
    console.log(key);
    console.log(`${key}: ${iveMembersArray[key]}`);
}

/**
 * for...of
 * Array에서만 사용할 수 있다.
 */

/**
 * ⭐️
 * index 값을 가져오고 싶을 때 : for...in
 * 값을 가져오고 싶을 때       : for...of
 */

for(let value of iveMembersArray){
    console.log(value);
}

/**
 * While
 */
let number = 0;

while(number < 10) {
    number ++;
}
console.log(number);

/**
 * do...while
 *
 * while과의 차이점
 * while은 조건에 만족해야 실행하는 반면, do...while문은 일단 실행 후 조건을 본다.
 * 반대로임 !!
 *
 * 웬만해서는 잘 안 씀. 굳이 쓰지말자
 */
number = 0;

do{
    number++;
}while(number < 10);

console.log(number);

/**
 * break
 */
console.log('-------------------------');
for(let i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    console.log(i);
}
console.log('----------------');
number = 0;

while(number < 10){
    if(number === 5){
        break;
    }
    number ++;
    console.log(number);
}
// 왜 5까지 출력되냐면 4를 number가 0부터 시작해서 4일 때까지 실행될 거잖아?
// 그러면 ++ 때문에 5까지 찍히고 끝나겠지 !
console.log('-----------------');

/**
 * continue
 * for문의 break와 달리 현재 진행하고 있는 loop만 스킵하고 넘어간다.
 */
for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log('===========================');
number = 0;

while(number < 10){
    number++;

    if(number === 5){
        continue;
    }
    console.log(number);
}