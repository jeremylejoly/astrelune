// Astrelune — service worker (04/11/2026) : garde sur l'appareil les fichiers de données versionnés
// (donnees/*.js?v=empreinte et donnees-leger/…). Une nouvelle version d'un fichier a une autre empreinte, donc une autre
// adresse : jamais de vieille version. Tout le reste (index.html, astrelune.js, contenu) passe par le réseau comme avant.
const CACHE = 'astrelune-donnees-v1';
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || !/\/donnees(-leger)?\/.+\.js$/.test(u.pathname) || !u.searchParams.get('v')) return;
  e.respondWith(caches.open(CACHE).then(async (c) => {
    const r = await c.match(e.request); if (r) return r;
    const n = await fetch(e.request); if (n.ok) c.put(e.request, n.clone()); return n;
  }));
});
