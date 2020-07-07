<template>
	<view class="page" :style="{'height':sysH+'px'}">
		<view class="body">
			<scroll-view class="scroll-view_H" scroll-x="true" @scroll="" scroll-left="0" style="display: flex;">
				<view id="demo2" class="scroll-view-item_H" v-for="(item,index) in imgs">
					<image src="../../static/user/invite1.jpg" style="width: 100%;height: 100%;" mode="aspectFill"></image>
				</view>
			</scroll-view>
		</view>
		<view class="foot uni-flex uni-row">
			<view class="copy_link">复制邀请链接</view>
			<view class="share" @tap="share">分享</view>
		</view>
	</view>
</template>

<script>
	import downloader from '@/common/js/img-downloader.js';
	export default {
		data() {
			return {
				sysH: uni.getSystemInfoSync().screenHeight,
				imgs: [{
					key: 'a'
				}, {
					key: 'a'
				}, {
					key: 'a'
				}, {
					key: 'a'
				}],
			}
		},
		onLoad() {
			console.log(this.sysH);
		},
		methods: {
			share() {
				let promise = downloader.load('../../static/user/invite1.jpg', 'img'); //下载
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
									plus.runtime.openURL(`weixin://`);
								} else {
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
								} else {
								}
							}
						})
					}
					// #endif
				});
				// uni.share({
				// 	provider: "weixin",
				// 	scene: "WXSceneSession",
				// 	type: 0,
				// 	href: '123',
				// 	title: '邀请好友',
				// 	summary: '123',
				// 	imageUrl: '../../static/user/invite1.jpg',
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
			}
		}
	}
</script>

<style>
	.foot .copy_link {
		background-color: #666;
	}

	.foot .share {
		background-color: #eac783;
	}

	.foot view {
		flex: 1;
		text-align: center;
		padding: 10upx;
		color: white;
	}

	.foot {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	.page {
		background-color: #EA4D3E;
	}

	.body {
		padding-top: 30%;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 500upx;
		height: 800upx;
		margin-right: 30upx;
	}
</style>
