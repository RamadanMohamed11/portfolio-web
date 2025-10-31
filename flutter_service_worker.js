'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d070ee750ff54334868a5a83cdd59630",
".git/config": "6e529ccf174017410a7ab89abad17b20",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bcee7fcdd9f68034993b426301642145",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "23da2e4c1e5168d95e9543dac9ed9ab8",
".git/logs/refs/heads/main": "23da2e4c1e5168d95e9543dac9ed9ab8",
".git/logs/refs/remotes/origin/HEAD": "19087125aeadc2d3a60da3403e0d81f5",
".git/logs/refs/remotes/origin/main": "bd790af98016652b03e2f2331868b9ff",
".git/objects/26/80059df2504496ed6275e4ce8b87c8c4d908e7": "fa6a857fcd9c6c78ef7150273d35d778",
".git/objects/31/32c50cf582294cae55e3c613a08f737a3d0508": "32cddda3f764c18b39f12e66321fc368",
".git/objects/35/89d0d8bff295da611136c52b6bb6a23bbe44ed": "3d277663e4190ba5437b461c7fda9c78",
".git/objects/4b/906a22bdf46b0ede17d77c2558cba7af1e54b5": "83802dfd2fe7d4fd532159057c1795d8",
".git/objects/86/eb0f076ca6293bb035b649863ce1f6adbbbc2e": "a4a8dd36385ec0e5a8c8ced4e0ecf105",
".git/objects/98/d365466ec5c71ff71ea81947da7e403f2e0235": "24c47fef79bd603ba55529ccf41a1f2c",
".git/objects/bd/b333f7bc7558da0ed47bc6a7ccdc48583f727b": "053f91bc77dafeeb9e10752e986d7088",
".git/objects/c2/de5562b383f0cc06cab5348c315e623b2fa460": "477bfa2dccdcc13ff5f973102cd21dae",
".git/objects/pack/pack-0fde47a4812ae9763ce39b68c0bc57796f3c7429.idx": "30435f340b95ff09181bda1c26d1ab39",
".git/objects/pack/pack-0fde47a4812ae9763ce39b68c0bc57796f3c7429.pack": "796628442e678bc1a77cc253d308a72f",
".git/objects/pack/pack-0fde47a4812ae9763ce39b68c0bc57796f3c7429.rev": "df107209e31cbf55c9ed4c977510d90d",
".git/packed-refs": "90e51f1c75acda2fec664e031423e19b",
".git/refs/heads/main": "b085f4fec9743fec7cd0646e4ee2aa76",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "b085f4fec9743fec7cd0646e4ee2aa76",
"assets/AssetManifest.bin": "6040b20e53e9d3ec1ec6135d8a33f3fd",
"assets/AssetManifest.bin.json": "4fbe4b654ed1830125caea7266c20802",
"assets/AssetManifest.json": "284e8667fc83ecf44ad3ab18a701e00d",
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
"assets/assets/images/IMG_20211227_100504_auto_x2.jpg": "caa16bcf64284d8ac2ec0f8c1755f33c",
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
"assets/assets/Ramadan_Mohamed_CV.pdf": "f81df6d0df0fc951790b12280414888e",
"assets/FontManifest.json": "c3eeb0667f3316f806d70df15b20fd75",
"assets/fonts/MaterialIcons-Regular.otf": "27c21a06cb4e7f19e1948d1facb879fe",
"assets/NOTICES": "75496b35e1e9baed064d78e352433c19",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/Ramadan_Mohamed_CV.pdf": "28e4c2ab9e642d512f03b8e9131c4a01",
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
"flutter_bootstrap.js": "ac317f8dfa75d2d8212331ec7256abf1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6b2eb6c1b58079d5cfd0bcce2d614cae",
"/": "6b2eb6c1b58079d5cfd0bcce2d614cae",
"main.dart.js": "d5ed84f7e7394feab1ee2b552e58f0fd",
"manifest.json": "e2b9103aaafaf8ed9f90576c9d9a1341",
"README.md": "74057a4573af3a196bc1b5ed0031e061",
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
