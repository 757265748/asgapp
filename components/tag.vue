<template>
	<view style="margin-top: 10px;" @tap="onTap(tag)">
		<text class="search-tag" :style="{color: color}">{{tag}}</text>
	</view>
</template>


<script>
	// search2.js
	// search.js
	export default {
		props: {
			tag: {
				type: String,
				default: ''
			},
			color:{
				type:String,
				default:'#333'
			}
		},
		data() {
			return {

			};
		},
		methods: {
			onTap(tag) {
				console.log('c onTap', tag)
				this.$emit('onchange', tag)
			}
		}
	}
</script>

<style lang="less">
	.all-search-wrap {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		flex-wrap: wrap;
		margin-top: 60rpx;
	}

	.search-tag {
		margin: 80rpx 20rpx;
		color: #333;
		font-weight: 600;
		background: #eee;
		padding: 6upx 20upx;
		border-radius: 10upx;
		white-space: nowrap;
	}
</style>
