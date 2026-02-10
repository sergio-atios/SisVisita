// Service Worker para SisVisita PWA
// Versão do cache - SEMPRE AUMENTE ao fazer updates
const CACHE_VERSION = 'v1.4.0-final';
const CACHE_NAME = `sisvisita-${CACHE_VERSION}`;

const urlsToCache = [
  './',
  './index.html',
  './agente.html',
  './coordenador.html',
  './supervisor.html',
  './manifest.json'
];

// ===== INSTALAÇÃO =====
self.addEventListener('install', event => {
  console.log('[SW] Instalando:', CACHE_VERSION);
  
  // Força ativação imediata sem esperar
  self.skipWaiting();
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Cache criado:', CACHE_NAME);
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error('[SW] Erro ao criar cache:', err))
  );
});

// ===== ATIVAÇÃO =====
self.addEventListener('activate', event => {
  console.log('[SW] Ativando:', CACHE_VERSION);
  
  event.waitUntil(
    Promise.all([
      // Limpar TODOS os caches antigos
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('[SW] Deletando cache antigo:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Tomar controle imediatamente
      self.clients.claim()
    ])
  ).then(() => {
    console.log('[SW] Ativado e controlando páginas');
    // Notificar clientes sobre nova versão
    return self.clients.matchAll().then(clients => {
      clients.forEach(client => {
        client.postMessage({
          type: 'CACHE_UPDATED',
          version: CACHE_VERSION
        });
      });
    });
  });
});

// ===== FETCH =====
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  
  // Ignorar chrome-extension e outros protocolos não-http
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        // Estratégia: Cache primeiro, depois rede
        if (cachedResponse) {
          // Retorna do cache mas atualiza em background
          fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then(cache => {
                cache.put(event.request, networkResponse);
              });
            }
          }).catch(() => {});
          
          return cachedResponse;
        }
        
        // Não está em cache, buscar da rede
        return fetch(event.request).then(response => {
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        });
      })
      .catch(err => {
        console.error('[SW] Erro no fetch:', err);
        // Retornar fallback se disponível
        return caches.match('./index.html');
      })
  );
});

// ===== MENSAGENS =====
self.addEventListener('message', event => {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});
