/**
 * If and Switch
 */
let number = 25;

if(number % 2 === 0){
    console.log('지해의 나이는 짝수입니다.');
}else{
    console.log('지해의 나이는 홀수입니다.');
}

if(number % 2 === 0){
    console.log('2의 배수입니다.');
} else if(number % 3 === 0){
    console.log('3의 배수입니다.');
} else if(number % 5  === 0){
    console.log('5의 배수입니다.');
} else{
    console.log('2,3의 배수가 아닙니다.');
}

const englishDay = 'monday';

let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesDay':
        koreanDay = '화요일';
        break;
    case 'wednesDay':
        koreanDay = '수요일';
        break;
    case 'thursDay':
        koreanDay = '목요일';
        break;
    case 'friDay':
        koreanDay = '금요일';
        break;
    default:
        koreanDay = '주말';
        break;
}

console.log(koreanDay);