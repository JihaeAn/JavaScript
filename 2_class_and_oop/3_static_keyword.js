/**
 * Static Keyword
 */
class IdolModel2{
    name;
    year;
    static groupName = '아이브';

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    static returnGroupName(){
        return '아이브';
    }
}

const yuJin = new IdolModel2('안유진', 2003);
console.log(yuJin);         // IdolModel2 { name: '안유진', year: 2003 }
// 궁금해서 찍어봄
console.log(IdolModel2);    // [class IdolModel2] { groupName: '아이브' }
console.log(new IdolModel2('안지해', 2000));   // IdolModel2 { name: '안지해', year: 2000 }


// static 키워드를 쓰게 되면 클래스 자체에 직접 귀속이 된다.
// 인스턴스에 귀속이 되지 않는다. 그러니 new 키워드를 써도 소용없다.
console.log(IdolModel2.groupName);           // 아이브
console.log(IdolModel2.returnGroupName());   // 아이브

/**
 * factory constructor
 */
class IdolModel{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // Object로부터 이 클래스의 인스턴스를 만들겠다는 의미라고 생각
    // 파라미터로 받는 object에는 name 값과 year 값이 있을 거라는 가정하에 생성!
    static fromObject(object){
        return new IdolModel(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1],
        );
    }
}

// static 키워드를 써서 함수를 선언하면, new 키워드를 쓰지 않아도 객체가 생겨남
// 여기서는 fromObject()라는 static 함수가 새로 IdolModel를 생성해서 반환해주기 때문
const yuJin2 = IdolModel.fromObject({
    name: '안유진',
    year: 2003,
});
console.log(yuJin2);    // IdolModel { name: '안유진', year: 2003 }

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2004,
    ]
);
console.log(wonYoung);  // IdolModel { name: '장원영', year: 2004 }
















