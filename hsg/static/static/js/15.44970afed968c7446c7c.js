webpackJsonp([15],{JpZw:function(a,t){},o6wc:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("Dd8w"),n=e.n(s),i=e("NYxO"),o=e("d2gY");var r={data:function(){return{loading:!1,uploadavatar:o.a+"api/post/upload/avatar"}},computed:n()({},Object(i.b)(["avatar","phone","name","pid"])),methods:{handleChange:function(a){var t,e,s,n=this;"uploading"!==a.file.status?"done"===a.file.status&&(t=a.file.originFileObj,e=function(a){n.$store.commit("SET_AVATAR",a),n.$message.success("更换成功！"),n.loading=!1},(s=new FileReader).addEventListener("load",function(){return e(s.result)}),s.readAsDataURL(t)):this.loading=!0},beforeUpload:function(a){var t="image/jpeg"===a.type,e=a.size/1024/1024<2;return e||this.$message.error("图片大小不能大于2M!"),t&&e}}},d={render:function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("a-upload",{staticClass:"avatar-uploader",attrs:{listType:"picture-card",showUploadList:!1,action:a.uploadavatar,beforeUpload:a.beforeUpload,data:{phone:a.phone}},on:{change:a.handleChange}},[a.avatar?e("a-avatar",{attrs:{size:100,src:a.avatar,alt:"点击更换头像"}}):e("div",[e("a-icon",{attrs:{type:a.loading?"loading":"plus"}}),a._v(" "),e("div",{staticClass:"ant-upload-text"},[a._v("上传")])],1),a._v(" "),e("a",[a._v("点击更换头像")])],1),a._v(" "),e("div",[e("p",{staticClass:"txt"},[a._v("昵称: "+a._s(a.name))]),a._v(" "),e("p",{staticClass:"txt"},[a._v("电话: "+a._s(a.phone))]),a._v(" "),e("p",{staticClass:"txt"},[a._v("推广位ID: "+a._s(a.pid))])])],1)},staticRenderFns:[]};var l=e("VU/8")(r,d,!1,function(a){e("JpZw")},"data-v-7c4c0198",null);t.default=l.exports}});
//# sourceMappingURL=15.44970afed968c7446c7c.js.map