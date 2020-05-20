<template>
	<view class="goods-wrap" @tap="onTap(good.item_id)">
		<view class="goods-img">
			<image class="img" mode="aspectFit" lazy-load :src="'https://'+good.item_img"></image>
		</view>
		<view class="desc">
			<!-- <image class="logo" mode="aspectFit" :src="logo"></image> -->
			<view class="title">{{good.item_title}}</view>
			<view class="uni-flex uni-row" style="justify-content: space-between;">
				<view>订单号:{{good.trade_id}}</view>
				<view @tap="clip" style="transform: scale(.8);padding: 0 10upx; border-radius: 10upx;border: 1px solid #ccc;color: #666;">复制</view>
			</view>
			<view style="font-size: 12px;">日期:{{good.tb_paid_time}}</view>
			<view class="uni-flex uni-row" style="justify-content: space-between;">
				<view class="original">商品付款￥{{good.alipay_total_price}}</view>
				<view style="color: #FF4D4F" class="yj">你能赚￥{{good.pub_share_pre_fee}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			good: Object,
			isgood: {
				type: Boolean,
				default: false
			}
		},
		created() {
			// console.log('是否是商城', this.isgood);
		},
		computed: {
			fontSize() {
				return `${this.size}px`
			},
			logo() {
				return this.good.user_type == 0 ? '../../static/tb.png' : '../../static/tm.png';
			},
			yj() {
				return (this.good.youhuiquan * (parseFloat(this.good.commission_rate / 100))).toFixed(2);
			}
		},
		methods: {
			onTap() {
				this.$emit('onTap')
			},
			clip(e) {
				uni.createSelectorQuery().select('.orderNum').boundingClientRect(function(e) {
					console.log(JSON.stringify(e))
					//                 uni.pageScrollTo({
					//                     scrollTop: e.top,
					//                     duration: 800
					//                 });
				}).exec()
				uni.setClipboardData({
					data: this.$children[0].$el.children[1].children[1].childNodes[0].innerText,
					success: function() {
						uni.showModal({
							title: "复制成功"
						})
						console.log('success');
					}
				});
			}
		}
	}
</script>



<style lang="less" scoped>
	.goods-wrap {
		display: flex;
		flex-direction: row;
		padding: 0 10upx;
		margin-bottom: 15upx;
		background-color: #fff;
		.goods-img {
			border-radius: 20upx;
			.img {
				width: 200upx;
				height: 200upx;
				padding: 10upx;
				border-radius: 20upx;
			}
		}

		.desc {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			color: #000C17;

			view {
				font-size: .5rem;
			}

			.title {
				font-weight: 200;
			}
		}
	}
</style>
