webpackJsonp([13],{Dtsh:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r}),n.d(e,"c",function(){return o});var a=n("D/cR");function i(t){return Object(a.a)({url:"api/post/pc/operatoritemdetail-select",method:"post",data:t})}function r(t){return Object(a.a)({url:"api/post/pc/operatoritemdetail-delete",method:"post",data:t})}function o(t){return Object(a.a)({url:"api/post/pc/operatoritemdetail-insert",method:"post",data:t})}},I8p4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("Gu7T"),i=n.n(a),r=n("Dd8w"),o=n.n(r),l=n("Dtsh"),s=n("NYxO"),c=[{title:"运营商ID",width:"8%",dataIndex:"seller_id"},{title:"运营商名称",width:"9%",dataIndex:"shop_title"},{title:"商品ID",width:"7%",dataIndex:"num_iid"},{title:"商品名称",width:"8%",dataIndex:"title"},{title:"价格",width:"6%",dataIndex:"zk_final_price"},{title:"库存数",width:"7%",dataIndex:"volume"},{title:"商品主图",width:"20%",dataIndex:"pict_url",scopedSlots:{customRender:"pict_url"}},{title:"商品小图",dataIndex:"small_images",scopedSlots:{customRender:"small_images"}},{title:"操作",dataIndex:"operation",width:"7%",scopedSlots:{customRender:"operation"}}],d={computed:o()({},Object(s.b)(["operatorcode"])),mounted:function(){this.fetch()},data:function(){return{data:[],pagination:{},loading:!1,previewImage:"",columns:c}},methods:{handleTableChange:function(t,e,n){console.log(t);var a=o()({},this.pagination);a.current=t.current,this.pagination=a,this.fetch(o()({results:t.pageSize,page:t.current,sortField:n.field,sortOrder:n.order},e))},fetch:function(){var t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loading=!0;Object(l.a)({OperatorCode:this.$route.query.OperatorCode}).then(function(e){var n=o()({},t.pagination);n.total=e.data.results.length,t.loading=!1,t.data=e.data.results,t.pagination=n})},jump:function(t){if("/login"==t)return sessionStorage.clear(),void this.$router.push(t);this.$router.push(t)},onDelete:function(t,e){var n=[].concat(i()(this.data));console.log("key",t),Object(l.b)(n[e]).then(function(t){});var a=n.filter(function(e){return e.num_iid!==t});console.log("newData1",a),this.data=n.filter(function(e){return e.num_iid!==t})}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("a-table",{staticClass:"table",attrs:{columns:t.columns,dataSource:t.data,scroll:{x:2300},pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"operation",fn:function(e,a,i){return[t.data.length?n("a-popconfirm",{attrs:{title:"Sure to delete?"},on:{confirm:function(){return t.onDelete(a.num_iid,i)}}},[n("a",{attrs:{href:"javascript:;"}},[t._v("删除")])]):t._e()]}},{key:"pict_url",fn:function(e,a,i){return[a.pict_url.length>0?n("div",{staticClass:"small_img"},t._l(a.pict_url,function(t,e){return n("img",{key:e,staticClass:"pic-url",attrs:{src:t}})})):t._e()]}},{key:"small_images",fn:function(e,a,i){return[a.small_images.length>0?n("div",{staticClass:"small_img"},t._l(a.small_images,function(t,e){return n("img",{key:e,staticClass:"pic-url",attrs:{src:t}})})):t._e()]}}])}),t._v(" "),n("a-form-item",{attrs:{wrapperCol:{span:12,offset:5}}},[n("a-button",{attrs:{type:"primary",htmlType:"submit"},on:{click:function(e){t.jump("/additemid")}}},[t._v("新增")])],1)],1)},staticRenderFns:[]};var p=n("VU/8")(d,u,!1,function(t){n("TPhP")},"data-v-875a48e8",null);e.default=p.exports},TPhP:function(t,e){}});
//# sourceMappingURL=13.8c6808ad3d4da4a14886.js.map