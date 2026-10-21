self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // تمرير جميع الطلبات للشبكة مباشرة لضمان تنفيذ السكريبت الديناميكي
  e.respondWith(fetch(e.request));
});