const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('.btn2');
function handLeClick() {
	console.log('kliknięto przycisk nr 1');
}

function aff() {
	console.log(2 + 2);
}

btn1.addEventListener('click', handLeClick);
btn2.addEventListener('click', aff);

ZMIENNA.addEventListener('click', Funkcja);
