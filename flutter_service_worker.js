'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "fc4a4b781751b9849695bf37cc491435",
"index.html": "6a7ce8b600d05bac67ae6ff6f5a2871f",
"/": "6a7ce8b600d05bac67ae6ff6f5a2871f",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin.json": "72adf5cf86a956e3d4162ea0ed082036",
"assets/assets/images/lumapace-symbol-transparent.png": "de52fa03a8e6109b0aaef05810382ed7",
"assets/assets/images/covers/subway.webp": "f1128acbf5cfae243d4206a6242a9200",
"assets/assets/images/covers/garden.webp": "4fb38089ac10013a4bcb4add65efa572",
"assets/assets/content/episodes/c011/cues.json": "50248bf853cee84f2b4e4fc6993f01ce",
"assets/assets/content/episodes/c011/episode.json": "fff1ca249d3f71c3d67a5c9f35147924",
"assets/assets/content/episodes/c017/cues.json": "4209b9acf3cf1b01d99fadb659dd5022",
"assets/assets/content/episodes/c017/episode.json": "b1328a03b2a5e6fd925d22f219cd812b",
"assets/assets/content/episodes/c033/cues.json": "b26d0d4920e4e03f071a8bb9600cbcc5",
"assets/assets/content/episodes/c033/episode.json": "d63e7ec9f15200d2f820a79833dd2829",
"assets/assets/content/episodes/c006/cues.json": "77069ce636a713b81dea3f83e6ffcd85",
"assets/assets/content/episodes/c006/episode.json": "31ab04a7ed01ca51fd64554292287873",
"assets/assets/content/episodes/c006/audio.mp3": "d4705fee383fab3dd4319bdeda02a7f6",
"assets/assets/content/episodes/002/cues.json": "462c37ca8525c376075a13c61abe1845",
"assets/assets/content/episodes/002/episode.json": "df1d321699adb1b38001afecaaf234c2",
"assets/assets/content/episodes/002/audio.mp3": "2558d1f45538c9c6695709e6930fd7cb",
"assets/assets/content/episodes/c018/cues.json": "3bd34b3751bdc17760d8c1fa973eede0",
"assets/assets/content/episodes/c018/episode.json": "f43e838a4de1f332387e734ce08c06bd",
"assets/assets/content/episodes/c032/cues.json": "100f77d7889f0e65c3f1d8a03bfe4284",
"assets/assets/content/episodes/c032/episode.json": "dedd2769aee327af58e12361e36c053a",
"assets/assets/content/episodes/c022/cues.json": "8efe1d5c2b3da1ef96d58d8e0c7e0b2e",
"assets/assets/content/episodes/c022/episode.json": "1ac0fcfdff3deff1566bf6d56ec5fc4f",
"assets/assets/content/episodes/c016/cues.json": "a098183643cfe50d18313c03f9c8750d",
"assets/assets/content/episodes/c016/episode.json": "9548091120127314cacfc31c727076e7",
"assets/assets/content/episodes/003/cues.json": "43046c2d4eb4515ddb7b303f4ba834aa",
"assets/assets/content/episodes/003/episode.json": "e235df56b9e986a77344afb01b534d16",
"assets/assets/content/episodes/c013/cues.json": "0a96da0a3768f4f574bc4e3dc81e9632",
"assets/assets/content/episodes/c013/episode.json": "e8cc1bacca372a9ab10cb68cc1d15196",
"assets/assets/content/episodes/subway/audio.mp3": "f9d48579e37ac5eabe3b638468fcdd2b",
"assets/assets/content/episodes/c015/cues.json": "d5caab6042bed1b6a5a533a308a46846",
"assets/assets/content/episodes/c015/episode.json": "f7609be2317dbc3c72e451bb6b7d16fd",
"assets/assets/content/episodes/c026/cues.json": "731049a75d2090ae1989a05b38220581",
"assets/assets/content/episodes/c026/episode.json": "0c0582d11278bd9d8e12fe3c24d2b868",
"assets/assets/content/episodes/c031/cues.json": "655ca0d792a5c3962d2b98a26d3f2f31",
"assets/assets/content/episodes/c031/episode.json": "fde50208d10b5f1ab55964f21fd0a309",
"assets/assets/content/episodes/c029/cues.json": "657e2502ccb03e9c914eaf794f1840cf",
"assets/assets/content/episodes/c029/episode.json": "14db2055c2cd97b00a3d51ed42a77512",
"assets/assets/content/episodes/c009/cues.json": "b04ddda8784b4853e1ef9795c4db922b",
"assets/assets/content/episodes/c009/episode.json": "3f771741b062b5cce401dfe427e14fe1",
"assets/assets/content/episodes/c014/cues.json": "8c6692ca1013fa4ed17ef0303ce05ef0",
"assets/assets/content/episodes/c014/episode.json": "3624a98312ead0a1a4e0a7e4d4fc523d",
"assets/assets/content/catalog.json": "7e4291e1c2a7c1becb29a4b5e6568df8",
"assets/assets/audio/ui_chime.mp3": "612d8bb57ac6ead4fdb21c3ceae3bd9e",
"assets/assets/audio/demo_ambient.mp3": "e1d76b878aa9060ff7f2666568278b8e",
"assets/fonts/MaterialIcons-Regular.otf": "506c3540e73813e220f20a79a4223dfc",
"assets/AssetManifest.bin": "9adbd9d9055c41bd55530639390a9806",
"assets/NOTICES": "8c1393a703663bde065adccebb1d6b13",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"main.dart.js": "e6ac114e4f94886c055982743f96b1d5",
"flutter_bootstrap.js": "12b12c1d76086e04d5775a21fd548759",
"favicon.png": "118dfdcef7ba416363b1130360fe833a",
"icons/Icon-192.png": "66196b9c48e416f5a26104aba0925c6d",
"icons/Icon-maskable-512.png": "b6e0b138f311f17fc28f7b848fbbbe59",
"icons/Icon-512.png": "04427876b26209a90ba4b146738ef167",
"icons/Icon-maskable-192.png": "ef1a91a5095d9554d2ddd86dc2526608",
"icons/apple-touch-icon.png": "f9ee6212f093f6887d2ad41ab00427e5",
"version.json": "aa0d98c5a66681ac9a4cf03c7146a67e",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
