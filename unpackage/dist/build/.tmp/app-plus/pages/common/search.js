(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/search"],{"497d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},s=[];n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s})},"576b":function(t,e,n){"use strict";(function(t){n("00a9"),n("921b");a(n("66fd"));var e=a(n("91fd"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"7c17":function(t,e,n){"use strict";var a=n("c448"),s=n.n(a);s.a},"91fd":function(t,e,n){"use strict";n.r(e);var a=n("497d"),s=n("9803");for(var o in s)"default"!==o&&function(t){n.d(e,t,function(){return s[t]})}(o);n("7c17");var i=n("2877"),c=Object(i["a"])(s["default"],a["a"],a["b"],!1,null,"1055790a",null);e["default"]=c.exports},9803:function(t,e,n){"use strict";n.r(e);var a=n("e145"),s=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},c448:function(t,e,n){},e145:function(t,e,n){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return n.e("components/nav-bar").then(n.bind(null,"20a0"))},o=function(){return n.e("components/tag").then(n.bind(null,"c904"))},i={data:function(){return{value:"",isShow:!1,hottags:["母婴","美妆","家电","数码","羊毛衫"],tags:["母婴","美妆","家电","数码","羊毛衫"]}},components:{navBar:s,tagItem:o},onLoad:function(){this.tags=t.getStorageSync("historysearch")||[]},methods:{clearsearch:function(){var e=this;0!=this.tags.length&&t.showModal({title:"温馨提示",content:"确定要删除历史搜索记录？",success:function(n){n.confirm?(e.tags=[],console.log(a("清楚后的tags",e.tags," at pages\\common\\search.vue:62")),t.setStorageSync("historysearch",e.tags),t.showToast({title:"删除成功",icon:"success"})):n.cancel&&console.log(a("用户点击取消"," at pages\\common\\search.vue:69"))}})},submit:function(e){this.value=e.detail.value.trim(),this.uptags(this.value),t.navigateTo({url:"/pages/common/search-detail?keyword=".concat(this.value)})},uptags:function(e){-1==this.tags.indexOf(this.value)&&(10==this.tags.length?(this.tags.pop(),this.tags.unshift(this.value)):this.tags.unshift(this.value),t.setStorageSync("historysearch",this.tags))},_getinput:function(t){this.value=t.detail.value.trim(),this.value?this.isShow=!0:this.isShow=!1},clear:function(){console.log(a("清楚"," at pages\\common\\search.vue:102")),this.value="",this.isShow=!1},onTap:function(t){console.log(a("aaac",t," at pages\\common\\search.vue:107")),this.value=t,this.isShow=!0,this.submit({detail:{value:t}})}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])}},[["576b","common/runtime","common/vendor"]]]);