'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "cb721862ef8e7f7b3787c008919f1587",
"/": "cb721862ef8e7f7b3787c008919f1587",
"main.dart.js": "f260a29611b6d93fe5cc165177a86687",
"flutter_service_worker%202.js": "dc390a16a2ea619257c77404d0a5144d",
"main.dart%202.js": "429f5a917e442e58906f2a0766b8f211",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index%202.html": "f4e9a7808e50b3084af84e97d29b655a",
"manifest.json": "fd6494b37022485e5afc7fd40db2392b",
"assets/images/pltw_website.png": "beb8468e07da83e3b130dc00e32ae086",
"assets/images/alden_pacific.jpg": "53c77ada1ce74b4da80a43bd9a3c318f",
"assets/images/ethics.png": "f80910718fb4dcbfbadb9d9e1e1e41ec",
"assets/images/autodesk.png": "d41a56fe6d6cea9edf22bb7948426ca4",
"assets/images/instagram.png": "6aa589114f810d037cd078b07c45ee97",
"assets/images/lighthouse.jpg": "67b83c767017187f96ddbf582ddf9eb3",
"assets/images/pinto.png": "9db4377cdb06dbc71d16860eac0e134a",
"assets/images/fb.png": "bf5ebefb9de0a7cac8e23c14a9e9019c",
"assets/images/github.png": "eb94bb97c3410733ce017b184d314723",
"assets/images/monstors.png": "deabee74019b8f8e36a9df32e6271617",
"assets/images/kaadi.png": "7fd7f31a964a09ae2e0eb288b9727d1b",
"assets/images/tropeproject.png": "5ecc06b8e603d27d4906f7e087d87058",
"assets/images/twitter.png": "bb130bd4c5aeead87125dbf34f98ad5e",
"assets/images/repl.png": "242d0b6b33984faeeeef2449745c4f2f",
"assets/images/henry.jpg": "7bff4de2fdba293b17a997f82458ee76",
"assets/images/square_birthday.jpg": "f6e0db15c15d4cf052afb7b496f31547",
"assets/images/time_management.png": "53fa7fabce9c0c095ad31c7faa7a9220",
"assets/images/syllubus.png": "4b4dc4cb20e27a87ed6d732e7f1e239d",
"assets/AssetManifest.json": "380f697a80c4fca267b9822412ec155d",
"assets/NOTICES": "c5adb65deb57ffd9773fdaa6c2718578",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/pltw_website.png": "beb8468e07da83e3b130dc00e32ae086",
"assets/assets/images/alden_pacific.jpg": "53c77ada1ce74b4da80a43bd9a3c318f",
"assets/assets/images/ethics.png": "f80910718fb4dcbfbadb9d9e1e1e41ec",
"assets/assets/images/autodesk.png": "d41a56fe6d6cea9edf22bb7948426ca4",
"assets/assets/images/instagram.png": "6aa589114f810d037cd078b07c45ee97",
"assets/assets/images/lighthouse.jpg": "67b83c767017187f96ddbf582ddf9eb3",
"assets/assets/images/pinto.png": "9db4377cdb06dbc71d16860eac0e134a",
"assets/assets/images/fb.png": "bf5ebefb9de0a7cac8e23c14a9e9019c",
"assets/assets/images/github.png": "eb94bb97c3410733ce017b184d314723",
"assets/assets/images/loop.gif": "712a783005dc8015a56a6451ff18c353",
"assets/assets/images/monstors.png": "deabee74019b8f8e36a9df32e6271617",
"assets/assets/images/kaadi.png": "7fd7f31a964a09ae2e0eb288b9727d1b",
"assets/assets/images/tropeproject.png": "5ecc06b8e603d27d4906f7e087d87058",
"assets/assets/images/twitter.png": "bb130bd4c5aeead87125dbf34f98ad5e",
"assets/assets/images/repl.png": "242d0b6b33984faeeeef2449745c4f2f",
"assets/assets/images/henry.jpg": "7bff4de2fdba293b17a997f82458ee76",
"assets/assets/images/square_birthday.jpg": "f6e0db15c15d4cf052afb7b496f31547",
"assets/assets/images/time_management.png": "53fa7fabce9c0c095ad31c7faa7a9220",
"assets/assets/images/syllubus.png": "4b4dc4cb20e27a87ed6d732e7f1e239d",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
