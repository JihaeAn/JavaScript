/**
 * try ... catch
 *
 * 1) 발생시킬 때 -> 던진다고 한다. (throw)
 * 2) 명시적으로 인지할 때 -> 잡는다고 한다. (catch)
 *
 * finally는 옵션이다. 써도 되고 안 써도 되는
 */
function runner(){
    try {
        console.log('Hello');

        throw new Error('큰 문제가 생겼습니다!');

        console.log('Code Factory');
    }catch (e){
        console.log('---catch---');
        console.log(e);
    }finally {
        console.log('---finally---')
    }
}
runner();   // Hello => ---catch--- => Error: 큰 문제가 생겼습니다! => Error들 보여주고 => ---finally---
