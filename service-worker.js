if(!self.define){let i,r={};const n=(n,e)=>(n=new URL(n+".js",e).href,r[n]||new Promise((r=>{if("document"in self){const i=document.createElement("script");i.src=n,i.onload=r,document.head.appendChild(i)}else i=n,importScripts(n),r()})).then((()=>{let i=r[n];if(!i)throw new Error(`Module ${n} didn’t register its module`);return i})));self.define=(e,u)=>{const l=i||("document"in self?document.currentScript.src:"")||location.href;if(r[l])return;let a={};const s=i=>n(i,l),o={module:{uri:l},exports:a,require:s};r[l]=Promise.all(e.map((i=>o[i]||s(i)))).then((i=>(u(...i),a)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"purba1"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/purba1/css/app.9d8b6541.css",revision:null},{url:"/purba1/icons/icon-192x192.png",revision:"ba1529b91bc1f2d33caed4ec1d3823f4"},{url:"/purba1/icons/icon-256x256.png",revision:"b94e8b52f44f816cc3b4878a7bcca565"},{url:"/purba1/icons/icon-384x384.png",revision:"afada1785576a9a2882e0dafdbb28009"},{url:"/purba1/icons/icon-512x512.png",revision:"9296a6fb934286562931ecef5064f344"},{url:"/purba1/icons/mobile_screenshot.jpg",revision:"1bad0db1baa204746cdd3be0284f023c"},{url:"/purba1/icons/wide_screenshot.png",revision:"90a46dd5b1d913904c85866a6318804a"},{url:"/purba1/img/dinorun1.c98a2fd4.png",revision:null},{url:"/purba1/img/dinorun2.f15beb10.png",revision:null},{url:"/purba1/img/img1.bca7e95e.jpeg",revision:null},{url:"/purba1/img/img2.67957535.jpeg",revision:null},{url:"/purba1/img/img3.a7dcd440.jpeg",revision:null},{url:"/purba1/img/img4.bdd6a2b5.jpeg",revision:null},{url:"/purba1/img/img5.11d7dbbb.jpeg",revision:null},{url:"/purba1/img/img6.405b6b7b.jpeg",revision:null},{url:"/purba1/img/갤러리.f8019d9f.png",revision:null},{url:"/purba1/img/공지사항.3913456f.png",revision:null},{url:"/purba1/img/대화.d64c103d.png",revision:null},{url:"/purba1/img/볼륨.e1c0f24c.png",revision:null},{url:"/purba1/img/속도.884bbf21.png",revision:null},{url:"/purba1/img/일정관리.8d5f0ed4.png",revision:null},{url:"/purba1/img/재생.9b4ec831.png",revision:null},{url:"/purba1/img/카메라.8cfd657b.png",revision:null},{url:"/purba1/img/환경설정.2370f5a6.png",revision:null},{url:"/purba1/index.html",revision:"742cddb3060830603d6368d48b2ea722"},{url:"/purba1/js/app.c6fca036.js",revision:null},{url:"/purba1/js/chunk-vendors.0a4cd88b.js",revision:null},{url:"/purba1/manifest.json",revision:"3033c6a97473c92f596e794980ce7023"},{url:"/purba1/out1.txt",revision:"171a3ea4f5e98991381393ba2ebae3ad"},{url:"/purba1/out2.txt",revision:"eaa623a10bfa38440c5cd57d79d5c4ac"},{url:"/purba1/phoneNumbers.json",revision:"d0a8d1704eaa1abc1145e6d442dd465f"}],{})}));
//# sourceMappingURL=service-worker.js.map
