<template>
	<view class="content">
		<swiper class="swiper" :autoplay="autoplay" :duration="duration">
			<swiper-item v-for="(item,index) in guideList">
				<view class="swiper-item">
					<view class="swiper-item-img">
						<image :src="item.img" mode=""></image>
					</view>
				</view>
				<view class="jump-over" @tap="jump()">{{jumpover}}</view>
			</swiper-item>
		</swiper>
		<!-- <view class="uniapp-img">
			<image src="../../static/logoB.png" mode="aspectFit"></image>
		</view> -->
	</view>
</template>

<script>
	import {
		set_page
	} from '@/api/set_page.js'
	export default {
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				autoplay: false,
				duration: 500,
				jumpover: '跳过',
				experience: '立即体验',
				guideList: []
			}
		},
		onLoad() {
			this.get_guide();
			let i = 3;
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
		},
		methods: {
			get_guide() {
				set_page.get_guide().then(res => {
					// console.log(res);
					this.guideList = res;
				})
			},
			jump() {
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
		height: 100%;
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
		height: 100%;
		margin: 0 auto;
	}

	.swiper-item-img image {
		width: 100%;
		height: 100%;
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
		color: #fff;
		border: 1px solid #fff;
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
