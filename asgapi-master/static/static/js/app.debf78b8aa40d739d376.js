webpackJsonp([1],{"3A01":function(t,e){},"4Bfq":function(t,e){},"4iGn":function(t,e){},"7XwO":function(t,e){},KaYR:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=a("VU/8")({name:"App"},r,!1,function(t){a("YzoD")},null,null).exports,s=a("/ocq"),i=a("Dd8w"),l=a.n(i),c=a("NYxO"),u={computed:l()({},Object(c.b)(["name","phone","avatar"])),data:function(){return{collapsed:!1}},created:function(){this.init()},methods:{init:function(){var t=this;this.$store.dispatch("CheckLogin").then(function(e){console.log("isLogin",e),e||t.$router.push("/login")})},jump:function(t){if("/login"==t)return sessionStorage.clear(),void this.$router.push(t);this.$router.push(t)}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[a("a-layout-sider",{attrs:{collapsible:""},model:{value:t.collapsed,callback:function(e){t.collapsed=e},expression:"collapsed"}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.avatar}}),t._v(" "),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}]},[t._v(t._s(t.name))])]),t._v(" "),a("a-menu",{attrs:{theme:"dark",mode:"inline"}},[a("a-sub-menu",{key:"sub2"},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"user"}}),a("span",[t._v("会员管理")])],1),t._v(" "),a("a-menu-item",{key:"3",on:{click:function(e){t.jump("/member-list")}}},[t._v("我的代理")])],1),t._v(" "),a("a-sub-menu",{key:"sub3"},[a("span",{attrs:{slot:"title"},slot:"title"},[a("a-icon",{attrs:{type:"team"}}),a("span",[t._v("运营商管理")])],1),t._v(" "),a("a-menu-item",{key:"Operator1",on:{click:function(e){t.jump("/operator-detail")}}},[t._v("运营商信息")]),t._v(" "),a("a-menu-item",{key:"Operator2",on:{click:function(e){t.jump("/operator-user")}}},[t._v("我的会员")]),t._v(" "),a("a-menu-item",{key:"Operator3",on:{click:function(e){t.jump("/operator-itemdetail")}}},[t._v("商品信息")])],1)],1)],1),t._v(" "),a("a-layout",[a("a-layout-header",{staticStyle:{background:"#001529",padding:"0"}},[a("a-row",[a("a-col",{attrs:{span:21}}),t._v(" "),a("a-col",{attrs:{span:3}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.avatar}}),t._v(" "),a("a-dropdown",{attrs:{trigger:["click"]}},[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[t._v("\n                "+t._s(t.name)+"\n                "),a("a-icon",{attrs:{type:"down"}})],1),t._v(" "),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"2",on:{click:function(e){t.test()}}},[a("a",{attrs:{href:"#"}},[t._v("个人中心")])]),t._v(" "),a("a-menu-item",{key:"1"},[a("a",{attrs:{href:"#"}},[t._v("修改密码")])]),t._v(" "),a("a-menu-item",{key:"0",on:{click:function(e){t.jump("/login")}}},[t._v("\n                  退出登入\n                  ")])],1)],1)],1)])],1)],1),t._v(" "),a("a-layout-content",{staticStyle:{margin:"0 16px"}},[a("div",{style:{marginTop:"24px",padding:"24px",background:"#fff",minHeight:"600px"}},[a("router-view")],1)]),t._v(" "),a("a-layout-footer",{staticClass:"footer-container"},[t._v("\n      爱省购 ©2018 Created by HXDZ\n    ")])],1)],1)},staticRenderFns:[]};var p=a("VU/8")(u,d,!1,function(t){a("KaYR")},"data-v-7d96438e",null).exports,m=a("//Fk"),f=a.n(m),h=a("mtWM"),v=a.n(h),g=a("nSSd"),_=a.n(g),j=v.a.create({baseURL:"http://39.108.215.49/",timeout:5e3});j.interceptors.request.use(function(t){return t},function(t){console.log(t),f.a.reject(t)}),j.interceptors.response.use(function(t){return t},function(t){return console.log("err"+t),g.message.error("请求出错",4),f.a.reject(t)});var b=j;var y=[{title:"用户名",dataIndex:"username",width:"20%"},{title:"账号",dataIndex:"phone"},{title:"本月业绩",dataIndex:"commissionmonth"},{title:"总业绩",dataIndex:"commissiontotal"}],w={computed:l()({},Object(c.b)(["operatorcode"])),mounted:function(){this.fetch({operatorcode:this.operatorcode})},data:function(){return{data:[],pagination:{},loading:!1,columns:y}},methods:{handleTableChange:function(t,e,a){console.log(t);var n=l()({},this.pagination);n.current=t.current,this.pagination=n,this.fetch(l()({results:t.pageSize,page:t.current,sortField:a.field,sortOrder:a.order},e))},fetch:function(){var t,e=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(t=a,b({url:"api/post/pc/memberlist",method:"post",data:t})).then(function(t){console.log("数据",a);var n=t.data;if(200!=n.code)return e.$message.error("查无数据",4);e.data.push(n.result),console.log("res",t)})}}},k={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("a-table",{staticClass:"table",attrs:{columns:t.columns,dataSource:t.data,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"name",fn:function(e){return[t._v("\n    "+t._s(e.first)+" "+t._s(e.last)+"\n  ")]}}])})},staticRenderFns:[]};var C=a("VU/8")(w,k,!1,function(t){a("3A01")},"data-v-d92080e8",null).exports,E=a("fZjL"),S=a.n(E);function O(t){return S()(t).some(function(e){return t[e]})}var I={data:function(){return{hasErrors:O,form:null,isError:!1,show:!1,error:""}},created:function(){this.init()},mounted:function(){var t=this;this.$nextTick(function(){t.form.validateFields()})},methods:{init:function(){var t=this;this.$store.dispatch("CheckLogin").then(function(e){console.log("isLogin",e),e?t.$router.push("/"):t.$router.push("/login")})},userNameError:function(){var t=this.form,e=t.getFieldError;return(0,t.isFieldTouched)("user")&&e("user")},passwordError:function(){var t=this.form,e=t.getFieldError;return(0,t.isFieldTouched)("password")&&e("password")},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields(function(t,a){t||(console.log("Received values of form: ",a),a&&e.$store.dispatch("LoginByUsername",a).then(function(){e.$router.push({path:"/"})}))})}}},x={render:function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("a-layout",{staticClass:"layout",attrs:{id:"components-layout-demo-top"}},[n("a-layout",{staticClass:"layout-bg"},[n("a-layout-header",[n("div",{staticClass:"logo"},[n("span",{attrs:{slot:"title"},slot:"title"},[n("a-icon",{attrs:{type:"user"}}),e._v(" "),n("span",[e._v("爱省购后台管理系统")])],1)])]),e._v(" "),n("a-layout-content",{staticStyle:{padding:"0 50px"}},[n("a-alert",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{message:e.error,type:"error",showIcon:""}}),e._v(" "),n("a-breadcrumb",{staticStyle:{margin:"16px 0"}}),e._v(" "),n("div",{staticClass:"login-container"},[n("h3",[e._v("欢迎登入")]),e._v(" "),n("a-form",{attrs:{layout:"vertical",autoFormCreate:function(e){t.form=e}},on:{submit:e.handleSubmit}},[e.form?[n("a-form-item",{attrs:{validateStatus:e.userNameError()?"error":"",help:e.userNameError()||"",fieldDecoratorId:"user",fieldDecoratorOptions:{rules:[{type:"string",required:!0,message:"请输入正确的用户名!"}]}}},[n("a-input",{attrs:{placeholder:"Username"}},[n("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),e._v(" "),n("a-form-item",{attrs:{validateStatus:e.passwordError()?"error":"",help:e.passwordError()||"",fieldDecoratorId:"password",fieldDecoratorOptions:{rules:[{required:!0,message:"Please input your Password!"}]}}},[n("a-input",{attrs:{type:"password",placeholder:"Password"}},[n("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.isError,expression:"isError"}],staticClass:"errtxt"},[e._v("账号或密码错误")])],1),e._v(" "),n("a-form-item",[n("a-button",{attrs:{type:"primary",htmlType:"submit",disabled:e.hasErrors(e.form.getFieldsError())}},[e._v("登入")])],1)]:e._e()],2)],1)],1),e._v(" "),n("a-layout-footer",{staticClass:"footer-container"},[e._v("爱省购 ©2018 Created by HXDZ")])],1)],1)},staticRenderFns:[]};var T=a("VU/8")(I,x,!1,function(t){a("4Bfq")},"data-v-1193ee48",null).exports,D={data:function(){return{formLayout:"horizontal"}},methods:{handleSubmit:function(t){t.preventDefault(),this.form.validateFields(function(t,e){t||console.log("Received values of form: ",e)})},handleSelectChange:function(t){console.log(t),this.form.setFieldsValue({note:"Hi, "+("male"===t?"man":"lady")+"!"})}}},R={render:function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("a-form",{attrs:{autoFormCreate:function(e){t.form=e}},on:{submit:e.handleSubmit}},[n("a-form-item",{attrs:{label:"adzone_id",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:" ",fieldDecoratorOptions:{rules:[{type:"string",pattern:/^[1-9]+$/,required:!0,message:"请输入合法的adzone_id!"}]}}},[n("a-input")],1),e._v(" "),n("a-form-item",{attrs:{label:"类别",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"gender",fieldDecoratorOptions:{rules:[{required:!0,message:"请选择更新的类别!"}]}}},[n("a-select",{attrs:{placeholder:"请选择类别"}},[n("a-select-option",{attrs:{value:"male"}},[e._v("男装")]),e._v(" "),n("a-select-option",{attrs:{value:"female"}},[e._v("女装")])],1)],1),e._v(" "),n("a-form-item",{attrs:{label:"提示",labelCol:{span:5},wrapperCol:{span:12}}},[n("a",[e._v("*每次每种类别最多更新100条")])]),e._v(" "),n("a-form-item",{attrs:{wrapperCol:{span:12,offset:5}}},[n("a-button",{attrs:{type:"primary",htmlType:"submit"}},[e._v("\n      更新\n    ")])],1)],1)},staticRenderFns:[]},z=a("VU/8")(D,R,!1,null,null,null).exports,F={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("欢迎来到爱省购后台管理系统")])},staticRenderFns:[]};var P=a("VU/8")({},F,!1,function(t){a("bip6")},"data-v-0a6ab984",null).exports,N=a("woOf"),V=a.n(N),L=a("Gu7T"),A=a.n(L);var U=[{title:"运营商PID",dataIndex:"OperatorPID",sorter:!0,width:"20%"},{title:"运营商名称",dataIndex:"OperatorName",width:"20%",scopedSlots:{customRender:"OperatorName"}},{title:"运营商代号",dataIndex:"OperatorCode",scopedSlots:{customRender:"OperatorCode"}},{title:"操作",dataIndex:"operation",scopedSlots:{customRender:"operation"}}],q={mounted:function(){this.fetch()},data:function(){return{data:[],pagination:{},loading:!1,columns:U}},methods:{handleTableChange:function(t,e,a){console.log(t);var n=l()({},this.pagination);n.current=t.current,this.pagination=n,this.fetch(l()({results:t.pageSize,page:t.current,sortField:a.field,sortOrder:a.order},e))},fetch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("params:",e),this.loading=!0,b({url:"api/post/pc/operatordetail-select",method:"post",data:{}}).then(function(e){console.log("请求到的数据",e);var a=l()({},t.pagination);a.total=e.data.results.length,t.loading=!1,t.data=e.data.results,t.data.forEach(function(t,e){t.key=e.toString()}),t.cacheData=t.data.map(function(t){return l()({},t)}),t.pagination=a,console.log("请求到的数据",t.data)})},handleChange:function(t,e,a,n){var r=[].concat(A()(this.data)),o=r.filter(function(t){return e===t.key})[0];o&&(o[a]=t,this.data=r)},edit:function(t){var e=[].concat(A()(this.data)),a=e.filter(function(e){return t===e.key})[0];a&&(a.editable=!0,this.data=e)},save:function(t,e){var a,n=[].concat(A()(this.data));console.log("newData",n[e]),(a=n[e],b({url:"api/post/pc/operatordetail-update",method:"post",data:a})).then(function(t){console.log("请求到的数据save",t)});var r=n.filter(function(e){return t===e.key})[e];r&&(delete r.editable,this.data=n,console.log("newData",n[e].OperatorPID),this.cacheData=n.map(function(t){return l()({},t)}))},cancel:function(t){var e=[].concat(A()(this.data)),a=e.filter(function(e){return t===e.key})[0];a&&(V()(a,this.cacheData.filter(function(e){return t===e.key})[0]),delete a.editable,this.data=e)},onDelete:function(t,e){var a,n=[].concat(A()(this.data));console.log("key",t),(a=n[e],b({url:"api/post/pc/operatordetail-delete",method:"post",data:a})).then(function(t){});var r=n.filter(function(e){return e.OperatorPID!==t});console.log("newData1",r),this.data=n.filter(function(e){return e.OperatorPID!==t})},handleAdd:function(){var t=this,e=this.data,a=e.length,n="";(function(t){return b({url:"api/post/pc/pidtable",method:"post",data:t})})({}).then(function(r){if(r.data.results.length>0){n=r.data.results[0].pid,console.log("pid",n);var o={OperatorPID:n,OperatorName:"",OperatorCode:"",editable:!0};t.data=[].concat(A()(e),[o]);var s=[].concat(A()(t.data)),i=s.filter(function(t){return a===t.key})[a];i&&(i.editable=!0,t.data=s)}else t.$message.info("没有可用的PID")})},onCellChange:function(t,e){var a=this;return function(n){var r=[].concat(A()(a.data)),o=r.find(function(e){return e.key===t});o&&(o[e]=n,a.data=r)}}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-table",{staticClass:"table",attrs:{columns:t.columns,dataSource:t.data,pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([t._l(["OperatorPID","OperatorName","OperatorCode"],function(e,n){return{key:e,fn:function(n,r,o){return[a("div",{key:o},[r.editable?a("a-input",{staticStyle:{margin:"-5px 0"},attrs:{value:n},on:{change:function(a){return t.handleChange(a.target.value,r.key,e,o)}}}):[t._v(t._s(n))]],2)]}}}),{key:"operation",fn:function(e,n,r){return[a("div",{staticClass:"editable-row-operations"},[n.editable?a("span",[a("a",{on:{click:function(){return t.save(n.key,r)}}},[t._v("保存")]),t._v(" "),a("a-popconfirm",{attrs:{title:"确定要取消?"},on:{confirm:function(){return t.cancel(n.key)}}},[a("a",[t._v("取消")])])],1):a("span",[a("a",{on:{click:function(){return t.edit(n.key)}}},[t._v("修改")]),t._v(" "),a("a-popconfirm",{attrs:{title:"确定要删除?"},on:{confirm:function(){return t.onDelete(n.OperatorPID,r)}}},[a("a",[t._v("删除")])]),t._v(" "),a("a",{on:{click:function(){return t.handleAdd(n.key,r)}}},[t._v("新增")])],1)])]}}])})],1)},staticRenderFns:[]};var H=a("VU/8")(q,$,!1,function(t){a("4iGn")},"data-v-385f772a",null).exports,X=[{title:"PID",dataIndex:"PID",width:"20%"},{title:"用户名",dataIndex:"Username",width:"20%"},{title:"手机号",dataIndex:"Phone"},{title:"邀请码",dataIndex:"InviteCode"}],M={mounted:function(){this.fetch()},data:function(){return{data:[],pagination:{},loading:!1,columns:X}},methods:{handleTableChange:function(t,e,a){console.log(t);var n=l()({},this.pagination);n.current=t.current,this.pagination=n,this.fetch(l()({results:t.pageSize,page:t.current,sortField:a.field,sortOrder:a.order},e))},fetch:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};console.log("params:",e),this.loading=!0,b({url:"api/post/pc/user-select",method:"post",data:{OperatorCode:"mm"}}).then(function(e){console.log("请求到的数据",e);var a=l()({},t.pagination);a.total=e.data.results.length,t.loading=!1,t.data=e.data.results,t.pagination=a,console.log("请求到的数据",t.data)})}}},B={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("a-table",{staticClass:"table",attrs:{columns:this.columns,dataSource:this.data,pagination:this.pagination,loading:this.loading},on:{change:this.handleTableChange}})],1)},staticRenderFns:[]};var G=a("VU/8")(M,B,!1,function(t){a("nikd")},"data-v-4325e43b",null).exports;var K=[{title:"运营商ID",width:"8%",dataIndex:"seller_id"},{title:"运营商名称",width:"9%",dataIndex:"shop_title"},{title:"商品ID",width:"7%",dataIndex:"num_iid"},{title:"商品名称",width:"8%",dataIndex:"title"},{title:"价格",width:"6%",dataIndex:"zk_final_price"},{title:"库存数",width:"7%",dataIndex:"volume"},{title:"商品主图",width:"20%",dataIndex:"pict_url",scopedSlots:{customRender:"pict_url"}},{title:"商品小图",dataIndex:"small_images",scopedSlots:{customRender:"small_images"}},{title:"操作",dataIndex:"operation",width:"7%",scopedSlots:{customRender:"operation"}}],W={computed:l()({},Object(c.b)(["operatorcode"])),mounted:function(){this.fetch()},data:function(){return{data:[],pagination:{},loading:!1,previewImage:"",columns:K}},methods:{handleTableChange:function(t,e,a){console.log(t);var n=l()({},this.pagination);n.current=t.current,this.pagination=n,this.fetch(l()({results:t.pageSize,page:t.current,sortField:a.field,sortOrder:a.order},e))},fetch:function(){var t=this;arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.loading=!0;var e;(e={OperatorCode:this.operatorcode},b({url:"api/post/pc/operatoritemdetail-select",method:"post",data:e})).then(function(e){var a=l()({},t.pagination);a.total=e.data.results.length,t.loading=!1,t.data=e.data.results,t.pagination=a})},jump:function(t){if("/login"==t)return sessionStorage.clear(),void this.$router.push(t);this.$router.push(t)},onDelete:function(t,e){var a,n=[].concat(A()(this.data));console.log("key",t),(a=n[e],b({url:"api/post/pc/operatoritemdetail-delete",method:"post",data:a})).then(function(t){});var r=n.filter(function(e){return e.num_iid!==t});console.log("newData1",r),this.data=n.filter(function(e){return e.num_iid!==t})}}},Z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("a-table",{staticClass:"table",attrs:{columns:t.columns,dataSource:t.data,scroll:{x:2300},pagination:t.pagination,loading:t.loading},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"operation",fn:function(e,n,r){return[t.data.length?a("a-popconfirm",{attrs:{title:"Sure to delete?"},on:{confirm:function(){return t.onDelete(n.num_iid,r)}}},[a("a",{attrs:{href:"javascript:;"}},[t._v("删除")])]):t._e()]}},{key:"pict_url",fn:function(e,n,r){return[n.pict_url.length>0?a("div",{staticClass:"small_img"},t._l(n.pict_url,function(t,e){return a("img",{key:e,staticClass:"pic-url",attrs:{src:t}})})):t._e()]}},{key:"small_images",fn:function(e,n,r){return[n.small_images.length>0?a("div",{staticClass:"small_img"},t._l(n.small_images,function(t,e){return a("img",{key:e,staticClass:"pic-url",attrs:{src:t}})})):t._e()]}}])}),t._v(" "),a("a-form-item",{attrs:{wrapperCol:{span:12,offset:5}}},[a("a-button",{attrs:{type:"primary",htmlType:"submit"},on:{click:function(e){t.jump("/additemid")}}},[t._v("新增")])],1)],1)},staticRenderFns:[]};var Y=a("VU/8")(W,Z,!1,function(t){a("7XwO")},"data-v-fa868302",null).exports,J={computed:l()({},Object(c.b)(["operatorcode"])),data:function(){return{previewVisible:!1,previewImage:"",fileList:[{}],previewVisible1:!1,previewImage1:"",fileList1:[{}],pic_url:[],small_img:[]}},methods:{handleCancel:function(){this.previewVisible=!1},handlePreview:function(t){this.previewImage=t.url||t.thumbUrl,this.previewVisible=!0},handlePreview1:function(t){this.previewImage1=t.url||t.thumbUrl,this.previewVisible1=!0},handleChange:function(t){var e=t.fileList;this.fileList=e,e[0]&&e[0].response&&(this.pic_url.push(e[0].response.result),console.log("pic",this.pic_url))},handleChange1:function(t){var e=t.fileList;this.fileList1=e,e[0]&&e[0].response&&(this.small_img.push(e[0].response.result),console.log("small",e[0].response,this.small_img))},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields(function(t,a){var n;t||(a.seller_id=e.operatorcode,a.shop_title="chl店",a.pic_url=e.pic_url,a.small_img=e.small_img,delete a.pict_url,delete a.small_images,(n=a,b({url:"api/post/pc/operatoritemdetail-insert",method:"post",data:n})).then(function(t){200==t.data.code&&(e.$message.success("新增成功！",4),e.$router.push("./operator-itemdetail"))}),console.log("values",a))})}}},Q={render:function(){var t=this,e=this,a=e.$createElement,n=e._self._c||a;return n("a-form",{attrs:{autoFormCreate:function(e){t.form=e}},on:{submit:e.handleSubmit}},[n("a-form-item",{attrs:{label:"商品ID",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"num_iid",fieldDecoratorOptions:{rules:[{type:"string",pattern:/^[1-9]+$/,required:!0,message:"请输入合法的seller_id!"}]}}},[n("a-input",{attrs:{id:"num_iid"}})],1),e._v(" "),n("a-form-item",{attrs:{label:"商品类别",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"gender",fieldDecoratorOptions:{rules:[{required:!0,message:"Please select your gender!"}]}}},[n("a-select",{attrs:{placeholder:"请选择类别",id:"gender"}},[n("a-select-option",{attrs:{value:"male"}},[e._v("男装")]),e._v(" "),n("a-select-option",{attrs:{value:"female"}},[e._v("女装")])],1)],1),e._v(" "),n("a-form-item",{attrs:{label:"价格",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"zk_final_price",fieldDecoratorOptions:{rules:[{type:"string",pattern:/^[1-9]+$/,required:!0,message:"请输入数字!"}]}}},[n("a-input",{attrs:{id:"zk_final_price"}})],1),e._v(" "),n("a-form-item",{attrs:{label:"库存数",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"volume",fieldDecoratorOptions:{rules:[{type:"string",pattern:/^[1-9]+$/,required:!0,message:"请输入数字!"}]}}},[n("a-input",{attrs:{id:"volume"}})],1),e._v(" "),n("a-form-item",{attrs:{label:"商品主图",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"pict_url",fieldDecoratorOptions:{rules:[]}}},[n("a-upload",{attrs:{label:"商品主图",action:"//39.108.215.49/api/post/upload/pic_url",listType:"picture-card"},on:{preview:e.handlePreview,change:e.handleChange}},[e.fileList.length<2?n("div",[n("a-icon",{attrs:{type:"plus"}}),e._v(" "),n("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1):e._e()]),e._v(" "),n("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:e.handleCancel}},[n("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1),e._v(" "),n("a-form-item",{attrs:{label:"商品小图",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"small_images",fieldDecoratorOptions:{rules:[]}}},[n("a-upload",{attrs:{label:"商品小图",action:"//39.108.215.49/api/post/upload/small_img",listType:"picture-card"},on:{preview:e.handlePreview1,change:e.handleChange1}},[e.fileList1.length<5?n("div",[n("a-icon",{attrs:{type:"plus"}}),e._v(" "),n("div",{staticClass:"ant-upload-text"},[e._v("上传图片")])],1):e._e()]),e._v(" "),n("a-modal",{attrs:{visible:e.previewVisible1,footer:null},on:{cancel:e.handleCancel}},[n("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage1}})])],1),e._v(" "),n("a-form-item",{attrs:{wrapperCol:{span:12,offset:5}}},[n("a-button",{attrs:{type:"primary",htmlType:"submit"}},[e._v("新增")])],1)],1)},staticRenderFns:[]};var tt=a("VU/8")(J,Q,!1,function(t){a("fbw7")},null,null).exports;n.default.use(s.a);var et=new s.a({routes:[{path:"/",component:p,redirect:"/home",children:[{path:"/home",component:P},{path:"/member-list",component:C},{path:"/upcounpons",component:z},{path:"/operator-detail",component:H},{path:"/operator-user",component:G},{path:"/operator-itemdetail",component:Y},{path:"/additemid",component:tt}]},{path:"/login",component:T}]}),at=(a("hZ/y"),{phone:function(t){return t.user.phone},pid:function(t){return t.user.pid},avatar:function(t){return t.user.avatar},operatorcode:function(t){return t.user.operatorcode},name:function(t){return t.user.name}}),nt=a("mvHQ"),rt=a.n(nt),ot={state:{phone:"",name:"",avatar:"",introduction:"",operatorcode:""},mutations:{SET_NAME:function(t,e){t.name=e},SET_AVATAR:function(t,e){t.avatar=e},SET_PID:function(t,e){t.pid=e},SET_PHONE:function(t,e){t.phone=e},SET_OPERATORCODE:function(t,e){t.operatorcode=e}},actions:{CheckLogin:function(t){var e=t.commit;return new f.a(function(t,a){var n=JSON.parse(sessionStorage.getItem("user"));n?(e("SET_NAME",n.name),e("SET_AVATAR",n.avatar),e("SET_PID",n.pid),e("SET_PHONE",n.phone),e("SET_OPERATORCODE",n.operatorcode),t(!0)):t(!1)})},LoginByUsername:function(t,e){var a=t.commit;return new f.a(function(t,n){var r;(r={user:e.user,password:e.password},b({url:"api/post/user/pc/login",method:"post",data:r})).then(function(e){var n=e.data;if(200!=n.code)g.message.error(n.msg,3),t(n);else{var r=n.user;sessionStorage.setItem("user",rt()(r)),a("SET_NAME",r.name),a("SET_AVATAR",r.avatar),a("SET_PID",r.pid),a("SET_PHONE",r.phone),a("SET_OPERATORCODE",r.operatorcode),t(!0)}}).catch(function(t){n(t)})})},GetUserInfo:function(t){var e=t.commit,a=t.state;return new f.a(function(t,n){getUserInfo(a.token).then(function(a){a.data||n("Verification failed, please login again.");var r=a.data;r.roles&&r.roles.length>0?e("SET_ROLES",r.roles):n("getInfo: roles must be a non-null array!"),e("SET_NAME",r.name),e("SET_AVATAR",r.avatar),e("SET_INTRODUCTION",r.introduction),t(a)}).catch(function(t){n(t)})})},LogOut:function(t){var e=t.commit,a=t.state;return new f.a(function(t,n){logout(a.token).then(function(){e("SET_TOKEN",""),e("SET_ROLES",[]),removeToken(),t()}).catch(function(t){n(t)})})},FedLogOut:function(t){var e=t.commit;return new f.a(function(t){e("SET_TOKEN",""),removeToken(),t()})},ChangeRoles:function(t,e){var a=t.commit,n=t.dispatch;return new f.a(function(t){a("SET_TOKEN",e),setToken(e),getUserInfo(e).then(function(e){var r=e.data;a("SET_ROLES",r.roles),a("SET_NAME",r.name),a("SET_AVATAR",r.avatar),a("SET_INTRODUCTION",r.introduction),n("GenerateRoutes",r),t()})})}}};n.default.use(c.a);var st=new c.a.Store({modules:{user:ot},getters:at});n.default.use(_.a),n.default.config.productionTip=!1,n.default.prototype.$message=g.message,new n.default({el:"#app",router:et,store:st,components:{App:o},template:"<App/>"})},YzoD:function(t,e){},bip6:function(t,e){},fbw7:function(t,e){},"hZ/y":function(t,e){},nikd:function(t,e){},uslO:function(t,e,a){var n={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return a(o(t))}function o(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(n)},r.resolve=o,t.exports=r,r.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.debf78b8aa40d739d376.js.map