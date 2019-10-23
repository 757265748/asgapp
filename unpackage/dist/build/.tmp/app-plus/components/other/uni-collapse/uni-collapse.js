(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/other/uni-collapse/uni-collapse"],{"0fe4":function(n,e,t){"use strict";var u=function(){var n=this,e=n.$createElement;n._self._c},o=[];t.d(e,"a",function(){return u}),t.d(e,"b",function(){return o})},"599d":function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniCollapse",props:{accordion:{type:Boolean,default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach(function(e,t){e.isOpen&&n.push(e.nameSync)}),this.$emit("change",n)}}};e.default=u},"7eb1":function(n,e,t){"use strict";var u=t("9716"),o=t.n(u);o.a},9716:function(n,e,t){},be22:function(n,e,t){"use strict";t.r(e);var u=t("0fe4"),o=t("d10e");for(var a in o)"default"!==a&&function(n){t.d(e,n,function(){return o[n]})}(a);t("7eb1");var r=t("2877"),c=Object(r["a"])(o["default"],u["a"],u["b"],!1,null,null,null);e["default"]=c.exports},d10e:function(n,e,t){"use strict";t.r(e);var u=t("599d"),o=t.n(u);for(var a in u)"default"!==a&&function(n){t.d(e,n,function(){return u[n]})}(a);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/other/uni-collapse/uni-collapse-create-component',
    {
        'components/other/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("be22"))
        })
    },
    [['components/other/uni-collapse/uni-collapse-create-component']]
]);                
