(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-school-index"],{1211:function(t,e,n){var i=n("c31e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("763657f9",i,!0,{sourceMap:!1,shadowMode:!1})},5114:function(t,e,n){"use strict";var i=n("b160"),o=n.n(i);o.a},"91bc":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},t._l(t.tabs,function(e,i){return t.tabs.length>0?n("v-uni-view",{key:i,staticClass:"wrap",on:{click:function(n){n=t.$handleEvent(n),t.jump(e.page,e.url,i)}}},[n("uni-icon",{staticClass:"icon",attrs:{size:"28",color:t.current==i?"#ff0000":"#707070",type:e.type}}),n("v-uni-text",{class:t.current==i?"txt on":"txt"},[t._v(t._s(e.title))])],1):t._e()}))},o=[],a={props:{tabs:{type:Array},current:{type:String}},data:function(){return{activeindex:0}},onLoad:function(){this.activeindex=this.current,console.log("cc",this.current,this.activeindex)},methods:{jump:function(t,e,n){console.log("跳转路径",e,n,this.current),"user"!=e&&"index"!=e?uni.redirectTo({url:"./".concat(e)}):uni.reLaunch({url:"/pages/".concat(t,"/").concat(e)})}}},r=a,c=(n("5114"),n("2877")),s=Object(c["a"])(r,i,o,!1,null,"4b1c021d",null);s.options.__file="uni-tabbar.vue";e["a"]=s.exports},"9c35":function(t,e,n){"use strict";var i=n("1211"),o=n.n(i);o.a},a428:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-image",{staticClass:"logo",attrs:{src:"../../static/logo.png"}}),n("v-uni-view",[n("v-uni-text",{staticClass:"title"},[t._v(t._s(t.title))])],1),n("view-tabbar",{attrs:{current:"0",tabs:t.tabs}})],1)},o=[],a=n("91bc"),r={data:function(){return{title:"学院首页",tabs:[{url:"index",type:"baokuan",title:"每日爆款",page:"school"},{url:"/pages/school/pub-ma",type:"xuanchuan",title:"宣传素材",page:"school"},{url:"/pages/school/school-knowlege",type:"study",title:" 知识学院",page:"school"},{url:"/pages/school/recommend",type:"xinyu",title:" 每日心语",page:"school"},{url:"user",type:"user",title:" 我的",page:"index"}]}},components:{viewTabbar:a["a"]}},c=r,s=(n("9c35"),n("2877")),l=Object(s["a"])(c,i,o,!1,null,"6486c24b",null);l.options.__file="index.vue";e["default"]=l.exports},a49c:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.content[data-v-4b1c021d]{background:#555;position:fixed!important;z-index:999!important;left:0!important;bottom:0!important;right:0!important;display:-webkit-box!important;display:-webkit-flex!important;display:-ms-flexbox!important;display:flex!important;-webkit-box-orient:horizontal!important;-webkit-box-direction:normal!important;-webkit-flex-direction:row!important;-ms-flex-direction:row!important;flex-direction:row!important;-webkit-justify-content:space-around!important;-ms-flex-pack:distribute!important;justify-content:space-around!important;-webkit-box-align:center!important;-webkit-align-items:center!important;-ms-flex-align:center!important;align-items:center!important;text-align:center!important;height:56px!important;width:100%!important;padding:%?4?% 0;border-top:%?1?% solid #ccc!important;background:#fff\n}\n.content .wrap[data-v-4b1c021d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center\n}\n.content .wrap .txt[data-v-4b1c021d]{font-size:10px;color:#707070\n}\n.content .wrap .on[data-v-4b1c021d]{color:red\n}",""])},b160:function(t,e,n){var i=n("a49c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("4a9fe935",i,!0,{sourceMap:!1,shadowMode:!1})},c31e:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,"\n.content[data-v-6486c24b]{text-align:center;height:%?400?%\n}\n.logo[data-v-6486c24b]{height:%?200?%;width:%?200?%;margin-top:%?200?%\n}\n.title[data-v-6486c24b]{font-size:%?36?%;color:#8f8f94\n}",""])}}]);