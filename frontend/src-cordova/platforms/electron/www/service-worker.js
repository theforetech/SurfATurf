importScripts("precache-manifest.00157f35d3be7b4ecaea0768b1919bf9.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

/* eslint-disable */
// This is the code piece that GenerateSW mode can't provide for us.
// This code listens for the user's confirmation to update the app.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})
// self.addEventListener('message', e => {
//   if (!e.data) {
//     return
//   }
//
//   switch (e.data) {
//     case 'skipWaiting':
//       self.skipWaiting()
//       break
//     default:
//       // NOOP
//       break
//   }
// })

workbox.core.clientsClaim() // Vue CLI 4 and Workbox v4, else
// workbox.clientsClaim(); // Vue CLI 3 and Workbox v3.

// The precaching code provided by Workbox.
self.__precacheManifest = [].concat(self.__precacheManifest || [])
// workbox.precaching.suppressWarnings(); // Only used with Vue CLI 3 and Workbox v3.
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

