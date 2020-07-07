<template>
	<view class="all">
		<view class="head">
			<view class="title">发&nbsp;&nbsp;&nbsp;&nbsp;圈</view>
			<image src="../../static/bar/send_circle_back.png" mode="widthFix"></image>
		</view>
		<!-- <scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltoupper="loadMore"
		 @scroll="scroll"> -->
		<view class="body">
			<view class="list" @touchmove="loadMore">
				<view class="uni-flex uni-row item" v-for="(item,index) in sendCircleData">
					<view class="uni-flex uni-row">
						<view class="headImg">
							<image class="uni-comment-face" src="../../static/logoB.png" mode="widthFix"></image>
						</view>
					</view>
					<view class="uni-comment-body uni-comment-content">
						<view class="item_head">
							<view class="info">
								<view class="user_info">
									<text class="title">{{item.create_user}}</text>
									<image class="sex" :src="item.create_user_sex?(item.create_user_sex=='男'?'../../static/send_cricle/sex_man.png':
										'../../static/send_cricle/sex_woman.png'):'1'"
									 mode=""></image>
								</view>
								<text>{{item.create_date}}</text>
							</view>
							<view class="uni-flex share" @tap="togglePopup('bottom','share',item)">
								<uni-icons type="undo"></uni-icons>
								<text>分享</text>
								<view style="margin-left: 10upx;line-height: 30upx;">{{item.shareCount+shareAdd}}</view>
							</view>
						</view>
						<view class="" @tap="detail(item.goodsId)">{{item.title}}<text style="color: #008489;text-decoration: underline;">查看商品详情</text></view>
						<view class="text">原价：<text>{{item.reserve_price}}</text></view>
						<view class="text">限时抢购：<text>{{item.zk_final_price}}</text></view>
						<view class="text"><text>{{item.description}}</text></view>
						<uni-grid class="tabList" :options="item.imgSrcs" :show-border="false" :imgW="'100%'" :column-num="4" />
						<view class="uni-comment-date">
							<view class="yj">你能赚￥{{item.yj}}</view>
						</view>
						<view class="comment" style="background-color: #F3F3F3;">
							<!-- <view class="sanjiao"></view> -->
							<view class="content">[正确下单步骤]：复制评论区淘口令->打开手机淘宝领券下单！！</view>
							<view class="copy"><span @tap="copy(item.goodsId)">复制评论</span></view>
						</view>
					</view>
				</view>
				<view style="text-align: center;color: #666666;margin-top: 10px;">没有更多了</view>
			</view>
		</view>
		<uni-popup ref="showshare" :type="type" @change="change">
			<view class="uni-share">
				<text class="uni-share-title">分享到</text>
				<view class="uni-share-content">
					<view v-for="(item, index) in bottomData" :key="index" class="uni-share-content-box" @tap="share(item.text)">
						<view class="uni-share-content-image">
							<image :src="item.icon" class="content-image" mode="widthFix" />
						</view>
						<text class="uni-share-content-text">{{ item.text }}</text>
					</view>
				</view>
				<text class="uni-share-btn" @click="cancel('share')">取消分享</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid.vue';
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	import downloader from '@/common/js/img-downloader.js';
	import {
		getSendCircleData,
		shareCount,
		getShareImgUrl,
		getGoodDetail
	} from '@/api/goods.js'
	export default {
		components: {
			uniGrid,
			uniPopup
		},
		data() {
			return {
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				bottomData: [{
							text: '微信好友',
							icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-2.png',
							name: 'wx'
						},
						{
							text: '朋友圈',
							icon: '../../static/share/pyq.png',
							name: 'pyq'
						},
						{
							text: '发群',
							icon: 'https://img-cdn-qiniu.dcloud.net.cn/uni-ui/grid-9.png',
							name: 'fq'
						}
				],
				title: "",
				type: '',
				comment: '',
				goodsItem: new Object(),
				goodsById: new Object(),
				sendCircleData: new Object(),
				imgs: new Object(),
				shareAdd: 0, //界面假分享次数
				imgUrl: '',
				imgUrlOk: false,
				page: 1
			}
		},
		onShow() {
			uni.hideLoading(); //防止分享时用户留在微信界面导致的持续加载问题
			console.log(uni.getStorageSync("send_circle"));
			if (uni.getStorageSync("send_circle")) {
				this.sendCircleData = this.sendCircleData.concat(uni.getStorageSync("send_circle"));
				uni.removeStorageSync("send_circle");
			}
		},
		onBackPress() {
			this.$refs['showshare'].close()
		},
		onLoad() {
			this.getData();
		},
		methods: {
			scroll(e) {
				console.log(e);
				this.old.scrollTop = e.detail.scrollTop
			},
			loadMore() {
				console.log(111);
				getSendCircleData({
					pageNo: this.page,
					pageSum: 5
				}).then(res => {
					if (res.code == 100) {
						return;
					}
					console.log(res.data);
					let sendCircleData = res.data;
					for (let item in res.data) {
						console.log(res.data[item].imgSrcs.split(","));
						let img = [];
						for (let item1 in res.data[item].imgSrcs.split(",")) {
							// console.log(res.data[item].imgSrcs.split(",")[item1]);
							let o = {
								image: res.data[item].imgSrcs.split(",")[item1]
							};
							img.push(o);
						}
						sendCircleData[item].imgSrcs = img;
					}
					this.sendCircleData = this.sendCircleData.concat(sendCircleData);
					this.page++;
					console.log(this.sendCircleData);
				});
			},
			detail(id) {
				console.log(id);
				uni.navigateTo({
					url: `/pages/common/goods-detail?id=${id}&pageType=send_circle`
				})
			},
			cancel(type) {
				this.$refs['show' + type].close()
			},
			change(e) {
				console.log('是否打开:' + e.show)
			},
			togglePopup(type,open,item) {
				this.type = type;
				this.$nextTick(() => {
					this.$refs['show' + open].open()
				})
				if (type == '') {
					return
				}
				getGoodDetail(item.goodsId, Number(this.getRelationId())).then(res => {
					console.log(res);
					this.goodsById = res.data;
				})
				this.goodsItem = item;
				console.log(item);
				var codeContent = 'http://51atk.com:8009/html/openInstall/?invitecode=' + uni.getStorageSync(
					"invitecode") + '&tkl=' + item.tpwd + '&short_url=' + item.short_url;
				getShareImgUrl({
					url: item.pict_url, //图片路径
					CodeContent: codeContent,
					TitleContent: item.title, //商品标题
					NowPrice: item.zk_final_price, //现价
					OldPrice: item.reserve_price, //原价
					RedecePrice: item.youhuiquan, //优惠券
					InvitationCode: uni.getStorageSync("invitecode")
				}).then(res => {
					this.imgUrlOk = true; //记录新图片是否生成
					console.log(res);
					this.imgUrl = res.imgUrl;
				});
			},
			sendCircle() {
				shareCount({
					goodsId: this.goodsItem.goodsId,
					shareCount: 1
				}).then(res => {
					console.log("shareCount+1");
				});
			},
			getData() {
				uni.showLoading({
					title: '正在玩命加载...'
				})
				getSendCircleData({
					pageNo: 0
				}).then(res => {
					uni.hideLoading();
					console.log(JSON.stringify(res.data));
					this.sendCircleData = res.data;
					for (let item in res.data) {
						console.log(res.data[item].imgSrcs.split(","));
						let img = [];
						for (let item1 in res.data[item].imgSrcs.split(",")) {
							// console.log(res.data[item].imgSrcs.split(",")[item1]);
							let o = {
								image: res.data[item].imgSrcs.split(",")[item1]
							};
							img.push(o);
						}
						this.sendCircleData[item].imgSrcs = img;
					}
					console.log(this.sendCircleData);
				});
			},
			getRelationId() {
				console.log(JSON.stringify(uni.getStorageSync("user")));
				try {
					return uni.getStorageSync("user").pid;
				} catch (e) {
					console.log(e);
				}
			},
			copy(goodsId) {
				console.log(goodsId);
				getGoodDetail(goodsId, Number(this.getRelationId())).then(res => {
					console.log(res);
					uni.setClipboardData({
						data: `復制这段描述₳${res.data.tpwd.substr(1,11)}₳,\n进入【Tao宝】即可抢购`,
						success() {
							uni.showToast({
								title: '已复制'
							})
						}
					})
				})
			},
			share(value) {
				// #ifdef APP-PLUS
				uni.showLoading({
					title:'请稍等...',
					mask:true
				})
				// #endif
				let that = this;
				if (!this.imgUrlOk) {
					uni.showToast({
						title: '图片正在生成...',
						icon: 'none'
					})
					return
				}
				this.imgUrlOk = false;
				if (value == "发群") {
					// let imgs = new Array();
					// imgs = imgs.concat(this.goodsItem.imgSrcs);
					// let img = {
					// 	image: this.imgUrl
					// }
					// console.log(JSON.stringify(this.goodsItem.imgSrcs));
					// imgs.push(img);
					console.log(JSON.stringify(imgs));
					// console.log(JSON.stringify(this.goodsItem.imgSrcs));
					let promise = downloader.load(this.imgUrl, 'image'); //下载
					promise.then(([err, res]) => { //下载结果
						console.log(err, res); // err 和 res 只会有一个存在，另一个为null  
						uni.hideLoading();
						if (res.errMsg == "saveImageToPhotosAlbum:ok") {
							uni.showModal({
								content: "图片已保存至手机图库\n文案已自动复制",
								showCancel: true,
								confirmText: "打开微信",
								success(res) {
									if (res.confirm) {
										console.log("weixin");
										plus.runtime.openURL(`weixin://dl/stickers`);
										that.shareAdd++; //页面分享次数+1
										that.sendCircle(); //数据库分享次数更新
									} else {
										that.type = ''; //还原底部
									}
								}
							})
						}
					});
				} else {
					if (value == "微信好友") {
						that.type = ''; //还原底部
						uni.share({
						    provider: "weixin",
						    scene: "WXSceneSession",
						    type: 2,
						    imageUrl: this.imgUrl,
						    success: function (res) {
						        console.log("success:" + JSON.stringify(res));
						    },
						    fail: function (err) {
						        console.log("fail:" + JSON.stringify(err));
						    }
						});
						// uni.share({
						// 	provider: "weixin",
						// 	scene: "WXSceneSession",
						// 	type: 0,
						// 	href: this.goodsById.item_url,
						// 	title: this.goodsById.item_info.title,
						// 	summary: this.goodsById.item_info.item_description,
						// 	imageUrl: this.imgUrl,
						// 	success: function(res) {
						// 		console.log("success:" + JSON.stringify(res));
						// 	},
						// 	fail: function(err) {
						// 		console.log("fail:" + JSON.stringify(err));
						// 	},
						// 	complete() {
						// 		uni.hideLoading();
						// 	}
						// });
					} else if (value == "朋友圈") {
						uni.setClipboardData({
							data: this.goodsItem.title + '\n[原价]' + this.goodsItem.reserve_price + '\n[限时抢购]' + this.goodsItem.zk_final_price +
								'\n' + this.goodsItem.description,
							success() {

							}
						})
						let imgs = new Array();
						imgs = imgs.concat(this.goodsItem.imgSrcs);
						// let img = {
						// 	image: this.imgUrl
						// }
						// console.log(JSON.stringify(this.goodsItem.imgSrcs));
						// imgs.push(img);
						console.log(JSON.stringify(imgs));
						// console.log(JSON.stringify(this.goodsItem.imgSrcs));
						if (imgs.length >= 1) {
							for (var item in imgs) {
								let promise = downloader.load(imgs[item].image, item); //下载
								if (item >= imgs.length - 1) {
									promise.then(([err, res]) => { //下载结果
										console.log(err, res); // err 和 res 只会有一个存在，另一个为null  
										uni.hideLoading();
										// #ifdef APP-PLUS
										if (res.errMsg == "saveImageToPhotosAlbum:ok") {
											uni.showModal({
												content: "图片已保存至手机图库\n文案已自动复制",
												showCancel: true,
												confirmText: "打开微信",
												success(res) {
													if (res.confirm) {
														console.log("weixin");
														plus.runtime.openURL(`weixin://`);
														that.shareAdd++; //页面分享次数+1
														that.sendCircle(); //数据库分享次数更新
														that.type = ''; //还原底部
													} else {
														that.type = ''; //还原底部
													}
												}
											})
										}
										// #endif
										// #ifdef H5
										if (res.statusCode == 200) {
											uni.showModal({
												content: "图片已保存至手机图库\n文案已自动复制",
												showCancel: true,
												confirmText: "打开微信",
												success(res) {
													if (res.confirm) {
														location = "weixin://";
														that.type = ''; //还原底部
													} else {
														that.type = ''; //还原底部
													}
												}
											})
										}
										// #endif
									});
								}
							}
							return;
						}
						// uni.share({
						// 	provider: "weixin",
						// 	scene: "WXSenceTimeline",
						// 	type: 2,
						// 	imageUrl: this.sendCircleData.imgUrl,
						// 	success: function(res) {
						// 		console.log("success:" + JSON.stringify(res));
						// 	},
						// 	fail: function(err) {
						// 		console.log("fail:" + JSON.stringify(err));
						// 	}
						// });
					} else if (value == "QQ好友") {
						uni.share({
							provider: "qq",
							type: 2,
							imageUrl: this.shares.small_images[0],
							success: function(res) {
								console.log("success:" + JSON.stringify(res));
							},
							fail: function(err) {
								console.log("fail:" + JSON.stringify(err));
							}
						});
					}
				}
			}
		}
	}
</script>

<style>
	.yj{
		background-color: #FFEBEA;
		color: #B32639;
		padding: 10upx;
		border-radius: 10upx;
		font-size: 20upx;
	}
	.tabList{
		margin: 20upx 0;
	}
	view{
		font-size: 26upx;
	}
	.item{
		background-color: white;
		padding: 20upx;
		margin: 10upx 0;
	}
	.all{
		background-color: #f1f1f1;
	}
	.item_head {
		position: relative;
	}
	.user_info .title{
		font-size: 30upx;
		font-weight: bold;
	}
	.user_info {
		display: flex;
		align-items: center;
		font-size: .8rem;
	}

	.sex {
		width: 40upx;
		height: 40upx;
		margin: 0 10upx;
	}

	.head .title {
		color: white;
		font-size: 1.2rem;
		position: relative;
		top: 40upx;
		left: 100upx;
		z-index: 2;
	}

	.headImg {
		display: flex;
		justify-content: center;
	}

	.uni-comment-face {
		width: 80upx;
		height: 80upx;
	}

	.head image {
		position: absolute;
		top: 0;
		width: 100%;
	}

	.head {
		height: 140upx;
	}

	.body {
		padding: 0 0upx 120upx;
		box-sizing: border-box;
		width: 100%;
		position: relative;
		color: #585858;
	}

	.group {
		margin-top: 30upx;
	}

	.comment .copy span {
		padding: 10upx 20upx;
		border-radius: 10upx;
		background-color: #FFF6E5;
		color: #703A06;
		font-size: 20upx;
	}

	.comment .copy {
		text-align: right;
	}

	.comment .content {
		padding-bottom: 40upx;
	}
	.share text,.share view,.share uni-icons{
		color: #703A06;
		font-size: 20upx;
	}
	.share text{
		margin-left: 10upx;
	}
	.share {
		background-color: #FFF6E5;
		color: red;
		border-radius: 54upx;
		padding: 0upx 20upx;
		position: absolute;
		right: 0upx;
		top: 0upx;
		align-items: center;
	}

	.sanjiao {
		width: 0;
		height: 0;
		border: 20upx solid;
		border-color: transparent transparent #F3F3F3;
		position: absolute;
		top: -40upx;
	}

	.comment {
		padding: 20upx;
		margin-top: 20upx;
		box-sizing: border-box;
		margin: 20upx 0;
		position: relative;
	}

	/* 分享 */
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
	/* 底部分享 */
	.uni-share {
		/* #ifndef APP-NVUE */
		display: flex;
		flex-direction: column;
		/* #endif */
		background-color: #fff;
	}
	
	.uni-share-title {
		line-height: 60rpx;
		font-size: 24rpx;
		padding: 15rpx 0;
		text-align: center;
	}
	
	.uni-share-content {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		padding: 15px;
	}
	
	.uni-share-content-box {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		align-items: center;
		width: 200rpx;
	}
	
	.uni-share-content-image {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: row;
		justify-content: center;
		align-items: center;
		width: 60rpx;
		height: 60rpx;
		overflow: hidden;
		border-radius: 10rpx;
	}
	
	.content-image {
		width: 60rpx;
		height: 60rpx;
	}
	
	.uni-share-content-text {
		font-size: 26rpx;
		color: #333;
		padding-top: 5px;
		padding-bottom: 10px;
	}
	
	.uni-share-btn {
		height: 90rpx;
		line-height: 90rpx;
		font-size: 14px;
		border-top-color: #f5f5f5;
		border-top-width: 1px;
		border-top-style: solid;
		text-align: center;
		color: #666;
	}
	/* ----- */
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
</style>
