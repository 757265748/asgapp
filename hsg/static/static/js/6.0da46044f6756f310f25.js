webpackJsonp([6],{FID0:function(t,e){},QNa8:function(t,e,i){"use strict";var o=i("vMJZ"),n=[{title:"合伙人编号",dataIndex:"usercode",width:"20%",scopedSlots:{customRender:"usercode"}},{title:"用户名",dataIndex:"username"},{title:"注册时间",dataIndex:"registerdata",scopedSlots:{customRender:"registerdata"}},{title:"账号",dataIndex:"phone"},{title:"本月业绩",dataIndex:"commissionmonth",scopedSlots:{customRender:"commissionmonth"}},{title:"总业绩",dataIndex:"commissiontotal",scopedSlots:{customRender:"commissiontotal"}},{title:"合伙人等级",dataIndex:"jurisdiction",scopedSlots:{customRender:"jurisdiction"}},{title:"操作",dataIndex:"id",scopedSlots:{customRender:"operation"}}],s={filters:{slicedate:function(t){if(t)return t.slice(0,10)}},props:{levelIsShow:{type:Boolean,default:!0},memberdata:{type:[Array],default:[]}},created:function(){},mounted:function(){console.log("mounted",this.memberdata)},data:function(){return{pagination:{},loading:!1,columns:n,modalVisible:!1,bttilte:"",isDisabled:!1}},methods:{onSelect:function(t){this.$router.push({path:"/member-information",query:{phone:t.phone,pid:t.pid}})},tipcolor:function(t){return console.log("等级",this.memberdata[t].jurisdiction),"合伙人"==this.memberdata[t].jurisdiction?"blue":"red"},handleInputChange:function(t){var e=this;!this.levelIsShow||"合伙人"!==this.memberdata[t].jurisdiction&&"团长"!==this.memberdata[t].jurisdiction?this.$message.error("无权限修改"):(console.log("进入了",this.levelIsShow,this.memberdata[t].jurisdiction),this.memberdata[t].jurisdiction="合伙人"==this.memberdata[t].jurisdiction?"团长":"合伙人",this.isDisabled=!0,Object(o.i)({phone:this.memberdata[t].phone,jurisdiction:this.memberdata[t].jurisdiction}).then(function(t){e.isDisabled=!1,console.log("sdaf",t)}))},jump:function(t,e,i){this.$router.push({path:t,query:{pid:e,type:i}})}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isDisabled,expression:"isDisabled"}],staticClass:"loading-wrap"},[i("a-spin",{staticClass:"loading"})],1),t._v(" "),i("a-table",{staticClass:"table",attrs:{columns:t.columns,dataSource:t.memberdata,pagination:t.pagination,loading:t.loading},scopedSlots:t._u([{key:"usercode",fn:function(e){return[t._v(t._s(e))]}},{key:"commissionmonth",fn:function(e,o){return[i("div",{staticClass:"editable-row-operations"},[i("span",[i("a",{on:{click:function(e){t.jump("/orderlist",o.pid,"month")}}},[t._v(t._s(e))])])])]}},{key:"commissiontotal",fn:function(e,o){return[i("div",{staticClass:"editable-row-operations"},[i("span",[i("a",{on:{click:function(e){t.jump("/orderlist",o.pid,"total")}}},[t._v(t._s(e))])])])]}},{key:"registerdata",fn:function(e){return[i("div",{staticClass:"editable-row-operations"},[i("span",[i("a",[t._v(t._s(t._f("slicedate")(e)))])])])]}},{key:"jurisdiction",fn:function(e,o,n){return i("span",{},[i("a-tag",{attrs:{color:t.tipcolor(n),disabled:""},on:{click:function(e){t.handleInputChange(n)}}},[t._v(t._s(e))])],1)}},{key:"operation",fn:function(e,o){return[i("div",{staticClass:"editable-row-operations"},[i("span",[i("a",{on:{click:function(e){t.onSelect(o)}}},[t._v("查看详情")])])])]}}])})],1)},staticRenderFns:[]};var r=i("VU/8")(s,a,!1,function(t){i("FID0")},"data-v-29ad68c8",null);e.a=r.exports},bNRH:function(t,e){},sZPq:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("Dd8w"),n=i.n(o),s=i("NYxO"),a=i("vMJZ"),r=i("QNa8"),d={computed:n()({},Object(s.b)(["operatorcode"])),components:{MeberForm:r.a},mounted:function(){this.fetch({operatorcode:this.operatorcode})},data:function(){return{data:[],pagination:{},loading:!1,modalVisible:!1,memberdata:null,bttilte:"",isDisabled:!1}},methods:{search:function(t){this.fetch({operatorcode:t})},handleTableChange:function(t,e,i){var o=n()({},this.pagination);o.current=t.current,this.pagination=o,this.fetch(n()({results:t.pageSize,page:t.current,sortField:i.field,sortOrder:i.order},e))},fetch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=this.$route.query.type;this.loading=!0,"all"==i?Object(a.b)().then(function(e){t.loading=!1;var i=e.data;if(200!=i.code)return t.$message.error("查无数据",4);for(var o in i.result)i.result[o].id=o,i.result[o].commissionmonth=i.result[o].commissionmonth||0,i.result[o].commissiontotal=i.result[o].commissiontotal||0;t.data=[],t.data=i.result,console.log("res",t.data)}):Object(a.c)(e).then(function(i){console.log("数据",e),t.loading=!1;var o=i.data;if(200!=o.code)return t.$message.error("查无数据",4);for(var n in o.result)o.result[n].id=n,o.result[n].commissionmonth=o.result[n].commissionmonth||0,o.result[n].commissiontotal=o.result[n].commissiontotal||0;t.data=[],t.data=o.result,console.log("res",t.data)})}},watch:{$route:function(t,e){this.fetch({operatorcode:this.operatorcode})}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{attrs:{id:"search-wrap"}},[e("a-input-search",{attrs:{placeholder:"请输入要查询的运营商编码",enterButton:""},on:{search:this.search}})],1),this._v(" "),e("meber-form",{attrs:{memberdata:this.data}})],1)},staticRenderFns:[]};var l=i("VU/8")(d,c,!1,function(t){i("bNRH")},"data-v-6f853d9c",null);e.default=l.exports}});
//# sourceMappingURL=6.0da46044f6756f310f25.js.map