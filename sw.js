if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return t[e]||(i=new Promise((async i=>{if("document"in self){const t=document.createElement("script");t.src=e,document.head.appendChild(t),t.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!t[e])throw new Error(`Module ${e} didn’t register its module`);return t[e]}))},i=(i,t)=>{Promise.all(i.map(e)).then((e=>t(1===e.length?e[0]:e)))},t={require:Promise.resolve(i)};self.define=(i,s,n)=>{t[i]||(t[i]=Promise.resolve().then((()=>{let t={};const r={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return t;case"module":return r;default:return e(i)}}))).then((e=>{const i=n(...e);return t.default||(t.default=i),t}))})))}}define("./sw.js",["./workbox-feb8f2d8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/index.html",revision:"596078f38270639c9bf9bd0aae4d2f06"},{url:"/static/images/e2760c24eac033b03c7694b03c4c242c.png",revision:null},{url:"/static/main.d60626bfd26d111ef505.css",revision:null},{url:"/static/main.d60626bfd26d111ef505.js",revision:null}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{allowlist:[/^static/,/^public/,/^sw\.js$/,/^index\.html$/,/^favicon\.ico$/]})),e.registerRoute(/^https:\/\/.*.githubusercontent.com\//,new e.StaleWhileRevalidate({cacheName:"github-content",plugins:[]}),"GET"),e.registerRoute(/^https:\/\/api.github.com\//,new e.NetworkFirst({cacheName:"github-api",plugins:[]}),"GET"),e.registerRoute(/.+/,new e.StaleWhileRevalidate({cacheName:"other-websites",plugins:[]}),"GET")}));
