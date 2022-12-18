const arrowIcon = document.querySelector('.fas');
const btn = document.querySelector('.arrow');
const img = document.querySelector('.item1');

function showImage() {
	img.classList.toggle('show');

	if (classList.contains('show')) {
		console.log('ok');
	} else {
		console.log(`nie ok`);
	}
}

function showArrow() {
	if (img.classList.contains(`show`)) {
		arrowIcon.style.rotate = `180deg`;
	} else {
		arrowIcon.style.rotate = `0deg`;
	}
}

btn.addEventListener('click', showImage);
btn.addEventListener('click', showArrow);
