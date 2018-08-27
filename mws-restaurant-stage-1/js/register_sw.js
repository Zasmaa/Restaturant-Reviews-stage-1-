
if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('/sw.js')
	.then(function (registration) {
		console.log('service worker registration successful', + registration.scope)

		// body...
	})
	.catch(function (error) {
		console.log('registration failed', + error);
	});
}