/*

    && = i

    || = lub

    ! = negatyw, zaprzeczenie
*/


if(5 < 0 && 10 > 0){
	console.log(1);
} else {
	console.log(0);
}

if(5 > 0 || 10 < 0){
	console.log(1);
} else {
	console.log(0);
}

//1

const score = 15 % 2;
console.log(`${score}`);

//2

let num1 = 8;
num1++;
num1++;
console.log(`${num1}`);

//3

let x = 5;
const y = 10;

x *= y;
console.log(x);
x /= y;
console.log(x);