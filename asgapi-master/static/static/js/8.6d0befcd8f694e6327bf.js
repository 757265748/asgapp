webpackJsonp([8],{"2rue":function(t,e){},sZPq:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),o=a.n(n),s=a("NYxO"),i=a("vMJZ"),r=[{title:"用户名",dataIndex:"username",width:"20%"},{title:"账号",dataIndex:"phone"},{title:"本月业绩",dataIndex:"commissionmonth"},{title:"总业绩",dataIndex:"commissiontotal"},{title:"操作",dataIndex:"id",scopedSlots:{customRender:"operation"}}],d={computed:o()({},Object(s.b)(["operatorcode"])),mounted:function(){this.fetch({operatorcode:this.operatorcode})},data:function(){return{data:[],pagination:{},loading:!1,columns:r,modalVisible:!1,memberdata:null,bttilte:""}},methods:{search:function(t){this.fetch({operatorcode:t})},onSelect:function(t){var e=this;this.modalVisible=!0,Object(i.b)({phone:this.data[t].phone}).then(function(t){e.memberdata=t.data.data,e.bttilte=2==e.memberdata.type?"撤销团长":"升级团长",console.log("shuju",e.memberdata)})},showConfirm:function(){var t=this;this.$confirm({title:"提示",content:3==t.memberdata.type?"是否将该用户升级为团长":"是否撤销该用户团长",onOk:function(){t.upgradelevel(t.memberdata.phone,t.memberdata.type)},onCancel:function(){}})},upgradelevel:function(t,e){var a=this;e=2==e?3:2,Object(i.e)({phone:t,type:e}).then(function(t){a.memberdata=t.data.data,a.bttilte=2==a.memberdata.type?"撤销团长":"升级团长",a.$message.success(2==a.memberdata.type?"升级成功":"撤销成功"),console.log("更新后的",a.memberdata)})},handleTableChange:function(t,e,a){var n=o()({},this.pagination);n.current=t.current,this.pagination=n,this.fetch(o()({results:t.pageSize,page:t.current,sortField:a.field,sortOrder:a.order},e))},fetch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.loading=!0,Object(i.a)(e).then(function(a){console.log("数据",e),t.loading=!1;var n=a.data;if(200!=n.code)return t.$message.error("查无数据",4);for(var o in n.result)n.result[o].id=o;t.data=[],t.data=n.result,console.log("res",t.data)})}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"search-wrap"}},[a("a-input-search",{attrs:{placeholder:"请输入要查询的运营商编码",enterButton:""},on:{search:t.search}})],1),t._v(" "),a("a-table",{staticClass:"table",attrs:{columns:t.columns,dataSource:t.data,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"name",fn:function(e){return[t._v("\n      "+t._s(e.first)+" "+t._s(e.last)+"\n    ")]}},{key:"operation",fn:function(e){return[a("div",{staticClass:"editable-row-operations"},[a("span",[a("a",{on:{click:function(a){t.onSelect(e)}}},[t._v("查看详情")])])])]}}])}),t._v(" "),a("div",{attrs:{id:"components-modal-demo-position"}},[a("a-modal",{attrs:{title:"会员信息",centered:""},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[t.memberdata?a("div",{staticClass:"content"},[a("a-avatar",{attrs:{size:100,src:t.memberdata.avatar,alt:"点击更换头像"}}),t._v(" "),a("div",[a("p",{staticClass:"txt"},[t._v("昵称: "+t._s(t.memberdata.username))]),t._v(" "),a("p",{staticClass:"txt"},[t._v("电话: "+t._s(t.memberdata.phone))]),t._v(" "),a("p",{staticClass:"txt"},[t._v("支付宝账号: "+t._s(t.memberdata.zfb))]),t._v(" "),a("p",{staticClass:"txt"},[t._v("性别: "+t._s(t.memberdata.sex))]),t._v(" "),a("p",{staticClass:"txt"},[t._v("支付宝名称: "+t._s(t.memberdata.zfbname))]),t._v(" "),a("p",{staticClass:"txt"},[t._v("推广位ID: "+t._s(t.memberdata.pid))]),t._v(" "),a("p",{staticClass:"txt"},[t._v("所属运营商代号: "+t._s(t.memberdata.operatorcode))]),t._v(" "),a("p",{staticClass:"txt"},[t._v("等级: "+t._s(t.memberdata.jurisdiction))]),t._v(" "),a("p",{staticClass:"txt"},[t._v("邀请码: "+t._s(t.memberdata.invitecode))])]),t._v(" "),t.memberdata.type>1?a("a-button",{attrs:{type:"primary"},on:{click:t.showConfirm}},[t._v(t._s(t.bttilte))]):t._e()],1):t._e(),t._v(" "),a("template",{slot:"footer"},[a("a-button",{key:"submit",attrs:{type:"primary",loading:t.loading},on:{click:function(){return t.modalVisible=!1}}},[t._v("\n          关闭\n        ")])],1)],2)],1)],1)},staticRenderFns:[]};var c=a("VU/8")(d,l,!1,function(t){a("2rue")},"data-v-a4bb273c",null);e.default=c.exports}});
//# sourceMappingURL=8.6d0befcd8f694e6327bf.js.map