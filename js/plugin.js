let a = 5,
    b = 10,
    c = 20,
    x = 30,
    y = 40,
    z = 2,
    i = 1;
let numSquare = 3;
let _btn = 'hidden';
let btn_ = 'visible';
let num = 0;
let _display ='inline-block';
// =============Присваивание======
//записать в коротком виде
console.log(`a = 5 краткая запись a += 10  результат: ${a += 10}`);
console.log(`b = 10 краткая запись b *= 18 результат: ${b *= 18}`);
console.log(`c = 20 краткая запись c -= 10 результат: ${c -= 10}`);
console.log(x += a, y *= z, i *= 5 * y);

//возвести переменную в квадрат
console.log(numSquare *= numSquare);

// =============Условные операторы============
if (_btn === 'hidden') console.log(_btn = 'visible');
else console.log(_btn = 'hidden');

btn_ = (btn_ === 'hidden')?  console.log(_btn = 'visible') : console.log(_btn = 'hidden');



if (num === 0){
    console.log(num = 1);
} else if (num < 0) {
    console.log(num = 'less then zero');
}   else {
    console.log(num *= 10);
}

(num === 0)?  console.log(num = 1) : (num < 0)? console.log('less then zero') : console.log(num *= 10);
num = (num === 0)? 1 : (num < 0)? 'less then zero' : num * 10;
console.log(num);
// =============Switch case================
switch (_display) {
    case 'block' :
        console.log('block');
        break;
    case 'none' :
        console.log('none');
        break;
    case 'inline' :
        console.log('inline');
        break;
    default :
        console.log('other');
}
// =============Преобразование типов данных ========
// let a = 0 || 'string';    // - все значения «ложные», то || возвратит последнее из них: 'string'
// let a = 1 && 'string';    // - первый аргумент - true, поэтому возвращается второй аргумент:'string'
// let a = null || 25;       // - все значения «ложные», то || возвратит последнее из них: 25
// let a = null && 25;       // - первый аргумент - false, он и возвращается, а второй аргумент игнорируется: null
// let a = null || 0 || 35;  // - все значения «ложные», то || возвратит последнее из них: 35
// let a = null && 0 && 35;  // - остановится на первом false, все последующие игнорируется: null

// 12 + 14 + '12'   - первое сложение 12+14, затем оператор "+", у которого один из аргументов строка, приводит к строке и другой аргумент, результат: '2612'
// 3 + 2 - '1'      - так как отсутствует оператор "+"  '1', будет преобразовано к числу, результат: 4
// '3' + 2 - 1      - первое вычетание, затем конкатенация, результат: 31
// true + 2         - Численное преобразование,true преобразуется к 1, результат: 3
// +'10' + 1        - унарный плюс "+" перед строкой приводит к преобразованию к числу 10, результат: 11
// undefined + 2    - undefined преобразуется к NaN, результат: ошибка при математических операциях NaN
// null + 5         - null преобразуется к 0, результат: 5
// true + undefined - true преобразуется к 1,undefined преобразуется к NaN, результат: ошибка при математических операциях NaN