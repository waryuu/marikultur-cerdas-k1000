"use strict";var precacheConfig=[["/","d30287acbb35c23345d6b6bb9e0216ed"],["css/all.min.css","7d9f20afcdab719e7babda515e964a44"],["css/app.css","5619b87bedfb83a23b0f29d0f9516d36"],["demo.js","782e9db4684e39103419bacc268668d8"],["fonts/nucleo-icons.eot","c1733565b32b585676302d4233c39da8"],["fonts/nucleo-icons.svg","46abbc4a676739dbd61f8a305cb63fd8"],["fonts/nucleo-icons.ttf","f82ec6ba2dc4181db2af35c499462840"],["fonts/nucleo-icons.woff","2569aaea6eaaf8cd210db7f2fa016743"],["fonts/nucleo-icons.woff2","426439788ec5ba772cdf94057f6f4659"],["img/brand/favicon.png","a794a15f6e45b941d8a521e7965221a8"],["img/brand/green.png","59d7c2b119ab46fc7b5f853f04324c89"],["img/brand/logo-marikultur-putih.png","bd49f9590ccbcb76f3d5d167ef0ca9fd"],["img/brand/logo-marikultur.png","2384185aff0557d7d973a6a4cb8187b9"],["img/brand/logo-nelayan-putih.png","9391402ffc04dfd741567490701e6161"],["img/brand/logo-nelayan.png","d770e5e26809f37982301720871030ae"],["img/brand/white.png","e0ea3f1916671872498288dc2bd40f06"],["img/icons/android-icon-144x144.png","1a328319d577284e96fd642f06c9000b"],["img/icons/android-icon-192x192.png","f268bb2bde484986af9976021754a2d8"],["img/icons/android-icon-36x36.png","fbc4a0e03e7ea57867349ae95d0c2b94"],["img/icons/android-icon-48x48.png","4c8cd80caa84367ebd169eb2893ece15"],["img/icons/android-icon-72x72.png","070d30c1307832b872482ae8fdc135df"],["img/icons/android-icon-96x96.png","d030c4e676dbdef13f57833f3542d850"],["img/icons/apple-icon-114x114.png","80566ba4d941c22dc8093e9ee4712b40"],["img/icons/apple-icon-120x120.png","6c43101f482695af1cba5a02d3295fb0"],["img/icons/apple-icon-144x144.png","1a328319d577284e96fd642f06c9000b"],["img/icons/apple-icon-152x152.png","bc11891a9a228e756a528eca46b558b0"],["img/icons/apple-icon-180x180.png","bef47d28d69bcce97fcacaba0a3cf9fc"],["img/icons/apple-icon-57x57.png","50f7c2f507cc9b31ff2cee69c1bd3ec3"],["img/icons/apple-icon-60x60.png","8ffea63297722a6a210e5de1749b8a96"],["img/icons/apple-icon-72x72.png","070d30c1307832b872482ae8fdc135df"],["img/icons/apple-icon-76x76.png","e25add22ae65ea9234af6bf89382d1f9"],["img/icons/apple-icon-precomposed.png","905a70e3beb417567befc51beabdd2fe"],["img/icons/apple-icon.png","905a70e3beb417567befc51beabdd2fe"],["img/icons/favicon-16x16.png","49d5efca3582713b3045ea6ea5505d7c"],["img/icons/favicon-32x32.png","4d36a957ff0654169f0ace0fba528f9e"],["img/icons/favicon-96x96.png","d030c4e676dbdef13f57833f3542d850"],["img/icons/ms-icon-144x144.png","1a328319d577284e96fd642f06c9000b"],["img/icons/ms-icon-150x150.png","bdb923d0da76a0c2c7eef3bf39cf59dc"],["img/icons/ms-icon-310x310.png","1eb449de7b99e3c042bba46f26f9b0e0"],["img/icons/ms-icon-70x70.png","60b1a12402b66f16c55f0fcb6735b671"],["img/theme/angular.jpg","1f533d2fdc40493ee834dd8e4288220c"],["img/theme/bootstrap.jpg","d136a071cf09ba5ab8dc2ada1ab04015"],["img/theme/fisher.png","d033a6f33e4fb503bd9180eaa77ac4be"],["img/theme/fisher2.png","cf863b7080e0a23d1e489e5f1de5617d"],["img/theme/profile-cover.jpg","cee60cfd101f9b3d2aae0e819ec8b267"],["img/theme/react.jpg","50dd5fdc839dfc16739b15370650485c"],["img/theme/sketch.jpg","3b8c576082e5ca27bae21a839f1290f6"],["img/theme/team-1-800x800.jpg","edc7106b21ec12e57022b2ebd534cd2d"],["img/theme/team-2-800x800.jpg","be997d5226b992ffad34816870c6b7aa"],["img/theme/team-3-800x800.jpg","54e3f3c414bd8e7234bae3ee3be950e5"],["img/theme/team-4-800x800.jpg","66618a418175ddf2ac8c47a241d327a8"],["img/theme/user.png","ee7c51e483f8c410deda9e6981d7b515"],["img/theme/vue.jpg","c532f6f0176968caa6265864ee1abb35"],["index.php","344e4397c1d0c753424c9d79acb5f9a1"],["js/app.js","6df6f8ad927b6b1a6723d4c6203c788e"],["service-worker.js","73293dd32e56ca550758658cb972fdb7"],["vendors~demo.js","ace373d26c896155a607848edd18b0c4"]],cacheName="sw-precache-v3-pwa-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=n),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,t,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(t)),o.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var t=new URL(n).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],t=e[1],r=new URL(n,self.location),o=createCacheKey(r,hashParamName,t,!1);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var r=new Request(t,{credentials:"same-origin"});return fetch(r).then(function(n){if(!n.ok)throw new Error("Request for "+t+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(t,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!n.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(n=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),n=urlsToCacheKeys.has(t));!n&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(t=new URL("/",self.location).toString(),n=urlsToCacheKeys.has(t)),n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(n,t,r){function o(a,i){if(!t[a]){if(!n[a]){var s="function"==typeof require&&require;if(!i&&s)return s(a,!0);if(c)return c(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=t[a]={exports:{}};n[a][0].call(f.exports,function(e){var t=n[a][1][e];return o(t||e)},f,f.exports,e,n,t,r)}return t[a].exports}for(var c="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,n,t){function r(e,n){((n=n||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var n;return e&&e.cache&&(n=e.cache.name),n=n||s.cache.name,caches.open(n)}function c(e,n,t){var o=e.url,c=t.maxAgeSeconds,a=t.maxEntries,i=t.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+a+", max age is "+c),u.getDb(i).then(function(e){return u.setTimestampForUrl(e,o,s)}).then(function(e){return u.expireEntries(e,a,c,s)}).then(function(e){r("Successfully updated IDB.");var t=e.map(function(e){return n.delete(e)});return Promise.all(t).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e){var n=Array.isArray(e);if(n&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(n=!1)}),!n)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,s=e("./options"),u=e("./idb-cache-expiration");n.exports={debug:r,fetchAndCache:function(e,n){var t=(n=n||{}).successResponses||s.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&t.test(r.status)&&o(n).then(function(t){t.put(e,r).then(function(){var r=n.cache||s.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,n,t){var r=c.bind(null,e,n,t);i=i?i.then(r):r()}(e,t,r)})}),r.clone()})},openCache:o,renameCache:function(e,n,t){return r("Renaming cache: ["+e+"] to ["+n+"]",t),caches.delete(n).then(function(){return Promise.all([caches.open(e),caches.open(n)]).then(function(n){var t=n[0],r=n[1];return t.keys().then(function(e){return Promise.all(e.map(function(e){return t.match(e).then(function(n){return r.put(e,n)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,n){return o(n).then(function(n){return n.add(e)})},uncache:function(e,n){return o(n).then(function(n){return n.delete(e)})},precache:function(e){e instanceof Promise||a(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:a,isResponseFresh:function(e,n,t){if(!e)return!1;if(n){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*n<t)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,n,t){var r="sw-toolbox-",o=1,c="store",a="url",i="timestamp",s={};n.exports={getDb:function(e){return e in s||(s[e]=function(e){return new Promise(function(n,t){var s=indexedDB.open(r+e,o);s.onupgradeneeded=function(){s.result.createObjectStore(c,{keyPath:a}).createIndex(i,i,{unique:!1})},s.onsuccess=function(){n(s.result)},s.onerror=function(){t(s.error)}})}(e)),s[e]},setTimestampForUrl:function(e,n,t){return new Promise(function(r,o){var a=e.transaction(c,"readwrite");a.objectStore(c).put({url:n,timestamp:t}),a.oncomplete=function(){r(e)},a.onabort=function(){o(a.error)}})},expireEntries:function(e,n,t,r){return function(e,n,t){return n?new Promise(function(r,o){var s=1e3*n,u=[],f=e.transaction(c,"readwrite"),p=f.objectStore(c);p.index(i).openCursor().onsuccess=function(e){var n=e.target.result;if(n&&t-s>n.value[i]){var r=n.value[a];u.push(r),p.delete(r),n.continue()}},f.oncomplete=function(){r(u)},f.onabort=o}):Promise.resolve([])}(e,t,r).then(function(t){return function(e,n){return n?new Promise(function(t,r){var o=[],s=e.transaction(c,"readwrite"),u=s.objectStore(c),f=u.index(i),p=f.count();f.count().onsuccess=function(){var e=p.result;e>n&&(f.openCursor().onsuccess=function(t){var r=t.target.result;if(r){var c=r.value[a];o.push(c),u.delete(c),e-o.length>n&&r.continue()}})},s.oncomplete=function(){t(o)},s.onabort=r}):Promise.resolve([])}(e,n).then(function(e){return t.concat(e)})})}}},{}],3:[function(e,n,t){function r(e){return e.reduce(function(e,n){return e.concat(n)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),c=e("./router"),a=e("./options");n.exports={fetchListener:function(e){var n=c.match(e.request);n?e.respondWith(n(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){o.debug("activate event fired");var n=a.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(n,a.cache.name))},installListener:function(e){var n=a.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+n+"]"),e.waitUntil(o.openCache({cache:{name:n}}).then(function(e){return Promise.all(a.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(n){return o.debug("preCache list: "+(n.join(", ")||"(none)")),e.addAll(n)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,n,t){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,n.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,n,t){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),c=function(e,n,t,c){n instanceof RegExp?this.fullUrlRegExp=n:(0!==n.indexOf("/")&&(n=r+n),this.keys=[],this.regexp=o(n,this.keys)),this.method=e,this.options=c,this.handler=t};c.prototype.makeHandler=function(e){var n;if(this.regexp){var t=this.regexp.exec(e);n={},this.keys.forEach(function(e,r){n[e.name]=t[r+1]})}return function(e){return this.handler(e,n,this.options)}.bind(this)},n.exports=c},{"path-to-regexp":15}],6:[function(e,n,t){var r=e("./route"),o=e("./helpers"),c=function(e,n){for(var t=e.entries(),r=t.next(),o=[];!r.done;){new RegExp(r.value[0]).test(n)&&o.push(r.value[1]),r=t.next()}return o},a=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){a.prototype[e]=function(n,t,r){return this.add(e,n,t,r)}}),a.prototype.add=function(e,n,t,c){var a;c=c||{},n instanceof RegExp?a=RegExp:a=(a=c.origin||self.location.origin)instanceof RegExp?a.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(a),e=e.toLowerCase();var i=new r(e,n,t,c);this.routes.has(a)||this.routes.set(a,new Map);var s=this.routes.get(a);s.has(e)||s.set(e,new Map);var u=s.get(e),f=i.regexp||i.fullUrlRegExp;u.has(f.source)&&o.debug('"'+n+'" resolves to same regex as existing route.'),u.set(f.source,i)},a.prototype.matchMethod=function(e,n){var t=new URL(n),r=t.origin,o=t.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],n)},a.prototype._match=function(e,n,t){if(0===n.length)return null;for(var r=0;r<n.length;r++){var o=n[r],a=o&&o.get(e.toLowerCase());if(a){var i=c(a,t);if(i.length>0)return i[0].makeHandler(t)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},n.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,n,t){var r=e("../options"),o=e("../helpers");n.exports=function(e,n,t){return t=t||{},o.debug("Strategy: cache first ["+e.url+"]",t),o.openCache(t).then(function(n){return n.match(e).then(function(n){var c=t.cache||r.cache,a=Date.now();return o.isResponseFresh(n,c.maxAgeSeconds,a)?n:o.fetchAndCache(e,t)})})}},{"../helpers":1,"../options":4}],8:[function(e,n,t){var r=e("../options"),o=e("../helpers");n.exports=function(e,n,t){return t=t||{},o.debug("Strategy: cache only ["+e.url+"]",t),o.openCache(t).then(function(n){return n.match(e).then(function(e){var n=t.cache||r.cache,c=Date.now();if(o.isResponseFresh(e,n.maxAgeSeconds,c))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,n,t){var r=e("../helpers"),o=e("./cacheOnly");n.exports=function(e,n,t){return r.debug("Strategy: fastest ["+e.url+"]",t),new Promise(function(c,a){var i=!1,s=[],u=function(e){s.push(e.toString()),i?a(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},f=function(e){e instanceof Response?c(e):u("No result returned")};r.fetchAndCache(e.clone(),t).then(f,u),o(e,n,t).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,n,t){n.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,n,t){var r=e("../options"),o=e("../helpers");n.exports=function(e,n,t){var c=(t=t||{}).successResponses||r.successResponses,a=t.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",t),o.openCache(t).then(function(n){var i,s,u=[];if(a){var f=new Promise(function(c){i=setTimeout(function(){n.match(e).then(function(e){var n=t.cache||r.cache,a=Date.now(),i=n.maxAgeSeconds;o.isResponseFresh(e,i,a)&&c(e)})},1e3*a)});u.push(f)}var p=o.fetchAndCache(e,t).then(function(e){if(i&&clearTimeout(i),c.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,t),s=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",t),n.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return u.push(p),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,n,t){var r=e("../helpers");n.exports=function(e,n,t){return r.debug("Strategy: network only ["+e.url+"]",t),fetch(e)}},{"../helpers":1}],13:[function(e,n,t){var r=e("./options"),o=e("./router"),c=e("./helpers"),a=e("./strategies"),i=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),n.exports={networkOnly:a.networkOnly,networkFirst:a.networkFirst,cacheOnly:a.cacheOnly,cacheFirst:a.cacheFirst,fastest:a.fastest,router:o,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,n,t){n.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,n,t){function r(e,n){for(var t,r=[],o=0,c=0,a="",u=n&&n.delimiter||"/";null!=(t=l.exec(e));){var f=t[0],p=t[1],h=t.index;if(a+=e.slice(c,h),c=h+f.length,p)a+=p[1];else{var d=e[c],g=t[2],m=t[3],b=t[4],v=t[5],x=t[6],w=t[7];a&&(r.push(a),a="");var y=null!=g&&null!=d&&d!==g,R="+"===x||"*"===x,E="?"===x||"*"===x,C=t[2]||u,k=b||v;r.push({name:m||o++,prefix:g||"",delimiter:C,optional:E,repeat:R,partial:y,asterisk:!!w,pattern:k?s(k):w?".*":"[^"+i(C)+"]+?"})}}return c<e.length&&(a+=e.substr(c)),a&&r.push(a),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){for(var n=new Array(e.length),t=0;t<e.length;t++)"object"==typeof e[t]&&(n[t]=new RegExp("^(?:"+e[t].pattern+")$"));return function(t,r){for(var a="",i=t||{},s=(r||{}).pretty?o:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var p,h=i[f.name];if(null==h){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(d(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var l=0;l<h.length;l++){if(p=s(h[l]),!n[u].test(p))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(0===l?f.prefix:f.delimiter)+p}}else{if(p=f.asterisk?c(h):s(h),!n[u].test(p))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+p+'"');a+=f.prefix+p}}else a+=f}return a}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,n){return e.keys=n,e}function f(e){return e.sensitive?"":"i"}function p(e,n,t){d(n)||(t=n||t,n=[]);for(var r=(t=t||{}).strict,o=!1!==t.end,c="",a=0;a<e.length;a++){var s=e[a];if("string"==typeof s)c+=i(s);else{var p=i(s.prefix),h="(?:"+s.pattern+")";n.push(s),s.repeat&&(h+="(?:"+p+h+")*"),c+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var l=i(t.delimiter||"/"),g=c.slice(-l.length)===l;return r||(c=(g?c.slice(0,-l.length):c)+"(?:"+l+"(?=$))?"),c+=o?"$":r&&g?"":"(?="+l+"|$)",u(new RegExp("^"+c,f(t)),n)}function h(e,n,t){return d(n)||(t=n||t,n=[]),t=t||{},e instanceof RegExp?function(e,n){var t=e.source.match(/\((?!\?)/g);if(t)for(var r=0;r<t.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,n)}(e,n):d(e)?function(e,n,t){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],n,t).source);return u(new RegExp("(?:"+r.join("|")+")",f(t)),n)}(e,n,t):function(e,n,t){return p(r(e,t),n,t)}(e,n,t)}var d=e("isarray");n.exports=h,n.exports.parse=r,n.exports.compile=function(e,n){return a(r(e,n))},n.exports.tokensToFunction=a,n.exports.tokensToRegExp=p;var l=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,n,t){!function(){var e=Cache.prototype.addAll,n=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(n)var t=n[1],r=parseInt(n[2]);e&&(!n||"Firefox"===t&&r>=46||"Chrome"===t&&r>=50)||(Cache.prototype.addAll=function(e){function n(e){this.name="NetworkError",this.code=19,this.message=e}var t=this;return n.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var t=new URL(e.url).protocol;if("http:"!==t&&"https:"!==t)throw new n("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new n("Incorrect response status");return Promise.all(r.map(function(n,r){return t.put(e[r],n)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^https:\/\/fonts\.googleapis\.com\//,toolbox.cacheFirst,{}),toolbox.router.get(/^https:\/\/www\.thecocktaildb\.com\/images\/media\/drink\/(\w+)\.jpg/,toolbox.cacheFirst,{});