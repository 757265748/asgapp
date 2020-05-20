<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap" @touchstart="touchmove">
			<!-- 评论区 start -->
			<view class="uni-comment">
				<view class="uni-comment-list" v-for="(item,index) in sendCircleData">
					<view class="uni-comment-face">
						<image src="../../static/logoB.png" mode="widthFix"></image>
					</view>
					<view class="uni-comment-body">
						<view class="uni-comment-top uni-flex" style="vertical-align: middle;">
							<text>爱省购</text>
							<view class="uni-flex share" @tap="togglePopup('bottom-share',item)">
								<image style="width: 30upx;height: 30upx;align-items: center;" src="../../static/share.png" mode=""></image>
								<view style="margin-left: 10upx;line-height: 30upx;color: #666;">{{item.shareCount+shareAdd}}</view>
							</view>
						</view>
						<view class="uni-comment-content" @tap="detail(item.goodsId)">{{item.title}}<text style="color: #008489;text-decoration: underline;">查看详情</text></view>
						<view class="text">原价：<text>{{item.reserve_price}}</text></view>
						<view class="text">限时抢购：<text>{{item.zk_final_price}}</text></view>
						<view class="text"><text>{{item.description}}</text></view>
						<uni-grid class="tabList" :options="item.imgSrcs" :show-border="false" :imgW="'100%'" :column-num="2" />
						<view class="uni-comment-date">
							<!-- <view>2天前</view> -->
						</view>
						<view class="comment" style="background-color: #F3F3F3;">
							<view class="sanjiao"></view>
							<view class="content">[正确下单步骤]：复制评论区淘口令->打开手机淘宝领券下单！！</view>
							<view class="copy"><span @tap="copy(item.goodsId)">复制评论</span></view>
						</view>
					</view>
				</view>
				<view style="text-align: center;color: #666666;margin-top: 10px;">没有更多了</view>
			</view>
			<uni-popup :show="type === 'bottom-share'" style="z-index: 9999;" position="bottom" @hidePopup="togglePopup('')">
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
		</view>
	</view>
</template>

<script>
	import uniGrid from '@/components/uni-grid.vue';
	import uniPopup from '@/components/uni-popup.vue'
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
						icon: '\ue6a4',
						name: 'wx'
					},
					{
						text: '朋友圈',
						icon: '\ue646',
						name: 'wx'
					}, {
						text: '发群',
						icon: '\ue645',
						name: 'wx'
					}
					// {
					// 	text: 'QQ好友',
					// 	icon: '\ue66b',
					// 	name: 'qq'
					// },
				],
				title: "",
				type: '',
				comment: '',
				goodsItem: new Object(),
				goodsById:new Object(),
				sendCircleData: new Object(),
				imgs: new Object(),
				shareAdd: 0, //界面假分享次数
				imgUrl: '',
				imgUrlOk: false,
				page: 1
			}
		},
		onShow() {
			uni.hideLoading();//防止分享时用户留在微信界面导致的持续加载问题
			console.log(uni.getStorageSync("send_circle"));
			if (uni.getStorageSync("send_circle")) {
				this.sendCircleData = this.sendCircleData.concat(uni.getStorageSync("send_circle"));
				uni.removeStorageSync("send_circle");
			}
		},
		onLoad() {
			this.getData();
		},
		methods: {
			touchmove() {
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
					//&detailImgs=${this.detailImgs}
					url: `/pages/common/goods-detail?id=${id}&pageType=send_circle`
				})
			},
			togglePopup(type, item) {
				this.type = type;
				if (type == '') {
					return
				}
				getGoodDetail(item.goodsId, Number(this.getRelationId())).then(res => {
					console.log(res);
					this.goodsById=res.data;
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
				uni.showLoading({
					title: '正在玩命加载...',
					mask: true
				})
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
									}else{
										that.type='';//还原底部
									}
								}
							})
						}
					});
				} else {
					if (value == "微信好友") {
						// let newImgSrcs = [];
						// let obj = this.goodsItem.imgSrcs;
						// for (let item in obj) {
						// 	newImgSrcs.push(obj[item].image);
						// }
						// console.log(JSON.stringify(newImgSrcs));
						// if(this.goodsById){
						// 	let qhj=0;
						// 	console.log(this.goodsById);
						// 	if(this.goodsById.item_info.zk_final_price - this.goodsById.youhuiquan||0>0){
						// 		qhj = (this.goodsById.item_info.zk_final_price - this.goodsById.youhuiquan).toFixed(2);
						// 	}else{
						// 		qhj=this.goodsById.item_info.zk_final_price;
						// 	}
						// 	this.goodsById.small_images = this.goodsById.item_info.small_images.string;
						// 	this.goodsById.yj = (qhj * (this.goodsById.max_commission_rate / 100) * 0.4).toFixed(2);
						// 	console.log(this.goodsById.item_info.zk_final_price+"-"+this.goodsById.youhuiquan+"/"+this.goodsById.youhuiquan||0);
						// 	console.log(this.goodsById.max_commission_rate);
						// 	console.log(this.goodsById.yj);
						// 	this.copykey = `復制这段描述₳${this.goodsById.tpwd.substr(1,11)}₳,\n进入【Tao宝】即可抢购`;
						// 	uni.navigateTo({
						// 		url: `/pages/common/share?id=${this.goodsById.item_id}&pict_url=${this.goodsById.item_info.pict_url}&youhuiquan=${this.goodsById.youhuiquan}&yj=,
						// 		${this.goodsById.yj}&title=${this.goodsById.item_info.title}&zk_final_price=${this.goodsById.item_info.zk_final_price}&reserve_price=
						// 		${this.goodsById.item_info.reserve_price}&small_images=${this.goodsById.small_images}&copykey=${this.copykey}&short_url=
						// 		${this.goodsById.short_url}&invitecode=${uni.getStorageSync("invitecode")}&yj=${this.goodsById.yj}&imgUrl=${this.imgUrl}&item_url=
						// 		${this.goodsById.item_url}&description=${this.goodsById.item_info.cat_leaf_name}`
						// 	})
						// }
						// that.type = ''; //还原底部
						// let promise = downloader.load(this.imgUrl, 'image'); //下载
						// promise.then(([err, res]) => { //下载结果
						// 	console.log(err, res); // err 和 res 只会有一个存在，另一个为null  
						// 	uni.hideLoading();
						// 	if (res.errMsg == "saveImageToPhotosAlbum:ok") {
						// 		uni.showModal({
						// 			content: "图片已保存至手机图库\n文案已自动复制",
						// 			showCancel: true,
						// 			confirmText: "打开微信",
						// 			success(res) {
						// 				if (res.confirm) {
						// 					console.log("weixin");
						// 					plus.runtime.openURL(`weixin://dl/stickers`);
						// 					that.shareAdd++; //页面分享次数+1
						// 					that.sendCircle(); //数据库分享次数更新
						// 				}else{
						// 					that.type='';//还原底部
						// 				}
						// 			}
						// 		})
						// 	}
						// });
						that.type = ''; //还原底部
						uni.share({
							provider: "weixin",
							scene: "WXSceneSession",
							type: 0,
							href: this.goodsById.item_url,
							title: this.goodsById.item_info.title,
							summary: this.goodsById.item_info.item_description,
							imageUrl: this.imgUrl,
							success: function(res) {
								console.log("success:" + JSON.stringify(res));
							},
							fail: function(err) {
								console.log("fail:" + JSON.stringify(err));
							},
							complete() {
								uni.hideLoading();
							}
						});
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
	.uni-padding-wrap {
		margin-bottom: 20upx;
	}

	.group {
		margin-top: 30upx;
	}

	.comment .copy span {
		padding: 0 20upx;
		border-radius: 20upx;
		background-color: #DD524D;
		color: white;
	}

	.comment .copy {
		text-align: right;
	}

	.comment .content {
		padding-bottom: 40upx;
	}

	.share {
		background-color: #F3F3F3;
		border-radius: 20upx;
		padding: 5upx 20upx 0;
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
		position: relative;
		padding: 20upx;
		top: 20upx;
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
