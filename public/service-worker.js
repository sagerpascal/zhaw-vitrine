


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        'presentation.html',
        'images/touch/homescreen48.png',
        'images/touch/homescreen72.png',
        'images/touch/homescreen96.png',
        'images/touch/homescreen144.png',
        'images/touch/homescreen168.png',
        'images/touch/homescreen192.png',
        'webslides/static/css/svg-icons.css',
        'webslides/static/css/webslides.css',
        'webslides/static/js/svg-icons.js',
        'webslides/static/js/webslides.js',
        'webslides/static/images/cai_logo.png',
        'webslides/static/images/dgx-a100.jpg',
        'webslides/static/images/eeg.jpg',
        'webslides/static/images/furhat.jpg',
        'webslides/static/images/gpu.png',
        'webslides/static/images/books.jpg',
        'webslides/static/images/makeblock.jpg',
        'webslides/static/images/Radlager.jpg',
        'webslides/static/images/wheel_bearing.jpg',
        'manifest.json',
        'service-worker.js',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
        })
    );
});