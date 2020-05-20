<template>
	<!-- 启动页 -->
	<view class="content">
		<swiper class="swiper" :autoplay="autoplay" :duration="duration">
			<swiper-item>
				<view class="swiper-item">
					<!-- <view class="swiper-item-img"><image src="../../static/tbnhj.jpg" mode="aspectFit"></image></view> -->
					<view class="swiper-item-img">
						<image src="../../static/uniapp4@2x.png" mode="aspectFit"></image>
					</view>
					<view class="swiper-item-img">
						<image src="/static/icon_01.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="jump-over" @tap="launchFlag()">{{jumpover}}</view>
			</swiper-item>
			<!-- <swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/tmhd.jpg" mode="aspectFit"></image></view>
				</view>
				<view class="jump-over" @tap="launchFlag()">{{jumpover}}</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/tmcs.jpg" mode="aspectFit"></image></view>
				</view>
				<view class="jump-over" @tap="launchFlag()">{{jumpover}}</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<view class="swiper-item-img"><image src="../../static/tmgj.jpg" mode="aspectFit"></image></view>
				</view>
				<view class="experience" @tap="launchFlag()">{{experience}}</view>
			</swiper-item> -->
		</swiper>
		<!-- <view class="uniapp-img"><image src="../../static/logoB.png" mode="aspectFit"></image></view> -->
	</view>
</template>

<script>
	import {
		getGoodsList,
		ztkLunbo,
		ztkLunboGoods,
		ztkTaobaoJX,
		pthd,
		ztkActivify,
		getSendCircleData,
		addSendCircle
	} from '@/api/goods.js'
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				autoplay: false,
				duration: 500,
				jumpover: '跳过',
				experience: '立即体验',
				tabBars: [{
					name: '全部',
					id: 'zb'
				}, {
					name: "母婴",
					id: "jp"
				}, {
					name: '美食',
					id: 'bh'
				}, {
					name: '女装',
					id: 'nz'
				}, {
					name: '美妆',
					id: 'lz'
				}, {
					name: '内衣',
					id: 'sp'
				}, {
					name: '百货',
					id: 'my'
				}, {
					name: '鞋包',
					id: 'mz'
				}, {
					name: '家电',
					id: 'xh'
				}, {
					name: '男装',
					id: 'ny'
				}, {
					name: '数码',
					id: 'sm'
				}, {
					name: '家电',
					id: 'jd'
				}, {
					name: '运动',
					id: 'yd'
				}, ],
			}
		},
		onLoad() {
			let i = 5;
			let timer = setInterval(() => {
				let v = i--;
				this.jumpover = "跳过" + v;
				if (v <= 0) {
					clearInterval(timer);
					uni.switchTab({
						url: '/pages/index/index'
					});
				}
			}, 1200)
			this.loadLazyData();
		},
		methods: {
			guidePage() {
				uni.redirectTo({
					url: '/pages/index/guide'
				});
				const value = uni.getStorageSync('launchFlag');
				console.log(value);
				if (value) {
					console.log(value);
					if (value == true) {
						uni.switchTab({
							url: '/pages/index/index'
						});
					} else {
						uni.redirectTo({
							url: '/pages/index/guide'
						});
					}
					uni.setStorage({
						key: 'launchFlag',
						data: false,
						success: function() {
							console.log('存储launchFlag:false');
						}
					});
				} else {
					console.log(value);
					uni.setStorage({
						key: 'launchFlag',
						data: true,
						success: function() {
							console.log('存储launchFlag');
						}
					});
					uni.redirectTo({
						url: '/pages/index/guide'
					});
				}
			},
			loadLazyData() {
				console.log(6);
				this.ztkLunbo();
				console.log(7);
				this.ztkActivify({
					type: "极品爆款"
				});
				this.ztkActivify({
					type: "天猫超市"
				});
				this.ztkActivify({
					type: "天猫国际"
				});
				console.log(8);
				this.ztkTaobaoJXData();
				console.log(9);
				uni.removeStorageSync("newsitems")
				this.randomfn();
			},
			ztkLunbo() {
				ztkLunbo().then(res => {
					console.log(res);
					uni.setStorageSync("ztkLunbo", res.content);
				})
			},
			ztkActivify(params) {
				console.log(params);
				switch (params.type) {
					case '极品爆款':
						ztkActivify({
							page: 1,
							type: params.type
						}).then(res => {
							if (res.status == 200) {
								uni.setStorageSync("goodsJpbk", res.content);
								console.log(res.content);
							}
						});
						break;
					case '天猫超市':
						ztkActivify({
							page: 1,
							type: params.type
						}).then(res => {
							if (res.status == 200) {
								uni.setStorageSync("goodsTmcs", res.content);
							}
						});
						break;
					case '天猫国际':
						ztkActivify({
							page: 1,
							type: params.type
						}).then(res => {
							if (res.status == 200) {
								uni.setStorageSync("goodsTmgj", res.content);
							}
						});
						break;
				}
			},
			ztkTaobaoJXData() {
				ztkTaobaoJX({
					page: 1,
				}).then(res => {
					uni.setStorageSync("tbjx", res);
					console.log(res);
				});
			},
			randomfn() {
				console.log("randomfn")
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					if (i < 1) {
						ary = [];
					} else {
						getGoodsList({
							page: 0,
							type: this.tabBars[i].name
						}).then(res => {
							console.log(this.tabBars[i].name);
							console.log(res.result);
							aryItem.data = res.result;
							ary.push(aryItem);
							if(i>=this.tabBars.length-1){
								uni.setStorageSync("newsitems",ary);
								console.log(JSON.stringify(ary));
							}
						});
					}
				}
				return ary;
			},
			launchFlag: function() {
				/**
				 * 向本地存储中设置launchFlag的值，即启动标识；
				 */
				uni.setStorage({
					key: 'launchFlag',
					data: true,
				});
				uni.switchTab({
					url: '/pages/index/index'
				});

			}
		}
	}
</script>
<style>
	page,
	.content {
		width: 100%;
		height: 100%;
		background-size: 100% auto;
		padding: 0;
	}

	.swiper {
		width: 100%;
		height: 80%;
		background: #FFFFFF;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
		text-align: center;
		position: relative;
		display: flex;
		/* justify-content: center; */
		align-items: flex-end;
		flex-direction: column-reverse
	}

	.swiper-item-img {
		width: 100%;
		height: auto;
		margin: 0 auto;
	}

	.swiper-item-img image {
		width: 80%;
	}

	.uniapp-img {
		height: 20%;
		background: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		overflow: hidden;
	}

	.uniapp-img image {
		width: 40%;
	}

	.jump-over,
	.experience {
		position: absolute;
		height: 60upx;
		line-height: 60upx;
		padding: 0 40upx;
		border-radius: 30upx;
		font-size: 32upx;
		color: #454343;
		border: 1px solid #454343;
		z-index: 999;
	}

	.jump-over {
		right: 45upx;
		top: 125upx;
	}

	.experience {
		right: 50%;
		margin-right: -105upx;
		bottom: 0;
	}
</style>
