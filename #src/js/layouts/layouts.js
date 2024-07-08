
// -----------------------------------------------------------------------------



export function modalRequest() {
	const buttonRequests = document.querySelectorAll('.ordeer-button');
	const requestPage = document.querySelector('.page__request');
	const closeButton = document.querySelector('.request-page__close-btn');
	const showCookie = document.querySelector('.show-cookie');
	buttonRequests.forEach(buttonRequest => {
		buttonRequest.addEventListener('click', (e) => {
			requestPage.classList.add('_show');
		});
		//* ------------------------------------------------------------------------

	});
	showCookie.addEventListener('click', () => {
		showCookie.classList.add('_hide');
	});
	closeButton.addEventListener('click', () => {
		requestPage.classList.remove('_show');
	});

}
