<template>
	<view>
		<view class="image-view">
			<image class="uni-product-image" :src="hotGood.pict_url"></image>
		</view>
		<view class="uni-product-title">{{hotGood.title}}</view>
		<view class="uni-product-price price-wrap">
			<text class="uni-product-price-favour">￥{{hotGood.zk_final_price}}</text>
			<text class="uni-product-price-original">￥{{jhj}}</text>
			<view class="yj">预估佣金￥{{yj}}</view>
		</view>
		<view class="uni-product-price">
			<text class="small-gray">{{hotGood.volume}}人已购</text>
			<text class="uni-product-tip">{{hotGood.youhuiquan}}元券</text>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			hotGood:{
				type:Object
			}
		},
		onLoad() {
			//console.log(JSON.stringify(this.hotGood));
		},
		computed:{
			jhj(){
				return this.hotGood.zk_final_price-this.hotGood.youhuiquan;
			},
			yj() {
				var v=this.hotGood.youhuiquan * (parseFloat(this.hotGood.commission_rate / 100))/100
				return v.toFixed(2);
			}
		}
	}
</script>

<style scoped>
	.yj {
		font-size: 20upx;
		color: #FF0000;
	}
	.price-wrap{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
