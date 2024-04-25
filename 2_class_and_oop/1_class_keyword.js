/**
 * 클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메서드(함수)를 정의하는 일종의 틀
 *
 * Class Keyword
 */
class IdoModel{
    // ⭐️ 자바스크립트에서는 생성자 덕분에 프로퍼티를 선언하지 않아도 된다.
    // 그렇지만 좋은 개발자가 되기 위해 적는 게 좋다 ^_^
    name;
    year;

    constructor(name, year) {
        this.name = name;   // this.name = 프로퍼티(속성), name = 파라미터로 받아온 값
        this.year = year;
    }

    sayName(){
        return `안녕하세요. 저는 ${this.name}입니다.`;    // 객체.필드명
    }
}

// constructor 생성자

const yuJin = new IdoModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdoModel('김가을', 2002);
console.log(gaeul);

console.log(yuJin.name);    // 안유진
console.log(yuJin['name']); // 위랑 같은 역할이다.
console.log(Object.keys(yuJin));    // key값 가져오는 방법

// ⭐️ 객체를 for문으로 출력하면 i는 프로퍼티를 가지고 돌게 된다.
for(let i in yuJin){
    console.log(`${i} : ${yuJin[i]}`);
}

console.log(yuJin.sayName());
console.log(gaeul.sayName());

// 객체를 생성하기 전까지는 function, 생성 후엔 object ???
console.log(typeof IdoModel);
console.log(typeof yuJin);


















