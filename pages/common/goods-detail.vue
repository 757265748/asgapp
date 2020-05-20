<template>
	<view v-if="good">
		<!-- nav nar -->
		<!-- <view class="div" style="height: 90upx;background-color: #333;"></view> -->
		<!-- 收藏 -->
		<view class="colle_group">
			<view class="collect" @touchstart="collect_tap">
				<Ahh5Animated :delay="0" :name="'fadeInDown'" :duration="0.5" timing="ease" count="1" :isShow="collectFlag">
					<view class="box">
						<view class="swiper">
							<swiper class="swiper-tall" :indicator-dots="indicatorDots" :autoplay="autoplay" :previous-margin="previousMargin"
							 :next-margin="nextMargin" :circular="circular" :current="swiperCurrentIndex">
								<swiper-item class="swiper-container" v-for="(item,index) in collect" :key="index" :item-id="index+''"
								 :data-year="index" @tap="collect_good_detail(item)">
									<view class="swiper-item">
										<view class="img">
											<!-- <image :src="item.pict_url" mode="aspectFit"></image> -->
											<img :src="item.pict_url" width="100%" height="100%" alt="">
										</view>
										<view class="dec">
											<view class="collect_title">{{item.title}}</view>
											<view class="collect_price">￥{{item.price}}</view>
										</view>
									</view>
								</swiper-item>
							</swiper>
						</view>
					</view>
				</Ahh5Animated>
			</view>
		</view>
		<view class="all" :style="{opacity:collectFlag?0.5:1}" @touchstart="global_tap">
			<view class="head">
				<view class="mnav-bar">
					<view class="wrap">
						<view class="nav-title" v-show="navisShow">
							<view class="top-back" @click="back">
								<view class="uni-icon uni-icon-back" style="color: white;"></view>
							</view>
							<view @click="go" :class="['txt',{ avtive:isactive}]">宝贝</view>
							<view @click="go" :class="['txt',{ avtive:!isactive}]">详情</view>
						</view>
					</view>
				</view>
				<!-- @scroll='_onscroll' -->
				<scroll-view v-if="good" :scroll-top="scrolltop" scroll-y class="detail-container">
					<!-- 轮播图 -->
					<swiper v-if="good" class="swiper-box" circular indicator-dots autoplay indicator-active-color="#fff" duration="500">
						<swiper-item class="item" v-for="(item,index) in good.small_images" :key="index">
							<image class="swiper-img" :src="item"></image>
							<!-- lazy-load mode="aspectFit" -->
						</swiper-item>
					</swiper>
				</scroll-view>
			</view>
			<!-- 宝贝介绍 -->

			<view class="container" v-if="good">
				<view class="price-container">
					<view class="price-wrap">
						<view class="price-one">
							<view class="jh">券后</view>
							<view class="price">￥{{qhj}}</view>
							<!-- <view class="price" v-else>￥{{(good.item_info.reserve_price-good.youhuiquan).toFixed(2)}}</view> -->
						</view>
						<view class="describe">
							预估佣金 {{good.yj}} 元
						</view>
					</view>
					<view class="ready-buy">
						<view class="small-gray">原价￥{{good.item_info.zk_final_price}}</view>
						<view class="small-gray">{{good.item_info.volume}}人已购买</view>
					</view>
				</view>
				<!-- 分享栏 -->
				<view class="big-title" @longpress="copyTpwd('title')">
					<view class='shoptitle'>
						<view class="title">{{good.item_info.title}}</view>
					</view>
					<view class="share">
						<uni-icon type="share" color="#8a8a8a"></uni-icon>
						<uni-icon type="paperclip" color="#8a8a8a"></uni-icon>
						<text class="small-gray" @tap="copyTpwd('title')">复制</text>
					</view>
				</view>
				<!-- 优惠券 -->
				<view class="quan-container" @click="jump(good.short_url)">
					<image class="quan-bg" src="../../static/bgquan.png"></image>
					<view class="wrap">
						<view class="yhq">
							<view class="yhq-txt">优惠券</view>
							<view class="yhq-price">￥{{good.youhuiquan?good.youhuiquan:0}}</view>
						</view>
						<view class="yhq">
							<view class="data-txt">使用期限</view>
							<view class="data">{{good.coupon_start_time||0}}~{{good.coupon_end_time||0}}</view>
						</view>
					</view>
					<view class="take">立即领卷</view>
				</view>
				<!-- 店铺评分 -->
				<view class="store-introduction">
					<view class="store" style="display: flex; justify-content: space-between;">
						<view>{{good.item_info.nick}}</view>
						<view @tap="center_store(good.item_info.nick)">
							<text>进入店铺</text>
							<view class="uni-icon uni-icon-arrowright"></view>
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
					<view class="Recommendation uni-flex uni-row">
						<view class="flex_1">推荐语:</view>
						<view class="flex_4">{{good.item_info.cat_name}}</view>
					</view>
				</view>
				<!-- 商品详情 -->
				<uni-collapse :accordion="true" @change="" class="uni-flex uni-row">
					<uni-collapse-item class="line-title" :show-animation='true' :open="false" title="———— 商品详情 ————">
						<view v-if="detailImgs && detailImgs.length > 0" v-for="(item,index) in detailImgs" id="detail" style="display: flex;justify-content: center;">
							<image :src="item" mode="widthFix"></image>
						</view>
					</uni-collapse-item>
				</uni-collapse>
				<uni-collapse @change="">
					<uni-collapse-item class="line-title" :show-animation='true' title="———— 猜你喜欢 ————">
						<product-list :productList="recommend" :isGuress="true"></product-list>
						<view class="line-title" style="margin-bottom: 120upx;">——  到底了 ——</view>
					</uni-collapse-item>
				</uni-collapse>
			</view>
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
				<uni-popup :show="type === 'bottom -share'" style="z-index: 9999;" position="bottom" @hidePopup="togglePopup('')">
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
				</uni-popup>
				<view class="copy" @tap="copyTpwd('tkl')">
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
	</view>
</template>
<script>
	import uniIcon from '@/components/uni-icon.vue'
	import productList from '@/components/product-list.vue'
	import uniSection from '@/components/other/uni-section/uni-section.vue'
	import uniCollapse from '@/components/other/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/other/uni-collapse-item/uni-collapse-item.vue'
	import uniList from '@/components/other/uni-list/uni-list.vue'
	import uniListItem from '@/components/other/uni-list-item/uni-list-item.vue'
	import uniPopup from '@/components/uni-popup.vue'
	import Ahh5Animated from "@/components/ahh5-animated/ahh5-animated"
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
		getMaterialItem,
		insert_collect,
		select_collect,
		getTbkShop
	} from '@/api/goods.js'
	import {
		BASE_URL
	} from '@/api/config.js'
	Date.prototype.format = function(fmt) {
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
		for (var k in o)
			if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[
				k]).substr(("" + o[k]).length)));
		return fmt;
	}
	export default {
		props: {
			isSE: {
				type: Boolean,
				default: false
			},
			presale: String //预售文本
		},
		computed: {
			qhj() {
				let r = 0;
				if (this.good.item_info.zk_final_price - this.good.youhuiquan > 0) {
					r = (this.good.item_info.zk_final_price - this.good.youhuiquan).toFixed(2);
				} else {
					r = this.good.item_info.zk_final_price;
				}
				return r;
			}
		},
		components: {
			productList,
			uniSection,
			uniCollapse,
			uniCollapseItem,
			uniList,
			uniListItem,
			uniPopup,
			uniIcon,
			Ahh5Animated
		},
		data() {
			return {
				changSwiperIndex: 0,
				Ahh5Animated: [{
					"key": "Fading Entrances",
					"data": ["fadeInDown"]
				}],
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
						icon: '\ue6a4',
						name: 'wx'
					},
					{
						text: '朋友圈',
						icon: '\ue646',
						name: 'wx'
					},
					{
						text: '发圈',
						icon: '\ue645',
						name: 'fq'
					},
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
				page: 1,
				id: '',
				scrolltop: 0,
				scrollFlag: false, //页面是否滚动
				navisShow: true,
				isactive: true,
				reprice: 15,
				copykey: "",
				url: "",
				good: null,
				detailImgs: [],
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
				recommend: [],
				collect: [],
				detail: null,
				phone: this.getUser(),
				webview: uni.getStorageSync("webview"),
				pageType: "",
				collectFlag: false
			}
		},
		onLoad(option) {
			console.log(option);
			let id = option.id || '';
			this.id = Number(id);
			console.log(this.id);
			console.log(typeof this.id);
			let table = option.table || '';
			let page = option.page || '';
			this.isSE = option.isSE || false;
			this.presale = option.presale;
			this.page = page;
			this.pageType = option.pageType || "";
			console.log(option.isSE);
			let pid = this._getPid();
			this._getData(this.id);
			uni.setStorageSync("webview", false);
			this.loadTBKgoodsInfo(this.id);
		},
		onBackPress(e) { //调用返回动作或者按钮 
			console.log(JSON.stringify(e));
			uni.switchTab({
				url: '/pages/index/index'
			})
		},
		onShow() {
			this.existUser();
			this.select_collect();
		},
		onBackPress(options) {
			console.log(options);
			if (options.from == "backbutton") {
				if (this.pageType == "send_circle") {
					uni.switchTab({
						url: '/pages/send_circle/index'
					})
				}
			}
		},
		// enablePullDownRefresh
		onPullDownRefresh(e) {
			this.collectFlag = true;
			uni.stopPullDownRefresh();
		},
		methods: {
			center_store(keyword){
				getTbkShop({
					keyword:keyword
				}).then(res=>{
					console.log(res);
					if(res.code==200){
						console.log(res.result[0].shop_url);
						plus.runtime.openURL(res.result[0].shop_url);
					}
				});
			},
			//收藏商品详情
			collect_good_detail(item) {
				console.log(item);
				uni.navigateTo({
					url: `/pages/common/goods-detail?id=${item.item_id}`
				})
			},
			//全局点击
			global_tap() {
				this.collectFlag = false
			},
			//点击收藏
			collect_tap(e) {
				console.log(JSON.stringify(e));
				this.collectFlag = true;
				return false;
			},
			swiperChange(e) {
				console.log(e)
				this.changSwiperIndex = e.detail.current
			},
			//查询收藏
			select_collect() {
				select_collect({
					user_id: uni.getStorageSync("user").id
				}).then(res => {
					console.log(res);
					if (res.code == 200) {
						this.collect = res.result;
					} else {
						uni.showToast({
							title: res.msg,
							icon: 'none'
						})
					}
				})
			},
			//添加收藏
			insert_collect(data) {
				insert_collect({
					item_id: data.item_id,
					user_id: data.user_id,
					pict_url: data.pict_url,
					title: data.title,
					price: data.price,
					create_date: data.create_date
				}).then(res => {
					console.log(res)
				})
			},
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
						'content-type': 'application/json;charset=UTF-8'
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
					console.log("loadTBKgoodsInfo==>获取商品详情", srcArr);
					if (srcArr.length > 0) {
						this.detailImgs = srcArr;
						console.log(goods_numiid);
						console.log(this.detailImgs);
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
				console.log(JSON.stringify(uni.getStorageSync("user")));
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
			copyTpwd(type) {
				if (type == 'tkl') {
					uni.setClipboardData({
						data: this.good.tpwd,
						success: function() {
							uni.showToast({
								title: '已复制'
							})
						}
					});
				} else if (type == 'link') {
					uni.setClipboardData({
						data: this.good.tpwd,
						success: function() {
							uni.showToast({
								title: '已复制'
							})
						}
					});
				} else if (type == 'title') {
					uni.setClipboardData({
						data: this.good.item_info.title,
						success: function() {
							uni.showToast({
								title: '已复制'
							})
						}
					});
				}
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
						num_iid: this.good.num_iid
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
						volume: this.good.item_info.volume,
						// quanhoujia: (this.good.zk_final_price-this.good.youhuiquan).toFixed(1),
						quanhoujia: this.good.item_info.reserve_price,
						youhuiquan: this.good.youhuiquan || 0,
						zk_final_price: this.good.item_info.zk_final_price,
						title: this.good.item_info.title,
						pict_url: this.good.item_info.pict_url,
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
				console.log(JSON.stringify(this.good))
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

				getShareImgUrl({
					url: this.good.item_info.pict_url, //图片路径
					CodeContent: codeContent,
					TitleContent: this.good.item_info.title, //商品标题
					NowPrice: this.good.item_info.zk_final_price, //现价
					OldPrice: this.good.item_info.reserve_price, //原价
					RedecePrice: this.good.youhuiquan, //优惠券
					InvitationCode: uni.getStorageSync("invitecode")
				}).then(res => {
					console.log(JSON.stringify(res));
					// var data = res.replace("<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<string xmlns=\"http://oa.fpc98.com\">",
					// 	"");
					// data = data.replace("</string>", "")
					// console.log(data);
					this.url = 'http://39.108.215.49:8009/html/getShareImgUrl.html?url=' + this.goodObj.pict_url + '&CodeContent=' +
						codeContent + '&TitleContent=' + this.goodObj.title + '&NowPrice=' +
						this.goodObj.zk_final_price + '&OldPrice=' + this.goodObj.reserve_price + '&RedecePrice=' + this.good.youhuiquan +
						'&InvitationCode=' + uni.getStorageSync("invitecode") +
						'&title=' + this.goodObj.title + '&zk_final_price=' + this.goodObj.zk_final_price + '&reserve_price=' + this.goodObj
						.reserve_price + '&item_url=' + this.goodObj.item_url +
						'&copykey=' + this.copykey + '&yj1=' + this.goodObj.yj;
					this.copykey = `復制这段描述₳${this.good.tpwd.substr(1,11)}₳,\n进入【Tao宝】即可抢购`;
					console.log(this.url);
					uni.navigateTo({
						url: `share?id=${this.id}&pict_url=${this.good.item_info.pict_url}&youhuiquan=${this.good.youhuiquan}&yj=${this.good.yj}&title=${this.good.item_info.title}&zk_final_price=${this.good.item_info.zk_final_price}&reserve_price=${this.good.item_info.reserve_price}&small_images=${this.good.small_images}&copykey=${this.copykey}&short_url=${this.good.short_url}&invitecode=${uni.getStorageSync("invitecode")}&imgUrl=${res.imgUrl}&item_url=${this.good.item_url}&description=${this.good.item_info.cat_leaf_name}`
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
					//console.log(JSON.stringify(res))
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
				plus.runtime.openURL(`taobao://${str}`);
				console.log("url:" + url);
			},
			recod() {
				getItemsDes(this.id).then(res => {
					console.log(this.id);
					//console.log(res.result);
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
			_getData(id) {
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
				console.log(Number(this.getRelationId()));
				id = Number(id);
				console.log(typeof id);
				console.log(id);
				// let ret = Promise.all([getGoodDetail(id, Number(this.getRelationId())), getGoodsList({
				// 		page: 0
				// 	}), guessYouLike(id),
				// 	exisitCollection(this.getPhone()), getItemInfo(Number(id))
				// ]);
				let ret = Promise.all([getGoodDetail(id, Number(this.getRelationId())), getMaterialItem(id)]);
				ret.then(resTop => {
					this.good = {};
					if (resTop.length > 0) {
						console.log('商品详情1');
						console.log(JSON.stringify(resTop[0]));
						if (resTop[0].code != 200) {
							uni.showToast({
								title: resTop[0].msg,
								icon: "none"
							})
							setTimeout(() => {
								uni.navigateBack({
									delta: 1
								})
							}, 3000)
						}
						this.good = resTop[0].data;
						//获取图片详情
						this.good.small_images = this.good.item_info.small_images.string;
						this.good.yj = (this.qhj * (this.good.max_commission_rate / 100) * 0.4).toFixed(2);
						this.recommend = resTop[1].result; //为你推荐
						//添加收藏
						var date = new Date();
						date.setDate(date.getDate() - 2);
						var create_date = date.format("yyyy-MM-dd hh:mm:ss");
						this.insert_collect({
							item_id: this.good.item_info.num_iid,
							user_id: uni.getStorageSync('user').id,
							pict_url: this.good.item_info.pict_url,
							title: this.good.item_info.title,
							price: this.qhj,
							create_date: create_date
						})
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
	.top-back {
		position: absolute;
		left: 0;
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

	.collect_title {
		text-align: center;
	}

	.collect_price {
		color: #ff1213;
	}

	.colle_group {
		position: relative;
	}

	.collect {
		position: absolute;
		top: 0;
		z-index: 9;
		width: 100%;
	}

	.box {
		width: 100%;
		height: 450upx;
		padding: 10upx;
		background: rgba(255, 255, 255, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		// margin-bottom: 50rpx;
	}

	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-container {
		display: flex;
		align-items: center;
	}

	uni-swiper {
		height: 100%;
	}

	.swiper-item {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
		height: 100%;
		width: 420upx;
		text-align: center;
		broder-radius: 6upx;
		background-color: white;
	}

	.swiper-item .img {
		height: 80%;
	}

	.swiper-item .dec {
		padding: 0 10upx;
		font-size: .8rem;
	}

	.swiper-tall {
		display: flex;
		align-items: center;
	}

	.swiper-title {
		width: 750upx;
		text-align: center;
	}

	page {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff;
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
		width: 100%;
		overflow-x: hidden;
	}

	img {
		width: 100%;
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

	.head {
		position: relative;
	}

	// nav
	.mnav-bar {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		width: 100%;
		height: 30px;
		padding: 40upx 0;
		background: rgba(255, 255, 255, 0.5);
		z-index: 2;
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
				width: 100%;
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
		padding: 20upx 10upx;
		box-sizing: border-box;
		.jh {
			padding: 0upx 12upx;
			border-radius: 8upx;
			background: #ffe9ec;
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
	.store{
		
	}
	// 店铺评分
	.store-introduction {
		position: relative;
		.store{
			margin-top: 10upx;
			border-top: 8upx solid #efefef;
			padding: 10upx 20upx;
		}
		.Recommendation{
			border-top: 8upx solid #efefef;
			border-bottom: 8upx solid #efefef;
			padding: 10upx 20upx;
		}
		.rank {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			padding: 10upx 20upx;
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
		z-index: 10;
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
