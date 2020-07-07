<template>
	<view class="main" :style="{height:currentH+'px'}">
		<view class="head">
			<image src="../../static/logoB.png" mode=""></image>
		</view>
		<view class="body">
			<view class="version uni-flex uni-row">
				<view>当前版本</view>
				<view>V1.1.22</view>
			</view>
			<view class="version_info uni-flex uni-row">
				<view>版本信息</view>
				<view>当前已是最新版本</view>
			</view>
			<view class="clear">清理缓存</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				currentH:uni.getSystemInfoSync().screenHeight
			}
		}
	}
</script>

<style>
	.version_info{
		margin-top: 20upx;
	}
	.head image{
		width: 300rpx;
		height: 300rpx;
		border-radius: 40upx;
	}
	.head{
		display: flex;
		justify-content: center;
		padding: 50upx;
	}
	.version,.version_info,.clear{
		justify-content: space-between;
		background-color: white;
		padding: 20upx;
		font-weight: bold;
	}
</style>
