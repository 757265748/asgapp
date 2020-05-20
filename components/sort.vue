<template>
	<view :class="['screen-wrap',{fixed:sortTabFixed},{fixed:tabIndex!=0},]">
		<view :class="{on :isDefault}" @tap="_onclick('')">默认</view>
		<view class='jg-wrap' @tap="_onclick('total_sales')">
			<text :class="{on :isTotal_sales!=0}">销量</text>
			<view class="jgicon">
				<uni-icon type="uparrow" size="12" :color="isTotal_sales==1?'#ff0000':'#ccc'">
				</uni-icon>
				<uni-icon type="downarrow" size="12" :color="isTotal_sales==2?'#ff0000':'#ccc'">
				</uni-icon>
			</view>
		</view>
		<view class='jg-wrap' @tap="_onclick('tk_rate')">
			<text :class="{on :isTk_rate!=0}">佣金比率</text>
			<view class="jgicon">
				<uni-icon type="uparrow" size="12" :color="isTk_rate==1?'#ff0000':'#ccc'">
				</uni-icon>
				<uni-icon type="downarrow" size="12" :color="isTk_rate==2?'#ff0000':'#ccc'">
				</uni-icon>
			</view>	
		</view>
		<view class='jg-wrap' @tap="_onclick('price')">
			<text :class="{on :isPrice!=0}">价格</text>
			<view class="jgicon">
				<uni-icon type="uparrow" size="12" :color="isPrice==1?'#ff0000':'#ccc'">
				</uni-icon>
				<uni-icon type="downarrow" size="12" :color="isPrice==2?'#ff0000':'#ccc'">
				</uni-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			sortTabFixed: {
				type: Boolean,
				default: false
			},
			tabIndex: {
				type: Number,
				default: 0
			},
			isDefault: {
				type: Boolean,
				default: true
			},
			isTotal_sales: {
				type: Number,
				default: 0
			},
			isTk_rate: {
				type: Number,
				default: 0
			},
			isPrice: {
				type: Number,
				default: 0
			},
		},
		data() {
			return {

			}
		},
		methods:{
			_onclick(val){
				this.$emit("click",val);
			}
		}
	}
</script>

<style lang="scss">
	.fixed {
		position: fixed;
		z-index: 9;
		top: 0;
	}

	// 条件筛选
	.screen-wrap {
		height: 30upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		padding: 20upx 0;
		background: #fff;

		.jg-wrap {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}
	}
</style>
