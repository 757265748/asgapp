webpackJsonp([2],{Cdx3:function(t,e,r){var o=r("sB3e"),a=r("lktj");r("uqUo")("keys",function(){return function(t){return a(o(t))}})},Ja2s:function(t,e){},K31e:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r("fZjL"),a=r.n(o),s=(r("M9A7"),{name:"authcode",props:{value:{type:String,default:""}},data:function(){return{code:"",checkCode:"",picLyanzhengma:"",currentvalue:""}},created:function(){this.createCode()},methods:{handelchange:function(t){this.currentvalue=t.target.value,this.$emit("input",this.currentvalue)},authcode:function(){return this.currentvalue?this.currentvalue.toLowerCase()==this.checkCode.toLowerCase()||(console.log("is error"),this.$message.error("验证码不正确"),!1):(console.log("null"),this.$message.error("验证码不能为空"),!1)},createCode:function(){this.currentvalue=this.value,this.code="",this.checkCode="",this.picLyanzhengma="";for(var t=new Array(0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"),e=0;e<4;e++){var r=Math.floor(36*Math.random());this.code+=t[r]}this.checkCode=this.code}}}),n={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"join_formitem"},[r("div",{staticClass:"captcha"},[r("a-input",{staticClass:"auth-input",attrs:{type:"text",placeholder:"请输入验证码"},on:{change:t.handelchange}},[r("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1),t._v(" "),r("a-input",{staticClass:"auth-bt",attrs:{type:"button"},on:{click:t.createCode},model:{value:t.checkCode,callback:function(e){t.checkCode=e},expression:"checkCode"}})],1)])},staticRenderFns:[]};function i(t){return a()(t).some(function(e){return t[e]})}var c={data:function(){return{hasErrors:i,form:null,isError:!1,show:!1,error:"",code:""}},components:{Auth:r("VU/8")(s,n,!1,function(t){r("Ja2s")},"data-v-b8c9b292",null).exports},created:function(){this.init()},mounted:function(){var t=this;this.$nextTick(function(){t.form.validateFields()})},methods:{init:function(){var t=this;this.$store.dispatch("CheckLogin").then(function(e){console.log("isLogin",e),e?t.$router.push("/"):t.$router.push("/login")})},userNameError:function(){var t=this.form,e=t.getFieldError;return(0,t.isFieldTouched)("user")&&e("user")},passwordError:function(){var t=this.form,e=t.getFieldError;return(0,t.isFieldTouched)("password")&&e("password")},handleSubmit:function(t){var e=this;t.preventDefault(),this.form.validateFields(function(t,r){t||r&&e.$refs.code.authcode()&&e.$store.dispatch("LoginByUsername",r).then(function(){e.$router.push({path:"/"})})})}}},u={render:function(){var t=this,e=this,r=e.$createElement,o=e._self._c||r;return o("a-layout",{staticClass:"layout",attrs:{id:"components-layout-demo-top"}},[o("a-layout",{staticClass:"layout-bg"},[o("a-layout-header",[o("div",{staticClass:"logo"},[o("span",{attrs:{slot:"title"},slot:"title"},[o("a-icon",{attrs:{type:"user"}}),e._v(" "),o("span",[e._v("爱省购后台管理系统")])],1)])]),e._v(" "),o("a-layout-content",{staticStyle:{padding:"0 50px"}},[o("a-alert",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{message:e.error,type:"error",showIcon:""}}),e._v(" "),o("a-breadcrumb",{staticStyle:{margin:"16px 0"}}),e._v(" "),o("div",{staticClass:"login-container"},[o("h3",[e._v("欢迎登入")]),e._v(" "),o("a-form",{attrs:{layout:"vertical",autoFormCreate:function(e){t.form=e}},on:{submit:e.handleSubmit}},[e.form?[o("a-form-item",{attrs:{validateStatus:e.userNameError()?"error":"",help:e.userNameError()||"",fieldDecoratorId:"user",fieldDecoratorOptions:{rules:[{type:"string",required:!0,message:"请输入正确的用户名!"}]}}},[o("a-input",{attrs:{placeholder:"Username"}},[o("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),e._v(" "),o("a-form-item",{attrs:{validateStatus:e.passwordError()?"error":"",help:e.passwordError()||"",fieldDecoratorId:"password",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入密码"}]}}},[o("a-input",{attrs:{type:"password",placeholder:"Password"}},[o("a-icon",{staticStyle:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1),e._v(" "),o("a-form-item",[o("auth",{ref:"code",model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),e._v(" "),o("a-form-item",[o("a-button",{attrs:{type:"primary",htmlType:"submit",disabled:e.hasErrors(e.form.getFieldsError())}},[e._v("登入")])],1)]:e._e()],2)],1)],1),e._v(" "),o("a-layout-footer",{staticClass:"footer-container"},[e._v("爱省购 ©2018 Created by HXDZ")])],1)],1)},staticRenderFns:[]};var l=r("VU/8")(c,u,!1,function(t){r("Y+rq")},"data-v-34d5c4e8",null);e.default=l.exports},"Y+rq":function(t,e){},fZjL:function(t,e,r){t.exports={default:r("jFbC"),__esModule:!0}},jFbC:function(t,e,r){r("Cdx3"),t.exports=r("FeBl").Object.keys},uqUo:function(t,e,r){var o=r("kM2E"),a=r("FeBl"),s=r("S82l");t.exports=function(t,e){var r=(a.Object||{})[t]||Object[t],n={};n[t]=e(r),o(o.S+o.F*s(function(){r(1)}),"Object",n)}}});
//# sourceMappingURL=2.57281dfb2be15f01ee6f.js.map