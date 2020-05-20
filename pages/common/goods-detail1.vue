<template>
	<view v-if="good">
		<!-- nav nar -->
		<view class="mnav-bar">
			<view class="wrap">
				<view class="back" @click="back">
					<uni-icon type="arrow-left" size="18" color="#fff"></uni-icon>
				</view>
				<view class="nav-title" v-show="navisShow">
					<view @click="go" :class="['txt',{ avtive:isactive}]">宝贝</view>
					<view @click="go" :class="['txt',{ avtive:!isactive}]">详情</view>
				</view>
			</view>
		</view>

		<!-- @scroll='_onscroll' -->
		<scroll-view v-if="good" :scroll-top="scrolltop" scroll-y class="detail-container">
			<!-- 轮播图 -->
			<swiper v-if="good" class="swiper-box" circular indicator-dots autoplay indicator-active-color="#fff" duration="500">
				<swiper-item class="item" v-for="(item,index) in goodObj.small_images" :key="index">
					<image class="swiper-img" :src="item"></image>
					<!-- lazy-load mode="aspectFit" -->
				</swiper-item>
			</swiper>
			<!-- 宝贝介绍 -->

			<view class="container" v-if="good">
				<view class="price-container">
					<view class="price-wrap">
						<view class="price-one">
							<view class="jh">券后</view>
							<view class="price">￥{{goodObj.reserve_price}}</view>
						</view>
						<view class="describe">
							预估佣金 {{goodObj.yj}} 元
						</view>
					</view>
					<view class="describe">{{good.title}}</view>
					<view class="ready-buy">
						<view class="small-gray">原价￥{{goodObj.zk_final_price}}</view>
						<view class="small-gray">{{goodObj.volume}}人已购买</view>
					</view>
				</view>
				<!-- 分享栏 -->
				<view class="big-title" @click="togglePopup('bottom-share')">
					<view class='shoptitle'>
						<image class="logo" mode="aspectFit" :src="good.logo"></image>
						<view class="title">{{goodObj.title}}</view>
					</view>
					<view class="share">
						<uni-icon type="share" color="#8a8a8a"></uni-icon>
						<text class="small-gray">分享</text>
					</view>
				</view>
				<!-- 优惠券 -->
				<view v-if="isSE=='true'" class="quan-container" @click="jump(goodObj.short_url)">
					<image class="quan-bg" src="../../static/bgquan.png"></image>
					<view class="wrap">
						<view class="yhq">
							<view class="yhq-txt">优惠券</view>
							<view class="yhq-price">￥{{good.youhuiquan?good.youhuiquan:0}}</view>
						</view>
					</view>
					<view class="take">{{presale}}</view>
				</view>
				<view v-else class="quan-container" @click="jump(goodObj.short_url)">
					<image class="quan-bg" src="../../static/bgquan.png"></image>
					<view class="wrap">
						<view class="yhq">
							<view class="yhq-txt">优惠券</view>
							<view class="yhq-price">￥{{good.youhuiquan?good.youhuiquan:0}}</view>
						</view>
						<view class="yhq">
							<view class="data-txt">使用期限</view>
							<view class="data">{{good.coupon_start_time}}~{{good.coupon_end_time}}</view>
						</view>
					</view>
					<view class="take">立即领卷</view>
				</view>
				<!-- 店铺评分 -->
				<view class="store-introduction">
					<view class="item">
						<view class="icons">
							<uni-icon size="16" :type="good.smlogo" color="#fe1a34"></uni-icon>
						</view>
						<view class="txt">
							{{good.title}}
						</view>
					</view>
					<view class="rank">
						<view class="dptxt">店铺评分</view>
						<view class="item">
							<view class="score">描述4.8</view>
							<uni-icon class="micon" type="up-arrow" size="16" color="#fe5e78"></uni-icon>
						</view>
						<view class="item">
							<view class="score">服务4.8</view>
							<uni-icon class="micon" type="up-arrow" size="16" color="#fe5e78"></uni-icon>
						</view>
						<view class="item">
							<view class="score">发货4.8</view>
							<uni-icon class="micon" type="up-arrow" size="16" color="#fe5e78"></uni-icon>
						</view>
					</view>
				</view>
				<!-- 商品详情 -->
				<view class="line-title">———— 商品详情 ————</view>
				<view>{{goodObj.detailImgs}}</view>
				<!-- <view v-for="(item,index) in goodObj.detailImgs" id="detail" style="line-height: 0;">
					<image :src="item" mode="" style="width: 100%;"></image>
				</view> -->
				<view v-if="detail">
					<!-- <view> 商品详情 ...{{detail}}</view> -->
					<rich-text id="shop-detail-wrap" :nodes="detail"></rich-text>
				</view>
				<!-- 为您推荐 -->
				<view class="line-title">———— 猜你喜欢 ————</view>
				<product-list :productList="recommend" :isGuress="true"></product-list><!-- 获取全部商品 -->
				<!-- <uni-collapse :accordion="true">
					<uni-collapse-item title="———— 为您推荐 ————" class="line-title" @tap="recod">
						
					</uni-collapse-item>
				</uni-collapse> -->
				<view class="line-title" style="margin-bottom: 120upx;">—— 到底了 ——</view>
			</view>
		</scroll-view>
		<!--底部固定栏 -->
		<view class="footer-container" v-if="good">
			<view class="back" @click="back">
				返回
			</view>
			<view class="colle" @click="collection">
				<view class="wrap">
					<uni-icon type="shoucang" :color="collentionColor"></uni-icon>
					<view :style="{color:collentionColor}">收藏</view>
				</view>
			</view>
			<view class="share" @click="share()">
				<view class="wrap">
					<uni-icon type="share" color="#8a8a8a"></uni-icon>
					<view>分享</view>
				</view>
			</view>
			<!-- <uni-popup :show="type === 'bottom-share'" style="z-index: 9999;" position="bottom" @hidePopup="togglePopup('')">
				<view style="display: block;">
					<view class="bottom-title">分享到</view>
					<view class="bottom-content">
						<view v-for="(item, index) in bottomData" :key="index" class="bottom-content-box">
							<view @tap="share(item.text)">
								<view :class="item.name" class="bottom-content-image">
									<text class="icon">{{ item.icon }}</text>
								</view>
								<view class="bottom-content-text">{{ item.text }}</view>
							</view>
						</view>
					</view>
					<view class="bottom-btn" @click="togglePopup('')">取消分享</view>
				</view>
			</uni-popup> -->
			<view class="copy" @click="copykey">
				复制淘口令
			</view>
			<view class="join" @click="jump(good.short_url)">
				<view v-if="isSE=='true'">
					<view>去预付</view>
				</view>
				<view v-else>
					<view class="sm-txt">立省￥{{good.youhuiquan?good.youhuiquan:0}}</view>
					<view>领券购买</view>
				</view>
			</view>
			<!-- <web-view hidden v-if="stone" :src="url"></web-view> -->
		</view>
	</view>
</template>
<script>
	import productList from '@/components/product-list.vue'
	// #ifdef APP-PLUS||APP-PLUS-NVUE
	import taobaoApi from '@/common/js/simple-tbapi.js'
	// #endif
	import uniCollapse from '@/components/other/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/other/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@/components/other/uni-list/uni-list.vue'
	import uniListItem from '@/components/other/uni-list-item/uni-list-item.vue'
	import uniPopup from '@/components/uni-popup.vue'
	import {
		getGoodDetail,
		getGoodsList,
		getDetailImg,
		addCollection,
		deleteCollection,
		getSmallImg,
		getItemsDes,
		getItemInfo,
		getItems,
		guessYouLike,
		exisitCollection,
		existUser,
		getShareImgUrl,
		getCTK
	} from '@/api/goods.js'
	import {
		BASE_URL
	} from '@/api/config.js'
	export default {
		props: {
			isSE: {
				type: Boolean,
				default: false
			},
			presale: String //预售文本
		},
		computed: {
			// collentionColor() {
			// 	console.log(this.isCollection);
			// 	return this.isCollection ? "#ff0000" : "#fff"
			// }
		},
		components: {
			productList,
			uniCollapse,
			uniCollapseItem,
			uniList,
			uniListItem,
			uniPopup
		},
		data() {
			return {
				stone: false,
				type: '',
				bottomData: [{
						text: '微信好友',
						icon: '\ue6a4',
						name: 'wx'
					},
					{
						text: '朋友圈',
						icon: '\ue646',
						name: 'wx'
					},
					{
						text: 'QQ好友',
						icon: '\ue66b',
						name: 'qq'
					},
				],
				nowScrollTop: 0,
				isCollection: false,
				collentionColor: "#fff",
				table: '',
				page: 1,
				id: '',
				scrolltop: 0,
				navisShow: true,
				isactive: true,
				reprice: 15,
				copykey: "",
				url: "",
				good: null,
				goodObj: {
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
					item_url: ""
				},
				recommend: {},
				detail: null,
				phone: this.getUser(),
				webview: uni.getStorageSync("webview")
			}
		},
		onLoad(option) {
			let optionDetail;
			console.log(uni.getStorageSync("webview"));
			console.log(uni.getStorageSync("optionDetail"));
			if (!uni.getStorageSync("webview")) {
				uni.setStorageSync("optionDetail", option);
				optionDetail = uni.getStorageSync("optionDetail");
				console.log(optionDetail);
				let id = optionDetail.id || ''
				this.id = id;
				let table = optionDetail.table || ''
				let page = optionDetail.page || '';
				this.isSE = optionDetail.isSE || false;
				this.presale = optionDetail.presale;
				this.page = page;
				console.log(optionDetail.isSE);
			} else {
				console.log(this.webview);
				optionDetail = uni.getStorageSync("optionDetail");
				console.log(JSON.stringify(optionDetail));
				let id = optionDetail.id || ''
				this.id = id;
				let table = optionDetail.table || ''
				let page = optionDetail.page || '';
				this.isSE = optionDetail.isSE || false;
				this.presale = optionDetail.presale;
				this.page = page;
				console.log(optionDetail.isSE);
			}
			let pid = this._getPid();
			this._getData(this.id);
			uni.setStorageSync("webview", false);
			this.goodObj.detailImgs=option.detailImgs;
			//this.loadTBKgoodsInfo(this.id);
		},
		onBackPress(e) { //调用返回动作或者按钮
			console.log(JSON.stringify(e));
			uni.switchTab({
				url: '/pages/index/index'
			})
		},
		onShow() {
			this.existUser();
		},
		methods: {
			/**
			 * 获取淘宝商品描述
			 * @param {Object} goods_numiids 商品ID
			 */
			async loadTBKgoodsInfo(goods_numiid) {
				var time = new Date().getTime();
				const [error, res] = await uni.request({
					url: 'https://h5api.m.taobao.com/h5/mtop.taobao.detail.getdesc/6.0',
					method: 'GET',
					header: {
						'content-type': 'application/json;charset=UTF-8  '
					},
					data: {
						data: '{"id":"' + goods_numiid + '"}',
						_: new Date().getTime()
					}
				});
				if (res.statusCode == 200) {
					var info = res.data.data.pcDescContent || {};
					var arr = info.match(/<img.*?(?:>|\/>)/gi);
					var srcReg = /src=[\'\"]?([^\'\"]*)[\'\"]?/i;
					var srcArr = [];
					for (var i = 1; i < arr.length; i++) {
						console.log(arr[i]);
						var src = arr[i].match(srcReg);
						if (src[1]) {
							var url = src[1];
							if (url.substr(0, 7).toLowerCase() != 'http://' || url.substr(0, 8).toLowerCase() != 'https://') {
								url = 'http://' + url;
							}
							srcArr.push(url);
						}
					}
					console.log(srcArr);
					if (srcArr.length > 0) {
						this.goodObj.detailImgs = srcArr;
						console.log(goods_numiid);
					}
				}
			},
			togglePopup(type) {
				this.type = type;
			},
			_getPid() {
				try {
					let data = uni.getStorageSync('user');
					return data.pid
				} catch (e) {
					//TODO handle the exception
				}

			},
			getUser() {
				try {
					let user = uni.getStorageSync('user');
					return user.phone
				} catch (e) {
					console.log(e);
				}
			},
			getRelationId() {
				try {
					return uni.getStorageSync("user").pid;
				} catch (e) {
					console.log(e);
				}
			},
			getPhone() {
				try {
					return uni.getStorageSync("user").phone;
				} catch (e) {
					console.log(e);
				}
			},
			//复制淘口令
			copykey1() {
				let _this = this
				this.copykey =
					`【${this.goodObj.title}】${this.goodObj.short_url} 点击链接，再选择浏览器咑閞；或復·制这段描述${this.goodObj.tkl}后到👉淘♂寳♀👈`;
				uni.setClipboardData({
					data: this.copykey,
					success: function() {
						uni.showToast({
							title: '已复制'
						})
					}
				});
			},
			// 收藏
			collection() {
				if (!this.phone) {
					uni.showToast({
						title: '未登录',
						icon: 'none'
					})
					return
				}
				if (this.isCollection) {
					console.log('取消收藏', this.isCollection);
					this.collentionColor = "#fff";
					deleteCollection({
						phone: this.phone,
						num_iid: this.goodObj.num_iid
					}).then(res => {
						this.isCollection = false;
						uni.showToast({
							title: '已取消'
						})
					})
				} else if (!this.isCollection) {
					console.log('增加收藏', this.isCollection)
					//console.log(JSON.stringify(this.goodObj));
					this.collentionColor = "#ff0000";
					addCollection({
						phone: this.phone,
						volume: this.goodObj.volume,
						// quanhoujia: (this.goodObj.zk_final_price-this.goodObj.youhuiquan).toFixed(1),
						quanhoujia: this.goodObj.reserve_price,
						youhuiquan: this.good.youhuiquan || 0,
						zk_final_price: this.goodObj.zk_final_price,
						title: this.goodObj.title,
						pict_url: this.goodObj.pict_url,
						num_iid: this.id
					}).then(res => {
						console.log(res);
						console.log('已收藏');
						this.isCollection = true;
						uni.showToast({
							title: '已收藏'
						})
					})
				}
			},
			//分享
			share(value) {
				if (!this.phone) {
					uni.showToast({
						title: '未登录',
						icon: 'none'
					})
					return
				}
				uni.setStorageSync("webview", true);
				this.stone = true;
				// getShareImgUrl({id:id}).then(res=>{
				// 	console.log(JSON.stringify(res));
				// });
				getShareImgUrl({
					url: this.goodObj.pict_url, //图片路径
					CodeContent: 'https://app-egshuj.openinstall.io/js-test/android/3610187954504473002?invitecode=' + uni.getStorageSync(
						"invitecode"), //二维码内容
					TitleContent: this.goodObj.title, //商品标题
					NowPrice: this.goodObj.zk_final_price, //现价
					OldPrice: this.goodObj.reserve_price, //原价
					RedecePrice: this.good.youhuiquan, //优惠券
					InvitationCode: uni.getStorageSync("invitecode")
				}).then(res => {
					// console.log(JSON.stringify(res));
					var data = res.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://oa.fpc98.com\">",
						"");
					data = data.replace("</string>", "")
					// console.log(data);
					var codeContent = 'http://39.108.215.49:8009/html/openInstall/?invitecode=' + uni.getStorageSync(
						"invitecode")+'&tkl='+this.goodObj.tkl;
					this.url = 'http://39.108.215.49:8009/html/getShareImgUrl.html?url=' + this.goodObj.pict_url + '&CodeContent=' +
						codeContent + '&TitleContent=' + this.goodObj.title + '&NowPrice=' +
						this.goodObj.zk_final_price + '&OldPrice=' + this.goodObj.reserve_price + '&RedecePrice=' + this.good.youhuiquan +
						'&InvitationCode=' + uni.getStorageSync("invitecode") +
						'&title=' + this.goodObj.title + '&zk_final_price=' + this.goodObj.zk_final_price + '&reserve_price=' + this.goodObj
						.reserve_price + '&item_url=' + this.goodObj.item_url +
						'&copykey=' + this.copykey + '&yj1=' + this.goodObj.yj;
					this.copykey = `復·制这段描述${this.goodObj.tkl}\n后到👉淘♂寳♀👈`;
					console.log(this.url);
					uni.navigateTo({
						url: `share?id=${this.id}&yj=${this.goodObj.yj}&title=${this.goodObj.title}&zk_final_price=${this.goodObj.zk_final_price}&reserve_price=${this.goodObj.reserve_price}&small_images=${this.goodObj.small_images}&copykey=${this.copykey}&short_url=${this.good.short_url}&invitecode=${uni.getStorageSync("invitecode")}&item_description=${this.goodObj.item_description}&item_url=${this.goodObj.short_url}&imgUrl=${data}`
					})
				}) 
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
			existUser() {
				existUser(this.phone).then(res => {
					console.log(JSON.stringify(res))
					if (res.data.code != 200) {
						uni.showToast({
							title: "未登录!",
							icon: "none"
						})
						this.phone = null;
					}
				})
			},
			jump(url) {
				if (!this.phone) {
					uni.showToast({
						title: '未登录',
						icon: 'none'
					})
					return
				}
				console.log(url)
				let str = url.slice(8);
				console.log(`taobao://${str}`);
				//plus.runtime.openURL(`taobao://${str}`);
				console.log("url:" + url);
				taobaoApi.detail(url, res => {
					console.log(JSON.stringify(res));
				});
			},
			recod() {
				getItemsDes(this.id).then(res => {
					console.log(this.id);
					console.log(res.result);
				})
			},
			async getDetailImgs(url) {
				return new Promise((resolve, reject) => {
					uni.request({
						url: url,
						success(res) {
							console.log(JSON.stringify(res.data.data.pcDescContent));
							resolve(res.data);
						},
						fail(err) {
							console.log(err);
						}
					})
				})
			},
			regexpDetail(str) {
				var imgReg = /<img.*?(?:>|\/>)/gi;
				var srcReg = /\/\/(img.alicdn.com|assets.alicdn.com).*.(jpg|png|gif)/;
				var arr = str.match(imgReg);
				var result = [];
				//console.log('所有已成功匹配图片的数组：' + arr);
				for (var i = 0; i < arr.length; i++) {
					//console.log(arr[i]);
					var src = arr[i].match(srcReg);
					//获取图片地址
					if (src[0]) {
						//console.log('已匹配的图片地址' + (i + 1) + '：' + src[0]);
					}
					result.push("https:" + src[0]);
				}
				return result
			},
			_getData(id, table, pid, page) {
				// getCTK(id).then(res=>{
				// 	console.log(JSON.stringify(res.data.content));
				// 	this.goodObj.detailImgs=res.data.content.pcDescContent.split('|')
				// 	console.log(this.goodObj.detailImgs);
				// })
				console.log(this.getPhone());
				if (!this.phone) {
					uni.showToast({
						title: '未登录',
						icon: 'none'
					})
				}
				uni.showLoading({
					title: "正在玩命加载..."
				})
				console.log(id);
				let ret = Promise.all([getGoodDetail(id, this.getRelationId()), getGoodsList({
						page: 0
					}), getItemsDes(id), guessYouLike(id),
					exisitCollection(this.getPhone()), getItems(page, id, table), getItemInfo(id)
				]);
				ret.then(resTop => {
					console.log(resTop[2].result);
					console.log(JSON.stringify(resTop[2].result));
					this.good = {};
					this.goodObj.detailImgs = resTop[2].result.pcDescContent;
					try {
						if (resTop[2].result.pcDescContent) {
							//this.goodObj.detailImgs = this.regexpDetail(resTop[2].result.pcDescContent);
							console.log(this.regexpDetail(resTop[2].result.pcDescContent));
						} else {
							this.getDetailImgs(resTop[2].result).then(resDetails => {
								//console.log(resDetails.data.pcDescContent); 
								//this.goodObj.detailImgs = resDetails.data.pcDescContent;
								let details = JSON.stringify(resDetails.data.pcDescContent).split('src=/\"');
								console.log(details.length);
								//console.log(this.regexpDetail(resDetails.data.pcDescContent));
								//this.goodObj.detailImgs = this.regexpDetail(resDetails.data.pcDescContent);
							})
						}
					} catch (e) {
						console.log(e);
					}
					//console.log(this.goodObj.detailImgs);
					// uni.request({
					// 	url: resTop[2].result,
					// 	success(re) {
					// 		console.log(re);
					// 	},
					// 	fail(er) {
					// 		console.log(er);
					// 	}
					// })
					if (resTop.length > 0) {
						console.log('商品详情');
						console.log(JSON.stringify(resTop[6]));
						let data1 = resTop[0].result.result.data;
						this.good = {};
						this.good = data1;
						// console.log(this.good);
						//获取图片详情
						console.log(page);
						// getItems(page, id, table).then(resItems => {
						//console.log(resTop[5]);
						for (var i = 0; i < resTop[5].result.length; i++) {
							console.log(resTop[5].result[i].num_iid + "-" + id);
							if (resTop[5].result[i].num_iid == id) {
								this.goodObj.item_description = resTop[5].result[i].item_description
								//console.log(resTop[5].result[i].item_description);
							}
						}
						if (resTop[5].result) {
							this.goodObj.commission_rate = resTop[5].result[0].commission_rate;
						}
						// getItemInfo(id).then(res => { 
						this.goodObj.small_images = resTop[6].data.result.n_tbk_item.small_images.string;
						this.goodObj.item_url = resTop[6].data.result.n_tbk_item.item_url;
						this.goodObj.zk_final_price = this.good.item_info.zk_final_price;
						//console.log(this.good.youhuiquan ? this.good.youhuiquan : 0);
						let youhuiquan = this.good.youhuiquan ? this.good.youhuiquan : 0;
						this.goodObj.reserve_price = (this.good.item_info.zk_final_price - youhuiquan).toFixed(2);
						//this.goodObj.reserve_price = !isNaN(this.goodObj.reserve_price) ? this.goodObj.reserve_price : this.goodObj.zk_final_price;
						this.goodObj.volume = resTop[6].data.result.n_tbk_item.volume;
						this.goodObj.title = resTop[6].data.result.n_tbk_item.title;
						if (resTop[4].code == 200) {
							for (var cIndex in resTop[4].result) {
								//console.log(resTop[4].result[cIndex].title + "-" + this.goodObj.title);
								if (resTop[4].result[cIndex].title == this.goodObj.title) {
									this.isCollection = true;
									this.collentionColor = "#ff0000";
								}
							}
						}
						this.goodObj.pict_url = resTop[6].data.result.n_tbk_item.pict_url;
						this.goodObj.num_iid = resTop[6].data.result.n_tbk_item.seller_id;
						console.log(this.good.youhuiquan || 0 + "*" + this.goodObj.commission_rate || 0);
						try {
							if (this.good.max_commission_rate != undefined) {
								console.log(this.good.max_commission_rate);
								console.log(this.good.commission_rate);
								console.log(this.good.youhuiquan);
								//佣金=总佣金/0.4  总佣金=付款金额/佣金比例
								this.goodObj.yj = (this.goodObj.reserve_price * (this.good.max_commission_rate / 100) * 0.4).toFixed(2);
								// this.goodObj.yj = (this.good.youhuiquan * 0.4 * 0.4).toFixed(2);
								console.log(this.goodObj.yj);
							} else {
								this.goodObj.yj = 0;
							}
						} catch (e) {
							this.goodObj.yj = 0;
						}
						this.goodObj.short_url = resTop[0].result.result.data.short_url
						this.goodObj.tkl = resTop[0].result.result.data.tpwd;
						// })
						// });
						console.log(page, id);
						console.log(this.goodObj.commission_rate, this.goodObj.youhuiquan);
						this.recommend = resTop[3].result; //为你推荐
						//console.log(this.recommend);
					}
				})
				setTimeout(function() {
					uni.hideLoading();
				}, 1000);
			},
			_getDetailImg(list) {
				let image = '';
				let regx = /<[^>]*>|<\/[^>]*>/gm;
				let len = list.length;
				for (var i = 0; i < len; i++) {
					if (list[i].indexOf("<txt>") != -1) {
						image += "";
					} else {
						image += "<img src='https://" + list[i].replace(regx, "") + "' style='width:100%;max-width:100%' />";
					}
				}
				return image
			},
			_getGoodDetail(id, table) {
				let ret = getGoodDetail(id, table)
				uni.showLoading({
					title: '加载中...',
					mask: true
				})
				ret.then(res => {
					uni.hideLoading();
					if (res.code == 200) {
						this.good = res.result
						console.log('sp', this.good)
					} else {
						uni.showToast({
							title: '查无此商品',
							icon: 'none'
						})
					}
				})
				setTimeout(function() {
					uni.hideLoading();
				}, 1000)
			},
			_getRecommend() {
				let ret = getGoodsList({
					page: 0,
					type: '',
					screen: "",
					jg: ""
				});
				ret.then(res => {
					if (res.code == 200) {
						this.recommend = res.result;
						// console.log('recommend', this.recommend);
					}
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			_onscroll(e) {
				let even = e.target || e.srcElement;
				this.nowScrollTop = even.scrollTop;
				// this.scrolltop = scrollTop; //实时同步位置
				// console.log('11111', even.scrollTop)
				// 				if (even.scrollTop > 555) {
				// 						this.isactive = false
				// 				} else{
				// 						this.isactive = true
				// 				}
			},
			go(ev) {
				let e = ev || window.event;
				let target = ev.target || ev.srcElement;

				if (target.offsetLeft < 190 && target.offsetLeft > 150) {
					this.scrolltop = this.nowScrollTop
					this.$nextTick(function() {
						this.scrolltop = 0;
						this.isactive = true;
					})
				} else if (target.offsetLeft < 240 && target.offsetLeft > 190) {
					console.log('2', this.scrolltop)
					this.scrolltop = this.nowScrollTop
					this.$nextTick(function() {
						this.scrolltop = 555;
						this.isactive = false;
					})

				}
			},
		}
	}
</script>
<style scoped lang="less">
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.uni-padding-wrap {
		padding: 0 30upx;
	}

	button {
		margin: 20upx 0;
	}

	.uni-helllo-text {
		height: 100upx;
		line-height: 100upx;
		text-align: center;
	}

	.center-box {
		width: 500upx;
		height: 500upx;
	}

	.uni-list-item {
		text-align: left;
		line-height: 80upx;
		border-bottom: 1px #f5f5f5 solid;
	}

	.uni-list-item:last-child {
		border: none;
	}

	.center-box .image {
		width: 100%;
		height: 100%;
	}

	.bottom-title {
		line-height: 60upx;
		font-size: 24upx;
		padding: 15upx 0;
	}

	.bottom-content {
		display: flex;
		flex-wrap: wrap;
		padding: 0 35upx;
	}

	.bottom-content-box {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 15px 15upx;
		box-sizing: border-box;
	}

	.bottom-content-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 90upx;
		height: 90upx;
		overflow: hidden;
		background: #007aff;
		border-radius: 10upx;
	}

	.bottom-content-text {
		font-size: 26upx;
		color: #333;
		margin-top: 10upx;
	}

	.bottom-btn {
		height: 90upx;
		line-height: 90upx;
		border-top: 1px #f5f5f5 solid;
	}

	.bottom-content-image.wx {
		background: #00ce47;
	}

	.bottom-content-image.qq {
		background: #00b6f6;
	}

	.bottom-content-image.sina {
		background: #ff766a;
	}

	.bottom-content-image.copy {
		background: #07ccd0;
	}

	@font-face {
		font-family: 'iconfont';
		/* project id 1028200 */
		src: url('https://at.alicdn.com/t/font_1028200_47ewtwy4t04.ttf') format('truetype');
	}

	.icon {
		font-family: 'iconfont';
		font-size: 40upx;
		color: #fff;
	}




	.detail-container {
		height: 100vh;
		width: 100%;
		overflow-x: hidden;
	}

	img {
		width: 100%;
	}

	.container {
		width: calc(100% - 40upx);
		padding: 20upx 20upx;
		background: #fff;
	}

	.avtive {
		position: relative !important;

		&::after {
			position: absolute;
			content: "";
			width: 30upx;
			height: 2px;
			background: #ff1a1a;
			bottom: -5upx;
			left: 25%;
		}
	}

	// nav
	.mnav-bar {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: 80px;
		padding: 40upx 0;
		background: rgba(255, 255, 255, 0.5);
		z-index: 999;
		// color: #fff;

		.wrap {
			.back {
				display: flex;
				justify-content: center;
				align-items: center;
				float: left;
				background: rgba(0, 0, 0, .3);
				width: 70upx;
				height: 70upx;
				border-radius: 50%;
				margin-left: 20upx;

			}

			.nav-title {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				text-align: center !important;

				.txt {
					margin-right: 20upx !important;
					padding-bottom: 4upx !important;
					font-size: 35upx !important;
					font-weight: 600 !important;
				}
			}
		}
	}

	// 轮播图
	.swiper-box {
		height: 600upx;
		width: 100%;

		.swiper-img {
			width: 100%;
			height: 600upx;
		}
	}

	// 宝贝详情一栏
	.price-container {
		width: 100%;
		padding: 20upx 0;
		background: #fff;

		.jh {
			padding: 0upx 12upx;
			border-radius: 8upx;
			background: #ffe9ec;
			font-size: 12upx;
			color: #ff1213;
			text-align: center;
		}

		.describe {
			font-size: 24upx;
			color: #ff1213;
			font-weight: 500;
		}

		.price-wrap {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.price-one {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
			}

			.price {
				font-size: 38upx;
				color: #ff1213;
				font-weight: 600;
			}
		}

		.ready-buy {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
	}

	// 分享栏目
	.big-title {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-start;

		.shoptitle {
			position: relative;
			display: flex;
			width: 90%;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
		}

		.logo {
			position: absolute;
			top: 5px;
			left: 0;
			width: 30upx;
			height: 30upx;
			margin-right: 10upx;
		}

		.share {
			width: 10%;
			text-align: center;
		}

		.title {
			font-size: 28upx;
			font-weight: 600;
			color: #000;
			margin-left: 25px;
			// margin-left: 10upx;
		}
	}

	// 优惠券
	.quan-container {
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 150upx;

		.quan-bg {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}

		.wrap {
			padding: 0 60upx;
			position: relative;

			.yhq {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;

				.yhq-txt {
					color: #fe1a34;
					font-size: 20upx;
				}

				.yhq-price {
					color: #fe1a34;
					font-size: 30upx;
					font-weight: 600;
					margin: 0 0 20upx 30upx;
				}

				.data-txt {
					font-size: 24upx;
					color: #fe1a34;
					/* margin-left: 20upx; */
				}

				.data {
					font-size: 24upx;
					color: #fe1a34;
					margin-left: 20upx;
				}
			}
		}

		.take {
			position: relative;
			padding-right: 20upx;
			color: #fe1a34;
			font-size: 30upx;
			font-weight: 600;
		}
	}

	// 推荐语
	.recommend {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding: 0 10px;
		width: 100%;
		position: relative;

		.title {
			position: absolute;
			top: 0;
			flex-basis: 15%;
			font-size: 28upx;
			color: #000;
			font-weight: 600;
			padding-right: 10upx;
		}

		.marginL {
			margin-left: 15%;
		}
	}

	// 店铺评分
	.store-introduction {
		padding: 20upx 10upx;
		margin-top: 10px;
		position: relative;

		.rank {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}

		.item {
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
		}

		.icons {
			position: absolute;
			top: 18px;
			left: 0px;
		}

		.txt {
			margin-left: 36upx;
			font-size: 28upx;
			color: #333;
			font-weight: 600;
		}

		.dptxt {
			font-size: 28upx;
			color: #333;
			font-weight: 600;
		}

		.score {
			font-size: 18upx;
			color: #8a8a8a;
			font-weight: 500;
		}

		.micon {
			vertical-align: middle;
		}
	}

	// 商品详情
	.line-title {
		font-size: 32upx;
		font-weight: 600;
		color: #000;
		text-align: center;
	}

	// 底部固定栏
	.footer-container {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100%;
		flex: 1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: #fff;
		height: 120upx;

		.back {
			padding: 0 20upx;
			// font-size: 28upx;
			font-weight: 600;
		}

		.share {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 33.3333%;
			height: 100%;

			.wrap {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

			}
		}

		.colle {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 33.3333%;
			height: 100%;
			background: linear-gradient(to right, #e8592f, #fac835);
			color: #fff;

			.wrap {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}

		.copy {
			background: linear-gradient(to right, #fb2d5d, #fe050c);
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 33.3333%;
			height: 100%;
			color: #fff;
		}

		.join {
			background: #000;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			width: 33.3333%;
			height: 100%;
			color: #fff;

			.sm-txt {
				font-size: 12upx;
			}
		}
	}

	// 商品详情容器
	#shop-detail-wrap {
		font-size: 0 !important;

		img {
			width: 100% !important;
		}
	}

	// 公共样式
	.small-gray {
		font-size: 24upx;
		color: #aeaeae;
	}
</style>
