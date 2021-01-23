let role = prompt('Кто пришел?');
let password;
let message;

if (role === 'Админ') {
	password = prompt('Пароль?');
	if (password === 'Черный Властелин') {
		message = 'Добро пожаловать!';
	} else if (password === null) {
		message = 'Вход отменен';
	} else {
		message = 'Пароль неверен';
	}
} else if (role === null) {
	message = 'Вход отменен';
} else {
	message = 'Я вас не знаю';
}

alert(message);