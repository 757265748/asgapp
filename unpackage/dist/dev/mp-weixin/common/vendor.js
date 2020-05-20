(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, uni) {var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function n(e,t){return e(t={exports:{}},t.exports),t.exports}var r=n((function(e,t){var n;e.exports=(n=n||function(e,t){var n=Object.create||function(){function e(){}return function(t){var n;return e.prototype=t,n=new e,e.prototype=null,n}}(),r={},o=r.lib={},s=o.Base={extend:function(e){var t=n(this);return e&&t.mixIn(e),t.hasOwnProperty("init")&&this.init!==t.init||(t.init=function(){t.$super.init.apply(this,arguments)}),t.init.prototype=t,t.$super=this,t},create:function(){var e=this.extend();return e.init.apply(e,arguments),e},init:function(){},mixIn:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);e.hasOwnProperty("toString")&&(this.toString=e.toString)},clone:function(){return this.init.prototype.extend(this)}},i=o.WordArray=s.extend({init:function(e,t){e=this.words=e||[],this.sigBytes=null!=t?t:4*e.length},toString:function(e){return(e||c).stringify(this)},concat:function(e){var t=this.words,n=e.words,r=this.sigBytes,o=e.sigBytes;if(this.clamp(),r%4)for(var s=0;s<o;s++){var i=n[s>>>2]>>>24-s%4*8&255;t[r+s>>>2]|=i<<24-(r+s)%4*8}else for(s=0;s<o;s+=4)t[r+s>>>2]=n[s>>>2];return this.sigBytes+=o,this},clamp:function(){var t=this.words,n=this.sigBytes;t[n>>>2]&=4294967295<<32-n%4*8,t.length=e.ceil(n/4)},clone:function(){var e=s.clone.call(this);return e.words=this.words.slice(0),e},random:function(t){for(var n,r=[],o=function(t){t=t;var n=987654321,r=4294967295;return function(){var o=((n=36969*(65535&n)+(n>>16)&r)<<16)+(t=18e3*(65535&t)+(t>>16)&r)&r;return o/=4294967296,(o+=.5)*(e.random()>.5?1:-1)}},s=0;s<t;s+=4){var a=o(4294967296*(n||e.random()));n=987654071*a(),r.push(4294967296*a()|0)}return new i.init(r,t)}}),a=r.enc={},c=a.Hex={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],o=0;o<n;o++){var s=t[o>>>2]>>>24-o%4*8&255;r.push((s>>>4).toString(16)),r.push((15&s).toString(16))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r+=2)n[r>>>3]|=parseInt(e.substr(r,2),16)<<24-r%8*4;return new i.init(n,t/2)}},u=a.Latin1={stringify:function(e){for(var t=e.words,n=e.sigBytes,r=[],o=0;o<n;o++){var s=t[o>>>2]>>>24-o%4*8&255;r.push(String.fromCharCode(s))}return r.join("")},parse:function(e){for(var t=e.length,n=[],r=0;r<t;r++)n[r>>>2]|=(255&e.charCodeAt(r))<<24-r%4*8;return new i.init(n,t)}},l=a.Utf8={stringify:function(e){try{return decodeURIComponent(escape(u.stringify(e)))}catch(e){throw new Error("Malformed UTF-8 data")}},parse:function(e){return u.parse(unescape(encodeURIComponent(e)))}},f=o.BufferedBlockAlgorithm=s.extend({reset:function(){this._data=new i.init,this._nDataBytes=0},_append:function(e){"string"==typeof e&&(e=l.parse(e)),this._data.concat(e),this._nDataBytes+=e.sigBytes},_process:function(t){var n=this._data,r=n.words,o=n.sigBytes,s=this.blockSize,a=o/(4*s),c=(a=t?e.ceil(a):e.max((0|a)-this._minBufferSize,0))*s,u=e.min(4*c,o);if(c){for(var l=0;l<c;l+=s)this._doProcessBlock(r,l);var f=r.splice(0,c);n.sigBytes-=u}return new i.init(f,u)},clone:function(){var e=s.clone.call(this);return e._data=this._data.clone(),e},_minBufferSize:0}),p=(o.Hasher=f.extend({cfg:s.extend(),init:function(e){this.cfg=this.cfg.extend(e),this.reset()},reset:function(){f.reset.call(this),this._doReset()},update:function(e){return this._append(e),this._process(),this},finalize:function(e){return e&&this._append(e),this._doFinalize()},blockSize:16,_createHelper:function(e){return function(t,n){return new e.init(n).finalize(t)}},_createHmacHelper:function(e){return function(t,n){return new p.HMAC.init(e,n).finalize(t)}}}),r.algo={});return r}(Math),n)})),o=(n((function(e,t){var n;e.exports=(n=r,function(e){var t=n,r=t.lib,o=r.WordArray,s=r.Hasher,i=t.algo,a=[];!function(){for(var t=0;t<64;t++)a[t]=4294967296*e.abs(e.sin(t+1))|0}();var c=i.MD5=s.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(e,t){for(var n=0;n<16;n++){var r=t+n,o=e[r];e[r]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8)}var s=this._hash.words,i=e[t+0],c=e[t+1],h=e[t+2],d=e[t+3],y=e[t+4],v=e[t+5],g=e[t+6],_=e[t+7],m=e[t+8],b=e[t+9],w=e[t+10],E=e[t+11],T=e[t+12],S=e[t+13],O=e[t+14],k=e[t+15],A=s[0],P=s[1],I=s[2],N=s[3];A=u(A,P,I,N,i,7,a[0]),N=u(N,A,P,I,c,12,a[1]),I=u(I,N,A,P,h,17,a[2]),P=u(P,I,N,A,d,22,a[3]),A=u(A,P,I,N,y,7,a[4]),N=u(N,A,P,I,v,12,a[5]),I=u(I,N,A,P,g,17,a[6]),P=u(P,I,N,A,_,22,a[7]),A=u(A,P,I,N,m,7,a[8]),N=u(N,A,P,I,b,12,a[9]),I=u(I,N,A,P,w,17,a[10]),P=u(P,I,N,A,E,22,a[11]),A=u(A,P,I,N,T,7,a[12]),N=u(N,A,P,I,S,12,a[13]),I=u(I,N,A,P,O,17,a[14]),A=l(A,P=u(P,I,N,A,k,22,a[15]),I,N,c,5,a[16]),N=l(N,A,P,I,g,9,a[17]),I=l(I,N,A,P,E,14,a[18]),P=l(P,I,N,A,i,20,a[19]),A=l(A,P,I,N,v,5,a[20]),N=l(N,A,P,I,w,9,a[21]),I=l(I,N,A,P,k,14,a[22]),P=l(P,I,N,A,y,20,a[23]),A=l(A,P,I,N,b,5,a[24]),N=l(N,A,P,I,O,9,a[25]),I=l(I,N,A,P,d,14,a[26]),P=l(P,I,N,A,m,20,a[27]),A=l(A,P,I,N,S,5,a[28]),N=l(N,A,P,I,h,9,a[29]),I=l(I,N,A,P,_,14,a[30]),A=f(A,P=l(P,I,N,A,T,20,a[31]),I,N,v,4,a[32]),N=f(N,A,P,I,m,11,a[33]),I=f(I,N,A,P,E,16,a[34]),P=f(P,I,N,A,O,23,a[35]),A=f(A,P,I,N,c,4,a[36]),N=f(N,A,P,I,y,11,a[37]),I=f(I,N,A,P,_,16,a[38]),P=f(P,I,N,A,w,23,a[39]),A=f(A,P,I,N,S,4,a[40]),N=f(N,A,P,I,i,11,a[41]),I=f(I,N,A,P,d,16,a[42]),P=f(P,I,N,A,g,23,a[43]),A=f(A,P,I,N,b,4,a[44]),N=f(N,A,P,I,T,11,a[45]),I=f(I,N,A,P,k,16,a[46]),A=p(A,P=f(P,I,N,A,h,23,a[47]),I,N,i,6,a[48]),N=p(N,A,P,I,_,10,a[49]),I=p(I,N,A,P,O,15,a[50]),P=p(P,I,N,A,v,21,a[51]),A=p(A,P,I,N,T,6,a[52]),N=p(N,A,P,I,d,10,a[53]),I=p(I,N,A,P,w,15,a[54]),P=p(P,I,N,A,c,21,a[55]),A=p(A,P,I,N,m,6,a[56]),N=p(N,A,P,I,k,10,a[57]),I=p(I,N,A,P,g,15,a[58]),P=p(P,I,N,A,S,21,a[59]),A=p(A,P,I,N,y,6,a[60]),N=p(N,A,P,I,E,10,a[61]),I=p(I,N,A,P,h,15,a[62]),P=p(P,I,N,A,b,21,a[63]),s[0]=s[0]+A|0,s[1]=s[1]+P|0,s[2]=s[2]+I|0,s[3]=s[3]+N|0},_doFinalize:function(){var t=this._data,n=t.words,r=8*this._nDataBytes,o=8*t.sigBytes;n[o>>>5]|=128<<24-o%32;var s=e.floor(r/4294967296),i=r;n[15+(o+64>>>9<<4)]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),n[14+(o+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),t.sigBytes=4*(n.length+1),this._process();for(var a=this._hash,c=a.words,u=0;u<4;u++){var l=c[u];c[u]=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8)}return a},clone:function(){var e=s.clone.call(this);return e._hash=this._hash.clone(),e}});function u(e,t,n,r,o,s,i){var a=e+(t&n|~t&r)+o+i;return(a<<s|a>>>32-s)+t}function l(e,t,n,r,o,s,i){var a=e+(t&r|n&~r)+o+i;return(a<<s|a>>>32-s)+t}function f(e,t,n,r,o,s,i){var a=e+(t^n^r)+o+i;return(a<<s|a>>>32-s)+t}function p(e,t,n,r,o,s,i){var a=e+(n^(t|~r))+o+i;return(a<<s|a>>>32-s)+t}t.MD5=s._createHelper(c),t.HmacMD5=s._createHmacHelper(c)}(Math),n.MD5)})),n((function(e,t){var n,o,s;e.exports=(o=(n=r).lib.Base,s=n.enc.Utf8,void(n.algo.HMAC=o.extend({init:function(e,t){e=this._hasher=new e.init,"string"==typeof t&&(t=s.parse(t));var n=e.blockSize,r=4*n;t.sigBytes>r&&(t=e.finalize(t)),t.clamp();for(var o=this._oKey=t.clone(),i=this._iKey=t.clone(),a=o.words,c=i.words,u=0;u<n;u++)a[u]^=1549556828,c[u]^=909522486;o.sigBytes=i.sigBytes=r,this.reset()},reset:function(){var e=this._hasher;e.reset(),e.update(this._iKey)},update:function(e){return this._hasher.update(e),this},finalize:function(e){var t=this._hasher,n=t.finalize(e);return t.reset(),t.finalize(this._oKey.clone().concat(n))}})))})),n((function(e,t){e.exports=r.HmacMD5})));class s extends Error{constructor(e){super(e.message),this.errMsg=e.message||"",Object.defineProperties(this,{code:{get:()=>e.code},requestId:{get:()=>e.requestId},message:{get(){return this.errMsg},set(e){this.errMsg=e}}})}}var i={sign:function(e,t){let n="";return Object.keys(e).sort().forEach((function(t){e[t]&&(n=n+"&"+t+"="+e[t])})),n=n.slice(1),o(n,t).toString()},wrappedRequest:function(e){return new Promise((t,n)=>{uni.request(Object.assign(e,{complete(e){e||(e={}),0===e.errMsg.indexOf("request:fail")&&"h5"==="mp-weixin"&&"development"==="development"&&console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=H5%E4%B8%AD%E4%BD%BF%E7%94%A8unicloud");const r=e.data&&e.data.header&&e.data.header["x-serverless-request-id"];if(!e.statusCode||e.statusCode>=400)return n(new s({code:"SYS_ERR",message:e.errMsg||"request:fail",requestId:r}));const o=e.data;if(o.error)return n(new s({code:o.error.code,message:o.error.message,requestId:r}));o.result=o.data,o.requestId=r,delete o.data,t(o)}}))})}};const a={jpg:"image/jpeg",jpeg:"image/jpeg",png:"image/png",gif:"image/gif",webp:"image/webp",svg:"image/svg+xml",mp3:"audio/mp3",mp4:"video/mp4",ogg:"audio/ogg",webm:"video/webm"};function c(e){return a[e.toLowerCase()]}class u{constructor(e){["spaceId","clientSecret"].forEach(t=>{if(!Object.prototype.hasOwnProperty.call(e,t))throw new Error(`缺少参数${t}`)}),this.config=Object.assign({},{endpoint:"https://api.bspapp.com"},e),this.config.provider="aliyun",this.config.requestUrl=this.config.endpoint+"/client",this.config.envType=this.config.envType||"public",this.config.accessTokenKey="access_token_"+this.config.spaceId}get hasAccessToken(){return!!this.accessToken}setAccessToken(e){uni.setStorageSync(this.config.accessTokenKey,e),this.accessToken=e}requestAuth(e){return i.wrappedRequest(e)}request(e,t){return this.hasAccessToken?t?i.wrappedRequest(e):i.wrappedRequest(e).catch(t=>new Promise((e,n)=>{!t||"GATEWAY_INVALID_TOKEN"!==t.code&&"InvalidParameter.InvalidToken"!==t.code?n(t):e()}).then(()=>this.getAccessToken()).then(()=>{const t=this.rebuildRequest(e);return this.request(t,!0)})):this.getAccessToken().then(()=>{const t=this.rebuildRequest(e);return this.request(t,!0)})}rebuildRequest(e){const t=Object.assign({},e);return t.data.token=this.accessToken,t.header["x-basement-token"]=this.accessToken,t.header["x-serverless-sign"]=i.sign(t.data,this.config.clientSecret),t}setupRequest(e,t){const n=Object.assign({},e,{spaceId:this.config.spaceId,timestamp:Date.now()}),r={"Content-Type":"application/json"};return"auth"!==t&&(n.token=this.accessToken,r["x-basement-token"]=this.accessToken),r["x-serverless-sign"]=i.sign(n,this.config.clientSecret),{url:this.config.requestUrl,method:"POST",data:n,dataType:"json",header:r}}getAccessToken(){return this.requestAuth(this.setupRequest({method:"serverless.auth.user.anonymousAuthorize",params:"{}"},"auth")).then(e=>new Promise((t,n)=>{e.result&&e.result.accessToken?(this.setAccessToken(e.result.accessToken),t(this.accessToken)):n(new s({code:"AUTH_FAILED",message:"获取accessToken失败"}))}))}authorize(){this.getAccessToken()}callFunction(e){const t={method:"serverless.function.runtime.invoke",params:JSON.stringify({functionTarget:e.name,functionArgs:e.data||{}})};return this.config.useDebugFunction?this.request(this.setupRequest(t)).then(t=>{if(t&&t.requestId){const n=JSON.stringify({spaceId:this.config.spaceId,functionName:e.name,requestId:t.requestId});console.log(`[aliyun-request]${n}[/aliyun-request]`)}return Promise.resolve(t)}).catch(t=>{if(t&&t.requestId){const n=JSON.stringify({spaceId:this.config.spaceId,functionName:e.name,requestId:t.requestId});console.log(`[aliyun-request]${n}[/aliyun-request]`)}return Promise.reject(t)}):this.request(this.setupRequest(t))}getOSSUploadOptionsFromPath(e){const t={method:"serverless.file.resource.generateProximalSign",params:JSON.stringify(e)};return this.request(this.setupRequest(t))}uploadFileToOSS({url:e,formData:t,fileName:n,name:r,filePath:o,fileType:i,contentType:a,onUploadProgress:c}){return new Promise((a,u)=>{const l=uni.uploadFile({url:e,formData:t,fileName:n,name:r,filePath:o,fileType:i,header:{"X-OSS-server-side-encrpytion":"AES256"},success(e){e&&e.statusCode<400?a(e):u(new s({code:"UPLOAD_FAILED",message:"文件上传失败"}))},fail(e){u(e)}});"function"==typeof c&&l.onProgressUpdate(e=>{c({loaded:e.totalBytesSent,total:e.totalBytesExpectedToSend})})})}reportOSSUpload(e){const t={method:"serverless.file.resource.report",params:JSON.stringify(e)};return this.request(this.setupRequest(t))}uploadFile({filePath:e,cloudPath:t,onUploadProgress:n,config:r}){const o=r&&r.envType||this.config.envType;let i,u,l,f,p,h=t||e.split("/").pop();return(i= false?undefined:c(u=e.split(".").pop())?Promise.resolve():Promise.reject(new s({code:"UNSUPPORTED_FILE_TYPE",message:"不支持的文件类型"}))).then(()=>new Promise((t,n)=>{uni.getFileInfo?uni.getFileInfo({filePath:e,success(e){t(e.size)},fail(e){n(e)}}):t(0)})).then(e=>this.getOSSUploadOptionsFromPath({env:o,filename:h,size:e})).then(t=>{const r=t.result;l=c(u),f=r.id,p="https://"+r.cdnDomain+"/"+r.ossPath;const o={url:"https://"+r.host,formData:{"Cache-Control":"max-age=2592000","Content-Disposition":"attachment",OSSAccessKeyId:r.accessKeyId,Signature:r.signature,host:r.host,id:f,key:r.ossPath,policy:r.policy,success_action_status:200},fileName:"file",name:"file",filePath:e,fileType:"image",contentType:l};return this.uploadFileToOSS(Object.assign({},o,{onUploadProgress:n}))}).then(()=>this.reportOSSUpload({id:f,contentType:l})).then(t=>new Promise((n,r)=>{t.success?n({success:!0,filePath:e,fileID:p}):r(new s({code:"UPLOAD_FAILED",message:"文件上传失败"}))}))}deleteFile({fileList:e}){const t={method:"serverless.file.resource.delete",params:JSON.stringify({id:e[0]})};return this.request(this.setupRequest(t))}}const l=__webpack_require__(/*! uni-stat-config */ 5).default||__webpack_require__(/*! uni-stat-config */ 5),f="__DC_STAT_UUID",p="__DC_UUID_VALUE",h="https://ide.dcloud.net.cn/serverless/function/invoke";function d(){let e="";if("n"===y()){try{e=plus.runtime.getDCloudId()}catch(t){e=""}return e}try{e=uni.getStorageSync(f)}catch(t){e=p}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{uni.setStorageSync(f,e)}catch(e){uni.setStorageSync(f,p)}}return e}function y(){return{"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"}["mp-weixin"]}function v(e){return function(t){if(!((t=t||{}).success||t.fail||t.complete))return e.call(this,t);e.call(this,t).then(e=>{t.success&&t.success(e),t.complete&&t.complete(e)}).catch(e=>{t.fail&&t.fail(e),t.complete&&t.complete(e)})}}const g={init(e){const t=new u(e);return["uploadFile","deleteFile"].forEach(e=>{t[e]=v(t[e]).bind(t)}),setTimeout(()=>{t.authorize()}),t}};var _;function m(e,t,n){void 0===n&&(n={});var r=/\?/.test(t),o="";for(var s in n)""===o?!r&&(t+="?"):o+="&",o+=s+"="+encodeURIComponent(n[s]);return/^http(s)?\:\/\//.test(t+=o)?t:""+e+t}!function(e){e.local="local",e.none="none",e.session="session"}(_||(_={}));var b,w=(b=function(e,t){return(b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}b(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),E=function(){return(E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return w(t,e),t.prototype.post=function(e){var t=e.url,n=e.data,r=e.headers;return new Promise((function(e,o){uni.request({url:m("https:",t),data:n,method:"POST",header:r,success:function(t){e(t)},fail:function(e){o(e)}})}))},t.prototype.upload=function(e){return new Promise((function(t){var n=e.url,r=e.file,o=e.data,s=e.headers;uni.uploadFile({url:m("https:",n),name:"file",formData:Object.assign({},o),filePath:r,header:s,success:function(e){var n={statusCode:e.statusCode,data:e.data||{}};200===e.statusCode&&o.success_action_status&&(n.statusCode=parseInt(o.success_action_status,10)),t(n)},fail:function(e){t(e)}})}))},t.prototype.download=function(e){var t=e.url,n=e.headers;return new Promise((function(e,r){uni.downloadFile({url:m("https:",t),header:n,success:function(t){200===t.statusCode&&t.tempFilePath?e({statusCode:200,tempFilePath:t.tempFilePath}):e(t)},fail:function(e){r(e)}})}))},t}((function(){})),S={setItem:function(e,t){uni.setStorageSync(e,t)},getItem:function(e){return uni.getStorageSync(e)},removeItem:function(e){uni.removeStorageSync(e)},clear:function(){uni.clearStorageSync()}},O=function(e,t){void 0===t&&(t={});var n=uni.connectSocket(E({url:e},t));return{set onopen(e){n.onOpen(e)},set onmessage(e){n.onMessage(e)},set onclose(e){n.onClose(e)},set onerror(e){n.onError(e)},send:function(e){return n.send({data:e})},close:function(e,t){return n.close({code:e,reason:t})},get readyState(){return n.readyState},CONNECTING:0,OPEN:1,CLOSING:2,CLOSED:3}};var k={genAdapter:function(){return{root:{},reqClass:T,wsClass:O,localStorage:S,primaryStorage:_.local}},isMatch:function(){return"undefined"!=typeof uni&&!!uni.request},runtime:"uni_app"},A=n((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getQuery=function(e,t){if("undefined"==typeof window)return!1;var n=t||window.location.search,r=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),o=n.substr(n.indexOf("?")+1).match(r);return null!=o?o[2]:""},t.getHash=function(e){var t=window.location.hash.match(new RegExp("[#?&/]"+e+"=([^&#]*)"));return t?t[1]:""},t.removeParam=function(e,t){var n=t.split("?")[0],r=[],o=-1!==t.indexOf("?")?t.split("?")[1]:"";if(""!==o){for(var s=(r=o.split("&")).length-1;s>=0;s-=1)r[s].split("=")[0]===e&&r.splice(s,1);n=n+"?"+r.join("&")}return n},t.createPromiseCallback=function(){var e;if(!Promise){(e=function(){}).promise={};var t=function(){throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.')};return Object.defineProperty(e.promise,"then",{get:t}),Object.defineProperty(e.promise,"catch",{get:t}),e}var n=new Promise((function(t,n){e=function(e,r){return e?n(e):t(r)}}));return e.promise=n,e},t.getWeixinCode=function(){return t.getQuery("code")||t.getHash("code")},t.getMiniAppCode=function(){return new Promise((function(e,t){wx.login({success:function(t){e(t.code)},fail:function(e){t(e)}})}))},t.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},t.isString=function(e){return"string"==typeof e},t.isUndefined=function(e){return void 0===e},t.isInstanceOf=function(e,t){return e instanceof t},t.isFormData=function(e){return"[object FormData]"===Object.prototype.toString.call(e)},t.genSeqId=function(){return Math.random().toString(16).slice(2)},t.getArgNames=function(e){var t=e.toString();return t.slice(t.indexOf("(")+1,t.indexOf(")")).match(/([^\s,]+)/g)},t.formatUrl=function(e,t,n){void 0===n&&(n={});var r=/\?/.test(t),o="";for(var s in n)""===o?!r&&(t+="?"):o+="&",o+=s+"="+encodeURIComponent(n[s]);return/^http(s)?\:\/\//.test(t+=o)?t:""+e+t}}));t(A);A.getQuery,A.getHash,A.removeParam,A.createPromiseCallback,A.getWeixinCode,A.getMiniAppCode,A.isArray,A.isString,A.isUndefined,A.isInstanceOf,A.isFormData,A.genSeqId,A.getArgNames,A.formatUrl;var P,I="dist/index.js",N="./dist/index.d.ts",C={build:"npm run tsc && webpack",tsc:"tsc -p tsconfig.json","tsc:w":"tsc -p tsconfig.json -w",test:"jest --verbose false -i",e2e:'NODE_ENV=e2e webpack && jest --config="./jest.e2e.config.js"  --verbose false -i "e2e"',start:"webpack-dev-server --hot --open",eslint:'eslint "./**/*.js" "./**/*.ts"',"eslint-fix":'eslint --fix "./**/*.js" "./**/*.ts"',test_web:"npm run tsc && webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist --host jimmytest-088bef.tcb.qcloud.la --port 80 --disableHostCheck true --mode development --config webpack.test.js"},R={type:"git",url:"https://github.com/TencentCloudBase/tcb-js-sdk"},x=["tcb","js-sdk"],U={"@cloudbase/adapter-interface":"^0.2.0","@cloudbase/adapter-wx_mp":"^0.2.1","@cloudbase/database":"^0.9.8"},q={"@babel/core":"^7.6.2","@babel/plugin-proposal-class-properties":"^7.5.5","@babel/plugin-proposal-object-rest-spread":"^7.6.2","@babel/plugin-transform-runtime":"^7.6.2","@babel/preset-env":"^7.6.2","@babel/preset-typescript":"^7.6.0","@babel/runtime":"^7.6.2","@types/jest":"^23.1.4","@types/node":"^10.14.4","@types/superagent":"^4.1.4",axios:"^0.19.0","babel-eslint":"^10.0.1","babel-loader":"^8.0.6","babel-polyfill":"^6.26.0",eslint:"^5.16.0","eslint-config-alloy":"^1.4.2","eslint-config-prettier":"^4.1.0","eslint-plugin-prettier":"^3.0.1","eslint-plugin-typescript":"^1.0.0-rc.3",express:"^4.17.1",husky:"^3.1.0",jest:"^24.7.1","jest-puppeteer":"^4.3.0","lint-staged":"^9.5.0","power-assert":"^1.6.1",puppeteer:"^1.20.0","serve-static":"^1.14.1","ts-jest":"^23.10.4","ts-loader":"^6.2.1",typescript:"^3.4.3","typescript-eslint-parser":"^22.0.0",webpack:"^4.41.3","webpack-bundle-analyzer":"^3.4.1","webpack-cli":"^3.3.0","webpack-dev-server":"^3.3.1","webpack-merge":"^4.2.2","webpack-visualizer-plugin":"^0.1.11"},j={hooks:{"pre-commit":"lint-staged"}},L={name:"tcb-js-sdk",version:"1.3.5",description:"js sdk for tcb",main:I,types:N,scripts:C,repository:R,keywords:x,author:"jimmyjzhang",license:"ISC",dependencies:U,devDependencies:q,husky:j,"lint-staged":{"*.{js,ts}":["eslint --fix","git add"]}},D=(P=Object.freeze({__proto__:null,name:"tcb-js-sdk",version:"1.3.5",description:"js sdk for tcb",main:I,types:N,scripts:C,repository:R,keywords:x,author:"jimmyjzhang",license:"ISC",dependencies:U,devDependencies:q,husky:j,default:L}))&&P.default||P,F=n((function(t,n){var r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(n,"__esModule",{value:!0});var o=r(D);n.SDK_VERISON=o.version,n.ACCESS_TOKEN="access_token",n.ACCESS_TOKEN_Expire="access_token_expire",n.REFRESH_TOKEN="refresh_token",n.ANONYMOUS_UUID="anonymous_uuid",n.LOGIN_TYPE_KEY="login_type",n.protocol="undefined"!=typeof location&&"http:"===location.protocol?"http:":"https:",n.BASE_URL= false?undefined:"//tcb-api.tencentcloudapi.com/web"}));t(F);var K;F.SDK_VERISON,F.ACCESS_TOKEN,F.ACCESS_TOKEN_Expire,F.REFRESH_TOKEN,F.ANONYMOUS_UUID,F.LOGIN_TYPE_KEY,F.protocol,F.BASE_URL;!function(e){e.local="local",e.none="none",e.session="session"}(K||(K={}));var M=function(){},G=function(){};var H=Object.freeze({__proto__:null,get StorageType(){return K},AbstractSDKRequest:M,AbstractStorage:G,formatUrl:function(e,t,n){void 0===n&&(n={});var r=/\?/.test(t),o="";for(var s in n)""===o?!r&&(t+="?"):o+="&",o+=s+"="+encodeURIComponent(n[s]);return/^http(s)?\:\/\//.test(t+=o)?t:""+e+t}}),Y=n((function(t,n){var r=e&&e.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=e&&e.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=e&&e.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},i=e&&e.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(n,"__esModule",{value:!0});var a=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.get=function(e){return this._request(o(o({},e),{method:"get"}))},t.prototype.post=function(e){return this._request(o(o({},e),{method:"post"}))},t.prototype.upload=function(e){var t=e.data,n=e.file,r=e.name,s=new FormData;for(var i in t)s.append(i,t[i]);return s.append("key",r),s.append("file",n),this._request(o(o({},e),{data:s,method:"post"}))},t.prototype.download=function(e){return s(this,void 0,void 0,(function(){var t,n;return i(this,(function(r){return t=decodeURIComponent(new URL(e.url).pathname.split("/").pop()||""),(n=document.createElement("a")).href=e.url,n.setAttribute("download",t),n.setAttribute("target","_blank"),document.body.appendChild(n),n.click(),[2,new Promise((function(t){t({statusCode:200,tempFilePath:e.url})}))]}))}))},t.prototype._request=function(e){var t=String(e.method).toLowerCase()||"get";return new Promise((function(n){var r=e.url,o=e.headers,s=void 0===o?{}:o,i=e.data,a=e.responseType,c=A.formatUrl(F.protocol,r,"get"===t?i:{}),u=new XMLHttpRequest;for(var l in u.open(t,c),a&&(u.responseType=a),s)u.setRequestHeader(l,s[l]);u.onreadystatechange=function(){if(4===u.readyState){var e={statusCode:u.status};try{e.data=JSON.parse(u.responseText)}catch(e){}n(e)}},u.send("post"===t&&A.isFormData(i)?i:JSON.stringify(i||{}))}))},t}(H.AbstractSDKRequest);n.WebRequest=a,n.genAdapter=function(){return{root:window,reqClass:a,wsClass:WebSocket,localStorage:localStorage,sessionStorage:sessionStorage}}}));t(Y);Y.WebRequest,Y.genAdapter;var V=n((function(t,n){var r=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(n,"__esModule",{value:!0});var o,s=r(Y);!function(e){e.WEB="web",e.WX_MP="wx_mp"}(o=n.RUNTIME||(n.RUNTIME={})),n.useAdapters=function(e){for(var t=0,n=A.isArray(e)?e:[e];t<n.length;t++){var r=n[t],o=r.isMatch,s=r.genAdapter,i=r.runtime;if(o())return{adapter:s(),runtime:i}}},n.useDefaultAdapter=function(){return{adapter:s.genAdapter(),runtime:o.WEB}},n.Adapter={adapter:null,runtime:void 0}}));t(V);V.RUNTIME,V.useAdapters,V.useDefaultAdapter,V.Adapter;var B=n((function(t,n){var r=e&&e.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(n,"__esModule",{value:!0});var o=function(){function e(e){switch(V.Adapter.adapter.primaryStorage||e){case"local":this.storageClass=V.Adapter.adapter.localStorage||new s;break;case"none":this.storageClass=new s;break;default:this.storageClass=V.Adapter.adapter.sessionStorage||new s}}return e.prototype.setStore=function(e,t,n){try{if(!this.storageClass)return}catch(e){return}var r,o={};o.version=n||"localCachev1",o.content=t,r=JSON.stringify(o);try{this.storageClass.setItem(e,r)}catch(e){return}},e.prototype.getStore=function(e,t){try{if(!this.storageClass)return}catch(e){return""}t=t||"localCachev1";var n=this.storageClass.getItem(e);return n&&n.indexOf(t)>=0?JSON.parse(n).content:""},e.prototype.removeStore=function(e){this.storageClass.removeItem(e)},e}();n.Cache=o;var s=function(e){function t(){var t=e.call(this)||this;return V.Adapter.adapter.root.tcbObject||(V.Adapter.adapter.root.tcbObject={}),t}return r(t,e),t.prototype.setItem=function(e,t){V.Adapter.adapter.root.tcbObject[e]=t},t.prototype.getItem=function(e){return V.Adapter.adapter.root.tcbObject[e]},t.prototype.removeItem=function(e){delete V.Adapter.adapter.root.tcbObject[e]},t.prototype.clear=function(){delete V.Adapter.adapter.root.tcbObject},t}(H.AbstractStorage)}));t(B);B.Cache;var W=n((function(t,n){var r=e&&e.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=e&&e.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var s=arguments[t],i=0,a=s.length;i<a;i++,o++)r[o]=s[i];return r};Object.defineProperty(n,"__esModule",{value:!0});var s=function(e,t){this.data=t||null,this.name=e};n.IEvent=s;var i=function(e){function t(t,n){var r=e.call(this,"error",{error:t,data:n})||this;return r.error=t,r}return r(t,e),t}(s);n.IErrorEvent=i;var a=function(){function e(){this._listeners={}}return e.prototype.on=function(e,t){return function(e,t,n){n[e]=n[e]||[],n[e].push(t)}(e,t,this._listeners),this},e.prototype.off=function(e,t){return function(e,t,n){if(n&&n[e]){var r=n[e].indexOf(t);-1!==r&&n[e].splice(r,1)}}(e,t,this._listeners),this},e.prototype.fire=function(e,t){if(A.isInstanceOf(e,i))return console.error(e.error),this;var n=A.isString(e)?new s(e,t||{}):e,r=n.name;if(this._listens(r)){n.target=this;for(var a=0,c=this._listeners[r]?o(this._listeners[r]):[];a<c.length;a++){c[a].call(this,n)}}return this},e.prototype._listens=function(e){return this._listeners[e]&&this._listeners[e].length>0},e}();n.IEventEmitter=a;var c=new a;n.addEventListener=function(e,t){c.on(e,t)},n.activateEvent=function(e,t){void 0===t&&(t={}),c.fire(e,t)},n.removeEventListener=function(e,t){c.off(e,t)},n.EVENTS={LOGIN_STATE_CHANGED:"loginStateChanged",LOGIN_STATE_EXPIRE:"loginStateExpire",LOGIN_TYPE_CHANGE:"loginTypeChanged",ANONYMOUS_CONVERTED:"anonymousConverted",REFRESH_ACCESS_TOKEN:"refreshAccessToken"}}));t(W);W.IEvent,W.IErrorEvent,W.IEventEmitter,W.addEventListener,W.activateEvent,W.removeEventListener,W.EVENTS;var z=n((function(t,n){var r=e&&e.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=e&&e.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},s=e&&e.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(n,"__esModule",{value:!0});var i=["auth.getJwt","auth.logout","auth.signInWithTicket","auth.signInAnonymously"],a={"X-SDK-Version":F.SDK_VERISON};function c(e,t,n){var o=e[t];e[t]=function(t){var s={},i={};n.forEach((function(n){var r=n.call(e,t),o=r.data,a=r.headers;Object.assign(s,o),Object.assign(i,a)}));var a=t.data;return a&&function(){if(A.isFormData(a))for(var e in s)a.append(e,s[e]);else t.data=r(r({},a),s)}(),t.headers=r(r({},t.headers||{}),i),o.call(e,t)}}function u(){var e=A.genSeqId();return{data:{seqId:e},headers:r(r({},a),{"x-seqid":e})}}var l=function(){function e(e){void 0===e&&(e={}),this.config=e,this.cache=new B.Cache(e.persistence),this.accessTokenKey=F.ACCESS_TOKEN+"_"+e.env,this.accessTokenExpireKey=F.ACCESS_TOKEN_Expire+"_"+e.env,this.refreshTokenKey=F.REFRESH_TOKEN+"_"+e.env,this.anonymousUuidKey=F.ANONYMOUS_UUID+"_"+e.env,this.loginTypeKey=F.LOGIN_TYPE_KEY+"_"+e.env,this._reqClass=new V.Adapter.adapter.reqClass,c(this._reqClass,"post",[u]),c(this._reqClass,"upload",[u]),c(this._reqClass,"download",[u])}return e.prototype.post=function(e){return o(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this._reqClass.post(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.upload=function(e){return o(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this._reqClass.upload(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.download=function(e){return o(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this._reqClass.download(e)];case 1:return[2,t.sent()]}}))}))},e.prototype.refreshAccessToken=function(){return o(this,void 0,void 0,(function(){var e,t,n;return s(this,(function(r){switch(r.label){case 0:this._refreshAccessTokenPromise||(this._refreshAccessTokenPromise=this._refreshAccessToken()),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._refreshAccessTokenPromise];case 2:return e=r.sent(),[3,4];case 3:return n=r.sent(),t=n,[3,4];case 4:if(this._refreshAccessTokenPromise=null,this._shouldRefreshAccessTokenHook=null,t)throw t;return[2,e]}}))}))},e.prototype._refreshAccessToken=function(){return o(this,void 0,void 0,(function(){var e,t,n,r;return s(this,(function(o){switch(o.label){case 0:if(this.cache.removeStore(this.accessTokenKey),this.cache.removeStore(this.accessTokenExpireKey),!(e=this.cache.getStore(this.refreshTokenKey)))throw new Error("[tcb-js-sdk] 未登录CloudBase");return t={refresh_token:e},this.cache.getStore(this.loginTypeKey)===J.LOGINTYPE.ANONYMOUS&&(t.anonymous_uuid=this.cache.getStore(this.anonymousUuidKey)),[4,this.request("auth.getJwt",t)];case 1:if((n=o.sent()).data.code)throw"SIGN_PARAM_INVALID"!==(r=n.data.code)&&"REFRESH_TOKEN_EXPIRED"!==r&&"INVALID_REFRESH_TOKEN"!==r||(W.activateEvent(W.EVENTS.LOGIN_STATE_EXPIRE),this.cache.removeStore(this.refreshTokenKey)),new Error("[tcb-js-sdk] 刷新access token失败："+n.data.code);return n.data.access_token?(W.activateEvent(W.EVENTS.REFRESH_ACCESS_TOKEN),this.cache.setStore(this.accessTokenKey,n.data.access_token),this.cache.setStore(this.accessTokenExpireKey,n.data.access_token_expire+Date.now()),W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE,n.data.login_type),[2,{accessToken:n.data.access_token,accessTokenExpire:n.data.access_token_expire}]):(n.data.refresh_token&&(this.cache.removeStore(this.refreshTokenKey),this.cache.setStore(this.refreshTokenKey,n.data.refresh_token),this._refreshAccessToken()),[2])}}))}))},e.prototype.getAccessToken=function(){return o(this,void 0,void 0,(function(){var e,t,n,r;return s(this,(function(o){switch(o.label){case 0:return e=this.cache.getStore(this.accessTokenKey),t=this.cache.getStore(this.accessTokenExpireKey),n=!0,(r=this._shouldRefreshAccessTokenHook)?[4,this._shouldRefreshAccessTokenHook(e,t)]:[3,2];case 1:r=!o.sent(),o.label=2;case 2:return r&&(n=!1),(!e||!t||t<Date.now())&&n?[2,this.refreshAccessToken()]:[2,{accessToken:e,accessTokenExpire:t}]}}))}))},e.prototype.request=function(e,t,n){return o(this,void 0,void 0,(function(){var o,a,c,u,l,f,p,h,d,y,v,g;return s(this,(function(s){switch(s.label){case 0:return o="application/x-www-form-urlencoded",a=r({action:e,env:this.config.env,dataVersion:"2019-08-16"},t),-1!==i.indexOf(e)?[3,2]:(c=a,[4,this.getAccessToken()]);case 1:c.access_token=s.sent().accessToken,s.label=2;case 2:if("storage.uploadFile"===e){for(l in u=new FormData)u.hasOwnProperty(l)&&void 0!==u[l]&&u.append(l,a[l]);o="multipart/form-data"}else o="application/json;charset=UTF-8",u=a;return f={headers:{"content-type":o}},n&&n.onUploadProgress&&(f.onUploadProgress=n.onUploadProgress),p=t.parse,h=t.query,d=t.search,y={env:this.config.env},p&&(y.parse=!0),h&&(y=r(r({},h),y)),v=A.formatUrl(F.protocol,F.BASE_URL,y),d&&(v+=d),[4,this.post(r({url:v,data:u},f))];case 3:if(g=s.sent(),200!==Number(g.status)&&200!==Number(g.statusCode)||!g.data)throw new Error("network request error");return[2,g]}}))}))},e.prototype.send=function(e,t){return void 0===t&&(t={}),o(this,void 0,void 0,(function(){var n,r,o;return s(this,(function(s){switch(s.label){case 0:return n=setTimeout((function(){console.warn("Database operation is longer than 3s. Please check query performance and your network environment.")}),3e3),[4,this.request(e,t,{onUploadProgress:t.onUploadProgress})];case 1:return r=s.sent(),clearTimeout(n),"ACCESS_TOKEN_EXPIRED"!==r.data.code||-1!==i.indexOf(e)?[3,4]:[4,this.refreshAccessToken()];case 2:return s.sent(),[4,this.request(e,t,{onUploadProgress:t.onUploadProgress})];case 3:if((o=s.sent()).data.code)throw new Error("["+o.data.code+"] "+o.data.message);return[2,o.data];case 4:if(r.data.code)throw new Error("["+r.data.code+"] "+r.data.message);return[2,r.data]}}))}))},e}();n.Request=l}));t(z);z.Request;var J=n((function(t,n){var r,o=e&&e.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},s=e&&e.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(n,"__esModule",{value:!0}),function(e){e.ANONYMOUS="ANONYMOUS",e.WECHAT="WECHAT",e.CUSTOM="CUSTOM",e.NULL="NULL"}(r=n.LOGINTYPE||(n.LOGINTYPE={}));var i=function(){function e(e){this._loginType=r.NULL,this.config=e,this.onLoginTypeChanged=this.onLoginTypeChanged.bind(this),W.addEventListener(W.EVENTS.LOGIN_TYPE_CHANGE,this.onLoginTypeChanged)}return e.prototype.init=function(){this.httpRequest=new z.Request(this.config),this.cache=new B.Cache(this.config.persistence),this.accessTokenKey=F.ACCESS_TOKEN+"_"+this.config.env,this.accessTokenExpireKey=F.ACCESS_TOKEN_Expire+"_"+this.config.env,this.refreshTokenKey=F.REFRESH_TOKEN+"_"+this.config.env,this.loginTypeKey=F.LOGIN_TYPE_KEY+"_"+this.config.env},e.prototype.onLoginTypeChanged=function(e){this._loginType=e.data,this.cache.setStore(this.loginTypeKey,this._loginType)},Object.defineProperty(e.prototype,"loginType",{get:function(){return this._loginType},enumerable:!0,configurable:!0}),e.prototype.setRefreshToken=function(e){this.cache.removeStore(this.accessTokenKey),this.cache.removeStore(this.accessTokenExpireKey),this.cache.setStore(this.refreshTokenKey,e)},e.prototype.getRefreshTokenByWXCode=function(e,t,n){return o(this,void 0,void 0,(function(){var r;return s(this,(function(o){return"auth.getJwt",r=V.Adapter.runtime===V.RUNTIME.WX_MP?"1":"0",[2,this.httpRequest.send("auth.getJwt",{appid:e,loginType:t,code:n,hybridMiniapp:r}).then((function(e){if(e.code)throw new Error("[tcb-js-sdk] 微信登录失败: "+e.code);if(e.refresh_token)return{refreshToken:e.refresh_token,accessToken:e.access_token,accessTokenExpire:e.access_token_expire};throw new Error("[tcb-js-sdk] getJwt未返回refreshToken")}))]}))}))},e}();n.default=i}));t(J);J.LOGINTYPE;var X=n((function(t,n){var r=e&&e.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=e&&e.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},s=e&&e.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},i=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(n,"__esModule",{value:!0});var a,c,u=i(A),l=i(J);!function(e){e.snsapi_base="snsapi_base",e.snsapi_userinfo="snsapi_userinfo",e.snsapi_login="snsapi_login"}(a||(a={})),function(e){e.redirect="redirect",e.prompt="prompt"}(c||(c={}));var f={},p=function(e){function t(t,n,r,o,s){var i=e.call(this,t)||this;return i.config=t,i.appid=n,i.scope=V.Adapter.runtime===V.RUNTIME.WX_MP?"snsapi_base":r,i.state=s||"weixin",i.loginMode=o||"redirect",i}return r(t,e),t.prototype.signIn=function(){return o(this,void 0,void 0,(function(){var e,t,n;return s(this,(function(r){switch(r.label){case 0:f[this.config.env]||(f[this.config.env]=this._signIn()),r.label=1;case 1:return r.trys.push([1,3,,4]),[4,f[this.config.env]];case 2:return e=r.sent(),[3,4];case 3:return n=r.sent(),t=n,[3,4];case 4:if(f[this.config.env]=null,t)throw t;return[2,e]}}))}))},t.prototype._signIn=function(){return o(this,void 0,void 0,(function(){var e,t,n,r,o,i;return s(this,(function(s){switch(s.label){case 0:if(e=this.cache.getStore(this.accessTokenKey),t=this.cache.getStore(this.accessTokenExpireKey),e){if(t&&t>Date.now())return[2,{credential:{accessToken:e,refreshToken:this.cache.getStore(this.refreshTokenKey)}}];this.cache.removeStore(this.accessTokenKey),this.cache.removeStore(this.accessTokenExpireKey)}if(!1===Object.values(a).includes(a[this.scope]))throw new Error("错误的scope类型");return V.Adapter.runtime!==V.RUNTIME.WX_MP?[3,2]:[4,u.getMiniAppCode()];case 1:return n=s.sent(),[3,4];case 2:return[4,u.getWeixinCode()];case 3:if(!(n=s.sent()))return[2,this.redirect()];s.label=4;case 4:return r=function(e){switch(e){case a.snsapi_login:return"WECHAT-OPEN";default:return"WECHAT-PUBLIC"}}(this.scope),[4,this.getRefreshTokenByWXCode(this.appid,r,n)];case 5:return o=s.sent(),i=o.refreshToken,this.cache.setStore(this.refreshTokenKey,i),o.accessToken&&this.cache.setStore(this.accessTokenKey,o.accessToken),o.accessTokenExpire&&this.cache.setStore(this.accessTokenExpireKey,o.accessTokenExpire+Date.now()),W.activateEvent(W.EVENTS.LOGIN_STATE_CHANGED),W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE,l.LOGINTYPE.WECHAT),[2,{credential:{refreshToken:i}}]}}))}))},t.prototype.redirect=function(){var e=u.removeParam("code",location.href);e=u.removeParam("state",e),e=encodeURIComponent(e);var t="//open.weixin.qq.com/connect/oauth2/authorize";"snsapi_login"===this.scope&&(t="//open.weixin.qq.com/connect/qrconnect"),"redirect"===c[this.loginMode]&&(location.href=t+"?appid="+this.appid+"&redirect_uri="+e+"&response_type=code&scope="+this.scope+"&state="+this.state+"#wechat_redirect")},t}(l.default);n.default=p}));t(X);var $=n((function(t,n){var r=e&&e.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=e&&e.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=e&&e.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},i=e&&e.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},a=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(n,"__esModule",{value:!0});var c=a(J),u=function(e){function t(t){var n=e.call(this,o(o({},t),{persistence:"local"}))||this;return n._anonymousUuidKey=F.ANONYMOUS_UUID+"_"+n.config.env,n._loginTypeKey=F.LOGIN_TYPE_KEY+"_"+n.config.env,n}return r(t,e),t.prototype.init=function(){e.prototype.init.call(this)},t.prototype.signIn=function(){return s(this,void 0,void 0,(function(){var e,t,n;return i(this,(function(r){switch(r.label){case 0:return e=this.cache.getStore(this._anonymousUuidKey)||void 0,t=this.cache.getStore(this.refreshTokenKey)||void 0,[4,this.httpRequest.send("auth.signInAnonymously",{anonymous_uuid:e,refresh_token:t})];case 1:return(n=r.sent()).uuid&&n.refresh_token?(this._setAnonymousUUID(n.uuid),this.setRefreshToken(n.refresh_token),[4,this.httpRequest.refreshAccessToken()]):[3,3];case 2:return r.sent(),W.activateEvent(W.EVENTS.LOGIN_STATE_CHANGED),W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE,c.LOGINTYPE.ANONYMOUS),[2,{credential:{refreshToken:n.refresh_token}}];case 3:throw new Error("[tcb-js-sdk] 匿名登录失败")}}))}))},t.prototype.linkAndRetrieveDataWithTicket=function(e){return s(this,void 0,void 0,(function(){var t,n,r;return i(this,(function(o){switch(o.label){case 0:return t=this.cache.getStore(this._anonymousUuidKey),n=this.cache.getStore(this.refreshTokenKey),[4,this.httpRequest.send("auth.linkAndRetrieveDataWithTicket",{anonymous_uuid:t,refresh_token:n,ticket:e})];case 1:return(r=o.sent()).refresh_token?(this._clearAnonymousUUID(),this.setRefreshToken(r.refresh_token),[4,this.httpRequest.refreshAccessToken()]):[3,3];case 2:return o.sent(),W.activateEvent(W.EVENTS.ANONYMOUS_CONVERTED,{refresh_token:r.refresh_token}),W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE,c.LOGINTYPE.CUSTOM),[2,{credential:{refreshToken:r.refresh_token}}];case 3:throw new Error("[tcb-js-sdk] 匿名转化失败")}}))}))},t.prototype.getAllStore=function(){var e={};return e[this.refreshTokenKey]=this.cache.getStore(this.refreshTokenKey)||"",e[this._loginTypeKey]=this.cache.getStore(this._loginTypeKey)||"",e[this.accessTokenKey]=this.cache.getStore(this.accessTokenKey)||"",e[this.accessTokenExpireKey]=this.cache.getStore(this.accessTokenExpireKey)||"",e},t.prototype._setAnonymousUUID=function(e){this.cache.removeStore(this._anonymousUuidKey),this.cache.setStore(this._anonymousUuidKey,e),this.cache.setStore(this._loginTypeKey,c.LOGINTYPE.ANONYMOUS)},t.prototype._clearAnonymousUUID=function(){this.cache.removeStore(this._anonymousUuidKey)},t}(c.default);n.AnonymousAuthProvider=u}));t($);$.AnonymousAuthProvider;var Q=n((function(t,n){var r=e&&e.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),o=e&&e.__assign||function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},s=e&&e.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},i=e&&e.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}},a=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},c=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(n,"__esModule",{value:!0});var u=a(X),l=c(J),f=function(e){function t(t){var n=e.call(this,t)||this;return n.config=t,n}return r(t,e),t.prototype.init=function(){e.prototype.init.call(this),this.customAuthProvider=new l.default(this.config),this.customAuthProvider.init()},t.prototype.weixinAuthProvider=function(e){var t=e.appid,n=e.scope,r=e.loginMode,o=e.state,s=new u.default(this.config,t,n,r,o);return s.init(),s},t.prototype.signInAnonymously=function(){return s(this,void 0,void 0,(function(){var e=this;return i(this,(function(t){switch(t.label){case 0:return this._anonymousAuthProvider||(this._anonymousAuthProvider=new $.AnonymousAuthProvider(this.config),this._anonymousAuthProvider.init()),W.addEventListener(W.EVENTS.LOGIN_TYPE_CHANGE,(function(t){if(t&&t.data===l.LOGINTYPE.ANONYMOUS){var n=e._anonymousAuthProvider.getAllStore();for(var r in n)n[r]&&e.httpRequest.cache.setStore(r,n[r])}})),[4,this._anonymousAuthProvider.signIn()];case 1:return[2,t.sent()]}}))}))},t.prototype.linkAndRetrieveDataWithTicket=function(e){return s(this,void 0,void 0,(function(){var t=this;return i(this,(function(n){switch(n.label){case 0:return this._anonymousAuthProvider||(this._anonymousAuthProvider=new $.AnonymousAuthProvider(this.config),this._anonymousAuthProvider.init()),W.addEventListener(W.EVENTS.ANONYMOUS_CONVERTED,(function(e){var n=e.data.refresh_token;n&&t.httpRequest.cache.setStore(t.refreshTokenKey,n)})),[4,this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e)];case 1:return[2,n.sent()]}}))}))},t.prototype.signOut=function(){return s(this,void 0,void 0,(function(){var e,t,n,r,o,s,a;return i(this,(function(i){switch(i.label){case 0:if(this.loginType===l.LOGINTYPE.ANONYMOUS)throw new Error("[tcb-js-sdk] 匿名用户不支持登出操作");return e=this.httpRequest,t=e.cache,n=e.refreshTokenKey,r=e.accessTokenKey,o=e.accessTokenExpireKey,"auth.logout",(s=t.getStore(n))?[4,this.httpRequest.send("auth.logout",{refresh_token:s})]:[2];case 1:return a=i.sent(),t.removeStore(n),t.removeStore(r),t.removeStore(o),W.activateEvent(W.EVENTS.LOGIN_STATE_CHANGED),W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE,l.LOGINTYPE.NULL),[2,a]}}))}))},t.prototype.getAccessToken=function(){return s(this,void 0,void 0,(function(){var e;return i(this,(function(t){switch(t.label){case 0:return e={},[4,this.httpRequest.getAccessToken()];case 1:return[2,(e.accessToken=t.sent().accessToken,e.env=this.config.env,e)]}}))}))},t.prototype.onLoginStateExpire=function(e){W.addEventListener("loginStateExpire",e)},t.prototype.getLoginState=function(){return s(this,void 0,void 0,(function(){var e,t,n,r,o;return i(this,(function(s){switch(s.label){case 0:if(e=this.httpRequest,t=e.cache,n=e.refreshTokenKey,r=e.accessTokenKey,!(o=t.getStore(n)))return[3,5];s.label=1;case 1:return s.trys.push([1,3,,4]),[4,this.httpRequest.refreshAccessToken()];case 2:return s.sent(),[3,4];case 3:return s.sent(),[2,null];case 4:return[2,{isAnonymous:this.loginType===l.LOGINTYPE.ANONYMOUS,credential:{refreshToken:o,accessToken:t.getStore(r)}}];case 5:return[2,null]}}))}))},t.prototype.signInWithTicket=function(e){return s(this,void 0,void 0,(function(){var t,n,r,o;return i(this,(function(s){switch(s.label){case 0:if("string"!=typeof e)throw new Error("ticket must be a string");return t=this.httpRequest,n=t.cache,r=t.refreshTokenKey,[4,this.httpRequest.send("auth.signInWithTicket",{ticket:e,refresh_token:n.getStore(r)||""})];case 1:return(o=s.sent()).refresh_token?(this.customAuthProvider.setRefreshToken(o.refresh_token),[4,this.httpRequest.refreshAccessToken()]):[3,3];case 2:return s.sent(),W.activateEvent(W.EVENTS.LOGIN_STATE_CHANGED),W.activateEvent(W.EVENTS.LOGIN_TYPE_CHANGE,l.LOGINTYPE.CUSTOM),[2,{credential:{refreshToken:o.refresh_token}}];case 3:throw new Error("[tcb-js-sdk] 自定义登录失败")}}))}))},t.prototype.shouldRefreshAccessToken=function(e){this.httpRequest._shouldRefreshAccessTokenHook=e.bind(this)},t.prototype.getUserInfo=function(){return this.httpRequest.send("auth.getUserInfo",{}).then((function(e){return e.code?e:o(o({},e.data),{requestId:e.seqId})}))},t}(l.default);n.default=f}));t(Q);var Z=n((function(t,n){var r=e&&e.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function a(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))},o=e&&e.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(n,"__esModule",{value:!0}),n.uploadFile=function(e,t){t=t||A.createPromiseCallback();var n=new z.Request(this.config),r=e.cloudPath,o=e.filePath,s=e.onUploadProgress;return n.send("storage.getUploadMetadata",{path:r}).then((function(e){var i=e.data,a=i.url,c=i.authorization,u=i.token,l=i.fileId,f=i.cosFileId,p=e.requestId,h={key:r,signature:c,"x-cos-meta-fileid":f,success_action_status:"201","x-cos-security-token":u};n.upload({url:a,data:h,file:o,name:r,onUploadProgress:s}).then((function(e){201===e.statusCode?t(null,{fileID:l,requestId:p}):t(new Error("STORAGE_REQUEST_FAIL: "+e.data))})).catch((function(e){t(e)}))})).catch((function(e){t(e)})),t.promise},n.deleteFile=function(e,t){var n=e.fileList;if(t=t||A.createPromiseCallback(),!n||!Array.isArray(n))return{code:"INVALID_PARAM",message:"fileList必须是非空的数组"};for(var r=0,o=n;r<o.length;r++){var s=o[r];if(!s||"string"!=typeof s)return{code:"INVALID_PARAM",message:"fileList的元素必须是非空的字符串"}}var i={fileid_list:n};return new z.Request(this.config).send("storage.batchDeleteFile",i).then((function(e){e.code?t(null,e):t(null,{fileList:e.data.delete_list,requestId:e.requestId})})).catch((function(e){t(e)})),t.promise},n.getTempFileURL=function(e,t){var n=e.fileList;t=t||A.createPromiseCallback(),n&&Array.isArray(n)||t(null,{code:"INVALID_PARAM",message:"fileList必须是非空的数组"});for(var r=[],o=0,s=n;o<s.length;o++){var i=s[o];"object"==typeof i?(i.hasOwnProperty("fileID")&&i.hasOwnProperty("maxAge")||t(null,{code:"INVALID_PARAM",message:"fileList的元素必须是包含fileID和maxAge的对象"}),r.push({fileid:i.fileID,max_age:i.maxAge})):"string"==typeof i?r.push({fileid:i}):t(null,{code:"INVALID_PARAM",message:"fileList的元素必须是字符串"})}var a={file_list:r};return new z.Request(this.config).send("storage.batchGetDownloadUrl",a).then((function(e){e.code?t(null,e):t(null,{fileList:e.data.download_list,requestId:e.requestId})})).catch((function(e){t(e)})),t.promise},n.downloadFile=function(e,t){var s=e.fileID;return r(this,void 0,void 0,(function(){var e,r,i,a,c;return o(this,(function(o){switch(o.label){case 0:return[4,n.getTempFileURL.call(this,{fileList:[{fileID:s,maxAge:600}]})];case 1:return e=o.sent(),"SUCCESS"!==(r=e.fileList[0]).code?[2,t?t(r):new Promise((function(e){e(r)}))]:(i=r.download_url,i=encodeURI(i),a=new z.Request(this.config),t?[4,a.download({url:i})]:[3,3]);case 2:return c=o.sent(),t(c),[3,4];case 3:return[2,a.download({url:i})];case 4:return[2]}}))}))}}));t(Z);Z.uploadFile,Z.deleteFile,Z.getTempFileURL,Z.downloadFile;var ee=n((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.callFunction=function(e,t){var n,r=e.name,o=e.data,s=e.query,i=e.parse,a=e.search,c=t||A.createPromiseCallback();try{n=o?JSON.stringify(o):""}catch(e){return Promise.reject(e)}if(!r)return Promise.reject(new Error("函数名不能为空"));var u={query:s,parse:i,search:a,function_name:r,request_data:n};return new z.Request(this.config).send("functions.invokeFunction",u).then((function(e){if(e.code)c(null,e);else{var t=e.data.response_data;if(i)c(null,{result:t,requestId:e.requestId});else try{t=JSON.parse(e.data.response_data),c(null,{result:t,requestId:e.requestId})}catch(e){c(new Error("response data must be json"))}}return c.promise})).catch((function(e){c(e)})),c.promise}}));t(ee);ee.callFunction;var te=t(n((function(t){var n=e&&e.__assign||function(){return(n=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},r=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},o=e&&e.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t},s=r(k),i=r(Q),a=o(Z),c=o(ee),u={timeout:15e3},l=new(function(){function e(e){var t=this;this.config=e||this.config,this.authObj=void 0,W.addEventListener(W.EVENTS.LOGIN_TYPE_CHANGE,(function(e){e.data===J.LOGINTYPE.ANONYMOUS&&(t.config.persistence="local")}))}return e.prototype.init=function(t){return this.config=n(n({},u),t),V.Adapter.adapter||this._useDefaultAdapter(),new e(this.config)},e.prototype.auth=function(e){var t=(void 0===e?{}:e).persistence;return this.authObj?this.authObj:(this.config=n(n({},this.config),{persistence:t||V.Adapter.adapter.primaryStorage||"session"}),this.authObj=new i.default(this.config),this.authObj.init(),this.authObj)},e.prototype.on=function(e,t){return W.addEventListener.apply(this,[e,t])},e.prototype.off=function(e,t){return W.removeEventListener.apply(this,[e,t])},e.prototype.callFunction=function(e,t){return c.callFunction.apply(this,[e,t])},e.prototype.deleteFile=function(e,t){return a.deleteFile.apply(this,[e,t])},e.prototype.getTempFileURL=function(e,t){return a.getTempFileURL.apply(this,[e,t])},e.prototype.downloadFile=function(e,t){return a.downloadFile.apply(this,[e,t])},e.prototype.uploadFile=function(e,t){return a.uploadFile.apply(this,[e,t])},e.prototype.useAdapters=function(e){var t=V.useAdapters(e)||{},n=t.adapter,r=t.runtime;n&&(V.Adapter.adapter=n),r&&(V.Adapter.runtime=r)},e.prototype._useDefaultAdapter=function(){var e=V.useDefaultAdapter(),t=e.adapter,n=e.runtime;V.Adapter.adapter=t,V.Adapter.runtime=n},e}());l.useAdapters(s.default);try{window.tcb=l}catch(e){}t.exports=l})));te.useAdapters(k);const ne=te,re=ne.init;let oe,se;function ie(e){oe||(oe=function(){const e=uni.getSystemInfoSync();return{PLATFORM:"mp-weixin",OS:e.platform,APPID:l.appid}}(),se=function(){const e=uni.getSystemInfoSync();return{ak:l.appid,p:"android"===e.platform?"a":"i",ut:y(),uuid:d()}}());const t=JSON.parse(JSON.stringify(e.data||{})),n=e.name,r=this.config.spaceId,o={tencent:"t",aliyun:"a"}[this.config.provider],s=Object.assign({},se,{fn:n,sid:r,pvd:o});return Object.assign(t,{clientInfo:oe,uniCloudClientInfo:encodeURIComponent(JSON.stringify(s))}),e.data=t,e}function ae(e){const t=ie.call(this,e),n={tencent:"tcb",aliyun:"aliyun"}[this.config.provider],r=se.ak,o=this.config.spaceId,i=JSON.stringify(t.data),a=t.name,c=JSON.stringify({body:{provider:n,appid:r,spaceId:o,functionName:a,run_params:i},header:{token:"94d5fc50-6e76-11ea-885b-c72abfcd648b"}});return new Promise((e,t)=>{uni.request({url:h,method:"POST",data:{param:c},complete(r){r||(r={});const o=r.data&&r.data.body;if(!o)return void t(new s({message:`[FUNCTIONS_EXECUTE_FAIL] Request Fail: [${a}]`}));if("tcb"===n&&console.log(o.log),0!==o.invokeResult&&"0"!==o.invokeResult)return void t(new s({message:o.errorMsg}));const i=o.requestId;let c={};try{c=JSON.parse(o.result)}catch(e){c=o.result}e({requestId:i,result:c})}})})}ne.init=function(e){e.env=e.spaceId;const t=re.call(this,e);t.config.provider="tencent",t.config.spaceId=e.spaceId;const n=t.auth;t.auth=function(e){const t=n.call(this,e);return["linkAndRetrieveDataWithTicket","signInAnonymously","signOut","getAccessToken","getLoginState","signInWithTicket","getUserInfo"].forEach(e=>{t[e]=v(t[e]).bind(t)}),t};if(["uploadFile","deleteFile","getTempFileURL","downloadFile"].forEach(e=>{t[e]=v(t[e]).bind(t)}),!1!==e.autoSignIn){const e=t.auth();e.getLoginState().then(t=>{t||e.signInAnonymously()})}return t};const ce={init(e){let t={},n=!(!1===e.debugFunction||"development"!=="development"||!"94d5fc50-6e76-11ea-885b-c72abfcd648b");switch(e.provider){case"tencent":t=ne.init(Object.assign(e,{useDebugFunction:n}));break;case"aliyun":n=n&&( false||"app-plus"==="mp-weixin"),t=g.init(Object.assign(e,{useDebugFunction:n}));break;default:throw new Error("未提供正确的provider参数")}return function(e){let t=e.callFunction;e.config.useDebugFunction&&"tencent"===e.config.provider&&(t=ae),e.callFunction=function(e){ true&&console.log(`[spaceId:${this.config.spaceId}]`);const n=ie.call(this,e);return new Promise((r,o)=>{t.call(this,n).then(e=>{r(e)}).catch(t=>{t&&t.message&&(t.message=`[${e.name}]: ${t.message}`),o(t)})})};const n=e.callFunction;e.callFunction=function(e){return v(n).call(this,e)}}(t),t.init=this.init,t}};let ue=ce;try{let e={};1===[{"provider":"aliyun","spaceName":"uni133d546","spaceId":"ba4f09fa-15f1-445e-bdd9-076a28740b65","clientSecret":"yWkGd+a+AQc0qBy2tKXECA==","endpoint":"https://api.bspapp.com"}].length&&(e=[{"provider":"aliyun","spaceName":"uni133d546","spaceId":"ba4f09fa-15f1-445e-bdd9-076a28740b65","clientSecret":"yWkGd+a+AQc0qBy2tKXECA==","endpoint":"https://api.bspapp.com"}][0]),ue=ce.init(e)}catch(e){["auth","callFunction","uploadFile","deleteFile","getTempFileURL","downloadFile"].forEach(e=>{ue[e]=function(){const e=[{"provider":"aliyun","spaceName":"uni133d546","spaceId":"ba4f09fa-15f1-445e-bdd9-076a28740b65","clientSecret":"yWkGd+a+AQc0qBy2tKXECA==","endpoint":"https://api.bspapp.com"}].length>0?"应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间":"应用未关联服务空间，请在cloudfunctions目录右键关联服务空间";return console.error(e),Promise.reject(new s({code:"SYS_ERR",message:e}))}})}var le=ue;/* harmony default export */ __webpack_exports__["default"] = (le);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2), __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 13:
/*!********************************************!*\
  !*** E:/xampp/htdocs/asgapp/api/config.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.baseUrl = exports.BASE_URL = void 0;var BASE_URL = 'http://39.108.215.49:80'; //线上
// const BASE_URL = 'http://127.0.0.1:3302';//开发环境
exports.BASE_URL = BASE_URL;var baseUrl = "http://127.0.0.1:80";exports.baseUrl = baseUrl;

/***/ }),

/***/ 14:
/*!*******************************************!*\
  !*** E:/xampp/htdocs/asgapp/api/goods.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.insert_collect = insert_collect;exports.select_collect = select_collect;exports.getDescImg = getDescImg;exports.getMaterialItem = getMaterialItem;exports.ztkTaobaoJX = ztkTaobaoJX;exports.send_circle_addGoods = send_circle_addGoods;exports.addSendCircle = addSendCircle;exports.shareCount = shareCount;exports.getSendCircleData = getSendCircleData;exports.sclicktoid = sclicktoid;exports.doItemHighCommissionPromotionLinkByAll = doItemHighCommissionPromotionLinkByAll;exports.getRelation_id = getRelation_id;exports.sendCircleExisit = sendCircleExisit;exports.sendCircleDelete = sendCircleDelete;exports.pthd = pthd;exports.getItemList = getItemList;exports.getTkMaterialItem = getTkMaterialItem;exports.ztkActivify = ztkActivify;exports.ztkTab = ztkTab;exports.ztkLunbo = ztkLunbo;exports.ztkLunboGoods = ztkLunboGoods;exports.validyzm = validyzm;exports.sendyzm = sendyzm;exports.getGoodsList = getGoodsList;exports.getShareImgUrl = getShareImgUrl;exports.order = order;exports.getSmallImg = getSmallImg;exports.getItemsDes = getItemsDes;exports.getItems = getItems;exports.test = test;exports.getGoodDetail = getGoodDetail;exports.guessYouLike = guessYouLike;exports.exisitCollection = exisitCollection;exports.getItemInfo = getItemInfo;exports.getS11 = getS11;exports.getRecommend = getRecommend;exports.getHotListGood = getHotListGood;exports.getOtherGood = getOtherGood;exports.getDetailImg = getDetailImg;exports.getKeyWord = getKeyWord;exports.getCollection = getCollection;exports.addCollection = addCollection;exports.deleteCollection = deleteCollection;exports.getRelationId = getRelationId;exports.existUser = existUser;var _config = __webpack_require__(/*! @/api/config.js */ 13);


//添加收藏
function insert_collect(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/insert_collect"),
      data: {
        item_id: data.item_id,
        user_id: data.user_id,
        pict_url: data.pict_url,
        title: data.title,
        price: data.price,
        create_date: data.create_date },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('添加收藏:', err);
      } });


  });
}
//查询收藏
function select_collect(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/select_collect"),
      data: {
        user_id: data.user_id },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(JSON.stringify(res));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('查询收藏:', err);
      } });


  });
}
//获取详情图片
function getDescImg(id) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/getDescImg"),
      data: {
        item_id: id },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(JSON.stringify(res));
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
        console.log('淘宝精选:', err);
      } });


  });
}
//猜你喜欢(重构版)
function getMaterialItem(id) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/getMaterialItem"),
      data: {
        item_id: id },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        // console.log(JSON.stringify(res));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('淘宝精选:', err);
      } });


  });
}
function ztkTaobaoJX(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "https://api.zhetaoke.com:10001/api/api_all.ashx",
      data: {
        appkey: "6e34a4e525f34c1c82194ebd8a1bd84e",
        page: data.page || 1,
        page_size: 10,
        sort: "new",
        cid: 0,
        pinpai: 1,
        pinpai_name: "" },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        // console.log(JSON.stringify(res.data.content));
        resolve(res.data.content);
      },
      fail: function fail(err) {
        reject(err);
        console.log('淘宝精选:', err);
      } });


  });
}
//五分钟添加一次发圈
function send_circle_addGoods(data) {
  var pageIndex = data.pageIndex;
  var random = Math.round(Math.random() * 9);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/send_circle/addGoods"),
      data: {
        pageIndex: pageIndex,
        random: random },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        // console.log(JSON.stringify(res.data.content));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('淘宝精选:', err);
      } });


  });
}
//添加发圈
function addSendCircle(data) {
  console.log(data);
  if (data.youhuiquan == 'undefined' || data.youhuiquan == undefined) {
    data.youhuiquan = 0;
  }
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/send_circle/insert"),
      data: {
        title: data.title,
        pict_url: data.pict_url,
        reserve_price: data.reserve_price,
        zk_final_price: data.zk_final_price,
        youhuiquan: data.youhuiquan,
        imgSrcs: data.imgSrcs,
        shareCount: data.shareCount,
        goodsId: data.goodsId,
        comment: data.comment,
        invitecode: data.invitecode,
        short_url: data.short_url,
        description: data.description,
        yj: data.yj },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
        console.log('发圈', err);
      } });


  });
}
//发圈分享次数
function shareCount(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/send_circle/shareCount"),
      data: {
        goodsId: data.goodsId,
        shareCount: data.shareCount },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
        console.log('发圈', err);
      } });


  });
}
//获取发圈数据
function getSendCircleData(data) {
  var pageNo = data.pageNo;
  var pageSum = data.pageSum;
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/send_circle/getData"),
      method: "GET",
      data: {
        pageNo: pageNo,
        pageSum: pageSum },

      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('发圈', err);
      } });


  });
}
//淘宝长链接或短链接解析商品ID API
function sclicktoid(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/sclicktoid"),
      data: {
        sclickurl: data.sclickurl },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
        console.log('淘宝长链接或短链接解析商品ID API:', err);
      } });


  });
}
//万能高佣转链API接口
function doItemHighCommissionPromotionLinkByAll(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/doItemHighCommissionPromotionLinkByAll"),
      data: {
        content: data.content },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
        console.log('万能高佣转链API接口:', err);
      } });


  });
}
function getRelation_id(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/getRelation_id"),
      method: "GET",
      data: {
        phone: data.phone },

      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('getrelationId', err);
      } });


  });
}

//发圈商品是否存在
function sendCircleExisit(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/send_circle/exisit"),
      method: "GET",
      data: {
        goodsId: data.goodsId },

      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
        console.log('发圈exisit:', err);
      } });


  });
}
function sendCircleDelete(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/send_circle/delete"),
      method: "GET",
      data: {
        goodsId: data.goodsId },

      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('发圈delete:', err);
      } });


  });
}
/* 获取平台活动url */
function pthd(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/pthd"),
      data: {
        aid: data.aid,
        relationId: data.relationId },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(JSON.stringify(res));
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
        console.log('获取平台活动:', err);
      } });


  });
}
/* 喵有券淘抢购/聚划算/9.9 */
function getItemList(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/getItemList"),
      data: {
        type: data.type,
        page: data.page },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
        console.log('喵有券淘抢购/聚划算/9.9:', err);
      } });

  });
}
//瞄有券全网商品new
function getTkMaterialItem(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/getItemList"),
      data: {
        type: data.type,
        page: data.page,
        sort: data.sort || 'asc' },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        reject(err);
        console.log('瞄有券全网商品new:', err);
      } });

  });
}
/* 折淘客极品爆款 */
function ztkActivify(data) {
  var d = {};
  switch (data.type) {
    case '极品爆款':
      d = {
        appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
        page: data.page,
        page_size: 10,
        sort: 'new',
        baodan: 1 };

      break;
    case '天猫超市':
      d = {
        appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
        page: 1,
        page_size: 10,
        sort: 'new',
        tianmaochaoshi: 1 };

      break;
    case '天猫国际':
      d = {
        appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
        page: 1,
        page_size: 10,
        sort: 'new',
        jh: 'haitao' };

      break;
    case '19.9':
      d = {
        appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
        page: 1,
        page_size: 10,
        sort: 'new',
        price: '0.0-19.9' };

      break;}

  return new Promise(function (resolve, reject) {
    uni.request({
      url: "https://api.zhetaoke.com:10001/api/api_all.ashx",
      data: d,
      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        // console.log(JSON.stringify(res.data));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('折淘客:', err);
      } });


  });
}
function ztkTab(phone) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/ztkTab"),
      data: data,
      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(JSON.stringify(res));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('验证出错', err);
      } });


  });
}
function ztkLunbo() {
  return new Promise(function (resolve, reject) {
    uni.request({
      // url: `${BASE_URL}/api/get/good/lunbo`,
      url: "https://api.zhetaoke.com:10001/api/api_lunbo.ashx",
      data: {
        appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
        page: 1,
        page_size: 20 },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        // console.log(JSON.stringify(res));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('ztk轮播获取失败', err);
      } });


  });
}
function ztkLunboGoods(url) {
  return new Promise(function (resolve, reject) {
    uni.request({
      // url: `${BASE_URL}/api/get/good/lunbo`,
      url: url,
      data: {
        appkey: '6e34a4e525f34c1c82194ebd8a1bd84e',
        page: 1,
        page_size: 20,
        sort: "sale_num_desc",
        jh: "haitao" },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(JSON.stringify(res));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('ztk轮播获取失败', err);
      } });


  });
}
function validyzm(phone) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/mob/register/validyzm"),
      data: {
        phone: phone },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(JSON.stringify(res));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('验证出错', err);
      } });


  });
}
function sendyzm(phone, type) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/mob/register/sendyzm"),
      data: {
        phone: phone },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(JSON.stringify(res));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('验证出错', err);
      } });


  });
}
//获取全网商品
function getGoodsList(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/listgoods"),
      // url: `${BASE_URL}/api/get/good/getTkMaterialItem`,
      data: {
        page: data.page || 0,
        type: data.type,
        sort: data.sorts },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {

        // console.log(JSON.stringify(res));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('获取商品列表信息出错', err);
      } });


  });
}
//生成二维码图片
function getShareImgUrl(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      // url: `http://51atk.com:8009/GetRelationIdWebService.asmx/GetPic`,
      // url: `https://oa.fpc98.com/SerFile/Service.asmx/GetPic`,
      url: "http://39.108.215.49:8090/generateImages.do",
      //url: `${BASE_URL}/api/get/good/getShareImgUrl`,
      // data: {
      // 	url:'https://img.alicdn.com/i2/2454216386/TB1KvxnjGagSKJjy0FaXXb0dpXa_!!0-item_pic.jpg',
      // 	InvitationCode:'123456'
      // },
      data: {
        url: data.url, //图片路径
        CodeContent: data.CodeContent, //二维码内容
        TitleContent: data.TitleContent, //商品标题
        NowPrice: data.NowPrice, //现价
        OldPrice: data.OldPrice, //原价
        RedecePrice: data.RedecePrice, //优惠券
        InvitationCode: data.InvitationCode //邀请码
      },
      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('获取分享图片信息出错', err);
      } });


  });
}
//获取订单商品
function order(relation_id) {
  return new Promise(function (resolve, reject) {
    uni.request({
      // url: 'https://api.open.21ds.cn/apiv1/tbkorderdetailsget',
      url: "".concat(_config.BASE_URL, "/api/post/orderlist"),
      data: {
        relation_id: relation_id },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(JSON.stringify(res));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('获取商品列表信息出错', err);
      } });

  });
}
//获取商品小图
function getSmallImg(id) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/getSmallImg"),
      data: {
        id: id },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('获取商品列表信息出错', err);
      } });

  });
}
//获取图片详情图
function getItemsDes(num_iid) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/getItemsDes"),
      data: {
        num_iid: num_iid },

      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(JSON.stringify(res));
        resolve(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log('获取商品列表信息出错', err);
      } });

  });
}
//淘抢购/聚划算/9.9元淘客商品库
function getItems(page, itemid) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/getItems"),
      data: {
        page: page,
        itemid: itemid },

      method: 'GET',
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
        //console.log(res.data);
      },
      fail: function fail(err) {
        reject(err);
        console.log("getitems error" + err);
      } });

  });
}
function test(phone) {
  // console.log('data!!',data)
  console.log(phone);
  plus.runtime.openURL(
  "https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=http://39.108.215.49:8009/html/code.html?phone=" +
  phone + "&state=1212&view=web");
  // 	return new Promise((resolve, reject) => {
  // 		uni.request({
  // 			url: `${BASE_URL}/api/get/user/login/register/success/`,
  // 			data: {
  // 				phone:phone,
  // 				code:code
  // 			},
  // 			method: "GET",
  // 			header: {
  // 				'content-header': 'application/json'
  // 			},
  // 			success: (res) => {
  // 				plus.runtime.openURL("https://oauth.taobao.com/authorize?response_type=code&client_id=25901417&redirect_uri=http://39.108.215.49:8009/html/code.html?phone="+res.data.phone+"&state=1212&view=web");
  // 				resolve(res.data);
  // 			},
  // 			fail: (err) => {
  // 				console.log("error");
  // 			}
  // 		});
  // 
  // 	})
}
function getGoodDetail(id, relationid) {
  console.log(id, relationid);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/doItemHighCommissionPromotionLink"),
      data: {
        itemid: id,
        relationid: relationid },

      method: 'GET',
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data.result);
      },
      fail: function fail(err) {
        console.log("getiteminfo_myq error", err);
      } });

    // uni.request({
    // 	url: `http://51atk.com:8090/httpClient.do`,
    // 	// url: `http://192.168.150.89:8080/httpClient.do`,
    // 	data: {
    // 		itemid: id,
    // 		apkey: 'af030b85-4e9a-a924-bd79-c4a1d6ed8cae',
    // 		pid: 'mm_133093062_63750231_107561750044',
    // 		tbname: 'qq470474509',
    // 		shorturl: 1,
    // 		tpwd: 1,
    // 		relationid: relationid,
    // 		hasiteminfo: 1
    // 	},
    // 	method: "GET",
    // 	header: {
    // 		'content-header': 'application/json'
    // 	},
    // 	success: (res) => {
    // 		console.log(JSON.stringify(res));
    // 		resolve(res.data);
    // 	},
    // 	fail: (err) => {
    // 		console.log(err)
    // 	}
    // });

  });
}
//猜我喜欢
function guessYouLike(itemid) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/guessYouLike"),
      data: {
        itemid: itemid },

      method: 'GET',
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
        //console.log(JSON.stringify(res.data));
      },
      fail: function fail(res) {
        reject(res);
        console.log(res);
      } });

  });
}
//获取收藏商品
function exisitCollection(phone) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/good/goodcollection/exisit"),
      data: {
        phone: phone },

      method: 'POST',
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
        //console.log(JSON.stringify(res.data));
      },
      fail: function fail(res) {
        reject(res);
        console.log(res);
      } });

  });
}
//获取商品信息
function getItemInfo(itemid) {
  return new Promise(function (resolve, reject) {
    // uni.request({
    // 	url: `http://51atk.com:8090/merchandiseNews.do`,
    // 	data: {
    // 		itemid,
    // 	},
    // 	method: 'GET',
    // 	header: {
    // 		'content-header': 'application/json'
    // 	},
    // 	success: (res) => {
    // 		resolve(res);
    // 	},
    // 	fail: (err) => {
    // 		console.log("getiteminfo error", err);

    // 	}
    // })
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/doItemHighCommissionPromotionLink.do"),
      data: {
        itemid: itemid },

      method: 'GET',
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        console.log("getiteminfo_myq error", err);
      } });

  });
}
//获取双11预收商品
function getS11() {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/getS11"),
      method: 'GET',
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res);
        console.log(res);
      },
      fail: function fail(err) {
        console.log("getiteminfo error", err);
      } });

  });
}
//获取推荐商品
function getRecommend() {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/recommend"),
      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('获取商品列表信息出错', err);
      } });


  });
}
//获取热销商品（从数据库获取的）
function getHotListGood() {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/hotlist"),
      method: "GET",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('获取商品列表信息出错', err);
      } });


  });
}
//获取9.9商品
function getOtherGood(params) {
  console.log(params.page, params.type);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/othergood"),
      method: "GET",
      header: {
        'content-header': 'application/json' },

      data: {
        page: params.page,
        type: params.type },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('获取商品列表信息出错', err);
      } });


  });
}

function getDetailImg(num_iid) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: 'https://hws.m.taobao.com/cache/desc/5.0',
      method: "GET",
      header: {
        'content-header': 'application/json' },

      data: {
        id: num_iid,
        'qq-pf-to': 'pcqq.group' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('获取图片列表信息出错', err);
      } });


  });
}
//获取简版商品信息
function getKeyWord(type, page) {
  return new Promise(function (resolve, reject) {
    console.log(type, page);
    uni.request({
      // url: `${BASE_URL}/api/get/good/kwsearch`,
      url: "".concat(_config.BASE_URL, "/api/get/good/listgoods"),
      method: "GET",
      header: {
        'content-header': 'application/json' },

      data: {
        type: type,
        page: page },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('关键字查询出错', err);
      } });

  });
}
//获取收藏商品
function getCollection(user) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/good/goodcollection/list"),
      method: "GET",
      header: {
        'content-header': 'application/json' },

      data: {
        user: user },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('get collection message error', err);
      } });

  });
}
//添加收藏
function addCollection(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/good/goodcollection/add"),
      method: "POST",
      header: {
        'content-header': 'application/json' },

      data: data,
      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('add collection message error', err);
      } });

  });
}
//取消收藏
function deleteCollection(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/good/goodcollection/delete"),
      method: 'POST',
      header: {
        'content-type': 'application/json' },

      data: data,
      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('delete collection message error', err);
      } });

  });
}

function getRelationId(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/good/goodcollection/getRelationId"),
      method: 'POST',
      header: {
        'content-type': 'application/json' },

      data: data,
      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log("getRelationId error!" + err);
      } });

  });
}
function existUser(phone) {
  console.log(phone);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/mob/exist"),
      method: 'POST',
      header: {
        'content-type': 'application/json' },

      data: {
        phone: phone },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log("getRelationId error!" + err);
      } });

  });
}

// export function getDetailImg(num_iid) {
// 	return new Promise((resolve, reject) => {
// 		uni.request({
// 			url: 'http://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0/',
// 			method: "GET",
// 			header: {
// 				'content-header': 'application/json'
// 			},
// 			data: {
// 				data:{"id":num_iid},
// 				'qq-pf-to':'pcqq.group'
// 			},
// 			success: (res) => {
// 				resolve(res.data);
// 			},
// 			fail: (err) => {
// 				console.log('获取图片列表信息出错', err)
// 			}
// 		});
// 
// 	})
// }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 144:
/*!********************************************************!*\
  !*** E:/xampp/htdocs/asgapp/common/js/simple-share.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var share = {
  wxContentImage: function wxContentImage(params, callback) {
    // 微信图文分享，仅支持单个图片
    uni.share({
      provider: "weixin",
      scene: params.scene || "WXSceneSession",
      type: 0,
      href: params.href || "",
      title: params.title || "title",
      summary: params.summary || "title，独家折扣，汇聚全网优惠券",
      imageUrl: params.imageUrl ||
      "https://t12.baidu.com/it/u=224094710,3804416768&fm=76",
      success: function success(res) {
        callback && callback({
          code: res.errMsg == "share:ok" ? 1 : 0,
          data: res });

      },
      fail: function fail(err) {
        callback && callback({
          code: 0,
          data: err });

      } });

  },
  wxContent: function wxContent(params, callback) {
    // 微信单个文分享
    uni.share({
      provider: "weixin",
      scene: params.scene || "WXSceneSession",
      type: 1,
      summary: params.summary || "我正在你猜上面享受超值优惠券，快来看看吧~",
      success: function success(res) {
        callback && callback({
          code: res.errMsg == "share:ok" ? 1 : 0,
          data: res });

      },
      fail: function fail(err) {
        callback && callback({
          code: 0,
          data: err });

      } });

  },
  wxImage: function wxImage(params, callback) {
    // 微信单个图片分享
    uni.share({
      provider: "weixin",
      scene: params.scene || "WXSceneSession",
      type: 2,
      imageUrl: params.imageUrl ||
      "自己设个默认图片",
      success: function success(res) {
        callback && callback({
          code: res.errMsg == "share:ok" ? 1 : 0,
          data: res });

      },
      fail: function fail(err) {
        callback && callback({
          code: 0,
          data: err });

      } });

  },
  wxMiniProgram: function wxMiniProgram(params, callback) {
    uni.share({
      provider: 'weixin',
      type: 5,
      imageUrl: params.imageUrl ||
      "自己设个默认图片",
      title: params.title || "你猜",
      miniProgram: {
        id: params.wxAppid || "你自己的微信小程序APPID啊",
        path: params.path || '/pages/index/index',
        type: params.path || 0, // 微信小程序版本类型，可取值： 0-正式版； 1-测试版； 2-体验版。 默认值为0。 
        webUrl: params.path || 'http://uniapp.dcloud.io' },

      success: function success(ret) {
        console.log(JSON.stringify(ret));
      } });

  } };var _default =


share;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 169:
/*!*********************************************!*\
  !*** E:/xampp/htdocs/asgapp/api/fp_page.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.test = test;exports.insert_lunbo = insert_lunbo;exports.insert_goods_1 = insert_goods_1;exports.insert_goods_2 = insert_goods_2;exports.insert_goods_3 = insert_goods_3;exports.insert_tab_goods = insert_tab_goods;exports.get_lunbo = get_lunbo;exports.get_goods_1 = get_goods_1;exports.get_goods_2 = get_goods_2;exports.get_goods_3 = get_goods_3;exports.get_tab_goods = get_tab_goods;exports.get_activity = get_activity;var _config = __webpack_require__(/*! @/api/config.js */ 13);


function test(data) {
  console.log(data);
  console.log("".concat(_config.BASE_URL, "/api/get/fp/test"));
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/test"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function insert_lunbo(data) {
  console.log(data);
  console.log("".concat(_config.BASE_URL, "/api/get/fp/insert_lunbo"));
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/insert_lunbo"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      data: {
        pict_url: data.pict_url,
        link: data.link },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function insert_goods_1(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/insert_goods_1"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      data: {
        tao_id: data.tao_id,
        pict_url: data.pict_url,
        title: data.title,
        size: data.size,
        quanhou_jiage: data.quanhou_jiage,
        tkfee3: data.tkfee3,
        volume: data.volume,
        coupon_info_money: data.coupon_info_money },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function insert_goods_2(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/insert_goods_2"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      data: {
        tao_id: data.tao_id,
        pict_url: data.pict_url,
        title: data.title,
        size: data.size,
        quanhou_jiage: data.quanhou_jiage,
        tkfee3: data.tkfee3,
        volume: data.volume,
        coupon_info_money: data.coupon_info_money },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function insert_goods_3(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/insert_goods_3"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      data: {
        tao_id: data.tao_id,
        pict_url: data.pict_url,
        title: data.title,
        size: data.size,
        quanhou_jiage: data.quanhou_jiage,
        tkfee3: data.tkfee3,
        volume: data.volume,
        coupon_info_money: data.coupon_info_money },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function insert_tab_goods(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/insert_tab_goods"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function get_lunbo(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/get_lunbo"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function get_goods_1(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/get_goods_1"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function get_goods_2(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/get_goods_2"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function get_goods_3(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/get_goods_3"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function get_tab_goods(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/get_tab_goods"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function get_activity(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/fp/get_activity"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 17:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 18:
/*!**************************************!*\
  !*** E:/xampp/htdocs/asgapp/Json.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* 用户 */
var userInfo = {
  status: 1,
  data: {
    id: 1,
    mobile: 18888888888,
    nickname: 'Leo yo',
    portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg' },

  msg: '提示' };

/* 首页轮播图 */
var carouselList = [{
  src: "/static/temp/banner3.jpg",
  background: "rgb(203, 87, 60)" },

{
  src: "/static/temp/banner2.jpg",
  background: "rgb(205, 215, 218)" },

{
  src: "/static/temp/banner4.jpg",
  background: "rgb(183, 73, 69)" }];


/* 商品列表 */
var goodsList = [{
  image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
  image2: "http://pic.rmb.bdstatic.com/819a044daa66718c2c40a48c1ba971e6.jpeg",
  image3: "http://img001.hc360.cn/y5/M00/1B/45/wKhQUVYFE0uEZ7zVAAAAAMj3H1w418.jpg",
  title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
  price: 179,
  sales: 61 },

{
  image: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg",
  image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554013048&di=a3dc9fd1406dd7bad7fbb97b5489ec04&imgtype=jpg&er=1&src=http%3A%2F%2Fimg009.hc360.cn%2Fhb%2FnKo44ac2656F831c684507E3Da0E3a26841.jpg",
  image3: "http://img.zcool.cn/community/017a4e58b4eab6a801219c77084373.jpg",
  title: "潘歌针织连衣裙",
  price: 78,
  sales: 16 },

{
  image: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg",
  image2: "http://m.360buyimg.com/n12/jfs/t247/42/1078640382/162559/3628a0b/53f5ad09N0dd79894.jpg%21q70.jpg",
  image3: "http://ikids.61kids.com.cn/upload/2018-12-29/1546070626796114.jpg",
  title: "巧谷2019春夏季新品新款女装",
  price: 108.8,
  sales: 5 },
{
  image: "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=756705744,3505936868&fm=11&gp=0.jpg",
  image2: "http://images.jaadee.com/images/201702/goods_img/30150_d85aed83521.jpg",
  image3: "http://img13.360buyimg.com/popWaterMark/jfs/t865/120/206320620/138889/dcc94caa/550acedcN613e2a9d.jpg",
  title: "私萱连衣裙",
  price: 265,
  sales: 88 },
{
  image: "https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg",
  image2: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553418265666&di=d4a7f7eb0ae3c859edeb921641ee1c3a&imgtype=0&src=http%3A%2F%2Fimg003.hc360.cn%2Fy3%2FM02%2FF8%2F9F%2FwKhQh1TuSkGELIlQAAAAAPuLl4M987.jpg",
  image3: "http://img.ef43.com.cn/product/2016/8/05100204b0c.jpg",
  title: "娇诗茹 ulzzang原宿风学生潮韩版春夏短",
  price: 422,
  sales: 137 },
{
  image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg",
  image2: "http://image5.suning.cn/uimg/b2c/newcatentries/0070158827-000000000622091973_2_800x800.jpg",
  image3: "http://img.61ef.cn/news/201903/20/2019032009251784.jpg",
  title: "古黛妃 短袖t恤女夏装2019新款韩版宽松",
  price: 179,
  sales: 95 }];



/* 购物车 */
var cartList = [{
  id: 1,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553005139&di=3368549edf9eee769a9bcb3fbbed2504&imgtype=jpg&er=1&src=http%3A%2F%2Fimg002.hc360.cn%2Fy3%2FM01%2F5F%2FDB%2FwKhQh1T7iceEGRdWAAAAADQvqk8733.jpg',
  attr_val: '春装款 L',
  stock: 15,
  title: 'OVBE 长袖风衣',
  price: 278.00,
  number: 1 },

{
  id: 3,
  image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
  attr_val: '激光导航 扫拖一体',
  stock: 3,
  title: '科沃斯 Ecovacs 扫地机器人',
  price: 1348.00,
  number: 5 },

{
  id: 4,
  image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
  attr_val: 'XL',
  stock: 55,
  title: '朵绒菲小西装',
  price: 175.88,
  number: 1 },

{
  id: 5,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
  attr_val: '520 #粉红色',
  stock: 15,
  title: '迪奥（Dior）烈艳唇膏',
  price: 1089.00,
  number: 1 },

{
  id: 6,
  image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
  attr_val: '樱花味润手霜 30ml',
  stock: 15,
  title: "欧舒丹（L'OCCITANE）乳木果",
  price: 128,
  number: 1 },

{
  id: 7,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
  attr_val: '特级 12个',
  stock: 7,
  title: '新疆阿克苏苹果 特级',
  price: 58.8,
  number: 10 },

{
  id: 8,
  image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2319343996,1107396922&fm=26&gp=0.jpg',
  attr_val: '激光导航 扫拖一体',
  stock: 15,
  title: '科沃斯 Ecovacs 扫地机器人',
  price: 1348.00,
  number: 1 },

{
  id: 9,
  image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2668268226,1765897385&fm=26&gp=0.jpg',
  attr_val: 'XL',
  stock: 55,
  title: '朵绒菲小西装',
  price: 175.88,
  number: 1 },

{
  id: 10,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
  attr_val: '520 #粉红色',
  stock: 15,
  title: '迪奥（Dior）烈艳唇膏',
  price: 1089.00,
  number: 1 },

{
  id: 11,
  image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031875829,2994442603&fm=26&gp=0.jpg',
  attr_val: '樱花味润手霜 30ml',
  stock: 15,
  title: "欧舒丹（L'OCCITANE）乳木果",
  price: 128,
  number: 1 },

{
  id: 12,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553007107&di=390915aa8a022cf0b03c03340881b0e7&imgtype=jpg&er=1&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn0%2Fjfs%2Ft646%2F285%2F736444951%2F480473%2Faa701c97%2F548176feN10c9ed7b.jpg',
  attr_val: '特级 12个',
  stock: 7,
  title: '新疆阿克苏苹果 特级',
  price: 58.8,
  number: 10 },

{
  id: 13,
  image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552405266625&di=a703f2b2cdb0fe7f3f05f62dd91307ab&imgtype=0&src=http%3A%2F%2Fwww.78.cn%2Fzixun%2Fnews%2Fupload%2F20190214%2F1550114706486250.jpg',
  attr_val: '春装款/m',
  stock: 15,
  title: '女装2019春秋新款',
  price: 420.00,
  number: 1 }];


//详情展示页面
var detailData = {
  title: '纯种金毛幼犬活体有血统证书',
  title2: '拆家小能手 你值得拥有',
  favorite: true,
  imgList: [{
    src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg' },

  {
    src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg' },

  {
    src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg' },

  {
    src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg' }],


  episodeList: [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],

  guessList: [{
    src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg',
    title: '猫眼指甲油',
    title2: '独树一帜的免照灯猫眼指甲' },

  {
    src: 'http://m.china-7.net/uploads/14778449362891.jpg',
    title: '创意屋',
    title2: '创意屋形上下双层高低床' },

  {
    src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg',
    title: 'MissCandy 指甲油',
    title2: '十分适合喜欢素净的妹纸，尽显淡雅的气质' },

  {
    src: 'http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg	',
    title: 'RMK 2017星空海蓝唇釉',
    title2: '唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。' }],


  evaList: [{
    src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
    nickname: 'Ranth Allngal',
    time: '09-20 12:54',
    zan: '54',
    content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。' },

  {
    src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
    nickname: 'Ranth Allngal',
    time: '09-20 12:54',
    zan: '54',
    content: '楼上说的好有道理。' }] };



var shareList = [{
  type: 1,
  icon: '/static/temp/share_wechat.png',
  text: '微信好友' },

{
  type: 2,
  icon: '/static/temp/share_moment.png',
  text: '朋友圈' },

{
  type: 3,
  icon: '/static/temp/share_qq.png',
  text: 'QQ好友' },

{
  type: 4,
  icon: '/static/temp/share_qqzone.png',
  text: 'QQ空间' }];


var lazyLoadList = [{
  src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg' },

{
  src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg' },

{
  src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg' },

{
  src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg' },

{
  src: 'http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg' },

{
  src: 'http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg' },

{
  src: 'http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg' },

{
  src: 'http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg' },

{
  src: 'http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg' },

{
  src: 'http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg' },

{
  src: 'http://pic1.win4000.com/wallpaper/d/5991569950166.jpg' },

{
  src: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg' },

{
  src: 'http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg' },

{
  src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg' },

{
  src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg' },

{
  src: 'http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg' },

{
  src: 'http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg' },

{
  src: 'http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg' },

{
  src: 'http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg' },

{
  src: 'http://pic1.win4000.com/mobile/3/57888a298d61d.jpg' }];



var orderList = [{
  time: '2019-04-06 11:37',
  state: 1,
  goodsList: [{
    image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553187020783&di=bac9dd78b36fd984502d404d231011c0&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201609%2F26%2F20160926173213_s5adi.jpeg' },

  {
    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg' },

  {
    image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg' },

  {
    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg' },

  {
    image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg' },

  {
    image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4031878334,2682695508&fm=11&gp=0.jpg' },

  {
    image: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1620020012,789258862&fm=26&gp=0.jpg' }] },



{
  time: '2019-04-06 11:37',
  state: 9,
  goodsList: [{
    title: '古黛妃 短袖t恤女 春夏装2019新款韩版宽松',
    price: 179.5,
    image: 'https://img13.360buyimg.com/n8/jfs/t1/30343/20/1029/481370/5c449438Ecb46a15b/2b2adccb6dc742fd.jpg',
    number: 1,
    attr: '珊瑚粉 M' }] },


{
  time: '2019-04-06 11:37',
  state: 1,
  goodsList: [{
    image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i2/2120460599/O1CN01LBPS4C1GINkwsOTXS_!!2120460599.jpg_430x430q90.jpg' },

  {
    image: 'https://img.alicdn.com/imgextra/i2/1069876356/TB2ocTQG4WYBuNjy1zkXXXGGpXa_!!1069876356.jpg_430x430q90.jpg' },

  {
    image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/2120460599/O1CN01YsmgwZ1GINkv38rkn_!!2120460599.jpg_430x430q90.jpg' }] },



{
  time: '2019-04-06 11:37',
  state: 1,
  goodsList: [{
    title: '回力女鞋高帮帆布鞋女学生韩版鞋子女2019潮鞋女鞋新款春季板鞋女',
    price: 69,
    image: 'https://img.alicdn.com/imgextra/i3/2128794607/TB2gzzoc41YBuNjy1zcXXbNcXXa_!!2128794607.jpg_430x430q90.jpg',
    number: 1,
    attr: '白色-高帮 39' }] },


{
  time: '2019-04-06 11:37',
  state: 1,
  goodsList: [{
    image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3358098495/O1CN01dhYyid2Ccl5MWLDok_!!3358098495.jpg_430x430q90.jpg' },

  {
    image: 'https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i3/3358098495/O1CN01AWsnFA2Ccl5OzvqsL_!!3358098495.jpg_430x430q90.jpg' }] },



{
  time: '2019-04-06 11:37',
  state: 1,
  goodsList: [{
    image: 'https://img.alicdn.com/imgextra/i4/3470687433/O1CN0124mMQOSERr18L1h_!!3470687433.jpg_430x430q90.jpg' },

  {
    image: 'https://img.alicdn.com/imgextra/i3/2888462616/O1CN01ERra5J1VCAbZaKI5n_!!0-item_pic.jpg_430x430q90.jpg' },

  {
    image: 'https://gd3.alicdn.com/imgextra/i3/819381730/O1CN01YV4mXj1OeNhQIhQlh_!!819381730.jpg_400x400.jpg' }] }];





var cateList = [{
  id: 1,
  name: '手机数码' },

{
  id: 2,
  name: '礼品鲜花' },

{
  id: 3,
  name: '男装女装' },

{
  id: 4,
  name: '母婴用品' },

{
  id: 5,
  pid: 1,
  name: '手机通讯' },

{
  id: 6,
  pid: 1,
  name: '运营商' },

{
  id: 8,
  pid: 5,
  name: '全面屏手机',
  picture: '/static/temp/cate2.jpg' },

{
  id: 9,
  pid: 5,
  name: '游戏手机',
  picture: '/static/temp/cate3.jpg' },

{
  id: 10,
  pid: 5,
  name: '老人机',
  picture: '/static/temp/cate1.jpg' },

{
  id: 11,
  pid: 5,
  name: '拍照手机',
  picture: '/static/temp/cate4.jpg' },

{
  id: 12,
  pid: 5,
  name: '女性手机',
  picture: '/static/temp/cate5.jpg' },

{
  id: 14,
  pid: 6,
  name: '合约机',
  picture: '/static/temp/cate1.jpg' },

{
  id: 15,
  pid: 6,
  name: '选好卡',
  picture: '/static/temp/cate4.jpg' },

{
  id: 16,
  pid: 6,
  name: '办套餐',
  picture: '/static/temp/cate5.jpg' },

{
  id: 17,
  pid: 2,
  name: '礼品' },

{
  id: 18,
  pid: 2,
  name: '鲜花' },

{
  id: 19,
  pid: 17,
  name: '公益摆件',
  picture: '/static/temp/cate7.jpg' },

{
  id: 20,
  pid: 17,
  name: '创意礼品',
  picture: '/static/temp/cate8.jpg' },

{
  id: 21,
  pid: 18,
  name: '鲜花',
  picture: '/static/temp/cate9.jpg' },

{
  id: 22,
  pid: 18,
  name: '每周一花',
  picture: '/static/temp/cate10.jpg' },

{
  id: 23,
  pid: 18,
  name: '卡通花束',
  picture: '/static/temp/cate11.jpg' },

{
  id: 24,
  pid: 18,
  name: '永生花',
  picture: '/static/temp/cate12.jpg' },

{
  id: 25,
  pid: 3,
  name: '男装' },

{
  id: 26,
  pid: 3,
  name: '女装' },

{
  id: 27,
  pid: 25,
  name: '男士T恤',
  picture: '/static/temp/cate13.jpg' },

{
  id: 28,
  pid: 25,
  name: '男士外套',
  picture: '/static/temp/cate14.jpg' },

{
  id: 29,
  pid: 26,
  name: '裙装',
  picture: '/static/temp/cate15.jpg' },

{
  id: 30,
  pid: 26,
  name: 'T恤',
  picture: '/static/temp/cate16.jpg' },

{
  id: 31,
  pid: 26,
  name: '上装',
  picture: '/static/temp/cate15.jpg' },

{
  id: 32,
  pid: 26,
  name: '下装',
  picture: '/static/temp/cate16.jpg' },

{
  id: 33,
  pid: 4,
  name: '奶粉' },

{
  id: 34,
  pid: 4,
  name: '营养辅食' },

{
  id: 35,
  pid: 4,
  name: '童装' },

{
  id: 39,
  pid: 4,
  name: '喂养用品' },

{
  id: 36,
  pid: 33,
  name: '有机奶粉',
  picture: '/static/temp/cate17.jpg' },

{
  id: 37,
  pid: 34,
  name: '果泥/果汁',
  picture: '/static/temp/cate18.jpg' },

{
  id: 39,
  pid: 34,
  name: '面条/粥',
  picture: '/static/temp/cate20.jpg' },

{
  id: 42,
  pid: 35,
  name: '婴童衣橱',
  picture: '/static/temp/cate19.jpg' },

{
  id: 43,
  pid: 39,
  name: '吸奶器',
  picture: '/static/temp/cate21.jpg' },

{
  id: 44,
  pid: 39,
  name: '儿童餐具',
  picture: '/static/temp/cate22.jpg' },

{
  id: 45,
  pid: 39,
  name: '牙胶安抚',
  picture: '/static/temp/cate23.jpg' },

{
  id: 46,
  pid: 39,
  name: '围兜',
  picture: '/static/temp/cate24.jpg' }];var _default =



{
  carouselList: carouselList,
  cartList: cartList,
  detailData: detailData,
  lazyLoadList: lazyLoadList,
  userInfo: userInfo,
  shareList: shareList,
  goodsList: goodsList,
  orderList: orderList,
  cateList: cateList };exports.default = _default;

/***/ }),

/***/ 2:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 25:
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 26);


/***/ }),

/***/ 26:
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 27);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ 268:
/*!**********************************************************!*\
  !*** E:/xampp/htdocs/asgapp/common/js/img-downloader.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {


/**
               * 下载图片的模块 
               * @version 1.1.0
               * @author xfl <541151284@qq.com>
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {return;}var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var
Downloader = /*#__PURE__*/function () {function Downloader() {_classCallCheck(this, Downloader);_defineProperty(this, "Downloader",
    Downloader);}_createClass(Downloader, [{ key: "load",

    /**
                                                           * 开始下载图片
                                                           * @public
                                                           * @param {String} url 图片的url
                                                           * @param {String} [name] 下载后图片的名字
                                                           * @returns {Promise}  [err, res]
                                                           * @example
                                                           * 
                                                              let promise = downloader.load(url, imgName);  
                                                          	promise.then(([err, res])=>{    
                                                          		console.log(err, res);  // err 和 res 只会有一个存在，另一个为null  
                                                          	});
                                                           */value: function () {var _load = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(
      url, name) {var err, res, _ref, _ref2, _ref3, _ref4;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                url = url.trim();

                name = this.getName(url, name); //重新计算存储的文件名及扩展名
                if (

                this.isRemoteUrl(url)) {_context.next = 7;break;}

                err = null;res = { tempFilePath: url };_context.next = 20;break;case 7:_context.next = 9;return (



                  uni.downloadFile({ url: url }));case 9:_ref = _context.sent;_ref2 = _slicedToArray(_ref, 2);err = _ref2[0];res = _ref2[1];if (!
                err) {_context.next = 17;break;}return _context.abrupt("return",
                [err, null]);case 17:if (!(
                res.statusCode !== 200)) {_context.next = 20;break;} //可能是404
                res.errMsg = "downloadFile:fail";return _context.abrupt("return",
                [res, null]);case 20:_context.next = 22;return (


















                  uni.saveImageToPhotosAlbum({ filePath: res.tempFilePath }));case 22:_ref3 = _context.sent;_ref4 = _slicedToArray(_ref3, 2);err = _ref4[0];res = _ref4[1];if (!
                err) {_context.next = 28;break;}return _context.abrupt("return",
                [err, null]);case 28:return _context.abrupt("return",



                [null, res]);case 29:case "end":return _context.stop();}}}, _callee, this);}));function load(_x, _x2) {return _load.apply(this, arguments);}return load;}()


    /**
                                                                                                                                                                             * 计算文件名及扩展名
                                                                                                                                                                             * @public
                                                                                                                                                                             * @param {String} url 一个url, 当没有传入文件名时，可以尝试从这个url中去获取文件名
                                                                                                                                                                             * @param {String} [name] 文件名 或 文件名.扩展名
                                                                                                                                                                             * @param {String} [ext]  扩展名
                                                                                                                                                                             * @returns {String}  文件名.扩展名
                                                                                                                                                                             * @example
                                                                                                                                                                             * 
                                                                                                                                                                             * 1. getName('aaa/bbbb.txt');
                                                                                                                                                                             * //=> bbbb.txt
                                                                                                                                                                             * 
                                                                                                                                                                             * 2. getName('aaa/bbbb.txt', 'uuuuu');
                                                                                                                                                                             * //=> uuuuu.txt
                                                                                                                                                                             * 
                                                                                                                                                                             * 3. getName('aaa/bbbb.txt', 'uuuuu', '.js');
                                                                                                                                                                             * //=> uuuuu.js
                                                                                                                                                                             * 
                                                                                                                                                                             * 4. getName('aaa/bbbb.txt', 'uuuuu.kkk', '.js');
                                                                                                                                                                             * //=> uuuuu.js
                                                                                                                                                                             * 
                                                                                                                                                                             * 5. getName('aaa/bbbb.txt', 'uuuuu.kkk');
                                                                                                                                                                             * //=> uuuuu.kkk
                                                                                                                                                                            */ }, { key: "getName", value: function getName(
    url, name, ext) {
      var arr = url.match(/(([\w\d_\-]+)(\.[\w\d_]+))$/); //默认取地址中的文件名

      //取出 url 中的文件名和扩展名
      var defaultName = '__default',defaultExt = '.png';
      if (arr) {
        defaultName = arr[1] || defaultName;
        defaultExt = arr[3] || defaultExt;
      }

      //取出传入的 name 中的文件名和扩展名
      arr = name.match(/\.[\w\d_]+$/);
      if (arr) {
        ext = ext || arr[0];
        name = name.replace(/\.[\w\d_]+$/, ''); //去掉name中的扩展名
      }

      ext = ext || defaultExt;
      name = name || defaultName;

      return name + ext;
    }


    /**
       * 是否是远程地址
       * @public
       * @param {String} url 需要判断的url
       * @returns {Boolean} 
      */ }, { key: "isRemoteUrl", value: function isRemoteUrl(
    url) {
      return !!url.match(/^https?:\/\//i);
    }

    /**
       * 在web端通过a标签来下载文件
       * 注意，在浏览器中用户可能设置了阻止下载文件，此时代码也会正常执行完成，但其实是没有真正地下载文件的。
       * 如果不存在这样的资源，则默认会下载本网页(html文件)
       * @public
       * @param {String} url 要下载的图片地址
       * @param {String} [name=''] 下载后图片的名字
       */ }, { key: "webDownloadImg", value: function webDownloadImg(
    url) {var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ''; //网页中的图片下载
      var body = document.getElementsByTagName('body')[0];
      var aEle = document.createElement('a');
      aEle.setAttribute('download', name);
      aEle.style.display = 'none';
      aEle.href = url;
      aEle.target = '_blank';

      body.appendChild(aEle);
      aEle.dispatchEvent(new MouseEvent('click')); // 模拟鼠标click点击事件
      document.body.removeChild(aEle);
    }

    /**
       * 以单例模式 获取实例对象 
       * @static
       * @public
       */ }], [{ key: "getInstance", value: function getInstance()
    {
      if (!this.__hasInstance) {
        this.__hasInstance = new this();
      }
      return this.__hasInstance;
    } }]);return Downloader;}();var _default =


Downloader.getInstance();exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 27:
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ 3:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {return;}var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance");}function _iterableToArray(iter) {if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;}}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.then(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name);
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      return 1;
    } else {
      return 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };




var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  interceptors: interceptors,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor });


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      var returnValue = wx[options.name || methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  if (typeof getUniEmitter === 'function') {
    /* eslint-disable no-undef */
    return getUniEmitter;
  }
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });




var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
    vueOptions = VueComponent.extendOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions['behaviors'];
  var vueExtends = vueOptions['extends'];
  var vueMixins = vueOptions['mixins'];

  var vueProps = vueOptions['props'];

  if (!vueProps) {
    vueOptions['props'] = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps['name'] = {
            type: String,
            default: '' };

          vueProps['value'] = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts['default'];
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor = dataPath ? vm.__get_value(dataPath, context) : context;

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn("\u4E8B\u4EF6\u4FE1\u606F\u4E0D\u5B58\u5728");
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (
          handlerCtx.$options.generic &&
          handlerCtx.$parent &&
          handlerCtx.$parent.$parent)
          {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = handlerCtx.$parent.$parent;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          ret.push(handler.apply(handlerCtx, processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName)));

        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin']['options']) {
      Object.assign(options, vueOptions['mp-weixin']['options']);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };



  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (args) {
    this.$vm.$mp.query = args; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', args);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (target[name]) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 36:
/*!******************************************!*\
  !*** E:/xampp/htdocs/asgapp/api/user.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.excute_set_info = excute_set_info;exports.set_info = set_info;exports.team_order = team_order;exports.give_jurisdiction = give_jurisdiction;exports.my_income = my_income;exports.daifukuan_merchant = daifukuan_merchant;exports.SJTeam = SJTeam;exports.GetTeamEmp = GetTeamEmp;exports.sendcode = sendcode;exports.uploadHeadImg = uploadHeadImg;exports.registerLp1 = registerLp1;exports.bindzfb = bindzfb;exports.postRegister = postRegister;exports.postLogin = postLogin;exports.getUserInfo = getUserInfo;exports.changeName = changeName;exports.changePhoneyzm = changePhoneyzm;exports.changePhone = changePhone;exports.newPhoneyzm = newPhoneyzm;exports.newPhone = newPhone;exports.getUserinit = getUserinit;exports.userTx = userTx;exports.getProfOnline = getProfOnline;var _config = __webpack_require__(/*! @/api/config.js */ 13);



function excute_set_info(data) {
  return new Promise(function (resolve, reject) {
    set_info({
      id: data.id,
      columnName: data.columnName,
      columnValue: data.columnValue }).
    then(function (res) {
      console.log(res);
      resolve(res);
    });
  });
}
function set_info(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/user/set_info"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      data: {
        id: data.id,
        columnName: data.columnName,
        columnValue: data.columnValue },

      success: function success(res) {
        console.log(res);
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function team_order(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/order/team_order"),
      method: "post",
      header: {
        'content-header': 'application/json' },

      data: {
        id: data.id },

      success: function success(res) {
        console.log(res);
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
//赋予权限
function give_jurisdiction(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/give_jurisdiction"),
      method: "post",
      header: {
        'content-header': 'application/json' },

      data: {
        id: data.id },

      success: function success(res) {
        console.log(res);
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
//我的收益
function my_income(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/yj/my_income"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      data: {
        id: data.id },

      success: function success(res) {
        console.log(res);
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
//支付宝提现  有问题
function daifukuan_merchant(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/commission/daifukuan_merchant"),
      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
//升级为团长
function SJTeam(data) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/SJTeam"),
      data: {
        id: data.id },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res.data[0]);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
//获取团员
function GetTeamEmp(data) {
  console.log(data);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/GetTeamEmp"),
      data: {
        TeamId: data.TeamId,
        TeamType: data.TeamType,
        sort: data.sort },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res);
        resolve(res);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
//发送验证码
function sendcode(phone, type) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/mob/").concat(type, "/sendyzm"),
      data: {
        phone: phone },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
//修改用户头像
function uploadHeadImg(phone, headImg) {
  console.log(phone, headImg);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/user/upload_headImg"),
      data: {
        phone: phone,
        headImg: headImg },

      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res);
      },
      fail: function fail(err) {
        console.log('uploadHeadImg:', err);
      } });

  });
}
//测试
function registerLp1(phone) {
  //location.href=`${BASE_URL}/api/get/user/login/register/success/?lp=1&phone=`+phone;
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/user/login/register/success/?lp=1&phone=") + phone,
      data: {
        phone: phone },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}

//bind zfb
function bindzfb(zfbname, name, code, phone) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/bindzfb"),
      data: {
        phone: phone,
        name: name,
        code: code,
        zfbname: zfbname },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function postRegister(_ref)



{var phone = _ref.phone,code = _ref.code,yqm = _ref.yqm;
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/mob/register"),
      data: {
        phone: phone,
        code: code,
        yqm: yqm },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function postLogin(phone, code) {
  console.log(phone, code);
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/mob/login"),
      data: {
        phone: phone,
        code: code },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res.data);
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
//获取用户信息
function getUserInfo(phone) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/get/user/getData"),
      data: {
        phone: phone },

      method: "get",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        console.log(res.data);
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('getUserInfo:', err);
      } });

  });
}

function changeName(_ref2)


{var phone = _ref2.phone,name = _ref2.name;
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/changename"),
      data: {
        phone: phone,
        name: name },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
// 更换手机绑定手机旧手机验证发送验证码
function changePhoneyzm(phone) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/changephone/sendyzm"),
      data: {
        phone: phone },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
// 更换手机绑定手机旧手机验证
function changePhone(phone, code) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/changephone/changephone"),
      data: {
        phone: phone,
        code: code },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
// 用户更换手机绑定验证码
function newPhoneyzm(phone) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/newphone/sendyzm"),
      data: {
        phone: phone },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
// 用户更换手机绑定
function newPhone(phone, code) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/user/newphone/newphone"),
      data: {
        phone: phone,
        code: code },

      method: "POST",
      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('ERROR_MSG', err);
      } });

  });
}
function getUserinit(phone) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/yj/getcommission"),
      method: "POST",
      data: {
        phone: phone },

      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('init user error', err.message);
      } });

  });
}
//用户佣金提现
function userTx(pid, phone, money) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/yj/tx"),
      method: "POST",
      data: {
        pid: pid,
        phone: phone,
        money: money },

      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('init user error', err.message);
      } });

  });
}
//佣金详情线上
function getProfOnline(pid) {
  return new Promise(function (resolve, reject) {
    uni.request({
      url: "".concat(_config.BASE_URL, "/api/post/yj/getprofitmsg"),
      method: "POST",
      data: {
        pid: pid },

      header: {
        'content-header': 'application/json' },

      success: function success(res) {
        resolve(res.data);
      },
      fail: function fail(err) {
        console.log('init user error', err.message);
      } });

  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 37:
/*!***********************************************!*\
  !*** E:/xampp/htdocs/asgapp/api/comission.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.Comission = void 0;var _http = __webpack_require__(/*! @/util/http.js */ 38);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}var

Comission = /*#__PURE__*/function (_Http) {_inherits(Comission, _Http);function Comission() {_classCallCheck(this, Comission);return _possibleConstructorReturn(this, _getPrototypeOf(Comission).apply(this, arguments));}_createClass(Comission, [{ key: "getnowbalance", value: function getnowbalance(
    data) {
      return this.request('/api/post/yj/balance', data, 'POST');
    } }, { key: "tx_zfb", value: function tx_zfb(

    data) {
      return this.request('/api/get/commission/tx_zfb', data, 'get');
    }
    //代付款
  }, { key: "daifukuan_merchant", value: function daifukuan_merchant(data) {
      return this.request('/api/get/commission/daifukuan_merchant', data, 'get');
    } }]);return Comission;}(_http.Http);exports.Comission = Comission;

/***/ }),

/***/ 38:
/*!*******************************************!*\
  !*** E:/xampp/htdocs/asgapp/util/http.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.Http = void 0;var _config = __webpack_require__(/*! @/util/config.js */ 39);function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}


var ERROR_CODE = {
  1: '抱歉出了一个错误',
  400: '服务器请求出错' };var

Http = /*#__PURE__*/function () {function Http() {_classCallCheck(this, Http);}_createClass(Http, [{ key: "request", value: function request(
    url) {var _this = this;var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "GET";
      return new Promise(function (resolve, reject) {
        uni.request({
          url: "".concat(_config.BASE_URL).concat(url),
          data: data,
          method: method,
          header: {
            'content-header': 'application/json' },

          success: function success(res) {
            console.log(res);
            // let code = res.statusCode.toString()
            var code = res.code;
            if (code.startsWith('2')) {
              resolve(res.data);
            } else {
              // console.log(code)
              _this._show_error(code);
            }
          },
          fail: function fail(err) {
            _this._show_error(1);
          } });


      });
    } }, { key: "_show_error", value: function _show_error(
    err_code) {
      if (!err_code) {
        err_code = 1;
      }
      uni.showToast({
        title: ERROR_CODE[err_code],
        icon: 'none',
        duration: 2000 });

    } }]);return Http;}();exports.Http = Http;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 39:
/*!*********************************************!*\
  !*** E:/xampp/htdocs/asgapp/util/config.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.BASE_URL = void 0;var BASE_URL = 'http://39.108.215.49:80';
//const BASE_URL = 'http://127.0.0.1:3302';
exports.BASE_URL = BASE_URL;

/***/ }),

/***/ 4:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    {
      if(vm.$scope && vm.$scope.is){
        return vm.$scope.is
      }
    }
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  // fixed by xxxxxx (nvue vuex)
  /* eslint-disable no-undef */
  if(typeof SharedObject !== 'undefined'){
    this.id = SharedObject.uid++;
  } else {
    this.id = uid++;
  }
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = typeof SharedObject !== 'undefined' ? SharedObject : {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    vm.mpHost !== 'mp-toutiao' && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    vm.mpHost !== 'mp-toutiao' && initProvide(vm); // resolve provide after data/props
    vm.mpHost !== 'mp-toutiao' && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);
  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  vm.mpHost !== 'mp-toutiao' && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err) {
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string,number
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onError',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),

/***/ 5:
/*!*********************************************************!*\
  !*** E:/xampp/htdocs/asgapp/pages.json?{"type":"stat"} ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__133D546" };exports.default = _default;

/***/ }),

/***/ 6:
/*!*****************************************!*\
  !*** E:/xampp/htdocs/asgapp/pages.json ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ 7:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {var _package = __webpack_require__(/*! ../package.json */ 8);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["mp-weixin"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 9).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 8:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-26920200402001","_inBundle":false,"_integrity":"sha512-Mdhd/IRuUMHWPj3TtWrBb0kghRBA0YiO2L2THMFvhCTfQDSoSq1vwOdAx5n/8fIORAvG0uVQoYl73xeVFZML5A==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-26920200402001.tgz","_shasum":"5f66f5dc252ac00c6064857dee8251ee51aa2391","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"bfdbb7b3000599679ef8cb29a969e6bd447b00c7","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-26920200402001"};

/***/ }),

/***/ 9:
/*!**********************************************************!*\
  !*** E:/xampp/htdocs/asgapp/pages.json?{"type":"style"} ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "pages": { "pages/common/category": { "navigationBarTitleText": "修改信息", "navigationBarTextStyle": "white" }, "pages/index/user": { "navigationBarTitleText": "我的", "navigationBarTextStyle": "white", "enablePullDownRefresh": true }, "pages/user/team_list": { "navigationBarTitleText": "团队成员", "navigationBarTextStyle": "white" }, "pages/user/set_info": { "navigationBarTitleText": "修改信息", "navigationBarTextStyle": "white" }, "pages/user/my_team": {}, "pages/user/invite_friend": { "navigationBarTitleText": "邀请好友", "navigationBarTextStyle": "white" }, "pages/user/team_bonus": { "navigationBarTitleText": "团队奖金" }, "pages/user/tx": { "navigationBarTitleText": "支付宝提现" }, "pages/user/tx_record": { "navigationBarTitleText": "提现记录" }, "pages/user/revenue": { "navigationBarTitleText": "我的收益", "navigationBarTextStyle": "white" }, "pages/user/my_info": { "navigationBarTitleText": "个人信息", "navigationBarTextStyle": "white" }, "pages/index/indexModel": { "navigationBarTitleText": "首页", "navigationBarTextStyle": "white", "onReachBottomDistance": "50" }, "pages/user/board": { "navigationBarTitleText": "订单明细", "navigationBarTextStyle": "white" }, "pages/index/guide": { "navigationStyle": "custom" }, "pages/index/login": { "navigationStyle": "custom", "usingComponents": {}, "usingAutoImportComponents": {} }, "pages/index/lunbo": {}, "pages/common/moreGoods": { "navigationBarTitleText": "更多好货", "navigationBarTextStyle": "white" }, "pages/index/index": { "enablePullDownRefresh": true, "navigationBarTitleText": "首页", "onReachBottomDistance": "50" }, "pages/tabPage/tabGoods": { "navigationBarTitleText": "爱省购", "navigationBarTextStyle": "white" }, "pages/tabPage/19.9": { "navigationBarTitleText": "19.9元", "navigationBarTextStyle": "white" }, "pages/store/index": { "navigationBarTitleText": "双11会场", "navigationBarBackgroundColor": "#FC1F3F", "navigationBarTextStyle": "white" }, "pages/store/store": { "navigationStyle": "custom" }, "pages/store/circle": { "navigationStyle": "custom" }, "pages/store/customer": { "navigationStyle": "custom" }, "pages/store/shopcar": { "navigationStyle": "custom" }, "pages/chat/index": { "navigationStyle": "custom" }, "pages/chat/chat": { "navigationStyle": "custom" }, "pages/chat/friend-circle": { "navigationStyle": "custom" }, "pages/chat/group": { "navigationStyle": "custom" }, "pages/chat/mail-list": { "navigationStyle": "custom" }, "pages/send_circle/index": { "navigationBarTitleText": "发圈", "navigationBarTextStyle": "white" }, "pages/school/school": { "navigationStyle": "custom" }, "pages/school/index": { "navigationStyle": "custom" }, "pages/school/pub-ma": { "navigationStyle": "custom" }, "pages/school/recommend": { "navigationStyle": "custom" }, "pages/school/school-knowlege": { "navigationStyle": "custom" }, "pages/common/good": { "navigationStyle": "custom" }, "pages/common/goods-detail": { "navigationStyle": "custom", "enablePullDownRefresh": true }, "pages/common/goods2-detail": { "navigationStyle": "custom" }, "pages/common/good-item": { "navigationStyle": "custom" }, "pages/common/web-view": { "navigationStyle": "custom" }, "pages/common/search": {}, "pages/index/setting": { "navigationStyle": "custom" }, "pages/index/change-name": { "navigationStyle": "custom" }, "pages/index/change-phone": { "navigationStyle": "custom" }, "pages/index/new-phone": { "navigationStyle": "custom" }, "pages/index/total-revenue": { "navigationStyle": "custom" }, "pages/common/search-detail": {}, "pages/index/collection": { "navigationStyle": "custom" }, "pages/index/bindzfb": { "navigationStyle": "custom" }, "pages/index/cash-withdrawal": { "navigationStyle": "custom" }, "pages/common/share": { "navigationBarTitleText": "创建分享", "navigationBarTextStyle": "white", "backgroundColor": "#F8F8F8", "backgroundColorTop": "#F4F5F6", "backgroundColorBottom": "#F4F5F6" }, "pages/index/sub-detail": { "navigationStyle": "custom" } }, "globalStyle": { "navigationBarTextStyle": "white", "navigationBarBackgroundColor": "#333333", "backgroundColor": "#F8F8F8", "backgroundColorTop": "#F4F5F6", "backgroundColorBottom": "#F4F5F6" } };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map