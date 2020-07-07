(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/other/uni-collapse/uni-collapse"],{"7e48":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var n=[];this.childrens.forEach((function(t,e){t.isOpen&&n.push(t.nameSync)})),this.$emit("change",n)}}};t.default=a},"8c8f":function(n,t,e){"use strict";var a,c=function(){var n=this,t=n.$createElement;n._self._c},u=[];e.d(t,"b",(function(){return c})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return a}))},b944:function(n,t,e){},be22:function(n,t,e){"use strict";e.r(t);var a=e("8c8f"),c=e("d10e5");for(var u in c)"default"!==u&&function(n){e.d(t,n,(function(){return c[n]}))}(u);e("f3a4");var r,o=e("f0c5"),i=Object(o["a"])(c["default"],a["b"],a["c"],!1,null,"82aa0856",null,!1,a["a"],r);t["default"]=i.exports},d10e5:function(n,t,e){"use strict";e.r(t);var a=e("7e48"),c=e.n(a);for(var u in a)"default"!==u&&function(n){e.d(t,n,(function(){return a[n]}))}(u);t["default"]=c.a},f3a4:function(n,t,e){"use strict";var a=e("b944"),c=e.n(a);c.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/other/uni-collapse/uni-collapse-create-component',
    {
        'components/other/uni-collapse/uni-collapse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("be22"))
        })
    },
    [['components/other/uni-collapse/uni-collapse-create-component']]
]);
