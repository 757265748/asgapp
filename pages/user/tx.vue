<template>
	<view class="page" :style="{'height':sysH+'px'}">
		<view class="info">每月25号到月底可提现上月结算月(每天10：00~22：00)</view>
		<view class="tx_head backcolor_w">
			<view class="title uni-flex uni-row between margin_t_10">
				<view>可提现金额</view>
				<view>待审核提现金额</view>
			</view>
			<view class="value uni-flex uni-row between margin_t_10">
				<view>0.45</view>
				<view>0.00</view>
			</view>
		</view>
		<view class="tx_body">
			<view class="name uni-flex uni-row margin_t_10 padding_l_20 backcolor_w">
				<view>真是姓名</view>
				<view class="margin_l_20">曾磊</view>
			</view>
			<view class="name uni-flex uni-row margin_t_10 padding_l_20 backcolor_w">
				<view>支付宝账号</view>
				<view class="margin_l_20 flex_4">13008847296</view>
				<view class="color_1" style="white-space: nowrap;">修改信息</view>
			</view>
			<view class="tx_money margin_t_10 padding_l_20 backcolor_w">
				<view>提现金额</view>
				<view class="uni-flex uni-row margin_t_10">
					<view style="width: 1rem;">￥</view>
					<view class="flex_4">
						<input type="text" value="" placeholder="最低提现金额5元" />
					</view>
					<view class="color_1">全部提现</view>
				</view>
			</view>
			<view class="tx_foot">
				<view class="tx_account margin_t_10 padding_l_20 backcolor_w">
					<view>提现账户</view>
					<view class="uni-flex uni-row margin_t_10">
						<view class="flex_1">
							<image style="width: 1.5rem;height: 100%;vertical-align: middle;" src="../../static/19.9.png" mode="aspectFill"></image>
						</view>
						<view class="flex_4">支付宝</view>
						<view>
							<radio :checked="'true'" />
						</view>
					</view>
				</view>
				<view class="btn">提现</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				sysH: uni.getSystemInfoSync().screenHeight
			}
		}
	}
</script>

<style>
	.info {
		background-color: #FAEBCE;
		color: red;
		padding: 0 20upx;
		font-size: .5rem;
	}

	.backcolor_w {
		background-color: white;
	}

	.tx_head view{
		flex: 1;
		text-align: center;
	}
	.tx_head {
		padding: 10upx 20upx;
	}

	.page {
		background-color: #F1F1F1;
	}
</style>
