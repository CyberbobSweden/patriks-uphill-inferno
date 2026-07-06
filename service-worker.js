const CACHE_NAME = 'patriks-uphill-inferno-v1-5-0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/bike_idle.png',
  './assets/bg_day.png',
  './assets/terrain_tile.png',
  './assets/crash1.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/audio/bgmusic.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
