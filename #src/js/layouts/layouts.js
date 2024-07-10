export function modalRequest() {
	const buttonRequests = document.querySelectorAll('.ordeer-button');
	const requestPage = document.querySelector('.page__request');
	const closeButton = document.querySelector('.request-page__close-btn');
	buttonRequests.forEach(buttonRequest => {
		buttonRequest.addEventListener('click', (e) => {
			requestPage.classList.add('_show');
			document.body.classList.add('no-scroll');
		});
		//* ------------------------------------------------------------------------

		closeButton.addEventListener('click', () => {
			requestPage.classList.remove('_show');
			document.body.classList.remove('no-scroll');
		});
	});


}

export function showCookie() {
	document.addEventListener('DOMContentLoaded', function () {
		setTimeout(function () {
			const cookieBanner = document.querySelector('.show-cookie');
			cookieBanner.classList.add('_show');

			const closeButton = cookieBanner.querySelector('button');
			closeButton.addEventListener('click', function () {
				cookieBanner.classList.remove('_show');
			});
		}, 4000); // 20000 миллисекунд = 20 секунд
	});


}
