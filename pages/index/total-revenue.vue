<template>
	<view class="container">
		<view class="question-mark">
			<uni-icon type="wh" size="18" color="#fff"></uni-icon>
		</view>
		<nav-bar title="收益概况" color="#fff" background="#ff0000" @back="back"></nav-bar>
		<view class="content" v-if="online">
			<view class="upper">
				<view class="user-price">
					<view class="price">￥{{online.CommissionTotal}}</view>
					<view class="lj-txt">累计收益结算</view>
					<view class="ye">账户余额(元)： ￥{{online.CommissionSurplus}}</view>
				</view>
			</view>
			<view class="switch-wrap">
				<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
				 :activeColor="activeColor" width="100%"></uni-segmented-control>
			</view>
			<view v-show="current==0">
				<view class="wrap">
					<view class="item-wrap">
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">结算收入</view>
								<uni-icon type="lwh" color="#ff0000" size="10" @click="showModel('0')"></uni-icon>
							</view>
							<view>￥{{online.RealCommissionAgoMonth}}</view>
							<view class="gray-sm-txt">上月收益</view>
						</view>
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">预估收入</view>
								<uni-icon type="lwh" color="#ff0000" size="10" @click="showModel('1')"></uni-icon>
							</view>
							<view>￥{{online.CommissionAllMonth}}</view>
							<view class="gray-sm-txt">本月收益</view>
						</view>
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">预估收入</view>
								<uni-icon type="lwh" color="#ff0000" size="10" @click="showModel('2')"></uni-icon>
							</view>
							<view>￥{{online.CommissionAllAgoMonth}}</view>
							<view class="gray-sm-txt">上月收益</view>
						</view>
					</view>
				</view>
				<divid-line height='5'></divid-line>
				<!-- 今日 -->
				<view class="wrap">
					<view class="title">
						<uni-icon type="sun" size="18" color="#f2a430"></uni-icon>
						<view class="title-txt">今日</view>
					</view>
					<view class="item-wrap">
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">待付笔数</view>
								<uni-icon type="lwh" color="#ff0000" size="10" @click="showModel('3')"></uni-icon>
							</view>
							<view>￥{{online.CommissionAllAgoMonth}}</view>
						</view>
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">预估收益</view>
								<uni-icon type="lwh" color="#ff0000" size="10" @click="showModel('4')"></uni-icon>
							</view>
							<view>￥{{online.CommissionAllDay}}</view>
						</view>
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">其他</view>
								
							</view>
							<view>￥0</view>
						</view>
					</view>
				</view>
				<divid-line height='5'></divid-line>
				<!-- 昨日 -->
				<view class="wrap">
					<view class="title">
						<uni-icon type="moon" size="18" color="#f2a430"></uni-icon>
						<view class="title-txt">昨日</view>
					</view>
					<view class="item-wrap">
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">待付笔数</view>
								<uni-icon type="lwh" color="#ff0000" size="10" @click="showModel('5')"></uni-icon>
							</view>
							<view>￥0</view>
						</view>
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">预估收益</view>
								<uni-icon type="lwh" color="#ff0000" size="10" @click="showModel('6')"></uni-icon>
							</view>
							<view>￥0</view>
						</view>
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">其他</view>
								
							</view>
							<view>￥0</view>
						</view>
					</view>
				</view>
				<divid-line height='5'></divid-line>
				<view class="withdrawals-record">提现记录</view>
			</view>
			<view v-show="current==1">
				<view class="wrap">
					<view class="item-wrap">
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">已结算</view>
								<uni-icon type="lwh" color="#ff0000" size="10" @click="showModel('7')"></uni-icon>
							</view>
							<view>￥0</view>

						</view>
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">待结算</view>
								<uni-icon type="lwh" color="#ff0000" size="10" @click="showModel('8')"></uni-icon>
							</view>
							<view>￥0</view>
						</view>
					</view>
				</view>
				<divid-line height='5'></divid-line>
				<!-- 今日 -->
				<view class="wrap">
					<view class="title">
						<uni-icon type="sun" size="18" color="#f2a430"></uni-icon>
						<view class="title-txt">今日</view>
					</view>
					<view class="item-wrap">
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">待付笔数</view>
							</view>
							<view>￥0</view>
						</view>
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">预估收益</view>
							</view>
							<view>￥0</view>
						</view>
					</view>
				</view>
				<divid-line height='5'></divid-line>
				<!-- 昨日 -->
				<view class="wrap">
					<view class="title">
						<uni-icon type="moon" size="18" color="#f2a430"></uni-icon>
						<view class="title-txt">昨日</view>
					</view>
					<view class="item-wrap">
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">待付笔数</view>
								 
							</view>
							<view>￥0</view>
						</view>
						<view class="item">
							<view class="item-icon">
								<view class="black-txt">预估收益</view>
								 
							</view>
							<view>￥0</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	import navBar from '@/components/nav-bar.vue'
	import dividLine from '@/components/line.vue';
	import uniSegmentedControl from '@/components/uni-segmented-control.vue';
	import {getProfOnline} from '@/api/user.js'
	export default {
		data() {
			return {
				current: 0,
				items: [
					'线上收益',
					'线下收益'
				],
				activeColor: '#ff0000',
				styleType: 'button',
				online:null
			}
		},
		components: {
			navBar,
			uniSegmentedControl,
			dividLine
		},
		onLoad() {
			this.initData()
		},
		methods: {
			initData(){
				const {pid} = uni.getStorageSync('user');
				console.log('pid',pid);
				getProfOnline(pid).then(res =>{
					this.online = res.result;
					console.log('数据',this.online);
				});
			},
			back(){
				uni.navigateBack({
					delta:1
				})
			},
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			showModel(index) {
				const titlemap = new Map().set('0',{title:'结算收入',content:'上个月确认收货的订单收益，每月25日结算后，将存入余额中'})
										  .set('1',{title:'预估收入',content:'本月内创建的所有订单预估收益'})
										  .set('2',{title:'预估收入',content:'上月内创建的所有订单预估收益'})
										  .set('3',{title:'今日付款笔数',content:'所有付款的订单数量，包含有效订单和失效订单'})
										  .set('4',{title:'今日预估收益',content:'今天内创建的有效订单预估收益'})
										  .set('5',{title:'昨日付款笔数',content:'所有付款的订单数量，包含有效订单和失效订单'})
										  .set('6',{title:'昨日预估收益',content:'昨日内创建的有效订单预估收益'})
										  .set('7',{title:'已结算收入',content:'上个账期已结算的收益收入已结算到余额'})
										  .set('8',{title:'待结算收入',content:'等待下个账期系统结算后将结算到余额'})						 
				uni.showModal({
					title: titlemap.get(index).title,
					content: titlemap.get(index).content,
					showCancel:false,
					confirmText:'知道啦',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>
<style lang="less" scoped>
	.container {
		position: relative;
		width: 100%;
		height: 100%;
		overflow: hidden;
		.withdrawals-record {
			width: calc(100% - 40px);
			padding: 10px 20px;
			background: #fff;
		}

		.question-mark {
			position: absolute;
			right: 30upx;
			top: 64upx;
			z-index: 999
		}

		.black-txt {
			font-size: 14px;
			color: #333;
		}

		.gray-sm-txt {
			font-size: 10px;
			color: #ccc;
		}
	}

	.wrap {
		width: calc(100% - 40px);
		padding: 20px 20px;
		background: #fff;

		.title {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			width: 100%;
			border-bottom: 1px solid #f8f8f8;

			.title-txt {
				font-size: 18px;
				font-weight: 600;
				color: #000;
				margin-left: 5px;
			}
		}

		.item-wrap {
			width: 100%;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		.item {
			text-align: center;

			.item-icon {
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
			}
		}
	}

	.content {
		position: absolute;
		top: -10px;
		left: 0;
		right: 0;
		width: 100%;
		height: 100vh;
		margin-top: 72px;
		background: #EEEEEE;
		overflow: hidden;
		z-index: 999;

		.upper {
			position: relative;
			top: 0;
			height: 25vh;
			width: 100%;
			background: #ff0000;
			z-index: 999;
			.user-price {
				position: absolute;
				top: 60%;
				left: 50%;
				transform: translate(-50%, -50%);
				text-align: center;

				.price {
					font-size: 30px;
					color: #fff;
				}

				.ye {
					font-size: 12px;
					color: #fff;
					margin-top: 5px;
				}

				.lj-txt {
					font-size: 12px;
					color: #e6e6e6;
				}
			}
		}

		.segmented-control {
			width: 100% !important;
			border-radius: 0 !important;
			border-top: 1px solid #f8f8f8 !important;
		}
	}
</style>
