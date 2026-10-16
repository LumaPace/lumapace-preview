'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "f901406facafe4af53d7cdfbb5642678",
"index.html": "6a7ce8b600d05bac67ae6ff6f5a2871f",
"/": "6a7ce8b600d05bac67ae6ff6f5a2871f",
"main.dart.js": "ec6d7c089e3b2eed8b9a6558e28d18af",
"version.json": "c0a1c31db0bcc4ec97807d7b21737256",
"assets/assets/images/lumapace-symbol-transparent.png": "de52fa03a8e6109b0aaef05810382ed7",
"assets/assets/images/covers/garden.webp": "4fb38089ac10013a4bcb4add65efa572",
"assets/assets/images/covers/subway.webp": "f1128acbf5cfae243d4206a6242a9200",
"assets/assets/audio/demo_ambient.mp3": "e1d76b878aa9060ff7f2666568278b8e",
"assets/assets/audio/ui_chime.mp3": "612d8bb57ac6ead4fdb21c3ceae3bd9e",
"assets/assets/content/catalog.json": "022cec5b0958e83cea9d815ac171004f",
"assets/assets/content/episodes/002/episode.json": "df1d321699adb1b38001afecaaf234c2",
"assets/assets/content/episodes/002/cues.json": "462c37ca8525c376075a13c61abe1845",
"assets/assets/content/episodes/002/audio.mp3": "2558d1f45538c9c6695709e6930fd7cb",
"assets/assets/content/episodes/c006/episode.json": "31ab04a7ed01ca51fd64554292287873",
"assets/assets/content/episodes/c006/cues.json": "77069ce636a713b81dea3f83e6ffcd85",
"assets/assets/content/episodes/c006/audio.mp3": "d4705fee383fab3dd4319bdeda02a7f6",
"assets/assets/content/episodes/c009/episode.json": "adbea58de9835aae8d5c3b8bd2eaeb6e",
"assets/assets/content/episodes/c009/cues.json": "b04ddda8784b4853e1ef9795c4db922b",
"assets/assets/content/episodes/c011/episode.json": "09496e029115b9e892a758b424c13e8c",
"assets/assets/content/episodes/c011/cues.json": "50248bf853cee84f2b4e4fc6993f01ce",
"assets/assets/content/episodes/c013/episode.json": "85dbb8a72d1ffdd1b4e4fb1a8c522b45",
"assets/assets/content/episodes/c013/cues.json": "0a96da0a3768f4f574bc4e3dc81e9632",
"assets/assets/content/episodes/c014/episode.json": "77b5b7c3738437782db5b6c42f65f449",
"assets/assets/content/episodes/c014/cues.json": "8c6692ca1013fa4ed17ef0303ce05ef0",
"assets/assets/content/episodes/c015/episode.json": "c5ff5dae78ec5da4dff633430b04478d",
"assets/assets/content/episodes/c015/cues.json": "d5caab6042bed1b6a5a533a308a46846",
"assets/assets/content/episodes/c016/episode.json": "a28970fd2a88ebed40b598ad18d58794",
"assets/assets/content/episodes/c016/cues.json": "a098183643cfe50d18313c03f9c8750d",
"assets/assets/content/episodes/c017/episode.json": "fdfb3a08bca362b4b50e559f27be8c40",
"assets/assets/content/episodes/c017/cues.json": "4209b9acf3cf1b01d99fadb659dd5022",
"assets/assets/content/episodes/c018/episode.json": "ab03fa5e8653efde9e7b52dd7a53a64d",
"assets/assets/content/episodes/c018/cues.json": "3bd34b3751bdc17760d8c1fa973eede0",
"assets/assets/content/episodes/003/episode.json": "bc07a6757b5e212c620cf16d634a4b8b",
"assets/assets/content/episodes/003/cues.json": "43046c2d4eb4515ddb7b303f4ba834aa",
"assets/assets/content/episodes/c022/cues.json": "8efe1d5c2b3da1ef96d58d8e0c7e0b2e",
"assets/assets/content/episodes/c022/episode.json": "84b971cbd519dc42de2d949bf7a8d063",
"assets/assets/content/episodes/c026/episode.json": "fbc013c814b8b2d5fffb78cc2145506e",
"assets/assets/content/episodes/c026/cues.json": "731049a75d2090ae1989a05b38220581",
"assets/assets/content/episodes/c029/episode.json": "8c62128217495432fd523ae3318b1b9c",
"assets/assets/content/episodes/c029/cues.json": "657e2502ccb03e9c914eaf794f1840cf",
"assets/assets/content/episodes/c031/episode.json": "4dd228e4e8c7eeae5e99a86bed06dfd9",
"assets/assets/content/episodes/c031/cues.json": "655ca0d792a5c3962d2b98a26d3f2f31",
"assets/assets/content/episodes/c032/episode.json": "6d3a52d476129562adea62561140ca88",
"assets/assets/content/episodes/c032/cues.json": "100f77d7889f0e65c3f1d8a03bfe4284",
"assets/assets/content/episodes/c033/episode.json": "2210daf3d17d31b903f07eb6147889e1",
"assets/assets/content/episodes/c033/cues.json": "b26d0d4920e4e03f071a8bb9600cbcc5",
"assets/assets/content/episodes/c003/episode.json": "013e00695cd4dcd6ef2075bdc7086eec",
"assets/assets/content/episodes/c003/cues.json": "6172ae39b2adff26663d0b62e7fb94cd",
"assets/assets/content/episodes/c007/episode.json": "4024f0189c40370ee616bde602249b64",
"assets/assets/content/episodes/c007/cues.json": "e0165961dc6f6fb9723c323ae8ce0130",
"assets/assets/content/episodes/c020/episode.json": "38303ddeca71e62146470551a67e29fe",
"assets/assets/content/episodes/c020/cues.json": "384b4d50d0ea3b3730f20ba7e4716e7b",
"assets/assets/content/episodes/c023/episode.json": "9c76db4be00879b737c5f0ec01f50e77",
"assets/assets/content/episodes/c023/cues.json": "361da2f0081aa998281730f8a6582ea0",
"assets/assets/content/episodes/c027/episode.json": "f2378d884a3e63c43b8ae96622c4e0de",
"assets/assets/content/episodes/c027/cues.json": "610d482de4c0b579f0749e152459346b",
"assets/assets/content/episodes/c028/episode.json": "97fc984a72eb96b646fac667eb3898bb",
"assets/assets/content/episodes/c028/cues.json": "493ca428583ca4048c38081c80a9ab49",
"assets/assets/content/episodes/c002/episode.json": "268f1a0427a95e4fbb16e271267317ef",
"assets/assets/content/episodes/c002/cues.json": "2725d0a2de510705109d84bd64a3a22e",
"assets/assets/content/episodes/c004/episode.json": "922fa63fff88bbd3b0d03da97a763e4b",
"assets/assets/content/episodes/c004/cues.json": "794d8a0c38beb08fdcac5cb6d0ef40ac",
"assets/assets/content/episodes/c005/episode.json": "41e7ed8776077c1a51b8e45c3641ea4d",
"assets/assets/content/episodes/c005/cues.json": "03bdfaaaa030fa156b51a194be2b42f9",
"assets/assets/content/episodes/c008/episode.json": "5078882a62832e600fc9670f725a0b52",
"assets/assets/content/episodes/c008/cues.json": "516af27086b2df2d9b77ea9e3fb1a747",
"assets/assets/content/episodes/c010/episode.json": "998aabf6f182d06039f5ed2349f57e6c",
"assets/assets/content/episodes/c012/episode.json": "6fe220ca898b230908e94a9b28419906",
"assets/assets/content/episodes/c012/cues.json": "8f8cb907b7a870a2814b7aea74f8d4b8",
"assets/assets/content/episodes/c024/episode.json": "7cea27bbd839f0a85052505a53c7522e",
"assets/assets/content/episodes/c024/cues.json": "c80efe3df548c9b53e6dad8b3b560e45",
"assets/assets/content/episodes/c030/episode.json": "4ade7676187d53bae54df4440c61df0c",
"assets/assets/content/episodes/c030/cues.json": "2c4c9c4fff20e1d20280fa7d4d3cf485",
"assets/fonts/MaterialIcons-Regular.otf": "acf82938bfad003b33797a5b817d99dd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "9fa9669d3496901fd2df253205c9c851",
"assets/AssetManifest.bin.json": "4ba387d7e6c289c44ec3482f25545819",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "5991e24acefa05f14461e183c16cfa02",
"assets/packages/purchases_flutter/assets/web/purchases_js_hybrid_mappings.js": "894ef7d6c3ae0bb203da54725eadd387",
"icons/Icon-maskable-192.png": "ef1a91a5095d9554d2ddd86dc2526608",
"icons/Icon-512.png": "04427876b26209a90ba4b146738ef167",
"icons/apple-touch-icon.png": "f9ee6212f093f6887d2ad41ab00427e5",
"icons/Icon-maskable-512.png": "b6e0b138f311f17fc28f7b848fbbbe59",
"icons/Icon-192.png": "66196b9c48e416f5a26104aba0925c6d",
"favicon.png": "118dfdcef7ba416363b1130360fe833a",
"privacy.html": "27ddfd81eb359ddb560bf83edb0bf3d0",
"manifest.json": "fc4a4b781751b9849695bf37cc491435",
"terms.html": "b93b5d356a4946a257dd10647aff533b"};
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
