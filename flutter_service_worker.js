'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3c9c33ae0de02e100c1cf3060f0d43e4",
"assets/AssetManifest.bin.json": "9de26c8cae9f90c69147cb65b9c46a75",
"assets/AssetManifest.json": "6f3e222c82f1068032ba9a2f8405eb9b",
"assets/assets/fonts/Caveat-VariableFont_wght.ttf": "9bd9bde59dc816ef93cd18069b65a40e",
"assets/assets/fonts/Pacifico-Regular.ttf": "85bb2d0ec4a0da159de42e89089ccc0b",
"assets/assets/images/1.png": "c875358f91cfa0319bf80ab6c212a9dd",
"assets/assets/images/2.png": "4bc63b9b1b543c7a369c9f973c602292",
"assets/assets/images/api.png": "aae3c3e996429f75822920bfc409066b",
"assets/assets/images/arduino.png": "4c4cace83f5c52ba43f58b8094ffb619",
"assets/assets/images/c++.png": "099f7194278240dd433783d9b1f01ca8",
"assets/assets/images/c.png": "11396a41fce307b10316e942e62d2d39",
"assets/assets/images/dart.png": "5c41ab012254b60643ed0c724f6251b4",
"assets/assets/images/Elec.png": "d9d6a790fda146c97761a9c43301d1d4",
"assets/assets/images/Embedded.png": "1494a2119d786147f10c07c688d2dcb3",
"assets/assets/images/facebook.png": "3e14fc01cee6afca1367e9c9be778deb",
"assets/assets/images/firebase.png": "9ed79d8d77f3aab27b935896f7258479",
"assets/assets/images/flutter.png": "8efb797d33c586ef3cb71d4083dd1fdb",
"assets/assets/images/Git&GitHub.png": "849deb4e4ab091f96674247727310174",
"assets/assets/images/gmail.png": "61b5993283201dfa52a3fb6ffe235476",
"assets/assets/images/IMG_20211227_100504_auto_x2.jpg": "a85dab29ae6d5047d37a57f3f080b842",
"assets/assets/images/IMG_20230610_225906.png": "765a4cfc3a8a5c78f8968a6195f1dcb3",
"assets/assets/images/linked.png": "6804056d637e3eba6488cbd7aeca53aa",
"assets/assets/images/postman.png": "73bb49edb42db9daf6cb32614e970ef4",
"assets/assets/images/problem.png": "986e2d756e963f5d4f41496ee4b4b115",
"assets/assets/images/projects/Calculator.jpg": "3248e9904b855a25516d4e0cf9671dfe",
"assets/assets/images/projects/Meal.jpg": "162e2697b06f5d6d3fa613e2387a4f45",
"assets/assets/images/projects/News.jpg": "243fab15f719d6429000df89e7a3f644",
"assets/assets/images/projects/Notes.jpg": "760b0c4c71e277d3feeae5130cf5d0f4",
"assets/assets/images/projects/Portfolio.jpg": "8e5f098b5bd9e1845f65b78d403e74f1",
"assets/assets/images/projects/Slogan.jpg": "a664f918f90deeb7c53f29c93c5cc27a",
"assets/assets/images/projects/Student_Attendance.jpg": "96c009ee97db4bcc952da6fff216727d",
"assets/assets/images/projects/Tasbih.jpg": "e0dd44ffee9e9187f99ad6ebf08c1ecc",
"assets/assets/images/projects/Weather.jpg": "5301ede4929d19aa8ece18a8e6383a9a",
"assets/assets/images/projects/XO_Game.jpg": "6473a87d70a6da23c9165cac069017cb",
"assets/assets/images/python.png": "6841951dd3623f17a3f6a880c3f4f0a0",
"assets/assets/images/Rasberry.png": "e9e1419d4bc7ff96f55b79a3d98b70bb",
"assets/assets/images/ROS.png": "cf2bc536c888775876cf1b0d621936ef",
"assets/assets/images/s.png": "23ba24ebe385494684dd186d4d609bd9",
"assets/assets/images/telegram.png": "941d4b0871d0cc6275ffb83434be8486",
"assets/assets/images/whatsapp.png": "48ab57a21dc5d792092e7a4a97324ec0",
"assets/FontManifest.json": "c3eeb0667f3316f806d70df15b20fd75",
"assets/fonts/MaterialIcons-Regular.otf": "27c21a06cb4e7f19e1948d1facb879fe",
"assets/NOTICES": "0b76273b6865a424274c1fc4139d0095",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "03f7523d1a8cc1e67f727acb3f6adb35",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b2eb6c1b58079d5cfd0bcce2d614cae",
"/": "6b2eb6c1b58079d5cfd0bcce2d614cae",
"main.dart.js": "52c1a4e66339dc6d724feacb23a41947",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"version.json": "9b818ca9511483c901bed1545384376c"};
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
