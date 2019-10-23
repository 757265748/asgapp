<template>
	<view>
		<!-- <view class="container">
			<view class="question-mark">
				<uni-icon type="wh" size="18" color="#fff"></uni-icon>
			</view>
			<nav-bar title="订单详情" color="#fff" background="#ff0000" @back="back"></nav-bar>
			<view class="content">
				<view class="switch-wrap">
					<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"
					 :activeColor="activeColor" width="100%"></uni-segmented-control>
				</view>
				<view v-show="current==0">
					<view class="list">
						<text class="list-text">订单号</text>
						<text class="list-text">订单时间</text>
						<text class="list-text">佣金</text>
						<text class="list-text">预估收入</text>
					</view>
					<view class="list">
						<text class="list-text">1</text>
						<text class="list-text">2019-08-08</text>
						<text class="list-text">022</text>
						<text class="list-text">0.22</text>
					</view>
				</view>
				<view v-show="current==1">
					<view class="list">
						<text class="list-text">订单号</text>
						<text class="list-text">订单时间</text>
						<text class="list-text">佣金</text>
						<text class="list-text">预估收入</text>
					</view>
					<view class="list">
						<text class="list-text">1</text>
						<text class="list-text">2019-02-08</text>
						<text class="list-text">322</text>
						<text class="list-text">322</text>
					</view>
				</view>
			</view>
		</view> -->
		<!--<block v-for="(item,index) in orders" :key="index">
			<order-list :good="item"></order-list>
		</block> -->
		<!-- <view>{{sumPrice}}</view>
		<view v-for="(item,index) in orders" :key="index">
			<view>{{item.item_price}}</view>
			<image :src="item.item_img" mode=""></image>
			<view>{{item.alipay_total_price}}</view>
		</view> -->
		<board></board>
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/uni-segmented-control.vue';
	import navBar from '@/components/nav-bar.vue';
	import dividLine from '@/components/line.vue';
	import orderList from '@/components/order-list.vue';
	import board from '@/pages/common/board-order.vue';
	import {
		order
	} from '@/api/goods.js'
	export default {
		data() {
			return {
				current: 0,
				items: [
					'今日订单',
					'历史订单'
				],
				activeColor: '#ff0000',
				styleType: 'button',
				datas: [{
						a: 1
					},
					{
						b: 2
					}
				],
				orders: [],
				sum: []
			};
		},
		computed: {
			sumPrice: function() {
				var s = 0
				for (var i = 0; i < this.sum.length; i++) {
					s += Math.ceil(this.sum[i])
				}
				return s;
			}
		},
		components: {
			navBar,
			uniSegmentedControl,
			dividLine,
			orderList,
			board
		},
		onLoad() {
			this.getOrder();
		},
		onBackPress(options) {
			console.log('from:' + options.from)
			clearInterval(timer);
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			getOrder() {
				var start_time;
				var end_time;
				var reDate;

				function orderDate(min) {
					return new Promise((resolve, reject) => {
						var date = new Date();
						var year = date.getFullYear();
						var monthNow = date.getMonth();
						var day = date.getDate();
						var hour = date.getHours();
						var minutes = date.getMinutes();
						var seconds = date.getSeconds();
						if (!start_time) {
							// start_time = new Date(year, monthNow, day, hour, minutes, seconds);
							start_time = year + "-" + monthNow + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
						} else {
							start_time = reDate;
						}
						//加上订单时间
						reDate = new Date(year, monthNow, day, hour, minutes + min, seconds);
						year = reDate.getFullYear();
						monthNow = reDate.getMonth();
						day = reDate.getDate();
						hour = reDate.getHours();
						minutes = reDate.getMinutes();
						seconds = reDate.getSeconds();
						reDate = year + "-" + monthNow + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
						end_time = reDate;
						// console.log(reDate);
						resolve(end_time, start_time);
					})
				}
				var min = 720;
				var timerIndex = 0;
				if (uni.getStorageSync("orderData")) {
					this.orders = uni.getStorageSync("orderData");
				}
				var timer = setInterval(() => {
					if (uni.getStorageSync("orderData")) {
						clearInterval(timer);
					}
					orderDate(min).then(res => {
						// console.log(res);
						console.log(end_time);
						console.log(start_time);
						min += 720;
						var eTime = end_time;
						var sTime = start_time;
						var params1 = {
							end_time: end_time,
							start_time: start_time
						}
						order(params1.end_time, params1.start_time).then(res => {
							for (var item in res.result) {
								console.log(res.result[item]);
								res.result[item].item_img = "http:" + res.result[item].item_img;
								this.orders.push(res.result[item]);
								this.sum.push(res.result[item].alipay_total_price)
							}
						});
					});
					timerIndex++;
					if (timerIndex >= 14) {
						uni.setStorageSync("orderData", this.orders);
						clearInterval(timer);
					}
				}, 3000);
			}
		}
	}
</script>

<style lang="less">
	.content {
		position: absolute;
		top: -8px;
		left: 0;
		right: 0;
		width: 100%;
		height: 100vh;
		margin-top: 72px;
		background: #EEEEEE;
		overflow: hidden;
		z-index: 999;
	}

	.list {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border: 1px solid #000000;
		border-right: none;
		border-top: none;
		background: #fff;
		border-radius: 2upx;
	}

	.list-text {
		border-right: 1px solid #000000;
		text-align: center;
		flex: 1;
	}
</style>
