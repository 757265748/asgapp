<template>
	<view class="content">
		<nav-bar title="提现" background="#ff0000" color="#fff" @back='back'></nav-bar>
		<view class="container">
			<view class="gray-txt">提现账户(每月22号为提现日)</view>
			<view class="item paddings">
				<view class="item">
					<view>支付宝</view>
					<view class="phone">{{zfbname}}</view>
				</view>
				<view class="red-txt change" @tap='jump("bindzfb")'>修改</view>
			</view>
			<view class="gray-txt">输入提现金额</view>
			<view class="item paddings">
				<view class="rmb">￥</view>
				<input class="txmoney" placeholder="请输入提现金额" @blur='blur' v-model="txmoney" />
			</view>
			<view class="item">
				<view class="red-txt msg">{{msg}}</view>
				<view class="red-txt tx" @tap="cashw">全部提现</view>
			</view>
			<view class="bt" @tap="submit">提现</view>
		</view>
	</view>
</template>
<script>
	import navBar from '@/components/nav-bar.vue'
	import {
		userTx
	} from '@/api/user.js'
	import {
		Comission
	} from '@/api/comission'
	let comi = new Comission();
	export default {
		data: () => ({
			msg: '',
			money: '',
			txmoney: 0,
			pid: '',
			zfbname: ''
		}),
		onLoad() {
			try {
				const user = uni.getStorageSync('user');
				this.pid = user.pid
				this.zfbname = user.zfbname
				if (!this.zfbname) {
					uni.reLaunch({
						url: "/pages/index/bindzfb"
					})
				}
				this.getBalance(this.pid)
			} catch (e) {}
		},
		methods: {
			getBalance(pid) {
				uni.showLoading({
					title: "加载中..."
				})
				comi.getnowbalance({
					pid,
				}).then(res => {
					uni.hideLoading();
					this.money = res.result;
				})
			},
			back() {
				uni.switchTab({
					url: "/pages/index/user"
				})
			},
			jump(url) {
				uni.navigateTo({
					url: `/pages/index/${url}`
				})
			},
			blur(e) {
				this.txmoney = e.detail.value
			},
			cashw() {
				this.txmoney = this.money.CommissionSurplus
				console.log('提现申请',this.money)
				if (this.txmoney == 0) {
					this.msg = "账户余额不足"
					return
				}
				this._userTx(this.pid, this.phone, this.txmoney)
			},
			submit() {
				console.log('a',this.txmoney,'b', this.money)
				if (this.txmoney == 0) {
					this.msg = "输入金额不能为空"
					return
				} else if (this.txmoney > this.money) {
					this.msg = "输入金额大于所剩余额"
					return
				}
				this._userTx(this.pid, this.zfbname, this.txmoney)
			},
			_userTx(pid, phone, money) {
				userTx(pid, phone, money).then(res => {
					if (res.code == 200) {
						uni.showToast({
							title: '申请成功待审核'
						})
					}
				})
			}
		},
		components: {
			navBar,
		}
	}
</script>
<style lang="less" scoped>
	.content {
		width: 100%;
		height: 100%;
		background: #eee;
	}

	.container {
		margin-top: 108upx;
		width: 100%;
		padding: 10px 0;
		background: #fff;

		.paddings {
			padding: 10px !important;
		}

		.item {
			width: calc(100% - 20px);
			padding: 0 10px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			border-bottom: 1px solid #F8F8F8;
		}

		.rmb {
			font-size: 18px;
			font-weight: 600;
		}

		.txmoney {
			font-size: 18px;
			font-weight: 600;
			margin-left: 10px;
		}

		.msg {
			width: 80%;
		}

		.tx {
			width: 20%;
		}

		.change {
			width: 20%;
		}

		.phone {
			margin-left: 10px;
		}

		.red-txt {
			color: #FF1213;
		}

		.gray-txt {
			padding: 10px;
			background: #EEEEEE;
		}

		.bt {
			margin: 10px auto 0 auto;
			color: #fff;
			text-align: center;
			border-radius: 8px;
			font-size: 16px;
			font-weight: 600;
			padding: 6px 20px;
			background: #FF0000;
		}
	}
</style>
