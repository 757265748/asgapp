webpackJsonp([14],{QZn7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("woOf"),c=n.n(a),i=n("Gu7T"),o=n.n(i),r=n("Dd8w"),l=n.n(r),u=n("L9TO"),d=[{title:"级别",dataIndex:"levels",scopedSlots:{customRender:"levels"}},{title:"栏目",dataIndex:"columnlevel",scopedSlots:{customRender:"columnlevel"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],s={data:function(){return{data:[],cacheData:[],columns:d}},created:function(){this.init()},methods:{init:function(){var t=this;Object(u.c)().then(function(e){var n=e.data;200==n.code&&(t.data=n.data,t.cacheData=t.data.map(function(t){return l()({},t)}))})},handleDelete:function(t,e){var n=this;Object(u.a)({column:t.columnlevel}).then(function(t){n.init()})},handleChange:function(t,e,n){var a=[].concat(o()(this.data)),c=a.filter(function(t,n){return n===e})[0];c&&(c[n]=t,this.data=a)},edit:function(t,e){var n=[].concat(o()(this.data)),a=n.filter(function(t,n){return n===e})[0];a&&(a.editable=!0,this.data=n)},save:function(t){var e=[].concat(o()(this.data)),n=e.filter(function(e,n){return n===t})[0],a=this.cacheData.filter(function(e,n){return n===t})[0];n&&(delete n.editable,this.data=e,this.cacheData=e.map(function(t){return l()({},t)}),Object(u.i)({oldval:a.columnlevel,newval:n.columnlevel}).then(function(t){}))},cancel:function(t){var e=[].concat(o()(this.data)),n=e.filter(function(e,n){return n===t})[0];n&&(c()(n,this.cacheData.filter(function(e,n){return n===t})[0]),delete n.editable,this.data=e)}}},f={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"newsection"}},[n("a-button",{staticClass:"editable-add-btn",attrs:{type:"primary"}},[t._v("新增")])],1),t._v(" "),n("a-table",{attrs:{columns:t.columns,dataSource:t.data,bordered:""},scopedSlots:t._u([t._l(["columnlevel"],function(e){return{key:e,fn:function(a,c,i){return[n("div",{key:e},[c.editable?n("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:a},on:{change:function(n){return t.handleChange(n.target.value,i,e)}}}):[t._v(t._s(a))]],2)]}}}),{key:"operation",fn:function(e,a,c){return[n("div",{staticClass:"editable-row-operations"},[a.editable?n("span",[n("a",{on:{click:function(){return t.save(c)}}},[t._v("保存")]),t._v(" "),n("a-popconfirm",{attrs:{title:"Sure to cancel?"},on:{confirm:function(){return t.cancel(c)}}},[n("a",[t._v("取消")])])],1):n("span",[n("a",{on:{click:function(){return t.edit(a,c)}}},[t._v("修改")])]),t._v(" "),n("span",[n("a",{on:{click:function(e){t.handleDelete(a,c)}}},[t._v("删除")])])])]}}])})],1)},staticRenderFns:[]};var v=n("VU/8")(s,f,!1,function(t){n("XWzN")},"data-v-90812a6e",null);e.default=v.exports},XWzN:function(t,e){}});
//# sourceMappingURL=14.bcb471b953eb4b80aa6a.js.map