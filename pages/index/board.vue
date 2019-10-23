<template>
	<view>
		<!-- #ifdef APP-PLUS -->
		<view class="uni-padding-wrap" style="position: fixed;top:0px;padding: 6px;z-index: 9;background-color: white;">
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view class="uni-padding-wrap" style="position: fixed;top:44px;padding: 6px;z-index: 9;background-color: white;">
		<!-- #endif -->
			<uni-segmented-control :current="current" :values="items" :style-type="styleType" :active-color="activeColor"
			 @clickItem="onClickItem" />
		</view>
		<!-- #ifdef APP-PLUS -->
		<view class="orderContent" style="position: relative;top:40px;z-index: 2;">
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view class="orderContent" style="position: relative;top:40px;z-index: 2;">
		<!-- #endif -->
			<view v-show="current === 0">
				<view v-for="(item,index) in orders">
					<order-list :good="item"></order-list>
				</view>
			</view>
			<view v-show="current === 1">
				<view v-for="(item,index) in spends">
					<order-list :good="item"></order-list>
				</view>
			</view>
			<view v-show="current === 2">
				<view v-for="(item,index) in CLSD">
					<order-list :good="item"></order-list>
				</view>
			</view>
			<view v-show="current === 3">
				<view v-for="(item,index) in closed">
					<order-list :good="item"></order-list>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/tab-control.vue';
	import orderList from '@/components/order-list.vue'

	import {
		order
	} from '@/api/goods.js'
	export default {
		components: {
			uniSegmentedControl,
			orderList
		},
		data() {
			return {
				items: [
					'全部',
					'已付款',
					'已结算',
					'已关闭'
				],
				styles: [{
					value: 'button',
					text: '按钮',
					checked: true
				}, {
					value: 'text',
					text: '文字'
				}],
				colors: [
					'#007aff',
					'#4cd964',
					'#dd524d'
				],
				current: 0,
				colorIndex: 0,
				activeColor: '#F9263E',
				styleType: 'button',
				orders:[],
				spends:[],
				CLSD:[],
				closed:[],
				timer:new Object()
			}
		},
		onLoad() {
			this.getOrder();
		},
		onBackPress(options) {
			clearInterval(this.timer);
			console.log('from:' + options.from);
			if(options.from=="backButton"){
				clearInterval(this.timer);
			}
		},
		methods: {
			onClickItem(index) {
				uni.showLoading({
					title:"loading"
				})
				setTimeout(function(){
					uni.hideLoading();
				},1500)
				console.log(index);
				if (this.current !== index) {
					this.current = index
				}
			},
			getOrder() {
				var start_time;
				var end_time;
				var reDate;
				function orderDate(min) {
					return new Promise((resolve, reject) => {
						var orderDay=13;
						var date = new Date();
						var year = date.getFullYear();
						var monthNow = date.getMonth()+1;
						var day = date.getDate();
						var hour = date.getHours();
						var minutes = date.getMinutes();
						var seconds = date.getSeconds();
						if (!start_time) {
							// start_time = new Date(year, monthNow, day, hour, minutes, seconds);
							// start_time = year + "-" + monthNow + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
							reDate = new Date(year, monthNow, day-orderDay, hour, minutes, seconds);
							year = reDate.getFullYear();
							monthNow = reDate.getMonth();
							day = reDate.getDate();
							hour = reDate.getHours();
							minutes = reDate.getMinutes();
							seconds = reDate.getSeconds();
							start_time = year + "-" + monthNow + "-" + day + " " + hour + ":" + minutes + ":" + seconds;
						} else {
							start_time = reDate;
						}
						//加上订单时间
						reDate = new Date(year, monthNow, day-orderDay, hour, minutes + min, seconds);
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
				var min = 180;
				var timerIndex = 0;
				console.log(uni.getStorageSync("orderData"));
				if (uni.getStorageSync("orderData")) {
					this.orders = uni.getStorageSync("orderData");
				}
				console.log(uni.getStorageSync("orderData"));
				this.timer = setInterval(() => {
					uni.removeStorageSync("orderData");
					// clearInterval(this.timer);
					if (uni.getStorageSync("orderData")) {
						clearInterval(this.timer);
					}
					orderDate(min).then(res => {
						// console.log(res);
						console.log(end_time);
						console.log(start_time);
						min += 180;
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
								console.log(res.result[item].tk_status);
								if(res.result[item].tk_status==12){
									this.spends.push(res.result[item]);
								}else if(res.result[item].tk_status==13){
									this.closed.push(res.result[item]);
								}else if(res.result[item].tk_status==14){
									this.CLSD.push(res.result[item]);
								}
							}
						});
					});
					timerIndex++;
					if (timerIndex >= 20) {
						console.log("stop");
						uni.setStorageSync("orderData", this.orders);
						console.log(uni.getStorageSync("orderData"));
						clearInterval(this.timer);
					}
					console.log(JSON.stringify(this.spends));
				}, 300);
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.uni-padding-wrap{
		position: relative;
		top: 0;
		width: 100%;
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}

	.content {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 300upx;
		text-align: center;
	}

	.color-tag {
		width: 50upx;
		height: 50upx;
	}

	uni-radio-group uni-label {
		padding: 0;
	}

	.uni-list-item__container {
		padding: 24upx 30upx;
		width: 100%;
		box-sizing: border-box;
		flex: 1;
		position: relative;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.uni-list-item__container:after {
		position: absolute;
		z-index: 3;
		right: 0;
		bottom: 0;
		left: 30upx;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
</style>
