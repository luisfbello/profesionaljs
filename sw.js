const VERSION="v1"

self.addEventListener('install',event =>{
    event.waitUntil(precache())
})

self.addEventListener("fetch",event=>{
    const request = event.request

    // traer a los get
    if(request.method != "GET"){
        return
    }

    // buscar en cache
     event.respondWith(cachedResponse(request))

     // Update cache

     event.waitUntil(updateCache(request))
})

async function precache(){
    const cache= await caches.open(VERSION)
  return  cache.addAll([
            // '/',
            // '/index.html',
            // '/assests/index.js',
            // '/assests/mediaPlayer.js',
            // '/assests/plugins/autoPlay.js',
            // '/assests/plugins/autoPause.ts',
            // '/assests/index.css',
            // '/assests/feed.mp4',
        ])
}


async function cachedResponse(request){
    const cache = await caches.open(VERSION)
    const response = await cache.match(request)

    return response || fetch(response)
}

async function updateCache(request){
    const cache = await caches.open(VERSION)
    const response = await fetch(request)
    return cache.put(request,response)

    
}