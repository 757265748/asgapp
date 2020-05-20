<template>
	<view class="page">
		<view class="head uni-flex uni-column">
			<view class="title">已提现金额&nbsp;&nbsp;(元)</view>
			<view class="money">94.00</view>
		</view>
		<view class="body">
			<view class="title uni-flex flex_1">提现明细</view>
			<view class="adorn uni-flex uni-row between">
				<view class="adorn_l"></view>
				<view class="adorn_r"></view>
			</view>
			<view class="content">
				<view class="item">
					<view class="item_1 uni-flex uni-row between">
						<view>提现金额</view>
						<view class="tx_money">￥94.00</view>
					</view>
					<view class="item_2 uni-flex uni-row between">
						<view>2020-02-24 18:18:50</view>
						<view>提现成功</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style>
	.adorn_l{
		margin-left: -.5rem;
		margin-top: -.5rem;
	}
	.adorn_r{
		margin-right: -.5rem;
		margin-top: -.5rem;
	}
	.adorn_l,
	.adorn_r {
		width: 1rem;
		height: 1rem;
		background-color: #333;
		border-radius: 1rem;
	}
	.adorn{
		background-color: #fff;
	}

	.flex_1 {
		flex: 1;
	}

	.body .content .item {
		padding: 20upx;
		border-bottom: 1upx solid #efeeee;
	}

	.between {
		justify-content: space-between;
	}

	.tx_money {
		font-weight: bold;
	}

	.body .title {
		justify-content: center;
		background-color: #f1f1f1;
		padding: 20upx;
		border-top-left-radius: 1rem;
		border-top-right-radius: 1rem;
	}

	.body .content {
		background-color: #fff;
	}

	.head .title,
	.body .title {
		font-weight: bold;
	}

	.head view {
		display: flex;
		flex: 1;
		justify-content: center;
		margin: 20upx;
	}

	.head {
		background-color: #333;
		color: #fff;
	}

	.money {
		font-size: 1.2rem;
		font-weight: bold;
		color: #DFB667;
	}

	.page {
		background-color: #333;
	}
</style>
