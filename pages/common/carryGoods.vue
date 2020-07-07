<template>
	<!-- remove list-cell layer fix android 4.x overflow limit error: 28 layers! -->
	<!-- <view class="list-cell view" @click="click"></view> -->
	<view class="media-item view" hover-class="media-item-hover" @click="click">
		<!-- <view class="view" :style="newsitem.article_type === 2 ? 'flex-direction: row';" :class="{'media-image-right': newsitem.article_type === 2, 'media-image-left': newsitem.article_type === 1}"> -->
		<!-- TODO 在支付宝小程序下 需要用 style 覆盖标签的默认样式 -->
		<view class="view" style="display: flex; flex-direction: row;">
			<view class="mainPic">
				<image :src="newsitem.mainPic" class="pic image-list3" mode="aspectFill"></image>
			</view>
			<view class="uni-flex uni-column goods_info">
				<view>
					<view class="twoHour flex-row info-text" style="justify-content: center;">
						<text style="font-size: 16px;">近2小时爆卖</text>
						<text style="color: #F0AD4E;font-size: 16px;padding: 0 10upx;">{{newsitem.twoHoursSales}}</text>
						<text style="font-size: 16px;">件</text>
					</view>
					<view class="info-text" style="width: 420rpx;">
						<text style="font-size: 14px;">{{newsitem.dtitle}}</text>
					</view>
					<view class="info-text qh flex-row">
						<text style="font-size: 16px;line-height: 1rem;">券后</text>
						<text class="qh_price" style="color: #F0AD4E;padding-left: 10upx;font-size: 16px;">{{newsitem.actualPrice}}</text>
					</view>
					<view class="bottom">
						<view class="info-text quan" style="background-color: #F0AD4E;">
							<view class="l"></view>
							<view class="r"></view>
							<text style="font-size: 16px;color: #836424;text-align: center;">{{newsitem.couponPrice}}元券</text>
						</view>
						<view class="info-text sale flex-row">
							<text style="color: white;font-size: 16px;">销量</text>
							<text style="color: white;font-size: 16px;" class="sale_count">{{newsitem.monthSales}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="media-item-line" style="position: absolute;"></view>
	</view>
</template>

<script>
	export default {
		props: {
			newsitem: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		methods: {
			click() {
				this.$emit('click');
			},
			close(e) {
				this.$emit('close');
			}
		}
	}
</script>

<style>
	.info-text{
		margin: 10rpx 0;
	}
	.sale_count {
		padding-left: 10upx;
	}

	.sale {
		padding: 10rpx 20rpx;
		font-size: 1.2rem;
		background-color: #EB4B3B;
		border-radius: 6upx;
		color: #fff !important;
	}

	.bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.quan .l {
		left: -8rpx;
	}

	.quan .r {
		right: -8rpx;
	}

	.quan .l,
	.quan .r {
		position: absolute;
		top: 16rpx;
		background-color: white;
		width: 16rpx;
		height: 16rpx;
		border-radius: 16rpx;
	}

	.quan {
		background: linear-gradient(to right, #FBDDA8, #F4CD7D);
		width: 150rpx;
		height: 50rpx;
		text-align: center;
		padding: 6upx 20upx;
		line-height: 50rpx;
		border-radius: 6upx;
		color: #836424 !important;
		font-weight: bold;
	}

	.qh {
		color: #F0AD4E !important;
	}

	.qh .qh_price {
		color: #D33839;
		font-weight: bold;
		padding: 0 10upx;
	}

	.twoHour {
		text-align: center;
	}

	.twoHour_count {
		color: #D7442D !important;
		font-size: 1rem;
		font-weight: normal;
		padding: 0 10upx;
		display: inline-block;
	}

	.goods_info {
		margin: 0 20upx;
	}

	.mainPic {
		padding: 0 20upx;
		box-sizing: border-box
	}

	.pic {
		width: 200rpx;
		height: 250rpx;
	}

	.view {
		flex-direction: column;
	}

	.flex-row {
		flex-direction: row;
	}

	.flex-col {
		flex-direction: column;
	}

	.media-item {
		border-radius: 20upx;
		position: relative;
		flex: 1;
		flex-direction: column;
		/* border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: #ebebeb; */
		margin: 10rpx 20rpx;
		padding: 20rpx 10rpx;
		background-color: white;
	}
</style>
