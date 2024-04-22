/**
 * Object 객체
 */

// key : value pair
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance: function (){
        return `걸그룹 ${this.group} 멤버인 ${this.name}이 춤을 춥니다.`;
    }
};

console.log(yuJin);  // 댄스는 이렇게 출력 => dance: [Function: dance]
console.log(yuJin.name);
console.log(yuJin['name']);     // 위와 같은 의미임

// 응용: in을 쓰면 key값을 가져온다.
for(let key in yuJin){
    console.log(`${key}: ${yuJin[key]}`)
}

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey ='group';
const groupValue = 'ive';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function (){
        return `${this.name}이 춤을 춥니다.`;
    }
}
console.log(yuJin2);    // { name: '안유진', group: 'ive', dance: [Function: dance] }
console.log(yuJin2.dance());

yuJin2['group'] = '뉴진스';    // 값이 수정됨
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2); // 존재하지 않는 키 englishName도 추가되어서 새로운 property가 출력이 됨

delete yuJin2['englishName'];
console.log(yuJin2);

// const 키워드를 쓰면은 값을 변경할 수 없다고 했는데, 계속 변경이 되고 있다. 왤까?

/**
 * const로 선언한 객체의 특징
 *
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */
const wonYoung = {
    name: '장원영',
    group: '아이브',
}
console.log(wonYoung);

// 이미 초기화가 되면 값을 지울 수가 없다.
// wonYoung = { };
delete wonYoung.name;
delete wonYoung.group;
console.log(wonYoung);

// 객체 안 프로퍼티나 메서드는 변경 가능 !
wonYoung['group'] = '르세라핌';
console.log(wonYoung);
wonYoung.group = '안지해와 아이들';
console.log(wonYoung);

/**
 * 모든 키값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류 값 다 가져오기
 */
console.log(Object.values(wonYoung));

const name = '안지해';
const jiHae = {
    name,           // name: name이랑 똑같음
};
console.log(jiHae); // { name: '안지해' }












