// Ввести с клавиатуры 2 числа a и b(где a < b).Запустить цикл перебора от a до b.Вывести в консоль квадраты чётных чисел.

let a = +prompt('Enter number a');
let b = +prompt('Enter number b');
let i = a;

while (i >= a && i <= b) {
	if (i % 2 == 0)
		console.log(i ** 2);
	i++;
}

// Почему так не работает?
/*while (i >= a && i <= b && i % 2 == 0) {
	console.log(i ** 2);
	i++;
}*/
