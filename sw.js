// Guarda la app en el móvil para que abra sin cobertura en el campo.
// Al cambiar cualquier archivo de la app, sube el número de versión.
const CACHE = "golf-valderrey-v30";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const esFuente = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com" || url.hostname === "cdnjs.cloudflare.com";
  if (url.origin !== location.origin && !esFuente) return;
  // Red primero (para recibir actualizaciones); si no hay cobertura, lo guardado.
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && (res.ok || res.type === "opaque")) {
        const copia = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copia));
      }
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("./index.html")))
  );
});
