<template>
	<view class="view">
		<!-- 除第一页商品展示 tabgoods商品id为num_iid-->
		<view class="list-cell" v-if="tab==-1" hover-class="uni-list-cell-hover" @click="godetail(options.item_id||options.num_iid,options.pict_url)">
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
								<view class="original">原价￥{{options.zk_final_price}}</view>
								<view class="present">￥{{qhj}}</view>
							</view><!-- zk_final_price -->
							<!-- #ifdef APP-PLUS -->
							<view class="yj">预估佣金￥{{yj}}</view>
							<!-- #endif -->
						</view>
						<view class="coupon-wrap">
							<view class="num">{{options.volume}}人已购</view>
							<view class="value">
								<view class="v_l"></view>
								{{options.youhuiquan||0}}元
								<view class="v_r"></view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view v-else>
			<!-- 第一页商品展示 -->
			<view v-if="tab==0" class="list-cell" hover-class="uni-list-cell-hover" @click="godetail(options.num_iid,'ztk')">
				<view class="media-list goods-wrap">
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
							<view class="price-wrap">
								<view class="price">
									<view class="original">原价￥{{options.zk_final_price}}</view>
									<!-- #ifdef APP-PLUS -->
									<view class="present">￥{{qhj}}</view>
									<!-- #endif -->
								</view>
								<!-- #ifdef APP-PLUS -->
								<view class="yj">预估佣金￥{{options.yj}}</view>
								<!-- #endif -->
							</view>
							<view class="coupon-wrap">
								<view class="num">{{options.volume}}人已购</view>
								<view class="value">{{options.youhuiquan}}元</view>
							</view>
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
			},
			tab:{
				type:Number,
				default:-1
			},
			type:String
		},
		data(){
			return{
				detailImgs:[]
			}
		},
		onload(){
			console.log(this.options.quanhoujia);
		},
		computed: {
			qhj() {
				let that=this;
				let qhj=that.options.youhuiquan!=undefined?(that.options.zk_final_price - that.options.youhuiquan).toFixed(2):that.options.zk_final_price;
				return qhj;
			},
			logo() {
				return this.options.user_type == 0 ? '../../static/tb.png' : '../../static/tm.png';
			}, 
			yj() {
				//console.log(this.options.title+"--"+this.options.reserve_price+"--"+this.options.zk_final_price+"*"+this.options.commission_rate);
				var v = (this.qhj * (this.options.commission_rate / 10000) * 0.4).toFixed(2);
				//var v = this.options.youhuiquan * (parseFloat(this.options.commission_rate / 100)*0.4)
				return v;
			},
			//折淘客取佣金
			yj1() {
				let v=(this.options.tkfee3*0.4).toFixed(2);
				return v;
			}
		},
		methods: {
			godetail(id,url,pt) {
				console.log(id,url);
				var page = this.page;
				uni.navigateTo({
					url: `/pages/common/goods-detail?id=${id}&page=${page}&detailImgs=${this.detailImgs}`
				})
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
						font-size: 26upx;
						font-weight: 500;
						color: #ce0000;
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
						background: #FBCF78;
						background: linear-gradient(to left,#f5c15b,#ffd788);
						border-radius: 10upx;
						// border-style: dotted;
						font-size: 24upx;
						font-weight: 500;
						padding: 0upx 30upx;
						color: #AA7D20;
						display: flex;
						flex-direction: row;
						justify-content: space-between;
					}
					.value view{
						border-radius: 1rem;
						width: 10upx;
						height: 10upx;
						background-color: white;
						position: relative;
					}
				}
			}
		}
	}
</style>
