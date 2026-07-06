const CACHE_NAME = 'patriks-uphill-inferno-v1-8-0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './assets/crash1.png',
  './assets/tree_round.png',
  './assets/tree_pine.png',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/audio/bgmusic.mp3',
  './assets/bike_frames/frame0.png',
  './assets/bike_frames/frame1.png',
  './assets/bike_frames/frame2.png',
  './assets/bike_frames/frame3.png',
  './assets/bike_frames/frame4.png',
  './assets/bike_frames/frame5.png',
  './assets/bike_frames/frame6.png',
  './assets/bike_frames/frame7.png',
  './assets/bike_frames/frame8.png'
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
