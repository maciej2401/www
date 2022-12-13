const passLength = 7;

if (passLength >= 10) {
	console.log(`masz bardzo dobre hasło`);
} else if (passLength > 5 && passLength < 10) {
	console.log(`masz dobre hasło`);
} else if (length < 5) {
	console.log(`masz słabe hasło`);
}
