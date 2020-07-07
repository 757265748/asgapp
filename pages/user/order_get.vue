<template>
	<view class="main uni-flex uni-column" :style="{height:currentH-44+'px'}">
		<view class="head">
			<image src="../../static/user/test.png" mode=""></image>
		</view>
		<view class="body uni-flex uni-column">
			<view class="search uni-flex uni-row">
				<input type="text" value="" />
				<button type="default">查询</button>
			</view><!-- 找回失败，未找到该订单 -->
			<view class="list"></view>
		</view>
		<view class="foot uni-flex uni-column">
			<view class="title">如何获取订单号</view>
			<view class="uni-flex uni-row image_group">
				<view>
					<image src="../../static/user/test1.png" mode=""></image>
				</view>
				<view>
					<image src="../../static/user/test2.png" mode=""></image>
				</view>
			</view>
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
	.main{
		background-color: #F5F6FA;
	}
	.head image{
		width: 300rpx;
		height: 250rpx;
	}
	.search input{
		flex: 1;
		height: 62upx;
		box-sizing: border-box;
		text-indent: 10upx;
	}
	.search button{
		background-color: #CC7D11;
		border-radius: 0upx;
		line-height: 70upx;
		color: white;
		font-size: .8rem;
	}
	.search{
		border: 2px solid #CC7D11;
		border-radius: 10upx;
		width: 80%;
		height: 70upx;
	}
	.body .list{
		margin: 20upx;
	}
	.head,.body{
		height: 250rpx;
	}
	.foot{
		background-color: white;
		flex: 4;
	}
	.foot image{
		width: 300rpx;
	}
	.foot  .title{
		text-align: center;
	}
	.foot .image_group{
		margin-top: 20upx;
		display: flex;
		justify-content: space-between;
	}
	.head,.body,.foot{
		padding: 10upx 20upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
