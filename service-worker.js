if(!self.define){let e,i={};const a=(a,d)=>(a=new URL(a+".js",d).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>a(e,c),b={module:{uri:c},exports:s,require:n};i[c]=Promise.all(d.map((e=>b[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"202211/第一篇博客，hexo-GitHub搭建/index.html",revision:"81b755e4eec42e472bab16ad8995aca6"},{url:"202301/Grub更改排序-不是默认启动项/index.html",revision:"dde3e63edc260954f6f998883f85336e"},{url:"202301/Hexo站点收录/index.html",revision:"3baf47b5c7a29454e653fc0eda53b4c5"},{url:"202301/RSS介绍-为你的Hexo博客添加RSS/index.html",revision:"5e7b9668e9a076ed6ab0b550158715f7"},{url:"202301/Ubuntu签名内核/index.html",revision:"bff81442144318a1ab264c4f9a2129d4"},{url:"202301/使用cloudflare-Worker代理telegram-bot-api/index.html",revision:"50ca00ccca343689b3e29943eed4837c"},{url:"202302/为你的Hexo博客适配PWA/index.html",revision:"4afa73291704a94248e68c764f5ba853"},{url:"202302/站点优化的一些建议/index.html",revision:"2d1241399723ad69ad0d63ded368eef7"},{url:"404.html",revision:"d490b4f1075d1b9a6866339780517950"},{url:"about/index.html",revision:"b517e0ed0761d67127c6ab840f7e64c7"},{url:"archives/2022/11/index.html",revision:"6215317c29800cd0d44824c954619a84"},{url:"archives/2022/index.html",revision:"865c422f61901cadebf6ff44e39c2e36"},{url:"archives/2023/01/index.html",revision:"a18909803efa7f4c911847c250a735a5"},{url:"archives/2023/02/index.html",revision:"c12751a2ab90c00f9f613833e6cc4b1b"},{url:"archives/2023/index.html",revision:"f0d3a405a3090cd555fb7ec3ffd216f5"},{url:"archives/index.html",revision:"afed1db8e5523f73bfdf6f1ccec61ef3"},{url:"categories/index.html",revision:"8410548afc235b073b79e9f79270b4c9"},{url:"categories/Linux/Grub/index.html",revision:"04d2fbab60da0179fe7b4c363061e8a4"},{url:"categories/Linux/index.html",revision:"5722472e16587afa7d3d7f54940a6c96"},{url:"categories/Linux/Kernel/index.html",revision:"e85984dbca0af5cce85e356bb0097a3d"},{url:"categories/Linux/Ubuntu/index.html",revision:"d6211e6a5c1cf612a2e0d12f78e96161"},{url:"categories/Web/Blog/index.html",revision:"51a26a37a8625d8ac0ebe708ad42180e"},{url:"categories/Web/Blog/RSS/index.html",revision:"3c2fec32a8a0b83d7c8453f73d9d23aa"},{url:"categories/Web/Blog/SEO/index.html",revision:"0a26acb528349f7b534c0c4bc392ffd8"},{url:"categories/Web/CDN/index.html",revision:"8320879cd63ff4dd066244837677764e"},{url:"categories/Web/index.html",revision:"1eb7a6e61cc2372dadff674993a91283"},{url:"categories/Web/Web优化/index.html",revision:"682fbcfc71652044a9c1a04e90d7db48"},{url:"css/cloudedGlass.css",revision:"a59642df3074a81866fc18eebc251a3f"},{url:"css/gitalk.css",revision:"dd989bd11858f7705f1521fdcc0499b4"},{url:"css/highlight-dark.css",revision:"cfff32f54709aa48e92868ee25f5da6a"},{url:"css/highlight.css",revision:"114cea89fc5a65004c30987c2f6b9226"},{url:"css/main.css",revision:"ac543f04740d4ca84408c85146518242"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/avatar.webp",revision:"39d42a06ed4ada1f7e4f58b926dd65b0"},{url:"img/default_index.webp",revision:"ba16e5224d1a3f1f0e1fe7433496a120"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/default.webp",revision:"93b47a8f88f6783ec3ee049217fea008"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/icons/icon_192.png",revision:"82fd58a5074f2636018eadfde55a8db2"},{url:"img/icons/icon_256.png",revision:"d6754b5171a8464bc9b3886d9ed62175"},{url:"img/icons/icon_384.png",revision:"894ea9573200f90657c2274a34760d56"},{url:"img/icons/icon_512.png",revision:"686f30e47271783b1030f60584af122c"},{url:"img/index/CF-TG.webp",revision:"f763519da09477bb6fad396158a1816b"},{url:"img/index/grub.webp",revision:"73991ddeb3a06f8969deb831beede3ea"},{url:"img/index/Hexo-PWA.webp",revision:"3b2ad8a55c493ac1998aecb47e5c44e7"},{url:"img/index/Hexo-RSS.webp",revision:"45d1336368505b48944df4c74634eb81"},{url:"img/index/hexo.webp",revision:"6aacc33931ceb9aeb4c6fc1e9d9521cd"},{url:"img/index/SEO.webp",revision:"a2b02fb917005a423bf5188f75486ef2"},{url:"img/index/ubuntu.webp",revision:"03f6e04e5e0f56627f8420777a3600db"},{url:"img/index/web-optimization.webp",revision:"047aa703e7cf3669b4b85049a7387c79"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/logo.png",revision:"dfb25f1012adf30e4bbbbec1291308b2"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/wx.webp",revision:"fd560802380d839773fefd94c1603cf7"},{url:"index.html",revision:"87d142cfe6e29fcbc5600ddb2ea01004"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"605f587be2ab3d36472bb03ac27ede65"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"ad8b55840660267494fd4556b378c68b"},{url:"js/plugins.js",revision:"6c10bee3f659ca91b534bf4a81d62f1e"},{url:"js/snowflake.js",revision:"0130eab642641122842a312b988201cc"},{url:"js/stime.js",revision:"a9123a91a947c100b9ad0fd9e1eb3739"},{url:"js/utils.js",revision:"46155ec85282b5815b2607e8deb1edca"},{url:"links/index.html",revision:"ae8a22612f3f331c84c92ca54cd16fdb"},{url:"sw-register.js",revision:"02b85d5fd8fd58691c76eac293cf4250"},{url:"sw.js",revision:"c962b9caaee3924987843a1d6571f485"},{url:"tags/Blog/index.html",revision:"84ac7a1e5932861b77870025e65a6d6b"},{url:"tags/CDN/index.html",revision:"0ef8b1a6c47c1b5af4f6135b1c753ec9"},{url:"tags/Cloudflare/index.html",revision:"7aa1ec26133d8c803f2161e7f9627ca0"},{url:"tags/Grub/index.html",revision:"f0b7bcae31e528a5a98933d32b98e812"},{url:"tags/index.html",revision:"8f863ee7225be9542f9a85354f2f04de"},{url:"tags/Linux-Kernel/index.html",revision:"17da8044dd38c61c63e11d4f3c8796cc"},{url:"tags/Linux/index.html",revision:"4b01c834706825b73236846df9195617"},{url:"tags/RSS/index.html",revision:"5b279902d89d052468e6166bc891251d"},{url:"tags/Secure-Boot/index.html",revision:"5eac117c141f3157586079a46a8431d7"},{url:"tags/SEO/index.html",revision:"c0b31f750876adde964533d715d482b4"},{url:"tags/Telegram/index.html",revision:"4de43d8544c52b4a14b145736e9d0b3c"},{url:"tags/Ubuntu/index.html",revision:"cc118373429ddf32ed6250318899582d"},{url:"tags/Web/index.html",revision:"8dde1d97df37b9325333354beee056b9"},{url:"tags/Web优化/index.html",revision:"5a766dab42a670ee5bf2a2717cd0b640"}],{})}));
//# sourceMappingURL=service-worker.js.map
