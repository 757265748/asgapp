<template>
	<!-- remove list-cell layer fix android 4.x overflow limit error: 28 layers! -->
	<!-- <view class="list-cell view" @click="click"></view> -->
	<view class="media-item view" hover-class="media-item-hover" @click="bindClick">
		<!-- <view class="view" :style="newsitem.article_type === 2 ? 'flex-direction: row';" :class="{'media-image-right': newsitem.article_type === 2, 'media-image-left': newsitem.article_type === 1}"> -->
		<!-- TODO 在支付宝小程序下 需要用 style 覆盖标签的默认样式 -->
		<view class="view" style="display: flex; flex-direction: row;align-items: center;">
			<view class="mainPic">
				<image :src="options.pict_url" class="pic image-list3" mode="aspectFill"></image>
			</view>
			<view class="uni-flex uni-column goods_info">
				<view>
					<view class="info-text" style="width:490rpx;">
						<text style="font-size: 28upx;font-weight: bold;">{{options.title}}</text>
						<view class="flex-row" style="align-items: center;">
							<image src="../static/shop_icon.png" style="width: 40upx;height: 40upx;padding-right: 10upx;" mode=""></image>
							<text style="font-size: 28upx;">{{options.shop_title}}</text>
						</view>
					</view>
					<view class="qh flex-row" style="font-size: 30upx;align-items: center;font-weight: bold;">
						<text style="font-size: 16px;line-height: 1rem;color: #A71E1C;">￥</text>
						<text style="font-size: 16px;line-height: 1rem;color: #A71E1C;">{{qhj}}</text>
						<text style="font-size: 24upx;line-height:30upx;color: #A71E1C;">券后</text>
					</view>
					<view class="flex-row center">
						<view class="info-text flex-row" style="align-items: center;">
							<text style="font-size: 28upx;">原价￥</text>
							<text class="qh_price" style="text-decoration: line-through;padding-left: 10upx;font-size: 28upx;">{{options.zk_final_price}}</text>
						</view>
						<view class="info-text quan uni-flex" style="background-color: #FBDDA3;justify-content: center;align-items: center;">
							<text style="font-size: 24upx;color: #836424;text-align: center">{{options.youhuiquan||0}}元券</text>
						</view>
					</view>
					<view class="bottom">
						<view class="info-text yj uni-flex" style="background-color: #FBE9EB;justify-content: center;align-items: center;">
							<view class="l"></view>
							<view class="r"></view>
							<text style="font-size: 24upx;line-height: 24upx;color: #A71E1C;">你能赚￥{{yj}}</text>
						</view>
						<view class="info-text sale flex-row">
							<text style="color: #776140;font-size: 30upx;" class="sale_count">{{options.volume}}人已购</text>
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

<style>
	.center{
		justify-content: space-between;
		display: flex;
		flex-direction: row;
	}
	.info-text{
		margin: 10rpx 0;
	}
	.sale_count {
		padding-left: 10upx;
	}
	
	.sale {
		padding: 10rpx 20rpx;
		font-size: 1.2rem;
		background-color: #fae9cf;
		border-radius: 6upx;
		color: #776140 !important;
		height: 50rpx;
		line-height: 32rpx;
	}
	
	.bottom {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
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
	
	
	.quan,.yj {
		height: 50rpx;
		text-align: center;
		padding: 6upx 20upx;
		line-height: 50rpx;
		border-radius: 6upx;
		color: #B85C59 !important;
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
		margin-left: 20upx;
	}
	
	.mainPic {
		box-sizing: border-box;
	}
	
	.pic {
		width: 200rpx;
		height: 250rpx;
		border-radius: 10upx;
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
		border-bottom-width: 1rpx;
		border-bottom-style: solid;
		border-bottom-color: #ebebeb;
		margin: 10rpx 20rpx;
		background-color: #fff;
	}
</style>
