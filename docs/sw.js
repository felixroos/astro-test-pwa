if(!self.define){let e,s={};const r=(r,t)=>(r=new URL(r+".js",t).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(t,o)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let n={};const a=e=>r(e,i),d={module:{uri:i},exports:n,require:a};s[i]=Promise.all(t.map((e=>d[e]||a(e)))).then((e=>(o(...e),n)))}}define(["./workbox-4de3aa5f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"_astro/hoisted.7e39f88f.js",revision:null},{url:"_astro/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"/astro-test-pwa",revision:"7a7051c41af929bb5a6da9f5b4a315a2"},{url:"registerSW.js",revision:"a959c95af65f85bb1a387911113b4d92"},{url:"test/hello",revision:"26cd22b5b4425044d224ef63a8843d77"},{url:"test",revision:"73dd772755de5d3af08d696aa16a5a0d"},{url:"manifest.webmanifest",revision:"b00fc06e3aaa212306c809423f0990d1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/astro-test-pwa")))}));
