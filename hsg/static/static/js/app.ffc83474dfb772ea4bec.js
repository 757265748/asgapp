webpackJsonp([25],{"D/cR":function(t,n,e){"use strict";var s=e("//Fk"),o=e.n(s),a=e("mtWM"),r=e.n(a),i=e("nSSd"),u=(e.n(i),r.a.create({baseURL:"http://39.108.215.49/",timeout:5e3}));u.interceptors.request.use(function(t){return t},function(t){console.log(t),o.a.reject(t)}),u.interceptors.response.use(function(t){return t},function(t){return console.log("err"+t),i.message.error("请求出错",4),o.a.reject(t)}),n.a=u},M9A7:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var s=e("D/cR");function o(t){return Object(s.a)({url:"api/post/user/pc/login",method:"post",data:t})}},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("7+uW"),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var a=e("VU/8")({name:"App"},o,!1,function(t){e("h4G9")},null,null).exports,r=e("/ocq");e("dAjm");s.default.use(r.a);var i=new r.a({routes:[{path:"/",component:function(){return new Promise(function(t){t()}).then(e.bind(null,"dAjm"))},redirect:"/home",children:[{path:"/home",component:function(){return e.e(21).then(e.bind(null,"bGVE"))}},{path:"/member-list",component:function(){return Promise.all([e.e(0),e.e(6)]).then(e.bind(null,"sZPq"))}},{path:"/upcounpons",component:function(){return e.e(23).then(e.bind(null,"t/pk"))}},{path:"/operator-detail",component:function(){return Promise.all([e.e(0),e.e(10)]).then(e.bind(null,"3owz"))}},{path:"/operator-user",component:function(){return Promise.all([e.e(0),e.e(22)]).then(e.bind(null,"qL00"))}},{path:"/operator-itemdetail",component:function(){return Promise.all([e.e(0),e.e(13)]).then(e.bind(null,"I8p4"))}},{path:"/additemid",component:function(){return Promise.all([e.e(0),e.e(14)]).then(e.bind(null,"yMGr"))}},{path:"/changepsw",component:function(){return Promise.all([e.e(0),e.e(12)]).then(e.bind(null,"Aob5"))}},{path:"/user",component:function(){return Promise.all([e.e(0),e.e(15)]).then(e.bind(null,"o6wc"))}},{path:"/orderlist",component:function(){return Promise.all([e.e(0),e.e(19)]).then(e.bind(null,"25K/"))}},{path:"/commission",component:function(){return e.e(16).then(e.bind(null,"8ANY"))}},{path:"/cash-drawal",component:function(){return e.e(3).then(e.bind(null,"B7Gt"))}},{path:"/member-information",component:function(){return Promise.all([e.e(0),e.e(8)]).then(e.bind(null,"9x0B"))}},{path:"/newslist",component:function(){return Promise.all([e.e(0),e.e(17)]).then(e.bind(null,"sr/F"))}},{path:"/additemidnews",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"7xge"))}},{path:"/commissionmonth-list",component:function(){return Promise.all([e.e(0),e.e(20)]).then(e.bind(null,"XF0F"))}},{path:"/commissiontotal-list",component:function(){return Promise.all([e.e(0),e.e(18)]).then(e.bind(null,"z7X/"))}},{path:"/registeroperator",component:function(){return Promise.all([e.e(0),e.e(9)]).then(e.bind(null,"rqFe"))}},{path:"/test",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"QZn7"))}},{path:"/newsection",component:function(){return Promise.all([e.e(0),e.e(7)]).then(e.bind(null,"LVi4"))}}]},{path:"/login",component:function(){return e.e(2).then(e.bind(null,"K31e"))}},{path:"/404",component:function(){return e.e(1).then(e.bind(null,"svbu"))}},{path:"/401",component:function(){return e.e(11).then(e.bind(null,"TW7K"))}},{path:"*",component:function(){return e.e(1).then(e.bind(null,"svbu"))}}]}),u=e("nSSd"),c=e.n(u),l=(e("hZ/y"),e("NYxO")),m={phone:function(t){return t.user.phone},pid:function(t){return t.user.pid},avatar:function(t){return t.user.avatar},operatorcode:function(t){return t.user.operatorcode},name:function(t){return t.user.name},jurisdiction:function(t){return t.user.jurisdiction},txmessage:function(t){return t.user.txmessage},play:function(t){return t.user.play}},p=e("mvHQ"),d=e.n(p),h=e("//Fk"),j=e.n(h),f=e("M9A7"),v=e("VjGe"),g={state:{phone:"",name:"",avatar:"",introduction:"",operatorcode:"",jurisdiction:"",txmessage:"",play:!0},mutations:{SET_NAME:function(t,n){t.name=n},SET_AVATAR:function(t,n){t.avatar=n},SET_PID:function(t,n){t.pid=n},SET_PHONE:function(t,n){t.phone=n},SET_OPERATORCODE:function(t,n){t.operatorcode=n},SET_JURISDICTION:function(t,n){t.jurisdiction=n},SET_TXMESSAGE:function(t,n){t.txmessage=n},SET_PLAY:function(t,n){t.play=n}},actions:{CheckLogin:function(t){var n=t.commit;return new j.a(function(t,e){var s=JSON.parse(sessionStorage.getItem("user"));s?(n("SET_NAME",s.name),n("SET_AVATAR",s.avatar),n("SET_PID",s.pid),n("SET_PHONE",s.phone),n("SET_OPERATORCODE",s.operatorcode),n("SET_JURISDICTION",s.jurisdiction),n("SET_TXMESSAGE",s.txdata),t(!0)):t(!1)})},LoginByUsername:function(t,n){var e=this,s=t.commit;return new j.a(function(t,o){Object(f.a)({user:n.user,password:n.password}).then(function(n){var o=n.data;if(200!=o.code)u.message.error(o.msg,3),t(o);else{var a=o.user;Object(v.a)().then(function(n){var o=n.data;if(200!=o.code)return e.$message.error("请求出错！");a.txdata=o.data.filter(function(t,n,e){return"审核中"==t.StautsType}),sessionStorage.setItem("user",d()(a)),console.log("userasd",a),s("SET_NAME",a.name),s("SET_AVATAR",a.avatar),s("SET_PID",a.pid),s("SET_PHONE",a.phone),s("SET_OPERATORCODE",a.operatorcode),s("SET_TXMESSAGE",a.txdata),t(!0)})}}).catch(function(t){o(t)})})},GetUserInfo:function(t){var n=t.commit,e=t.state;return new j.a(function(t,s){getUserInfo(e.token).then(function(e){e.data||s("Verification failed, please login again.");var o=e.data;o.roles&&o.roles.length>0?n("SET_ROLES",o.roles):s("getInfo: roles must be a non-null array!"),n("SET_NAME",o.name),n("SET_AVATAR",o.avatar),n("SET_INTRODUCTION",o.introduction),t(e)}).catch(function(t){s(t)})})},LogOut:function(t){var n=t.commit,e=t.state;return new j.a(function(t,s){logout(e.token).then(function(){n("SET_TOKEN",""),n("SET_ROLES",[]),removeToken(),t()}).catch(function(t){s(t)})})},FedLogOut:function(t){var n=t.commit;return new j.a(function(t){n("SET_TOKEN",""),removeToken(),t()})},ChangeRoles:function(t,n){var e=t.commit,s=t.dispatch;return new j.a(function(t){e("SET_TOKEN",n),setToken(n),getUserInfo(n).then(function(n){var o=n.data;e("SET_ROLES",o.roles),e("SET_NAME",o.name),e("SET_AVATAR",o.avatar),e("SET_INTRODUCTION",o.introduction),s("GenerateRoutes",o),t()})})}}};s.default.use(l.a);var _=new l.a.Store({modules:{user:g},getters:m}),b=e("PJh5"),y=e.n(b);e("Vz2w");y.a.locale("zh-cn"),s.default.use(c.a),s.default.config.productionTip=!1,s.default.prototype.$message=u.message,new s.default({el:"#app",router:i,store:_,components:{App:a},template:"<App/>"})},S7YB:function(t,n){},VjGe:function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"d",function(){return a}),e.d(n,"c",function(){return r}),e.d(n,"b",function(){return i});var s=e("D/cR");function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.a)({url:"api/get/yj/txlist",method:"get",params:t})}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.a)({url:"api/post/yj/upstatus",method:"post",data:t})}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.a)({url:"api/get/yj/search",method:"get",params:t})}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(s.a)({url:"api/get/yj/idsearch",method:"get",params:t})}},dAjm:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=e("Dd8w"),o=e.n(s),a=e("NYxO"),r={computed:o()({},Object(a.b)(["name","phone","avatar","jurisdiction","txmessage","play"])),data:function(){return{collapsed:!1,news:null,visible:!1}},created:function(){this.init()},methods:{init:function(){var t=this;this.$store.dispatch("CheckLogin").then(function(n){console.log("isLogin",n),n?(t.openmusic(),t.showModal()):t.$router.push("/login")})},openmusic:function(){var t=document.getElementById("audio");null!=t&&this.play&&(t.play(),this.$store.commit("SET_PLAY",!1))},showModal:function(){console.log("提现消息!!!",this.txmessage),this.txmessage&&(this.visible=!0)},handleOk:function(t){this.visible=!1,this.jump("/cash-drawal",0)},jump:function(t,n){return"/login"==t?(sessionStorage.clear(),void this.$router.push(t)):"/cash-drawal"==t?(this.visible=!1,console.log(n),void this.$router.push({path:t,query:{type:n}})):void this.$router.push(t)}}},i={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a-layout",{staticStyle:{"min-height":"100vh"},attrs:{id:"components-layout-demo-side"}},[e("a-layout-sider",{attrs:{collapsible:""},model:{value:t.collapsed,callback:function(n){t.collapsed=n},expression:"collapsed"}},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.avatar}}),t._v(" "),e("a",{directives:[{name:"show",rawName:"v-show",value:!t.collapsed,expression:"!collapsed"}]},[t._v(t._s(t.name))])]),t._v(" "),e("a-menu",{attrs:{theme:"dark",mode:"inline"}},[e("a-sub-menu",{key:"sub1"},[e("span",{attrs:{slot:"title"},slot:"title"},[e("a-icon",{attrs:{type:"user"}}),t._v(" "),e("span",[t._v("合伙人管理")])],1),t._v(" "),e("a-menu-item",{key:"1",on:{click:function(n){t.jump("/member-list")}}},[t._v("我的合伙人")])],1),t._v(" "),"超级管理员"==t.jurisdiction?e("a-sub-menu",{key:"sub2"},[e("span",{attrs:{slot:"title"},slot:"title"},[e("a-icon",{attrs:{type:"team"}}),t._v(" "),e("span",[t._v("运营商管理")])],1),t._v(" "),e("a-menu-item",{key:"Operator1",on:{click:function(n){t.jump("/operator-detail")}}},[t._v("运营商信息")]),t._v(" "),e("a-menu-item",{key:"Operator2",on:{click:function(n){t.jump("/member-list?type=all")}}},[t._v("合伙人管理")]),t._v(" "),e("a-menu-item",{key:"Operator5",on:{click:function(n){t.jump("/registeroperator")}}},[t._v("运营商注册")])],1):t._e(),t._v(" "),e("a-sub-menu",{key:"sub3"},[e("span",{attrs:{slot:"title"},slot:"title"},[e("a-icon",{attrs:{type:"file-text"}}),t._v(" "),e("span",[t._v("订单管理")])],1),t._v(" "),e("a-menu-item",{key:"6",on:{click:function(n){t.jump("/orderlist")}}},[t._v("订单列表")])],1),t._v(" "),e("a-sub-menu",{key:"sub4"},[e("span",{attrs:{slot:"title"},slot:"title"},[e("a-icon",{attrs:{type:"pay-circle"}}),t._v(" "),e("span",[t._v("提现管理")])],1),t._v(" "),e("a-menu-item",{key:"9",on:{click:function(n){t.jump("/cash-drawal","0")}}},[t._v("提现审核")]),t._v(" "),e("a-menu-item",{key:"10",on:{click:function(n){t.jump("/cash-drawal","1")}}},[t._v("历史提现")])],1),t._v(" "),e("a-sub-menu",{key:"sub5"},[e("span",{attrs:{slot:"title"},slot:"title"},[e("a-icon",{attrs:{type:"contacts"}}),t._v(" "),e("span",[t._v("新闻管理")])],1),t._v(" "),e("a-menu-item",{key:"newslist",on:{click:function(n){t.jump("/newslist")}}},[t._v("新闻列表")]),t._v(" "),"超级管理员"==t.jurisdiction?e("a-menu-item",{key:"addnewsitem",on:{click:function(n){t.jump("/newsection")}}},[t._v("新增栏目")]):t._e(),t._v(" "),e("a-menu-item",{key:"addnews",on:{click:function(n){t.jump("/additemidnews")}}},[t._v("新增新闻")])],1),t._v(" "),e("a-menu-item",{key:"11",on:{click:function(n){t.jump("/commission")}}},[e("a-icon",{attrs:{type:"file"}}),t._v(" "),e("span",[t._v("佣金比例调整")])],1)],1)],1),t._v(" "),e("a-layout",[e("a-layout-header",{staticStyle:{background:"#001529",padding:"0"}},[e("a-row",[t.txmessage?e("a-col",{attrs:{span:21},on:{click:function(n){t.jump("/cash-drawal?type=0")}}},[e("a-carousel",{staticClass:"tx-tip",attrs:{autoplay:"",dots:!1}},t._l(t.txmessage,function(n,s){return e("div",{key:s,staticClass:"tx-title"},[e("a-icon",{staticStyle:{color:"red",margin:"0 10px"},attrs:{type:"notification"}}),t._v(" "),e("h3",[t._v("提现提醒:合伙人"+t._s(n.zfbname)+"申请提现,提现金额"+t._s(n.CommissionTrans)+"元")])],1)}))],1):t._e(),t._v(" "),e("a-col",{attrs:{span:3}},[e("div",{staticClass:"logo"},[e("img",{attrs:{src:t.avatar}}),t._v(" "),e("a-dropdown",{attrs:{trigger:["click"]}},[e("a",{staticClass:"ant-dropdown-link",attrs:{href:"#"}},[t._v("\n                "+t._s(t.name)+"\n                "),e("a-icon",{attrs:{type:"down"}})],1),t._v(" "),e("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[e("router-link",{attrs:{to:"/user"}},[e("a-menu-item",{key:"2",staticClass:"ant-dropdown-menu-item"},[t._v("个人中心")])],1),t._v(" "),e("router-link",{attrs:{to:"/changepsw"}},[e("a-menu-item",{key:"1",staticClass:"ant-dropdown-menu-item"},[t._v("修改密码")])],1),t._v(" "),e("a-menu-item",{key:"0",on:{click:function(n){t.jump("/login")}}},[t._v("退出登入\n                  ")])],1)],1)],1)])],1)],1),t._v(" "),e("a-layout-content",{staticStyle:{margin:"0 16px"}},[e("div",{style:{marginTop:"24px",padding:"24px",background:"#fff",minHeight:"600px"}},[e("router-view")],1)]),t._v(" "),e("a-layout-footer",{staticClass:"footer-container"},[t._v("爱省购 ©2018 Created by HXDZ")])],1),t._v(" "),e("audio",{attrs:{id:"audio",src:"http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201811/10880.wav",type:"audio/mpeg"}}),t._v(" "),e("a-modal",{attrs:{title:"提现提醒",cancelText:"关闭",okText:"前往处理"},on:{ok:t.handleOk},model:{value:t.visible,callback:function(n){t.visible=n},expression:"visible"}},t._l(t.txmessage,function(n,s){return e("div",{key:s,staticClass:"tx-title"},[e("p",{staticClass:"tx-tc",on:{click:function(n){t.jump("/cash-drawal",0)}}},[t._v("合伙人"+t._s(n.zfbname)+"申请提现,提现金额"+t._s(n.CommissionTrans)+"元")])])}))],1)},staticRenderFns:[]};var u=e("VU/8")(r,i,!1,function(t){e("S7YB")},"data-v-4848dd8e",null);n.default=u.exports},h4G9:function(t,n){},"hZ/y":function(t,n){},uslO:function(t,n,e){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-SG":"oYA3","./en-SG.js":"oYA3","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./ga":"U5Iz","./ga.js":"U5Iz","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it-ch":"/E8D","./it-ch.js":"/E8D","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function o(t){return e(a(t))}function a(t){var n=s[t];if(!(n+1))throw new Error("Cannot find module '"+t+"'.");return n}o.keys=function(){return Object.keys(s)},o.resolve=a,t.exports=o,o.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.ffc83474dfb772ea4bec.js.map