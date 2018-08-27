
/* ====================== sources ====================== */
/*   https://css-tricks.com/serviceworker-for-offline/
     https://developer.mozilla.org/en-US/docs/Web/API/Cache
*/

let staticCacheName = 'restaurants-cache-v1';
self.addEventListener('install', function(event) {
	console.log('');
	event.waitUntil(
caches.open(restaurants-cache-v1)
		.then(function (cache) {
			return cache.addAll([
				'/',
				'/restaurant.html',
				'/css/styles.css',
				'/data/restaurants.json',
				'/img/1.jpg',
				'/img/10.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/js/dbhelper.js',
				'/js/main.js',
				'/js/restaurant_info.js',

				]);
		
		})
		
		);

});

self.addEventListener('activate', function (event) {
	event.waitUntil(
		caches.keys().then(function (CacheName) {
			return Promise.all(
				CacheName.filter(function (CacheName) {
					// body...
					return !CacheName.startsWith('restaurants-');
				})
				.map(function (CacheName) {

					return caches.delete(CacheName);
					// body...
				})

				);
			// body...
		})
		.then(function () {
			console.log('activate completed.')
			// body...
		})

		);
	// body...
});

self.addEventListener('fetch', function (event) {
	event.respondWith( 
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
			
		})


		)
})
