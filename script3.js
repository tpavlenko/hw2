// Лекция
// Реализовать cкрипт универсального калькулятора, который получает от пользователя два значения (a, b), и выводит в консоль результат всех арифметических операций (+, -, *, /).

const firstNumber = +prompt('Введите значение a:');
const secondNumber = +prompt('Введите значение b:');
const addition = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;

const result = '**************\n\
\n\
При а = ' + firstNumber + ', b = ' + secondNumber + '\n\
\n\
Результат:\n\
\n\
--------------------\n\
\n\
a + b = ' + addition + '; a - b = ' + subtraction + '; a * b = ' + multiplication + '; a / b = ' + division + '; \n\
\n\
-------------------\n\
\n\
************** ';

console.log(result);


/*const firstNumber = +prompt('Введите значение a:');
const secondNumber = +prompt('Введите значение b:');
const addition = firstNumber + secondNumber;
const subtraction = firstNumber - secondNumber;
const multiplication = firstNumber * secondNumber;
const division = firstNumber / secondNumber;

const result = `**************

При а = ${firstNumber}, b = ${secondNumber}

Результат:

--------------------

a + b = ${addition}; a - b = ${subtraction}; a * b = ${multiplication}; a / b = ${division};

-------------------

**************`;

console.log(result);*/