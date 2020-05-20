(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/common/goods-detail"],{

/***/ 322:
/*!*******************************************************************************!*\
  !*** E:/xampp/htdocs/asgapp/main.js?{"page":"pages%2Fcommon%2Fgoods-detail"} ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 6);__webpack_require__(/*! @dcloudio/uni-stat */ 7);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _goodsDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/common/goods-detail.vue */ 323));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_goodsDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["createPage"]))

/***/ }),

/***/ 323:
/*!************************************************************!*\
  !*** E:/xampp/htdocs/asgapp/pages/common/goods-detail.vue ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_detail_vue_vue_type_template_id_083824fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-detail.vue?vue&type=template&id=083824fd&scoped=true& */ 324);
/* harmony import */ var _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-detail.vue?vue&type=script&lang=js& */ 326);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_detail_vue_vue_type_style_index_0_id_083824fd_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods-detail.vue?vue&type=style&index=0&id=083824fd&scoped=true&lang=less& */ 328);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 17);

var renderjs





/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_detail_vue_vue_type_template_id_083824fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_detail_vue_vue_type_template_id_083824fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "083824fd",
  null,
  false,
  _goods_detail_vue_vue_type_template_id_083824fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "xampp/htdocs/asgapp/pages/common/goods-detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 324:
/*!*******************************************************************************************************!*\
  !*** E:/xampp/htdocs/asgapp/pages/common/goods-detail.vue?vue&type=template&id=083824fd&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_083824fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-detail.vue?vue&type=template&id=083824fd&scoped=true& */ 325);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_083824fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_083824fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_083824fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_template_id_083824fd_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 325:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/xampp/htdocs/asgapp/pages/common/goods-detail.vue?vue&type=template&id=083824fd&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 326:
/*!*************************************************************************************!*\
  !*** E:/xampp/htdocs/asgapp/pages/common/goods-detail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-detail.vue?vue&type=script&lang=js& */ 327);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 327:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/xampp/htdocs/asgapp/pages/common/goods-detail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 25));














































































































































































































var _goods = __webpack_require__(/*! @/api/goods.js */ 14);

















var _config = __webpack_require__(/*! @/api/config.js */ 13);var _props$computed$compo;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {return;}var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var uniIcon = function uniIcon() {__webpack_require__.e(/*! require.ensure | components/uni-icon */ "components/uni-icon").then((function () {return resolve(__webpack_require__(/*! @/components/uni-icon.vue */ 446));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var productList = function productList() {__webpack_require__.e(/*! require.ensure | components/product-list */ "components/product-list").then((function () {return resolve(__webpack_require__(/*! @/components/product-list.vue */ 315));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniSection = function uniSection() {__webpack_require__.e(/*! require.ensure | components/other/uni-section/uni-section */ "components/other/uni-section/uni-section").then((function () {return resolve(__webpack_require__(/*! @/components/other/uni-section/uni-section.vue */ 575));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniCollapse = function uniCollapse() {__webpack_require__.e(/*! require.ensure | components/other/uni-collapse/uni-collapse */ "components/other/uni-collapse/uni-collapse").then((function () {return resolve(__webpack_require__(/*! @/components/other/uni-collapse/uni-collapse.vue */ 582));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniCollapseItem = function uniCollapseItem() {__webpack_require__.e(/*! require.ensure | components/other/uni-collapse-item/uni-collapse-item */ "components/other/uni-collapse-item/uni-collapse-item").then((function () {return resolve(__webpack_require__(/*! @/components/other/uni-collapse-item/uni-collapse-item.vue */ 589));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniList = function uniList() {__webpack_require__.e(/*! require.ensure | components/other/uni-list/uni-list */ "components/other/uni-list/uni-list").then((function () {return resolve(__webpack_require__(/*! @/components/other/uni-list/uni-list.vue */ 596));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniListItem = function uniListItem() {__webpack_require__.e(/*! require.ensure | components/other/uni-list-item/uni-list-item */ "components/other/uni-list-item/uni-list-item").then((function () {return resolve(__webpack_require__(/*! @/components/other/uni-list-item/uni-list-item.vue */ 603));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var uniPopup = function uniPopup() {__webpack_require__.e(/*! require.ensure | components/uni-popup */ "components/uni-popup").then((function () {return resolve(__webpack_require__(/*! @/components/uni-popup.vue */ 561));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var Ahh5Animated = function Ahh5Animated() {__webpack_require__.e(/*! require.ensure | components/ahh5-animated/ahh5-animated */ "components/ahh5-animated/ahh5-animated").then((function () {return resolve(__webpack_require__(/*! @/components/ahh5-animated/ahh5-animated */ 610));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};


Date.prototype.format = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份
    "d+": this.getDate(), //日
    "h+": this.getHours(), //小时
    "m+": this.getMinutes(), //分
    "s+": this.getSeconds(), //秒
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度
    "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[
    k]).substr(("" + o[k]).length));}
  return fmt;
};
var listData = [{
  name: '基础用法',
  data: [{
    type: false,
    subName: '默认开启',
    open: true,
    content: '折叠内容主体，可自定义内容及样式' },

  {
    type: false,
    subName: '折叠内容',
    content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。' },

  {
    type: false,
    subName: '禁用状态',
    disabled: true,
    content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。' }] },



{
  name: '添加动画效果',
  data: [{
    type: true,
    subName: '动画效果',
    showAnimation: true,
    content: '折叠内容主体，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。' }] }];var _default = (_props$computed$compo = {




  props: {
    isSE: {
      type: Boolean,
      default: false },

    presale: String //预售文本
  },
  computed: {
    qhj: function qhj() {
      var r = 0;
      if (this.good.item_info.zk_final_price - this.good.youhuiquan > 0) {
        r = (this.good.item_info.zk_final_price - this.good.youhuiquan).toFixed(2);
      } else {
        r = this.good.item_info.zk_final_price;
      }
      return r;
    } },

  components: {
    productList: productList,
    uniSection: uniSection,
    uniCollapse: uniCollapse,
    uniCollapseItem: uniCollapseItem,
    uniList: uniList,
    uniListItem: uniListItem,
    uniPopup: uniPopup,
    uniIcon: uniIcon,
    Ahh5Animated: Ahh5Animated },

  data: function data() {var _ref;
    return _ref = {
      list: listData,
      accordion: [{
        id: 0,
        title: '标题文字',
        content: '手风琴效果',
        animation: true },

      {
        id: 1,
        title: '标题文字',
        content: '手风琴效果',
        animation: true },

      {
        id: 2,
        title: '标题文字',
        content: '手风琴效果',
        animation: true }],


      extraIcon: {
        color: '#4cd964',
        size: '26',
        type: 'image' },

      id: 2,

      changSwiperIndex: 0,
      Ahh5Animated: [{
        "key": "Fading Entrances",
        "data": ["fadeInDown"] }],

      title: '0',
      indicatorDots: false,
      autoplay: false,
      previousMargin: uni.upx2px(152) + 'px',
      nextMargin: uni.upx2px(152) + 'px',
      circular: true,
      zoomParam: 1.10,
      swiperCurrentIndex: 0,
      data: [],
      max: 0,
      pt: '',
      type: '',
      bottomData: [{
        text: '微信好友',
        icon: "\uE6A4",
        name: 'wx' },

      {
        text: '朋友圈',
        icon: "\uE646",
        name: 'wx' },

      {
        text: '发圈',
        icon: "\uE645",
        name: 'fq' }

      // {
      // 	text: 'QQ好友',
      // 	icon: '\ue66b',
      // 	name: 'qq'
      // },
      ],
      nowScrollTop: 0,
      isCollection: false,
      collentionColor: "#fff",
      table: '',
      page: 1 }, _defineProperty(_ref, "id",
    ''), _defineProperty(_ref, "scrolltop",
    0), _defineProperty(_ref, "scrollFlag",
    false), _defineProperty(_ref, "navisShow",
    true), _defineProperty(_ref, "isactive",
    true), _defineProperty(_ref, "reprice",
    15), _defineProperty(_ref, "copykey",
    ""), _defineProperty(_ref, "url",
    ""), _defineProperty(_ref, "good",
    null), _defineProperty(_ref, "detailImgs",
    []), _defineProperty(_ref, "goodObj",
    {
      small_images: null,
      zk_final_price: null,
      reserve_price: null,
      volume: null,
      title: "",
      short_url: "",
      item_description: "",
      jy: null,
      pict_url: "",
      num_iid: "",
      item_url: "" }), _defineProperty(_ref, "recommend",

    []), _defineProperty(_ref, "collect",
    []), _defineProperty(_ref, "detail",
    null), _defineProperty(_ref, "phone",
    this.getUser()), _defineProperty(_ref, "webview",
    uni.getStorageSync("webview")), _defineProperty(_ref, "pageType",
    ""), _defineProperty(_ref, "collectFlag",
    false), _ref;

  },
  onLoad: function onLoad(option) {
    console.log(option);
    var id = option.id || '';
    this.id = Number(id);
    console.log(this.id);
    console.log(typeof this.id);
    var table = option.table || '';
    var page = option.page || '';
    this.isSE = option.isSE || false;
    this.presale = option.presale;
    this.page = page;
    this.pageType = option.pageType || "";
    console.log(option.isSE);
    var pid = this._getPid();
    this._getData(this.id);
    uni.setStorageSync("webview", false);
    this.loadTBKgoodsInfo(this.id);
  },
  onBackPress: function onBackPress(e) {//调用返回动作或者按钮 
    console.log(JSON.stringify(e));
    uni.switchTab({
      url: '/pages/index/index' });

  },
  onShow: function onShow() {
    this.existUser();
    this.select_collect();
  } }, _defineProperty(_props$computed$compo, "onBackPress", function onBackPress(
options) {
  console.log(options);
  if (options.from == "backbutton") {
    if (this.pageType == "send_circle") {
      uni.switchTab({
        url: '/pages/send_circle/index' });

    }
  }
}), _defineProperty(_props$computed$compo, "onPullDownRefresh", function onPullDownRefresh(

e) {
  this.collectFlag = true;
  uni.stopPullDownRefresh();
}), _defineProperty(_props$computed$compo, "methods",
{
  //收藏商品详情
  collect_good_detail: function collect_good_detail(item) {
    console.log(item);
    uni.navigateTo({
      url: "/pages/common/goods-detail?id=".concat(item.item_id) });

  },
  //全局点击
  global_tap: function global_tap() {
    this.collectFlag = false;
  },
  //点击收藏
  collect_tap: function collect_tap(e) {
    console.log(JSON.stringify(e));
    this.collectFlag = true;
    return false;
  },
  swiperChange: function swiperChange(e) {
    console.log(e);
    this.changSwiperIndex = e.detail.current;
  },
  //查询收藏
  select_collect: function select_collect() {var _this = this;
    (0, _goods.select_collect)({
      user_id: uni.getStorageSync("user").id }).
    then(function (res) {
      console.log(res);
      if (res.code == 200) {
        _this.collect = res.result;
      } else {
        uni.showToast({
          title: res.msg,
          icon: 'none' });

      }
    });
  },
  //添加收藏
  insert_collect: function insert_collect(data) {
    (0, _goods.insert_collect)({
      item_id: data.item_id,
      user_id: data.user_id,
      pict_url: data.pict_url,
      title: data.title,
      price: data.price,
      create_date: data.create_date }).
    then(function (res) {
      console.log(res);
    });
  },
  /**
      * 获取淘宝商品描述
      * @param {Object} goods_numiids 商品ID
      */
  loadTBKgoodsInfo: function () {var _loadTBKgoodsInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(goods_numiid) {var time, _ref2, _ref3, error, res, info, arr, srcReg, srcArr, i, src, url;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
              time = new Date().getTime();_context.next = 3;return (
                uni.request({
                  url: 'https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0',
                  method: 'GET',
                  header: {
                    'content-type': 'application/json;charset=UTF-8' },

                  data: {
                    data: '{"id":"' + goods_numiid + '"}',
                    _: new Date().getTime() } }));case 3:_ref2 = _context.sent;_ref3 = _slicedToArray(_ref2, 2);error = _ref3[0];res = _ref3[1];


              if (res.statusCode == 200) {
                info = res.data.data.pcDescContent || {};
                arr = info.match(/<img.*?(?:>|\/>)/gi);
                srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
                srcArr = [];
                for (i = 1; i < arr.length; i++) {
                  //console.log(arr[i]);
                  src = arr[i].match(srcReg);
                  if (src[1]) {
                    url = src[1];
                    if (url.substr(0, 7).toLowerCase() != 'http://' || url.substr(0, 8).toLowerCase() != 'https://') {
                      url = 'http://' + url;
                    }
                    srcArr.push(url);
                  }
                }
                console.log("loadTBKgoodsInfo==>获取商品详情", srcArr);
                if (srcArr.length > 0) {
                  this.detailImgs = srcArr;
                  console.log(goods_numiid);
                  console.log(this.detailImgs);
                }
              }case 8:case "end":return _context.stop();}}}, _callee, this);}));function loadTBKgoodsInfo(_x) {return _loadTBKgoodsInfo.apply(this, arguments);}return loadTBKgoodsInfo;}(),

  togglePopup: function togglePopup(type) {
    this.type = type;
  },
  _getPid: function _getPid() {
    try {
      var data = uni.getStorageSync('user');
      return data.pid;
    } catch (e) {
      //TODO handle the exception
    }

  },
  getUser: function getUser() {
    try {
      var user = uni.getStorageSync('user');
      return user.phone;
    } catch (e) {
      console.log(e);
    }
  },
  getRelationId: function getRelationId() {
    console.log(JSON.stringify(uni.getStorageSync("user")));
    try {
      return uni.getStorageSync("user").pid;
    } catch (e) {
      console.log(e);
    }
  },
  getPhone: function getPhone() {
    try {
      return uni.getStorageSync("user").phone;
    } catch (e) {
      console.log(e);
    }
  },
  //复制淘口令
  copyTpwd: function copyTpwd(type) {
    if (type == 'tkl') {
      uni.setClipboardData({
        data: this.good.tpwd,
        success: function success() {
          uni.showToast({
            title: '已复制' });

        } });

    } else if (type == 'link') {
      uni.setClipboardData({
        data: this.good.tpwd,
        success: function success() {
          uni.showToast({
            title: '已复制' });

        } });

    } else if (type == 'title') {
      uni.setClipboardData({
        data: this.good.item_info.title,
        success: function success() {
          uni.showToast({
            title: '已复制' });

        } });

    }
  },
  // 收藏
  collection: function collection() {var _this2 = this;
    if (!this.phone) {
      uni.showToast({
        title: '未登录',
        icon: 'none' });

      return;
    }
    if (this.isCollection) {
      console.log('取消收藏', this.isCollection);
      this.collentionColor = "#fff";
      (0, _goods.deleteCollection)({
        phone: this.phone,
        num_iid: this.good.num_iid }).
      then(function (res) {
        _this2.isCollection = false;
        uni.showToast({
          title: '已取消' });

      });
    } else if (!this.isCollection) {
      console.log('增加收藏', this.isCollection);
      //console.log(JSON.stringify(this.goodObj));
      this.collentionColor = "#ff0000";
      (0, _goods.addCollection)({
        phone: this.phone,
        volume: this.good.item_info.volume,
        // quanhoujia: (this.good.zk_final_price-this.good.youhuiquan).toFixed(1),
        quanhoujia: this.good.item_info.reserve_price,
        youhuiquan: this.good.youhuiquan || 0,
        zk_final_price: this.good.item_info.zk_final_price,
        title: this.good.item_info.title,
        pict_url: this.good.item_info.pict_url,
        num_iid: this.id }).
      then(function (res) {
        console.log(res);
        console.log('已收藏');
        _this2.isCollection = true;
        uni.showToast({
          title: '已收藏' });

      });
    }
  },
  //分享
  share: function share(value) {var _this3 = this;
    if (!this.phone) {
      uni.showToast({
        title: '未登录',
        icon: 'none' });

      return;
    }
    console.log(JSON.stringify(this.good));
    console.log(JSON.stringify(this.good.small_images));
    console.log(this.good.small_images);
    uni.setStorageSync("webview", true);
    var tkl = this.good.tpwd.substr(1, this.good.tpwd.length - 2);
    var codeContent = 'http://51atk.com:8009/html/openInstall/?invitecode=' + uni.getStorageSync(
    "invitecode") + '&tkl=' + tkl + '&short_url=' + this.good.short_url;
    console.log(tkl);
    // this.copykey = `復制这段描述₳${this.good.tpwd.substr(1,11)}₳,\n进入【Tao宝】即可抢购`;
    // var s="https://img.alicdn.com/i1/1611928825/O1CN011NONxw2F3tpOrMUJE_!!1611928825.jpg,https://img.alicdn.com/i4/1611928825/O1CN01DNKq172F3tpP9MO8Q_!!1611928825.jpg,https://img.alicdn.com/i1/1611928825/O1CN016pxp0j2F3tpN8zKLK_!!1611928825.jpg,https://img.alicdn.com/i4/1611928825/O1CN01JcXO702F3tpOrNUkC_!!1611928825.jpg";
    // uni.navigateTo({
    // 	url: `share?id=${this.id}&pict_url=${this.good.item_info.pict_url}&youhuiquan=${this.good.youhuiquan}&yj=${this.good.yj}&title=${this.good.item_info.title}&zk_final_price=${this.good.item_info.zk_final_price}&reserve_price=${this.good.item_info.reserve_price}&small_images=${s}&copykey=${this.copykey}&short_url=${this.good.short_url}&invitecode=${uni.getStorageSync("invitecode")}&imgUrl=${s}&description=${this.good.item_info.cat_leaf_name}&item_url=${this.good.item_url}`
    // })

    (0, _goods.getShareImgUrl)({
      url: this.good.item_info.pict_url, //图片路径
      CodeContent: codeContent,
      TitleContent: this.good.item_info.title, //商品标题
      NowPrice: this.good.item_info.zk_final_price, //现价
      OldPrice: this.good.item_info.reserve_price, //原价
      RedecePrice: this.good.youhuiquan, //优惠券
      InvitationCode: uni.getStorageSync("invitecode") }).
    then(function (res) {
      console.log(JSON.stringify(res));
      // var data = res.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://oa.fpc98.com\">",
      // 	"");
      // data = data.replace("</string>", "")
      // console.log(data);
      _this3.url = 'http://39.108.215.49:8009/html/getShareImgUrl.html?url=' + _this3.goodObj.pict_url + '&CodeContent=' +
      codeContent + '&TitleContent=' + _this3.goodObj.title + '&NowPrice=' +
      _this3.goodObj.zk_final_price + '&OldPrice=' + _this3.goodObj.reserve_price + '&RedecePrice=' + _this3.good.youhuiquan +
      '&InvitationCode=' + uni.getStorageSync("invitecode") +
      '&title=' + _this3.goodObj.title + '&zk_final_price=' + _this3.goodObj.zk_final_price + '&reserve_price=' + _this3.goodObj.
      reserve_price + '&item_url=' + _this3.goodObj.item_url +
      '&copykey=' + _this3.copykey + '&yj1=' + _this3.goodObj.yj;
      _this3.copykey = "\u5FA9\u5236\u8FD9\u6BB5\u63CF\u8FF0\u20B3".concat(_this3.good.tpwd.substr(1, 11), "\u20B3,\n\u8FDB\u5165\u3010Tao\u5B9D\u3011\u5373\u53EF\u62A2\u8D2D");
      console.log(_this3.url);
      uni.navigateTo({
        url: "share?id=".concat(_this3.id, "&pict_url=").concat(_this3.good.item_info.pict_url, "&youhuiquan=").concat(_this3.good.youhuiquan, "&yj=").concat(_this3.good.yj, "&title=").concat(_this3.good.item_info.title, "&zk_final_price=").concat(_this3.good.item_info.zk_final_price, "&reserve_price=").concat(_this3.good.item_info.reserve_price, "&small_images=").concat(_this3.good.small_images, "&copykey=").concat(_this3.copykey, "&short_url=").concat(_this3.good.short_url, "&invitecode=").concat(uni.getStorageSync("invitecode"), "&imgUrl=").concat(res.imgUrl, "&item_url=").concat(_this3.good.item_url, "&description=").concat(_this3.good.item_info.cat_leaf_name) });

    });
    // data:{
    // 	url: this.goodObj.pict_url, //图片路径
    // 	CodeContent: codeContent, //二维码内容
    // 	TitleContent: this.goodObj.title, //商品标题
    // 	NowPrice: this.goodObj.zk_final_price, //现价
    // 	OldPrice: this.goodObj.reserve_price, //原价
    // 	RedecePrice: this.good.youhuiquan, //优惠券
    // 	InvitationCode: uni.getStorageSync("invitecode")
    // },
    //console.log(this.stnoe + "-" + this.url);
    //this.copykey=`【${this.goodObj.title}】${this.goodObj.short_url} 点击链接，再选择浏览器咑閞；或復·制这段描述${this.goodObj.tkl}后到👉淘♂寳♀👈`;

  },
  existUser: function existUser() {var _this4 = this;
    (0, _goods.existUser)(this.phone).then(function (res) {
      //console.log(JSON.stringify(res))
      if (res.data.code != 200) {
        uni.showToast({
          title: "未登录!",
          icon: "none" });

        _this4.phone = null;
      }
    });
  },
  jump: function jump(url) {
    if (!this.phone) {
      uni.showToast({
        title: '未登录',
        icon: 'none' });

      return;
    }
    console.log(url);
    var str = url.slice(8);
    console.log("taobao://".concat(str));
    plus.runtime.openURL("taobao://".concat(str));
    console.log("url:" + url);
  },
  recod: function recod() {var _this5 = this;
    (0, _goods.getItemsDes)(this.id).then(function (res) {
      console.log(_this5.id);
      //console.log(res.result);
    });
  },
  getDetailImgs: function () {var _getDetailImgs = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(url) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt("return",
              new Promise(function (resolve, reject) {
                uni.request({
                  url: url,
                  success: function success(res) {
                    console.log(JSON.stringify(res.data.data.pcDescContent));
                    resolve(res.data);
                  },
                  fail: function fail(err) {
                    console.log(err);
                  } });

              }));case 1:case "end":return _context2.stop();}}}, _callee2);}));function getDetailImgs(_x2) {return _getDetailImgs.apply(this, arguments);}return getDetailImgs;}(),

  regexpDetail: function regexpDetail(str) {
    if (res.statusCode == 200) {
      var info = res.data.data.pcDescContent || {};
      var arr = info.match(/<img.*?(?:>|\/>)/gi);
      var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
      var srcArr = [];
      for (var i = 1; i < arr.length; i++) {
        //console.log(arr[i]);
        var src = arr[i].match(srcReg);
        if (src[1]) {
          var url = src[1];
          if (url.substr(0, 7).toLowerCase() != 'http://' || url.substr(0, 8).toLowerCase() != 'https://') {
            url = 'http://' + url;
          }
          srcArr.push(url);
        }
      }
      //console.log("loadTBKgoodsInfo==>获取商品详情", srcArr);
      if (srcArr.length > 0) {
        this.detailImgs = srcArr;
        console.log(srcArr);
      }
    }
    // var imgReg = /<img.*?(?:>|\/>)/gi;
    // var srcReg = /\/\/(img.alicdn.com|assets.alicdn.com).*.(jpg|png|gif)/;
    // var arr = str.match(imgReg);
    // var result = [];
    // //console.log('所有已成功匹配图片的数组：' + arr);
    // for (var i = 0; i < arr.length; i++) {
    // 	//console.log(arr[i]);
    // 	var src = arr[i].match(srcReg);
    // 	//获取图片地址
    // 	if (src[0]) {
    // 		//console.log('已匹配的图片地址' + (i + 1) + '：' + src[0]);
    // 	}
    // 	result.push("https:" + src[0]);
    // }
    // return result
  },
  _getData: function _getData(id) {var _this6 = this;
    console.log(this.getPhone());
    if (!this.phone) {
      uni.showToast({
        title: '未登录',
        icon: 'none' });

    }
    uni.showLoading({
      title: "正在玩命加载..." });

    console.log(Number(this.getRelationId()));
    id = Number(id);
    console.log(typeof id);
    console.log(id);
    // let ret = Promise.all([getGoodDetail(id, Number(this.getRelationId())), getGoodsList({
    // 		page: 0
    // 	}), guessYouLike(id),
    // 	exisitCollection(this.getPhone()), getItemInfo(Number(id))
    // ]);
    var ret = Promise.all([(0, _goods.getGoodDetail)(id, Number(this.getRelationId())), (0, _goods.getMaterialItem)(id)]);
    ret.then(function (resTop) {
      _this6.good = {};
      if (resTop.length > 0) {
        console.log('商品详情1');
        console.log(JSON.stringify(resTop[0]));
        if (resTop[0].code != 200) {
          uni.showToast({
            title: resTop[0].msg,
            icon: "none" });

          setTimeout(function () {
            uni.navigateBack({
              delta: 1 });

          }, 3000);
        }
        _this6.good = resTop[0].data;
        //获取图片详情
        _this6.good.small_images = _this6.good.item_info.small_images.string;
        _this6.good.yj = (_this6.qhj * (_this6.good.max_commission_rate / 100) * 0.4).toFixed(2);
        _this6.recommend = resTop[1].result; //为你推荐
        //添加收藏
        var date = new Date();
        date.setDate(date.getDate() - 2);
        var create_date = date.format("yyyy-MM-dd hh:mm:ss");
        _this6.insert_collect({
          item_id: _this6.good.item_info.num_iid,
          user_id: uni.getStorageSync('user').id,
          pict_url: _this6.good.item_info.pict_url,
          title: _this6.good.item_info.title,
          price: _this6.qhj,
          create_date: create_date });

      }
    });
    setTimeout(function () {
      uni.hideLoading();
    }, 1000);
  },
  _getDetailImg: function _getDetailImg(list) {
    var image = '';
    var regx = /<[^>]*>|<\/[^>]*>/gm;
    var len = list.length;
    for (var i = 0; i < len; i++) {
      if (list[i].indexOf("<txt>") != -1) {
        image += "";
      } else {
        image += "<img src='https://" + list[i].replace(regx, "") + "' style='width:100%;max-width:100%' />";
      }
    }
    return image;
  },
  _getGoodDetail: function _getGoodDetail(id, table) {var _this7 = this;
    var ret = (0, _goods.getGoodDetail)(id, table);
    uni.showLoading({
      title: '加载中...',
      mask: true });

    ret.then(function (res) {
      uni.hideLoading();
      if (res.code == 200) {
        _this7.good = res.result;
        console.log('sp', _this7.good);
      } else {
        uni.showToast({
          title: '查无此商品',
          icon: 'none' });

      }
    });
    setTimeout(function () {
      uni.hideLoading();
    }, 1000);
  },
  _getRecommend: function _getRecommend() {var _this8 = this;
    var ret = (0, _goods.getGoodsList)({
      page: 0,
      type: '',
      screen: "",
      jg: "" });

    ret.then(function (res) {
      if (res.code == 200) {
        _this8.recommend = res.result;
        // console.log('recommend', this.recommend);
      }
    });
  },
  back: function back() {
    uni.navigateBack({
      delta: 1 });

  },
  _onscroll: function _onscroll(e) {
    var even = e.target || e.srcElement;
    this.nowScrollTop = even.scrollTop;
    // this.scrolltop = scrollTop; //实时同步位置
    // console.log('11111', even.scrollTop)
    // 				if (even.scrollTop > 555) {
    // 						this.isactive = false
    // 				} else{
    // 						this.isactive = true
    // 				}
  },
  go: function go(ev) {
    var e = ev || window.event;
    var target = ev.target || ev.srcElement;

    if (target.offsetLeft < 190 && target.offsetLeft > 150) {
      this.scrolltop = this.nowScrollTop;
      this.$nextTick(function () {
        this.scrolltop = 0;
        this.isactive = true;
      });
    } else if (target.offsetLeft < 240 && target.offsetLeft > 190) {
      console.log('2', this.scrolltop);
      this.scrolltop = this.nowScrollTop;
      this.$nextTick(function () {
        this.scrolltop = 555;
        this.isactive = false;
      });

    }
  } }), _props$computed$compo);exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 3)["default"]))

/***/ }),

/***/ 328:
/*!**********************************************************************************************************************!*\
  !*** E:/xampp/htdocs/asgapp/pages/common/goods-detail.vue?vue&type=style&index=0&id=083824fd&scoped=true&lang=less& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_083824fd_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-2!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods-detail.vue?vue&type=style&index=0&id=083824fd&scoped=true&lang=less& */ 329);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_083824fd_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_083824fd_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_083824fd_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_083824fd_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_1_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_2_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_detail_vue_vue_type_style_index_0_id_083824fd_scoped_true_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 329:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-1!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/xampp/htdocs/asgapp/pages/common/goods-detail.vue?vue&type=style&index=0&id=083824fd&scoped=true&lang=less& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[322,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/common/goods-detail.js.map