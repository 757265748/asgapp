webpackJsonp([23],{Y13p:function(t,e){},qL00:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),i=a.n(n),o=a("vMJZ"),s=a("NYxO"),r=[{title:"用户名",dataIndex:"username",width:"20%"},{title:"手机号",dataIndex:"phone"},{title:"邀请码",dataIndex:"Invitecode"}],d={mounted:function(){this.fetch()},computed:i()({},Object(s.b)(["operatorcode","pid"])),data:function(){return{data:[],pagination:{},loading:!1,keycode:"",columns:r}},methods:{search:function(t){this.keycode=t,this.fetch()},handleTableChange:function(t,e,a){console.log(t);var n=i()({},this.pagination);n.current=t.current,this.pagination=n,this.fetch(i()({results:t.pageSize,page:t.current,sortField:a.field,sortOrder:a.order},e))},fetch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("params:",e),this.loading=!0,Object(o.h)({OperatorCode:this.operatorcode,pid:this.pid,keycode:this.keycode}).then(function(e){console.log("请求到的数据",e);var a=i()({},t.pagination);a.total=e.data.results.length,t.loading=!1,t.data=e.data.results,t.pagination=a,console.log("请求到的数据",t.data)})}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"search-wrap"}},[e("a-input-search",{attrs:{placeholder:"请输入要查询的运营商编码",enterButton:""},on:{search:this.search}})],1),this._v(" "),e("a-table",{staticClass:"table",attrs:{columns:this.columns,dataSource:this.data,pagination:this.pagination,loading:this.loading},on:{change:this.handleTableChange}})],1)},staticRenderFns:[]};var l=a("VU/8")(d,c,!1,function(t){a("Y13p")},"data-v-09c07b6e",null);e.default=l.exports}});
//# sourceMappingURL=23.a82d344aa521b7bb7e48.js.map