/**
 * Super and Override
 *
 * 부모로부터 상속을 받게 되면 생성자도 상속을 받게 된다.
 */
class IdolModel{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    sayHello(){
        return `안녕하세요 ${this.name}입니다.`;
    }
}


class FemaleIdolModel extends IdolModel{
    // 노래 / 춤
    part;

    constructor(name, year, part) {
        super(name, year);    // super()은 IdolModel()과 똑같다. (super 클래스는 부모 클래스이니까)
        this.part = part;
    }

    // 주의해야할 점은 자바스크립트는 완벽한 객체지향 언어가 아님
    // ⭐️ 변수값을 불러올 때는 suepr 키워드를 함수 안에서 쓰면 안 됨
    // 그래서 super.name이라고 쓰지 않고 this.name을 쓰는 것임
    sayHello() {
        // return `안녕하세요 ${this.name}입니다. ${this.part}를 맡고있습니다.`;
        return `${super.sayHello()} ${this.part}을 맡고있습니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003, '보컬');
console.log(yuJin); // FemaleIdolModel { name: '안유진', year: 2003, part: '보컬' }

const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);              // IdolModel { name: '장원영', year: 2004 }
console.log(wonYoung.sayHello());   // 안녕하세요 장원영입니다.
console.log(yuJin.sayHello());      // 안녕하세요 안유진입니다. 보컬을 맡고있습니다.














