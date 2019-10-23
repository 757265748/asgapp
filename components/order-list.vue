<template>
	<view class="goods-wrap" @click="onTap">
		<view class="goods-img">
			<image class="img" mode="aspectFit" lazy-load :src="good.item_img"></image>
		</view>
		<view class="desc">
			<view class="shop-title">
				<image class="logo" mode="aspectFit" :src="logo"></image>
				<view class="txt">{{good.item_title}}</view><br/>
			</view>
			<view class="shop-title orderNum">
				<view class="txt">订单号:{{good.trade_id}}</view>
				<!-- <button style="background-color: #ccc;transform: scale(.8);align-items: center;" size="mini" @tap="clip">复制</button> -->
			</view>
			<view class="shop-desc">
				<view class="price">
					<view class="original">商品付款￥{{good.alipay_total_price}}</view>
				</view>
				<view style="color: #FF4D4F" class="yj">你能赚￥{{good.pub_share_fee}}</view>
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
			clip(e){
				 uni.createSelectorQuery().select('.orderNum').boundingClientRect(function(e){
				                console.log(JSON.stringify(e))
				//                 uni.pageScrollTo({
				//                     scrollTop: e.top,
				//                     duration: 800
				//                 });
				            }).exec()
				uni.setClipboardData({
				    data: this.$children[0].$el.children[1].children[1].childNodes[0].innerText,
				    success: function () {
						uni.showModal({
							title:"复制成功"
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
		align-items: center;
		justify-content: flex-start;
		flex-wrap: nowrap;
		width: calc(100% - 40upx);
		padding: 0 20upx;
		border-bottom: 1upx solid #f8f8f8;

		.goods-img {
			width: 300upx;
			border-radius: 20upx;

			.img {
				width: 280upx;
				height: 280upx;
				padding: 10upx;
				border-radius: 20upx;
			}
		}

		.desc {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: calc(320upx - 20upx);
			padding: 10upx 0;
			width: 100%;
			white-space: normal;
			line-height: 1.8;

			.shop-title {
				display: flex;
				flex-direction: row;

				.logo {
					width: 50upx;
					height: 50upx;
					margin-right: 10upx;
				}

				.txt {
					font-size: 25upx;
					font-weight: 600;
				}
			}

			.shop-desc {

				.price-wrap {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					.price {
						display: flex;
						flex-direction: row;
						justify-content: flex-start;
						align-items: center;
					}

					.present {
						font-size: 30upx;
						color: #FF0000;
					}

					.yj {
						font-size: 20upx;
						color: #FF0000;
					}

					.original {
						text-decoration: line-through;
						color: #555555;
						font-size: 20upx;
					}
				}

				.coupon-wrap {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;

					.num {
						color: #555555;
						font-size: 20upx;
					}

					.value {
						background: #fc1f3f;
						border-radius: 10upx;
						// border-style: dotted;
						font-size: 28upx;
						font-weight: 600;
						padding: 0upx 30upx;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>
