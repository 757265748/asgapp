webpackJsonp([8],{"162o":function(e,t,n){(function(e){var l=void 0!==e&&e||"undefined"!=typeof self&&self||window,a=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(a.call(setTimeout,l,arguments),clearTimeout)},t.setInterval=function(){return new i(a.call(setInterval,l,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(l,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("mypn"),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(t,n("DuR2"))},LVi4:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=n("L9TO");n("162o");var a,i,o,s=n("nSSd"),c={data:function(){return{visible:!1,confirmLoading:!1,inputidsable:!1,levelone:"请选择栏目",leveltwo:"请选择栏目",levelthree:"请选择栏目",leveldata1:[],leveldata2:[],leveldata3:[],newdata:[],columnindex:1,addcolumn:"",upperlevel:""}},created:function(){this.init()},methods:{init:function(){var e=this;Object(l.c)().then(function(t){var n=t.data;200==n.code&&(e.leveldata1=n.data)})},addhandelChange:(a=function(e){var t=e.target.value;if(this.addcolumn=t,/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im.test(this.addcolumn)||/[·！#￥（——）：；“”‘、，|《。》？、【】[\]]/im.test(this.addcolumn))return s.message.error("栏目不能包含特殊字符"),this.addcolumn="",void(e.target.value="")},i=500,i=i||200,function(){var e=this,t=arguments;o&&clearTimeout(o),o=setTimeout(function(){o=null,a.apply(e,t)},i)}),submit:function(){var e=this;Object(l.f)({column1:"请选择栏目"==this.levelone?"":this.levelone,column2:"请选择栏目"==this.leveltwo?"":this.leveltwo,column3:"请选择栏目"==this.levelthree?"":this.levelthree}).then(function(t){var n=t.data;s.message.info(n.msg.msg),e.visible=!1,e.confirmLoading=!1})},showModal:function(e){this.columnindex=e,!(2==e&&"请选择栏目"==this.levelone||3==e&&"请选择栏目"==this.leveltwo)?(this.visible=!0,this.addcolumn=""):s.message.error("请选择上一级栏目")},handleSelect:function(e){console.log(e),this.upperlevel=e},handleOk:function(e){1==this.columnindex?this.addItem(this.leveldata1,this.addcolumn,"levelone"):2==this.columnindex?this.addItem(this.leveldata2,this.addcolumn,"leveltwo"):3==this.columnindex&&this.addItem(this.leveldata3,this.addcolumn,"levelthree")},addItem:function(e,t,n){e.some(function(e){return e.columnlevel==t})?s.message.error("已存在相同栏目名称"):(e.unshift({columnlevel:t}),this[n]=t,this.visible=!1)},handleCancel:function(e){this.visible=!1},handleOneChange:function(e){this.leveone=e}},watch:{levelone:function(e,t){var n=this;Object(l.c)({type:e}).then(function(e){var t=e.data;200==t.code&&(n.leveldata2=t.data,n.leveltwo=n.leveldata2[0]&&n.leveldata2[0].columnlevel)})},leveltwo:function(e,t){var n=this;Object(l.c)({type:e}).then(function(e){var t=e.data;200==t.code&&(n.leveldata3=t.data,n.levelthree=n.leveldata3[0]&&n.leveldata3[0].columnlevel)})}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"item"},[n("a",[e._v("一级栏目:")]),e._v(" "),n("div",{staticClass:"item-select"},[n("a-select",{staticStyle:{width:"70%"},model:{value:e.levelone,callback:function(t){e.levelone=t},expression:"levelone"}},e._l(e.leveldata1,function(t,l){return n("a-select-option",{key:l,attrs:{value:t.columnlevel}},[e._v(e._s(t.columnlevel))])}))],1),e._v(" "),n("div",{staticClass:"item-bt"},[n("a-button",{attrs:{type:"primary"},on:{click:function(t){e.showModal(1)}}},[e._v("新增")])],1)]),e._v(" "),n("div",{staticClass:"item"},[n("a",[e._v("二级栏目:")]),e._v(" "),n("div",{staticClass:"item-select"},[n("a-select",{staticStyle:{width:"70%"},attrs:{placeholder:"请选择栏目"},model:{value:e.leveltwo,callback:function(t){e.leveltwo=t},expression:"leveltwo"}},e._l(e.leveldata2,function(t,l){return n("a-select-option",{key:l,attrs:{value:t.columnlevel}},[e._v(e._s(t.columnlevel))])}))],1),e._v(" "),n("div",{staticClass:"item-bt"},[n("a-button",{attrs:{type:"primary"},on:{click:function(t){e.showModal(2)}}},[e._v("新增")])],1)]),e._v(" "),n("div",{staticClass:"item"},[n("a",[e._v("三级栏目:")]),e._v(" "),n("div",{staticClass:"item-select"},[n("a-select",{staticStyle:{width:"70%"},model:{value:e.levelthree,callback:function(t){e.levelthree=t},expression:"levelthree"}},e._l(e.leveldata3,function(t,l){return n("a-select-option",{key:l,attrs:{value:t.columnlevel}},[e._v(e._s(t.columnlevel))])}))],1),e._v(" "),n("div",{staticClass:"item-bt"},[n("a-button",{attrs:{type:"primary"},on:{click:function(t){e.showModal(3)}}},[e._v("新增")])],1)]),e._v(" "),n("a-modal",{attrs:{title:"新增栏目",visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"取消",okText:"确定"},on:{ok:e.handleOk,cancel:e.handleCancel}},[n("a-input",{staticStyle:{width:"50%","margin-top":"10px"},attrs:{placeholder:"请输入栏目名称"},on:{change:e.addhandelChange}})],1),e._v(" "),n("a-button",{staticClass:"bt-submit",attrs:{type:"primary"},on:{click:e.submit}},[e._v("保存")])],1)},staticRenderFns:[]};var u=n("VU/8")(c,d,!1,function(e){n("z2NS")},"data-v-200976a8",null);t.default=u.exports},mypn:function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var l,a,i,o,s,c=1,d={},u=!1,r=e.document,v=Object.getPrototypeOf&&Object.getPrototypeOf(e);v=v&&v.setTimeout?v:e,"[object process]"==={}.toString.call(e.process)?l=function(e){t.nextTick(function(){f(e)})}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){f(e.data)},l=function(e){i.port2.postMessage(e)}):r&&"onreadystatechange"in r.createElement("script")?(a=r.documentElement,l=function(e){var t=r.createElement("script");t.onreadystatechange=function(){f(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):l=function(e){setTimeout(f,0,e)}:(o="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&f(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),l=function(t){e.postMessage(o+t,"*")}),v.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var a={callback:e,args:t};return d[c]=a,l(c),c++},v.clearImmediate=m}function m(e){delete d[e]}function f(e){if(u)setTimeout(f,0,e);else{var t=d[e];if(t){u=!0;try{!function(e){var t=e.callback,l=e.args;switch(l.length){case 0:t();break;case 1:t(l[0]);break;case 2:t(l[0],l[1]);break;case 3:t(l[0],l[1],l[2]);break;default:t.apply(n,l)}}(t)}finally{m(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n("DuR2"),n("W2nU"))},z2NS:function(e,t){}});
//# sourceMappingURL=8.4cee26f62f1f05f50d0b.js.map