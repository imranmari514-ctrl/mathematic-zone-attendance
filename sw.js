const CACHE = "mz-attendance-v3";
const CORE = ["./", "./index.html", "./manifest.json"];
const LIBS = [
 "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js",
 "https://cdnjs.cloudflare.com/ajax/libs/jsqr/1.4.0/jsQR.min.js"
];
self.addEventListener("install", event => {
 event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(CORE);
  await Promise.all(LIBS.map(async url=>{try{const r=await fetch(url);if(r.ok)await cache.put(url,r);}catch(e){}}));
  await self.skipWaiting();
 })());
});
self.addEventListener("activate",event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim();})()));
self.addEventListener("fetch",event=>{
 const req=event.request;
 if(req.method!=="GET")return;
 event.respondWith((async()=>{
  const cache=await caches.open(CACHE);
  const cached=await cache.match(req,{ignoreSearch:true});
  if(cached)return cached;
  try{const response=await fetch(req);if(response.ok&&(req.url.startsWith(self.location.origin)||LIBS.includes(req.url)))cache.put(req,response.clone());return response;}
  catch(e){if(req.mode==="navigate")return cache.match("./index.html");throw e;}
 })());
});