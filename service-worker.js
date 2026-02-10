// Service Worker para SisVisita PWA
// IMPORTANTE: Aumente este número a cada atualização para forçar recache
const CACHE_VERSION = '1.3.1';
const CACHE_NAME = `sisvisita-v${CACHE_VERSION}`;
const urlsToCache = [
  './',
  './index.html',
  './agente.html',
  './coordenador.html',
  './supervisor.html',
  './manifest.json'
];

// Instalação do Service Worker
self.addEventListener('install', event => {
  // Força a ativação imediata
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação do Service Worker
self.addEventListener('activate', event => {
  // Assume controle imediatamente
  event.waitUntil(
    Promise.all([
      // Limpar caches antigos
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }),
      // Assume controle de todas as páginas imediatamente
      self.clients.claim()
    ])
  );
});

// Interceptação de requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retorna do cache se disponível
        if (response) {
          return response;
        }
        
        // Tenta buscar da rede
        return fetch(event.request).then(response => {
          // Não cachear requisições inválidas
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clona a resposta
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Offline - retorna página de erro ou cache
        return caches.match('./agente.html');
      })
  );
});
