webpackJsonp([15],{v8EM:function(e,t){},yMGr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("Dd8w"),i=a.n(l),r=a("Dtsh"),s=a("NYxO"),o=a("d2gY"),n={computed:i()({},Object(s.b)(["operatorcode"])),data:function(){return{previewVisible:!1,previewImage:"",fileList:[{}],previewVisible1:!1,previewImage1:"",fileList1:[{}],pic_url:[],small_img:[],uploadpic:o.a+"api/post/upload/pic_url",uploadsmall:o.a+"api/post/upload/small_img"}},methods:{handleCancel:function(){this.previewVisible=!1},handlePreview:function(e){this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0},handlePreview1:function(e){this.previewImage1=e.url||e.thumbUrl,this.previewVisible1=!0},handleChange:function(e){var t=e.fileList;this.fileList=t,t[0]&&t[0].response&&(this.pic_url.push(t[0].response.result),console.log("pic",this.pic_url))},handleChange1:function(e){var t=e.fileList;this.fileList1=t,t[0]&&t[0].response&&(this.small_img.push(t[0].response.result),console.log("small",t[0].response,this.small_img))},handleSubmit:function(e){var t=this;e.preventDefault(),this.form.validateFields(function(e,a){e||(a.seller_id=t.operatorcode,a.shop_title="chl店",a.pic_url=t.pic_url,a.small_img=t.small_img,delete a.pict_url,delete a.small_images,Object(r.c)(a).then(function(e){200==e.data.code&&(t.$message.success("新增成功！",4),t.$router.push("./operator-itemdetail"))}),console.log("values",a))})}}},p={render:function(){var e=this,t=this,a=t.$createElement,l=t._self._c||a;return l("a-form",{attrs:{autoFormCreate:function(t){e.form=t}},on:{submit:t.handleSubmit}},[l("a-form-item",{attrs:{label:"商品ID",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"num_iid",fieldDecoratorOptions:{rules:[{type:"string",pattern:/^[1-9]+$/,required:!0,message:"请输入合法的seller_id!"}]}}},[l("a-input",{attrs:{id:"num_iid"}})],1),t._v(" "),l("a-form-item",{attrs:{label:"商品类别",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"gender",fieldDecoratorOptions:{rules:[{required:!0,message:"Please select your gender!"}]}}},[l("a-select",{attrs:{placeholder:"请选择类别",id:"gender"}},[l("a-select-option",{attrs:{value:"male"}},[t._v("男装")]),t._v(" "),l("a-select-option",{attrs:{value:"female"}},[t._v("女装")])],1)],1),t._v(" "),l("a-form-item",{attrs:{label:"价格",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"zk_final_price",fieldDecoratorOptions:{rules:[{type:"string",pattern:/^[1-9]+$/,required:!0,message:"请输入数字!"}]}}},[l("a-input",{attrs:{id:"zk_final_price"}})],1),t._v(" "),l("a-form-item",{attrs:{label:"库存数",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"volume",fieldDecoratorOptions:{rules:[{type:"string",pattern:/^[1-9]+$/,required:!0,message:"请输入数字!"}]}}},[l("a-input",{attrs:{id:"volume"}})],1),t._v(" "),l("a-form-item",{attrs:{label:"商品主图",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"pict_url",fieldDecoratorOptions:{rules:[]}}},[l("a-upload",{attrs:{label:"商品主图",action:t.uploadpic,listType:"picture-card"},on:{preview:t.handlePreview,change:t.handleChange}},[t.fileList.length<2?l("div",[l("a-icon",{attrs:{type:"plus"}}),t._v(" "),l("div",{staticClass:"ant-upload-text"},[t._v("上传图片")])],1):t._e()]),t._v(" "),l("a-modal",{attrs:{visible:t.previewVisible,footer:null},on:{cancel:t.handleCancel}},[l("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage}})])],1),t._v(" "),l("a-form-item",{attrs:{label:"商品小图",labelCol:{span:5},wrapperCol:{span:12},fieldDecoratorId:"small_images",fieldDecoratorOptions:{rules:[]}}},[l("a-upload",{attrs:{label:"商品小图",action:t.uploadsmall,listType:"picture-card"},on:{preview:t.handlePreview1,change:t.handleChange1}},[t.fileList1.length<5?l("div",[l("a-icon",{attrs:{type:"plus"}}),t._v(" "),l("div",{staticClass:"ant-upload-text"},[t._v("上传图片")])],1):t._e()]),t._v(" "),l("a-modal",{attrs:{visible:t.previewVisible1,footer:null},on:{cancel:t.handleCancel}},[l("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:t.previewImage1}})])],1),t._v(" "),l("a-form-item",{attrs:{wrapperCol:{span:12,offset:5}}},[l("a-button",{attrs:{type:"primary",htmlType:"submit"}},[t._v("新增")])],1)],1)},staticRenderFns:[]};var c=a("VU/8")(n,p,!1,function(e){a("v8EM")},null,null);t.default=c.exports}});
//# sourceMappingURL=15.702e8db81aaaf8f93bb3.js.map