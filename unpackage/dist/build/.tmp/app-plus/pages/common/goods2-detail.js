(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/common/goods2-detail"],{"084f":function(o,t,e){"use strict";var n=function(){var o=this,t=o.$createElement;o._self._c},i=[];e.d(t,"a",function(){return n}),e.d(t,"b",function(){return i})},"0c3c":function(o,t,e){},a57f:function(o,t,e){"use strict";(function(o){e("00a9"),e("921b");n(e("66fd"));var t=n(e("a6da"));function n(o){return o&&o.__esModule?o:{default:o}}o(t.default)}).call(this,e("6e42")["createPage"])},a6da:function(o,t,e){"use strict";e.r(t);var n=e("084f"),i=e("e95b");for(var s in i)"default"!==s&&function(o){e.d(t,o,function(){return i[o]})}(s);e("c023");var c=e("2877"),l=Object(c["a"])(i["default"],n["a"],n["b"],!1,null,"2e0af474",null);t["default"]=l.exports},c023:function(o,t,e){"use strict";var n=e("0c3c"),i=e.n(n);i.a},e95b:function(o,t,e){"use strict";e.r(t);var n=e("eb53"),i=e.n(n);for(var s in n)"default"!==s&&function(o){e.d(t,o,function(){return n[o]})}(s);t["default"]=i.a},eb53:function(o,t,e){"use strict";(function(o,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e("8c24"),s=function(){return e.e("components/product-list").then(e.bind(null,"c398"))},c={computed:{collentionColor:function(){return this.isCollection?"#ff0000":"#fff"}},data:function(){return{nowScrollTop:0,isCollection:!1,table:"",scrolltop:0,navisShow:!0,isactive:!0,reprice:15,good:null,recommend:{},detail:null,phone:this.getUser()}},onLoad:function(t){var e=t.id||"",n=t.table||"";console.log(o("table",n," at pages\\common\\goods2-detail.vue:173")),console.log(o("id",e," at pages\\common\\goods2-detail.vue:174"));var i=this._getPid();this._getData(e,n,i)},components:{productList:s},methods:{_getPid:function(){try{var o=n.getStorageSync("user");return o.pid}catch(t){}},getUser:function(){try{var o=n.getStorageSync("user");return o.phone}catch(t){}},copykey:function(){n.setClipboardData({data:"【".concat(this.good.title,"】").concat(this.good.short_url," 点击链接，再选择浏览器咑閞；或復·制这段描述").concat(this.good.tkl,"后到👉淘♂寳♀👈"),success:function(){n.showToast({title:"已复制"})}})},collection:function(){var t=this;this.phone?this.isCollection?(console.log(o("取消收藏",this.isCollection," at pages\\common\\goods2-detail.vue:220")),(0,i.deleteCollection)({phone:this.phone,num_iid:this.good.num_iid}).then(function(o){t.isCollection=0,n.showToast({title:"已取消"})})):this.isCollection||(console.log(o("增加收藏",this.isCollection," at pages\\common\\goods2-detail.vue:231")),(0,i.addCollection)({phone:this.phone,volume:this.good.volume,quanhoujia:this.good.quanhoujia,youhuiquan:this.good.youhuiquan,zk_final_price:this.good.zk_final_price,title:this.good.title,pict_url:this.good.pict_url,num_iid:this.good.num_iid}).then(function(e){console.log(o("已收藏"," at pages\\common\\goods2-detail.vue:242")),t.isCollection=1,n.showToast({title:"已收藏"})})):n.showToast({title:"未登录",icon:"none"})},share:function(){console.log(o("share"," at pages\\common\\goods2-detail.vue:252")),n.share({provider:"weixin",scene:"WXSenceTimeline",type:0,href:this.good.short_url,title:"我正在领取淘宝购物超级优惠券",summary:"".concat(this.good.item_description),imageUrl:this.good.small_images[0],success:function(t){console.log(o("success:"+JSON.stringify(t)," at pages\\common\\goods2-detail.vue:262"))},fail:function(t){console.log(o("fail:"+JSON.stringify(t)," at pages\\common\\goods2-detail.vue:265"))}})},jump:function(o){n.showToast({title:"努力开发中..",icon:"none"})},_getData:function(t,e,n){var s=this,c=Promise.all([(0,i.getGoodDetail)(t,e,n,this.getUser()),(0,i.getGoodsList)({page:0,type:"",screen:"",jg:""})]);c.then(function(t){t.length>0&&(console.log(o("商品详情",t," at pages\\common\\goods2-detail.vue:288")),s.good=t[0].result,s.good.logo=0==s.good.user_type?"../../static/tb.png":"../../static/tm.png",s.good.smlogo=0==s.good.user_type?"tblogo":"tmlogo",s.good.yj=(s.good.youhuiquan*parseFloat(s.good.commission_rate/100)).toFixed(2),s.good.coupon_start_time=s.good.coupon_start_time.slice(0,10),s.good.coupon_end_time=s.good.coupon_end_time.slice(0,10),s.recommend=t[1].result,s.isCollection=s.good.isCollection,s.detail=s._getDetailImg(t[2].wdescContent.pages))})},_getDetailImg:function(o){for(var t="",e=/<[^>]*>|<\/[^>]*>/gm,n=o.length,i=0;i<n;i++)-1!=o[i].indexOf("<txt>")?t+="":t+="<img src='https://"+o[i].replace(e,"")+"' style='width:100%;max-width:100%' />";return t},_getGoodDetail:function(t,e){var s=this,c=(0,i.getGoodDetail)(t,e);n.showLoading({title:"加载中...",mask:!0}),c.then(function(t){n.hideLoading(),200==t.code?(s.good=t.result,console.log(o("sp",s.good," at pages\\common\\goods2-detail.vue:325"))):n.showToast({title:"查无此商品",icon:"none"})})},_getRecommend:function(){var o=this,t=(0,i.getGoodsList)({page:0,type:"",screen:"",jg:""});t.then(function(t){200==t.code&&(o.recommend=t.result)})},back:function(){n.navigateBack({delta:1})},_onscroll:function(o){var t=o.target||o.srcElement;this.nowScrollTop=t.scrollTop},go:function(t){t||window.event;var e=t.target||t.srcElement;e.offsetLeft<190&&e.offsetLeft>150?(this.scrolltop=this.nowScrollTop,this.$nextTick(function(){this.scrolltop=0,this.isactive=!0})):e.offsetLeft<240&&e.offsetLeft>190&&(console.log(o("2",this.scrolltop," at pages\\common\\goods2-detail.vue:375")),this.scrolltop=this.nowScrollTop,this.$nextTick(function(){this.scrolltop=555,this.isactive=!1}))}}};t.default=c}).call(this,e("0de9")["default"],e("6e42")["default"])}},[["a57f","common/runtime","common/vendor"]]]);