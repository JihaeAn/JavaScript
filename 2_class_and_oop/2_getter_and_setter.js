/**
 * Getter and Setter
 */
class IdolModel{
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    /**
     * 1) 데이터를 가공해서 새로운 데이터를 반환할 때
     * 2) private한 값을 반환할 때
     */

    // 함수처럼 정의되어 있지만 Getter는 함수가 아니다.
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }

    // Setter는 무조건 파라미터가 하나 받아야 함
    // 이미 정의한 값을 변경할 수 있기 때문에 현대에서는 별로 선호하지는 않음
    set setName(name){
        this.name = name;
    }
}
const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
console.log(yuJin.nameAndYear);

yuJin.setName = '장원영';
console.log(yuJin); // IdolModel { name: '장원영', year: 2003 }


class IdolModel2{
    #name;  // private 값: 실제로 값을 저장은 하고 있으나 외부에서 접근하지 못하는 값
    year;

    constructor(name, year) {
        this.#name = name;
        this.year = year;
    }

    // private 값은 getter로 접근!
    get name(){
        return this.#name;
    }

    set name(name){
        this.#name = name;
    }
}
const yuJin2 = new IdolModel2('안유진', 2003);
console.log(yuJin2);        // IdolModel2 { year: 2003 }
// 이렇게 getter로 가져오면 프라이빗 값을 가져올 수 있다.
console.log(yuJin2.name);   // 안유진

yuJin2.name = '코드팩토리';
console.log(yuJin2.name);   // 코드팩토리





