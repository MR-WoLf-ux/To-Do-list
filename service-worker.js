const CACHE_NAME = "todo-cache-v4";
const urlsToCache = [
    "./index.html",
    "./Css/style.css",
    "./JS/app.js",
    "./manifest.json",
    "./Icon/todo.png",
    "./sound/done.wav",
    "https://cdn.fontcdn.ir/Font/Vazir/Vazir.css",
    "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then((cache) => {
                console.log("Caching files");
                return cache.addAll(urlsToCache);
            })
            .catch((err) => console.log("Cache add failed:", err))
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request)
                .then((networkResponse) => {
                    if (!networkResponse || networkResponse.status !== 200) {
                        return networkResponse;
                    }
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                    return networkResponse;
                })
                .catch(() => {
                    return caches.match("./index.html");
                });
        })
    );
});

self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener("message", (event) => {
    if (event.data === "update-cache") {
        caches.open(CACHE_NAME).then((cache) => {
            cache.addAll(urlsToCache).then(() => {
                console.log("Cache updated");
            });
        });
    }
});
