if(!self.define){let r,i={};const n=(n,e)=>(n=new URL(n+".js",e).href,i[n]||new Promise((i=>{if("document"in self){const r=document.createElement("script");r.src=n,r.onload=i,document.head.appendChild(r)}else r=n,importScripts(n),i()})).then((()=>{let r=i[n];if(!r)throw new Error(`Module ${n} didn’t register its module`);return r})));self.define=(e,u)=>{const l=r||("document"in self?document.currentScript.src:"")||location.href;if(i[l])return;let s={};const o=r=>n(r,l),a={module:{uri:l},exports:s,require:o};i[l]=Promise.all(e.map((r=>a[r]||o(r)))).then((r=>(u(...r),s)))}}define(["./workbox-6567b62a"],(function(r){"use strict";r.setCacheNameDetails({prefix:"purba1"}),self.addEventListener("message",(r=>{r.data&&"SKIP_WAITING"===r.data.type&&self.skipWaiting()})),r.precacheAndRoute([{url:"/purba1/css/app.d1462ef4.css",revision:null},{url:"/purba1/icons/icon-192x192.png",revision:"ba1529b91bc1f2d33caed4ec1d3823f4"},{url:"/purba1/icons/icon-256x256.png",revision:"b94e8b52f44f816cc3b4878a7bcca565"},{url:"/purba1/icons/icon-384x384.png",revision:"afada1785576a9a2882e0dafdbb28009"},{url:"/purba1/icons/icon-512x512.png",revision:"9296a6fb934286562931ecef5064f344"},{url:"/purba1/icons/mobile_screenshot.jpg",revision:"1bad0db1baa204746cdd3be0284f023c"},{url:"/purba1/icons/wide_screenshot.png",revision:"90a46dd5b1d913904c85866a6318804a"},{url:"/purba1/img/dinorun1.c98a2fd4.png",revision:null},{url:"/purba1/img/dinorun2.f15beb10.png",revision:null},{url:"/purba1/img/img1.0fce8db7.jpeg",revision:null},{url:"/purba1/img/갤러리.f8019d9f.png",revision:null},{url:"/purba1/img/공지사항.3913456f.png",revision:null},{url:"/purba1/img/대화.d64c103d.png",revision:null},{url:"/purba1/img/볼륨.e1c0f24c.png",revision:null},{url:"/purba1/img/속도.884bbf21.png",revision:null},{url:"/purba1/img/일정관리.8d5f0ed4.png",revision:null},{url:"/purba1/img/재생.9b4ec831.png",revision:null},{url:"/purba1/img/카메라.8cfd657b.png",revision:null},{url:"/purba1/img/환경설정.2370f5a6.png",revision:null},{url:"/purba1/index.html",revision:"c2850991c74b1ecf22bd11c2b93d6e6b"},{url:"/purba1/js/app.adba8908.js",revision:null},{url:"/purba1/js/chunk-vendors.e1c3ab89.js",revision:null},{url:"/purba1/manifest.json",revision:"3033c6a97473c92f596e794980ce7023"},{url:"/purba1/out1.txt",revision:"171a3ea4f5e98991381393ba2ebae3ad"},{url:"/purba1/out2.txt",revision:"eaa623a10bfa38440c5cd57d79d5c4ac"},{url:"/purba1/phoneNumbers.json",revision:"265b0d5dded953d29af0d2ab22720396"}],{})}));
//# sourceMappingURL=service-worker.js.map
