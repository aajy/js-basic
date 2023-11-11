const video = document.querySelector('video');
const h1 = document.querySelector('h1');
const btn = document.querySelector('.button');
const colorBoxbutton = document.querySelectorAll('li');
const scrollBtn = document.querySelector('.scrollButton');

/*
  new Anime(선택자, {변경할 속성객체}, {duration:시간, easeType: 가속도타입, callback: 완료함수})
  left, top, width, height, opacity, scroll
*/

scrollBtn.addEventListener('click', () => {
	new Anime(
		window,
		{ scroll: 3000 },
		{
			duration: 1000,
			easeType: 'ease1',
			callback: () => {
				new Anime(window, { scroll: 0 }, { duration: 300, easeType: 'linear' });
			},
		}
	);
});
video.addEventListener('timeupdate', function () {
	if (video.currentTime >= 4.3 && video.currentTime <= 4.5) {
		scrollBtn.style.display = 'block';
		video.pause();
		btn.innerHTML = 'play';
	} else {
		scrollBtn.style.display = 'none';
	}
});
video.addEventListener('ended', myHandler, false);
function myHandler(e) {
	video.pause();
	btn.innerHTML = 'play';
}
btn.addEventListener('click', () => {
	let btnText = btn.innerHTML;
	if (btnText === 'pause') {
		video.pause();
		btn.innerHTML = 'play';
	} else {
		video.play();
		btn.innerHTML = 'pause';
	}
});

colorBoxbutton.forEach((el, index) => {
	el.addEventListener('click', () => {
		h1.style.color = getComputedStyle(el).backgroundColor;
	});
});