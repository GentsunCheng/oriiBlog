if(!self.define){let e,i={};const d=(d,b)=>(d=new URL(d+".js",b).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(b,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let n={};const s=e=>d(e,r),c={module:{uri:r},exports:n,require:s};i[r]=Promise.all(b.map((e=>c[e]||s(e)))).then((e=>(a(...e),n)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"202211/第一篇博客，hexo-GitHub搭建/index.html",revision:"b2092d3b8dd8a35cb214473653778d7b"},{url:"202301/Grub更改排序-不是默认启动项/index.html",revision:"a2bf55fa38b3d3be1d1b5d2f1e409395"},{url:"202301/Hexo站点收录/index.html",revision:"4242ab8fb9553fe147eba7047983500b"},{url:"202301/RSS介绍-为你的Hexo博客添加RSS/index.html",revision:"e99a0515d4ba556d5b399b479e0bfda1"},{url:"202301/Ubuntu签名内核/index.html",revision:"f7a2e840ce62f12f7153cda424521470"},{url:"202301/使用cloudflare-Worker代理telegram-bot-api/index.html",revision:"2ebfe5782b2d353bd583aeae4821645c"},{url:"404.html",revision:"8419940bb07406a301682cb2786b2188"},{url:"about/index.html",revision:"0d70e2f4caf1170fe9960c3477de33f0"},{url:"archives/2022/11/index.html",revision:"6982783b4f407d28e470ad24b6da3594"},{url:"archives/2022/index.html",revision:"9194ce422624758cf3c0107181a122f5"},{url:"archives/2023/01/index.html",revision:"29b9e99152714390698cf14162d12469"},{url:"archives/2023/index.html",revision:"831e805f55f31643b96f2808864f4f24"},{url:"archives/index.html",revision:"170fa094e0162926f3930cd0c548cd76"},{url:"categories/index.html",revision:"8a71ab830677e741cf11965ca478ac49"},{url:"categories/Linux/Grub/index.html",revision:"6051fedaffc9768567f1b6f37dadb468"},{url:"categories/Linux/index.html",revision:"6e9b65e6c74c67784faef510185348fd"},{url:"categories/Linux/Kernel/index.html",revision:"ab6f09236ed17bee495e6f9b4937059d"},{url:"categories/Linux/Ubuntu/index.html",revision:"b86c9db51183a5ba99eee854b899e446"},{url:"categories/Web/Blog/index.html",revision:"7372a9fd136f72fe8fe21d50d66aaa85"},{url:"categories/Web/Blog/RSS/index.html",revision:"ea5e6e61876b439f75495bfbc68bf2a7"},{url:"categories/Web/Blog/SEO/index.html",revision:"13dcaebd21d6a9aaa2084fdeecf6b771"},{url:"categories/Web/CDN/index.html",revision:"f655ce9ad35811e18c0dcdd09e4bb8e9"},{url:"categories/Web/index.html",revision:"b6316f1006935ef7fa4b2a5605b30b66"},{url:"css/gitalk.css",revision:"9788dfa7134dbb1816fb65419daae363"},{url:"css/highlight-dark.css",revision:"325749aa186cc8adc13dc84fa2b064c3"},{url:"css/highlight.css",revision:"f43123855464a0c01a452418be35fd3e"},{url:"css/main.css",revision:"d93d54445ab6a3c0ebad32e67af342ea"},{url:"img/avatar.png",revision:"2d9aa61e592b26e2745f3c161c48c397"},{url:"img/avatar.webp",revision:"39d42a06ed4ada1f7e4f58b926dd65b0"},{url:"img/default_index.webp",revision:"ba16e5224d1a3f1f0e1fe7433496a120"},{url:"img/default.png",revision:"beb05a6b5b201044b6d80cacdf29f905"},{url:"img/default.webp",revision:"8c624bc3feb3e3e33b1b9cd7e7dba839"},{url:"img/fluid.png",revision:"5603316bb5bc54a9d5cab14fddd4c510"},{url:"img/icons/icon-192x192.png",revision:"82fd58a5074f2636018eadfde55a8db2"},{url:"img/icons/icon-256x256.png",revision:"d6754b5171a8464bc9b3886d9ed62175"},{url:"img/icons/icon-384x384.png",revision:"894ea9573200f90657c2274a34760d56"},{url:"img/icons/icon-512x512.png",revision:"686f30e47271783b1030f60584af122c"},{url:"img/index/CF-TG.webp",revision:"f763519da09477bb6fad396158a1816b"},{url:"img/index/grub.webp",revision:"73991ddeb3a06f8969deb831beede3ea"},{url:"img/index/Hexo-RSS.webp",revision:"45d1336368505b48944df4c74634eb81"},{url:"img/index/hexo.webp",revision:"6aacc33931ceb9aeb4c6fc1e9d9521cd"},{url:"img/index/SEO.webp",revision:"a2b02fb917005a423bf5188f75486ef2"},{url:"img/index/ubuntu.webp",revision:"03f6e04e5e0f56627f8420777a3600db"},{url:"img/loading.gif",revision:"15657539044e11a19a1c6c7e3073d1b3"},{url:"img/logo.png",revision:"dfb25f1012adf30e4bbbbec1291308b2"},{url:"img/police_beian.png",revision:"b769e8dfde5660239317ed60758dba13"},{url:"img/wx.webp",revision:"fd560802380d839773fefd94c1603cf7"},{url:"index.html",revision:"b1e20c39b748cb02649bb2e4ea00d2c8"},{url:"js/boot.js",revision:"7683fab2fc9d03a3a659aa956b3a54e8"},{url:"js/color-schema.js",revision:"605f587be2ab3d36472bb03ac27ede65"},{url:"js/events.js",revision:"7fa076a71a5559d89af6b0c6dfd3a0d2"},{url:"js/img-lazyload.js",revision:"fab30a410e5f490fce3f977a6936a714"},{url:"js/leancloud.js",revision:"fb4a815ccdb5d851d00561dbb62251c4"},{url:"js/local-search.js",revision:"ad8b55840660267494fd4556b378c68b"},{url:"js/plugins.js",revision:"6c10bee3f659ca91b534bf4a81d62f1e"},{url:"js/utils.js",revision:"46155ec85282b5815b2607e8deb1edca"},{url:"links/index.html",revision:"75f08075568bb669fb681734067ed816"},{url:"tags/Blog/index.html",revision:"298e0ed9a05ea1e11db452b7cfd54728"},{url:"tags/CDN/index.html",revision:"11e2811270b197893f31e399f6387c3f"},{url:"tags/Cloudflare/index.html",revision:"5674f9b58c7f1c1c6443d14964189070"},{url:"tags/Grub/index.html",revision:"918f8f216ab52422d0030db52d70367b"},{url:"tags/index.html",revision:"bc12b30c50239c162a2ea04796b2a94a"},{url:"tags/Linux-Kernel/index.html",revision:"5f7a0a8ab17220bd18db3ba24d0258d1"},{url:"tags/Linux/index.html",revision:"0dc45d303854c7117dfe513c5f26faec"},{url:"tags/RSS/index.html",revision:"81ed75bf7359cecd12429d06ee5822bf"},{url:"tags/Secure-Boot/index.html",revision:"a568546e5976647a46eb780dc9c1c9f4"},{url:"tags/SEO/index.html",revision:"b115cf6a5f7606caf080bc092212d975"},{url:"tags/Telegram/index.html",revision:"ad587d885dab3e6a27b3e8e82adcdcbf"},{url:"tags/Ubuntu/index.html",revision:"d05c1fed16345a3815d5be9ecb5b5ab9"},{url:"tags/Web/index.html",revision:"c1397eb3b8c79c6abb65b5832a56bbeb"}],{})}));
//# sourceMappingURL=service-worker.js.map
