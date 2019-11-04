'use strict'; // означает что пишем на стандарте ES6

alert(1) //  вызов всплыв окна с "ок"
/* многострочный
         комментарий */

var left = 1; // можно пользоваться даже до объявления и существует во всёём коде
let second = 2;  // более оптимизированная так как использует только лет которая используется в данно месте. Ограничивается фигурными скобками
const pi = 3.14; // постоянная, но можно изменить

var number = 5 //как целые так и дробные + infinity
var string = 'hello' // важно иметь каычки
var symbol = Symbol();
var boolean = true; 
var obj = {}; //объект это коллекция анных используеая для хранения любых типов данных. Даннные - свойства

let person = {
    name: 'kurwa',
    age: 25,
    isMarried: true
}
console.log(person.name); // rurwa
console.log(persone['name']);

let arr = [1, 3, 5] //массив хранит любые однородные и неоднородные днные
console.log(arr[0]); //1

//ОБЩЕНИЕ С ПОЛЬЗОВАТЕЛЕМ
//alert('hello');

//confirm('are you here?'); //ok or cancel

/*let answer = confirm('are you here?'); 
console.log(answer);*/

/*let answer = prompt('Есть ли вам 18?', 'да'); 
console.log(answer); */

var money = +prompt("Введите число", ""); //принимает только числа изз-за знака +
var
    input = prompt("Please enter a positive number"), //принимет значения строкой
    inputNum = parseInt(input);   //преобразование строки в число

if (isNaN(inputNum) || inputNum < 1)
    alert("You did not enter a positive number.");

//операторы
//+ - * /  +может скаладывать строки или числа и строки преврщая в строки, это всё конкатенация

let incr = 10
    decr = 10;
incr++; // покажет 10, но далее уже 11 в програе
decr++; //покажет 10, но далее уже 9 в програе
++incr; // покажет 11 и будет 11 в программе
--incr; // покажет 9 и будет 9 в проге

5%3 //это остаток от деления = 1

//   && и то и то верно 
//   || или то или то верно

// 