<template>
	<view class="content" v-if="commsisson">
		<view class="upper">
			<view class="user-wrap">
				<image @tap="jump('setting')" class="avatar" :src="commsisson.avatar"></image>
				<view class="phone">{{user.phone}}</view>
				<view @tap='copy'><text class="yq-title">邀请码：</text><text class="code-title">{{user.invitecode}}</text> <text class="copy-title"
					 @tap="copy(user.invitecode)">复制</text></view>
				<!-- <view class="price-total">
					<view class="price-item">今日预估:<text class="price">￥15</text></view>
					<view class="price-item">本月预估:<text class="price">￥15</text></view>
					<view class="price-item">上月预估:<text class="price">￥15</text></view>
				</view> -->
			</view>
			<view class="money-apply">
				<view class="left">
					<view class="money-txt">
						<view class="money-color txt">余额</view>
						<view class="money-color">￥{{commsisson.CommissionSurplus}}</view>
					</view>
					<view class="dec">每月结算日为25号</view>
				</view>
				<!-- <view class="right" @tap="jump('cash-withdrawal')">
					立即提现
				</view> -->
				<view class="right" @tap="test">
					立即提现
				</view>
			</view>
		</view>
		<view class="lower" v-if="commsisson">
			<view class="lower-wrap" @tap="jump('total-revenue')">
				<view class="first-menu">
					<view>
						<view class="price-txt">￥{{commsisson.CommissionAllDay}}</view>
						<view class="sm-txt">今日预估</view>
					</view>
					<view>
						<view class="price-txt">￥{{commsisson.CommissionAllMonth}}</view>
						<view class="sm-txt">本月预估</view>
					</view>
				</view>
				<view class="first-menu">
					<view class="item">
						<view class="sm-txt">上月结算</view>
						<view class="price-txt sm-txt">￥{{commsisson.RealCommissionAgoMonth}}</view>
					</view>
					<view class="item">
						<view class="sm-txt">上月预估</view>
						<view class="price-txt sm-txt">￥{{commsisson.CommissionAllAgoMonth}}</view>
					</view>
				</view>
			</view>
			<divid-line height="5"></divid-line>
			<view class="first-menu">
				<view @tap='jump("tx")'>
					<uni-icon type="rank" size="25" color="#b10000"></uni-icon>
					<text>收入榜单</text>
				</view>
				<view @tap='jump("tx")'>
					<uni-icon type="help" size="25" color="#b6e371"></uni-icon>
					<text>使用帮助</text>
				</view>
				<view @tap='jump("tx")'>
					<uni-icon type="about" size="25" color="#ff9801"></uni-icon>
					<text>关于我们</text>
				</view>
			</view>
			<view class="second-menu">
				<view class="item" @tap='customer'>
					<view class="item">
						<uni-icon type="kefu" color="#7a7e83" size="22"></uni-icon>
						<text>专属客服</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
				<view class="item" @tap="jump('collection')">
					<view class="item">
						<uni-icon type="shoucang" color="#dd5145" size="22"></uni-icon>
						<text>我的收藏</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
				<view class="item" @tap='jump("tx")'>
					<view class="item">
						<uni-icon type="tixian" color="#f9263e" size="22"></uni-icon>
						<text>提现记录</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
				<view class="item" @tap="copy(user.invitecode)">
					<view class="item">
						<uni-icon type="laxin" color="#EEE685" size="22"></uni-icon>
						<text>我要拉新</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
				<view class="item" @tap="jump('board')">
					<view class="item">
						<uni-icon type="laxin" color="#EEE685" size="22"></uni-icon>
						<text>我的订单</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
				<view class="item" @tap="copy(user.invitecode)">
					<view class="item">
						<uni-icon type="laxin" color="#EEE685" size="22"></uni-icon>
						<text>下级详情</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
				<view class="item" @tap="jump('setting')">
					<view class="item">
						<uni-icon type="shezhi" color="#009bdb" size="22"></uni-icon>
						<text>设置</text>
					</view>
					<uni-icon type="arrow-right" size="18" color="#333"></uni-icon>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import dividLine from '@/components/line.vue';
	// import taobaoApi from '@/common/js/simple-tbapi.js';
	// import share from '@/common/js/simple-share.js'
	import {
		getUserinit
	} from '@/api/user'
	export default {
		components: {
			dividLine
		},
		data() {
			return {
				title: '个人',
				user: null,
				commsisson: null //用户佣金信息返回
			}
		},
		onLoad() {
			console.log('1')
			this.getData();
		},
		methods: {
			test(){
				// taobaoApi.order(res=>{
				// 	console.log(JSON.stringify(res));
				// });
			},
			customer() {
				uni.showModal({
					title: '专属客服',
					content: '添加微信：xxxxx获取一对一专属服务',
					showCancel: false,
					confirmText: '知道啦',
				});
			},
			getData() {
				try {
					this.user = uni.getStorageSync('user');
					console.log(JSON.stringify(this.user));
					if (!this.user) {
						uni.reLaunch({
							url: '/pages/index/login'
						})
						return
					}
					uni.showLoading({
						title: '加载中...'
					})
					let ret = getUserinit(this.user.phone)
					// console.log('佣金获取', ret)
					ret.then(res => {
						console.log('佣金获取', res)
						uni.hideLoading()
						if (res.code == 100) {
							uni.showToast({
								title: "初始化用户信息失败",
								icon: 'none'
							})
							return
						} else {
							let data = res.result;
							this.user.username = data.username;
							this.user.pid = data.PID;
							this.user.ye = data.CommissionSurplus;
							this.user.zfbname = data.zfbname;
							this.user.avatar = data.avatar;
							this.commsisson = data;
							console.log('thisuser', this.commsisson)
							uni.setStorageSync('user', this.user)
						}
					})

				} catch (e) {
					uni.hideLoading()
					uni.showToast({
						title: "初始化用户信息失败",
						icon: 'none'
					})
					console.log('error', e.message);
				}
			},
			jump(url) {
				if (url == 'tx') {
					uni.showModal({
						title: '爱省购提醒',
						content: '功能开发中...',
						showCancel: false,
						confirmText: '知道啦',
					});
				}
				uni.navigateTo({
					url: `/pages/index/${url}`
				})
			},
			copy(str) {
				var params=new Object();
				params.scene='WXSceneSession',
				params.summary=str;
				share.wxContent(params);
				uni.setClipboardData({
					data: str,
					success: () => {
						uni.showToast({
							title: '已复制邀请码',
							icon: 'success',
						})
					}
				})
			}
		},
	}
</script>

<style lang="less" scoped>
	.content {
		text-align: center;
		width: 100%;
		height: 100%;
		padding: 0 0 50upx 0;
	}

	.sm-txt {
		font-size: 12px !important;
	}

	.upper {
		position: relative;
		background: #F9263E;
		width: 100%;
		height: 500upx;

		.user-wrap {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			margin: 0 auto;
			color: #fff;
			width: 100%;

			.avatar {
				width: 80px;
				height: 80px;
				border-radius: 50%;
			}

			.phone {
				color: #fff;
				font-size: 16px;
			}

			.yq-title {
				color: #fff;
				font-size: 12px;
			}

			.code-title {
				color: #eee685;
				font-size: 14px;
			}

			.copy-title {
				color: #fff;
				font-size: 12px;
				margin-left: 6px;
				text-decoration: underline;
			}

			.price-total {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
			}

			.price-item {
				font-size: 12px;
				color: #fff;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				margin-left: 10px;

				.price {
					font-size: 14px;
					color: #fff;
					font-weight: 600;
				}
			}
		}

		// 提现申请
		.money-apply {
			width: 90%;
			background: #000;
			// padding: 70upx 0;
			margin: 0 auto;
			position: absolute;
			bottom: -10px;
			left: 5%;
			border-top-left-radius: 16upx;
			border-top-right-radius: 16upx;
			height: 100upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.left {
				padding: 20upx 0 20upx 20upx;

				.money-txt {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					font-size: 32upx !important;

					.txt {
						font-size: 30upx !important;
					}
				}

				.dec {
					color: #ccc;
					font-size: 12upx;
				}
			}

			.right {
				background: #eee685;
				color: #333;
				padding: 0 20upx;
				margin-right: 20upx;
				border-radius: 14upx;
			}

			.money-color {
				color: #ccba66;
			}
		}
	}

	.lower {
		margin-top: 20px;
		padding-bottom: 100px;

		.lower-wrap {
			width: calc(100% - 40px);
			padding: 0 20px;
			border-bottom-right-radius: 10px;
			border-bottom-left-radius: 10px;
			// box-shadow: 0 0 10rpx 2rpx #eeeeee;
		}

		.first-menu {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			color: #000;
			font-size: 14px;
			padding: 10px 0;
			border-bottom: 1px solid #f8f8f8;

			.item {
				display: flex;
				flex-direction: row;
				justify-content: flex-start;
				align-items: center;
				font-size: 12px !important;
				padding: 10upx 0;
			}

			.price-txt {
				font-size: 16px;
				font-weight: 600;
				color: #ccba66
			}
		}

		.second-menu {
			padding: 0 10px;
			width: calc(100% - 20px);
			margin-top: 10px;

			.item {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				align-items: center;
				height: 50px;
				border-bottom: 1px solid #f8f8f8;
			}
		}
	}
</style>
