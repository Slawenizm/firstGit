"use strict";

var money = +prompt("Ваш бюджет на месяц?", ""); 
var time = prompt("Введите дату в формате YYYY-MM-DD");


var appData = {
    budget: money,
    timeData: time,
    expenses: {     //обязательные расходы
         answer1: answer2 
        },
    optionalExpenses: '',
    income: {
    
    },
    savings: false
};

var answer1 = prompt("Введите обязательную статью расходов в этом месяце");
var answer2 = +prompt("Во сколько обойдется?", "");

alert((appData.budget - answer2)/30);
console.log(answer2);