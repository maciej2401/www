//1
const numbers = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i]);
}
//2
function arg(arg1, arg2, arg3) {
	console.log(arg1 + arg2 * arg3);
}

arg(1, 2, 3);
//3
if (numbers.length > 5) {
	console.log(`true`);
} else {
	console.log(`false`);
}
//dla ambitnych
console.log(`tablica z cyframi ma ${numbers.length} elementów`);
