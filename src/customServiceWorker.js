workbox.routing.registerRoute(
  /.*\.(?:png|jpg|jpeg|svg|gif)/g,
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  /.*\.(?:js|json)/g,
  workbox.strategies.staleWhileRevalidate()
);