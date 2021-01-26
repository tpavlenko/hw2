// "Заставить" пользователя ввести с клавиатуры число. Просить пользователя ввести число до тех пор, пока мы не получим число.

let message;

do {
	message = prompt('Введите число');
} while (isNaN(message))


/*let message;

while (isNaN(message)) {
	message = prompt('Введите число');
}*/


/*let message;

for (; isNaN(message); message++) {
  message = prompt('Введите число')
}*/
