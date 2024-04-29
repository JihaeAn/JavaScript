/**
 * Inheritance
 *
 * 상속의 정의
 * 상속(inheritance)은 객체들 간의 관계를 구축하는 방법이다.
 * 슈퍼클래스, 또는 부모 클래스 등의 기존의 클래스로부터 속성과 동작을 상속받을 수 있다.
 *
 * (클래스는 객체지향 프로그래밍에서 특정 객체(인스턴스)를 생성하기 위한 변수와 메서드(함수)를 정의하는 일종의 틀이다.)
 */
class IdolModel{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

class MaleIdolModel extends IdolModel {
    sing(){
        return '남자 아이돌이 노래를 부릅니다.';
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003 }

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin); // MaleIdolModel { name: '지민', year: 1995 }

console.log(yuJin.dance()); // 안유진이 춤을 춥니다.
console.log(yuJin.name);    // 안유진
console.log(jiMin.sing());  // 남자 아이돌이 노래를 부릅니다.

























