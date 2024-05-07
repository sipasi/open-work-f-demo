importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

//
const { precacheAndRoute } = workbox.precaching;
CACHE_FILES = [{"revision":"1f5a7a80336fda3abd638168ca2aea51","url":"assets/AssetManifest.bin.json"},{"revision":"cbce7ec271be55722a6da058562bc997","url":"assets/AssetManifest.json"},{"revision":"b8e42971dec8d49207a8c8e2b919a6ac","url":"assets/assets/font/roboto/Roboto-Bold.ttf"},{"revision":"fd6e9700781c4aaae877999d09db9e09","url":"assets/assets/font/roboto/Roboto-BoldItalic.ttf"},{"revision":"cebd892d1acfcc455f5e52d4104f2719","url":"assets/assets/font/roboto/Roboto-Italic.ttf"},{"revision":"8a36205bd9b83e03af0591a004bc97f4","url":"assets/assets/font/roboto/Roboto-Regular.ttf"},{"revision":"dc3d03800ccca4601324923c0b1d6d57","url":"assets/FontManifest.json"},{"revision":"0b0b23c8748fb9ebcbe170020a4acd87","url":"assets/fonts/MaterialIcons-Regular.otf"},{"revision":"e986ebe42ef785b27164c36a9abc7818","url":"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf"},{"revision":"c86fbd9e7b17accae76e5ad116583dc4","url":"canvaskit/canvaskit.js"},{"revision":"3d2a2d663e8c5111ac61a46367f751ac","url":"canvaskit/canvaskit.wasm"},{"revision":"43787ac5098c648979c27c13c6f804c3","url":"canvaskit/chromium/canvaskit.js"},{"revision":"f5934e694f12929ed56a671617acd254","url":"canvaskit/chromium/canvaskit.wasm"},{"revision":"445e9e400085faead4493be2224d95aa","url":"canvaskit/skwasm.js"},{"revision":"e42815763c5d05bba43f9d0337fa7d84","url":"canvaskit/skwasm.wasm"},{"revision":"bfb704a6c714a75da9ef320991e88b03","url":"canvaskit/skwasm.worker.js"},{"revision":"686f8ae09167dcbfee11cd331be565c9","url":"favicon.png"},{"revision":"d41d8cd98f00b204e9800998ecf8427e","url":"flutter_service_worker.js"},{"revision":"c71a09214cb6f5f8996a531350400a9a","url":"flutter.js"},{"revision":"354813488277f371e6e14a5a0f114523","url":"icons/Icon-192.png"},{"revision":"48f2037f462632920984c12081f3be92","url":"icons/Icon-512.png"},{"revision":"354813488277f371e6e14a5a0f114523","url":"icons/Icon-maskable-192.png"},{"revision":"48f2037f462632920984c12081f3be92","url":"icons/Icon-maskable-512.png"},{"revision":"6397e9782fedeeaad326303d90789874","url":"index.html"},{"revision":"3c213e00a42fe33924148b8457842330","url":"main.dart.js"},{"revision":"f489ee26fe64d5340424fd21b3e38e03","url":"manifest.json"},{"revision":"635e729590809ffa8b6bc682a053f292","url":"version.json"},{"revision":"aaae2134b58a50e0b1d9471a36eb9c61","url":"workbox-config.js"}] ?? [];
precacheAndRoute(CACHE_FILES);

//
self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  return self.clients.claim();
});
