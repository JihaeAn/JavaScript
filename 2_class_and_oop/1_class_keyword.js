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
}

// constructor 생성자

const yuJin = new IdoModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdoModel('김가을', 2002);
console.log(gaeul);

console.log(yuJin.name);    // 안유진




















