<template>
	<view class="view">
		<view class="list-cell" hover-class="uni-list-cell-hover" @click="godetail(option.tao_id)">
			<view class="media-list goods-wrap" v-if="options.title">
				<view class="view goodsList">
					<view class="goods-img">
						<image class="img" :src="options.pict_url" mode=""></image>
					</view>
				</view>
				<view class="desc">
					<view class="shop-title">
						<!-- #ifdef APP-PLUS -->
						<image class="logo" mode="aspectFit" :src="logo"></image>
						<!-- #endif -->
						<view class="txt">{{options.title}}</view>
					</view>
					<view class="shop-desc">
						<!-- <view class="price-wrap" v-if="!isgood"> -->
						<view class="price-wrap">
							<view class="price">
								<view class="original">原价￥{{options.size}}</view>
								<!-- #ifdef APP-PLUS -->
								<view class="present">￥{{options.quanhou_jiage}}</view>
								<!-- #endif -->
								<!-- <view class="present">￥{{jhj}}</view> -->
							</view><!-- zk_final_price -->
							<!-- #ifdef APP-PLUS -->
							<view class="yj">预估佣金￥{{yj1}}</view>
							<!-- #endif -->
						</view>
						<view class="coupon-wrap">
							<view class="num">{{options.volume}}人已购</view>
							<view class="value">{{options.coupon_info_money}}元</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			options: {
				type: Object,
				default: function(e) {
					return {}
				}
			}
		},
		data(){
			return{
				detailImgs:[]
			}
		},
		computed: {
			// #ifdef APP-PLUS
			jhj() {
				return (this.options.zk_final_price - this.options.youhuiquan).toFixed(2);
			},
			logo() {
				return this.options.user_type == 0 ? '../../static/tb.png' : '../../static/tm.png';
			}, 
			yj() {
				//console.log(this.options.title+"--"+this.options.reserve_price+"--"+this.options.zk_final_price+"*"+this.options.commission_rate);
				var v = (this.options.zk_final_price * (this.options.commission_rate / 10000) * 0.4).toFixed(2);
				//var v = this.options.youhuiquan * (parseFloat(this.options.commission_rate / 100)*0.4)
				return v;
			},
			yj1() {
				//console.log(this.options.title+"--"+this.options.reserve_price+"--"+this.options.zk_final_price+"*"+this.options.commission_rate);
				var v = (this.options.size * (this.options.tkrate3 / 10000) * 0.4).toFixed(2);
				//var v = this.options.youhuiquan * (parseFloat(this.options.commission_rate / 100)*0.4)
				return v;
			} 
			// #endif
		},
		methods: {
			godetail(id,url) {
				console.log(id,url);
				if (!this.isgood) {
					var page = this.page;
					uni.navigateTo({
						url: `/pages/common/goods-detail?id=${id}&page=${page}&detailImgs=${this.detailImgs}`
					})
				} else {
					uni.navigateTo({
						url: `/pages/common/goods2-detail?id=${id}&url=${url}&detailImgs=${this.detailImgs}`
					})
				}
				this.globScrollTop = this.nowScroll;
			},
			close(e) {
				this.$emit('close');
			},
			bindClick() {
				this.$emit('click');
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
