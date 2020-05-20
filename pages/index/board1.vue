<template>
	<view class="page">
		<view class="headTab">
			<uni-segmented-control :activeBorder="activeBorder1" :deadBorder='deadBorder1' :deadColor='deadColor1' :deadBack="deadBack1"
			 :activeBack="activeBack1" :current="current1" :values="items1" :active-color="activeColor1" @clickItem="onClickItem1" />
		</view>
		<view class="uni-tab-bar">
			<scroll-view id="tab-bar" class="uni-swiper-tab" style="background-color: #E9CEA1;" scroll-x :scroll-left="scrollLeft">
				<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
				 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}
					<view v-show="tabIndex==index" style="height: 4upx;background-color: #A9731A;width: 50%;margin: auto;"></view>
				</view>
			</scroll-view>
			<view class="headTab_1">
				<uni-segmented-control :activeBorder="activeBorder" :deadBorder='deadBorder' :deadColor='deadColor' :deadBack="deadBack"
				 :activeBack="activeBack" :current="current" :values="items" :active-color="activeColor" @clickItem="onClickItem" />
			</view>
			<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
				<swiper-item v-for="(tab,index1) in tabBars" :key="index1">
					<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
						<block v-for="(tab,index2) in tabBars" :key="index2">
							<view>123</view>
							<view>123</view>
							<!-- <view v-for="(item,index) in orders">
								<order-list :isOrder="true" :good="item" @onTap="onTap()"></order-list>
							</view> -->
						</block>
						<!-- <view class="orderContent">
							<view v-show="current === 0">
								<view v-for="(item,index) in orders">
									<order-list :isOrder="true" :good="item" @onTap="onTap()"></order-list>
								</view>
								<view style="text-align: center;color: #666;"><text>没有更多了</text></view>
							</view>
							<view v-show="current === 1">
								<view v-for="(item,index) in spends">
									<order-list :isOrder="true" :good="item"></order-list>
								</view>
								<view style="text-align: center;color: #666;"><text>没有更多了</text></view>
							</view>
							<view v-show="current === 2">
								<view v-for="(item,index) in CLSD">
									<order-list :isOrder="true" :good="item"></order-list>
								</view>
								<view style="text-align: center;color: #666;"><text>没有更多了</text></view>
							</view>
							<view v-show="current === 3">
								<view v-for="(item,index) in closed">
									<order-list :isOrder="true" :good="item"></order-list>
								</view>
								<view style="text-align: center;color: #666;"><text>没有更多了</text></view>
							</view>
						</view> -->
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import uniSegmentedControl from '@/components/tab-control.vue';
	import orderList from '@/components/order-list.vue'
	import mediaList from '@/components/mediaList-order.vue';

	import {
		order,
		getRelation_id
	} from '@/api/goods.js'
	export default {
		components: {
			uniSegmentedControl,
			orderList,
			mediaList
		},
		data() {
			return {
				sysH:uni.getSystemInfoSync().windowHeight,
				scrollLeft: 0,
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				tabBars: [{
					name: '淘宝',
					id: 'tb'
				}, {
					name: '拼多多',
					id: 'pdd'
				}],
				items1: [
					'我的订单',
					'团队订单',
					'团队奖金'
				],
				current1: 0,
				activeColor1: '#333',
				activeBack1: '#E9CEA1',
				activeBorder1: 'transparent',
				deadBack1: 'transparent',
				deadBorder1: '#fff',
				deadColor1: '#fff',
				items: [
					'全部',
					'已付款',
					'已结算',
					'已关闭'
				],
				current: 0,
				activeBack: '#E9CEA1',
				activeBorder: 'transparent',
				activeColor: '#333',
				deadBack: '#fff',
				deadBorder: 'transparent',
				deadColor: '#969696',
				orders: [],
				spends: [],
				CLSD: [],
				closed: [],
				timer: new Object(),
				relation_id: ""
			}
		},
		onLoad() {
			console.log(uni.getSystemInfoSync().windowHeight);
			this.getOrder();
			// this.newsitems = this.randomfn()
		},
		onBackPress(options) {
			clearInterval(this.timer);
			console.log('from:' + options.from);
			if (options.from == "backButton") {
				clearInterval(this.timer);
			}
		},
		methods: {
			loadMore(e) {
				setTimeout(() => {
					this.addData(e);
					console.log(e);
				}, 1200);
			},
			addData(e) {
				if (this.newsitems[e].data.length > 30) {
					this.newsitems[e].loadingText = '没有更多了';
					return;
				}
				for (let i = 1; i <= 10; i++) {
					this.newsitems[e].data.push(tpl['data' + Math.floor(Math.random() * 5)]);
				}
			},
			async changeTab(e) {
				let index = e.target.current;
				// if (this.newsitems[index].data.length === 0) {
				// 	this.addData(index)
				// }
				// if (this.isClickChange) {
				// 	this.tabIndex = index;
				// 	this.isClickChange = false;
				// 	return;
				// }
				// let tabBar = await this.getElSize("tab-bar"),
				// 	tabBarScrollLeft = tabBar.scrollLeft;
				// let width = 0;

				// for (let i = 0; i < index; i++) {
				// 	let result = await this.getElSize(this.tabBars[i].id);
				// 	width += result.width;
				// 	console.log(width);
				// }
				// let winWidth = uni.getSystemInfoSync().windowWidth,
				// 	nowElement = await this.getElSize(this.tabBars[index].id),
				// 	nowWidth = nowElement.width;
				// if (width + nowWidth - tabBarScrollLeft > winWidth) {
				// 	this.scrollLeft = width + nowWidth - winWidth;
				// }
				// if (width < tabBarScrollLeft) {
				// 	this.scrollLeft = width;
				// }
				// this.isClickChange = false;
				this.tabIndex = index; //一旦访问data就会出问题
			},
			getElSize(id) { //得到元素的size
				return new Promise((res, rej) => {
					uni.createSelectorQuery().select("#" + id).fields({
						size: true,
						scrollOffset: true
					}, (data) => {
						res(data);
						console.log(data);
					}).exec();
				})
			},
			async tapTab(e) { //点击tab-bar
				console.log(e);
				let tabIndex = e.target.dataset.current;
				this.tabIndex = tabIndex;
				// if (this.newsitems[tabIndex].data.length === 0) {
				// 	this.addData(tabIndex)
				// }
				// if (this.tabIndex === tabIndex) {
				// 	return false;
				// } else {
				// 	let tabBar = await this.getElSize("tab-bar"),
				// 		tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
				// 	this.scrollLeft = tabBarScrollLeft;
				// 	this.isClickChange = true;
				// 	this.tabIndex = tabIndex;
				// }
			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						loadingText: '加载更多...',
						data: []
					};
					if (i < 1) {
						for (let j = 1; j <= 10; j++) {
							aryItem.data.push(tpl['data' + Math.floor(Math.random() * 5)]);
						}
					}
					ary.push(aryItem);
				}
				return ary;
			},
			onClickItem1(index) {
				console.log(index);
				if (this.current1 !== index) {
					this.current1 = index
				}
			},
			onClickItem(index) {
				console.log(index);
				if (this.current !== index) {
					this.current = index
				}
			},
			getOrder() {
				// uni.showLoading({
				// 	title:"正在加载..."
				// }) 
				if (uni.getStorageSync("user").pid == "") {
					console.log(uni.getStorageSync("tbsqFlag"));
					if (uni.getStorageSync("tbsqFlag")) {
						getRelation_id({
							phone: uni.getStorageSync("user").phone
						}).then(res => {
							console.log(res.data);
							if (res.code == 200) {
								this.relation_id = res.data
								this.orderData(res.data);
							}
						})
					} else {
						uni.showToast({
							title: '你还没有授权淘宝',
							icon: 'none'
						})
					}
				} else {
					this.relation_id = uni.getStorageSync("user").pid;
					console.log(this.relation_id);
					this.orderData(uni.getStorageSync("user").pid);
				}
			},
			orderData(relation_id) {
				order(relation_id).then(res => {
					// console.log(JSON.stringify(res.data));
					this.orders = res.data;
					for (var item in res.data) {
						// console.log(res.data[item]);
						this.orders.unshift(res.data[item]);
						console.log(res.data[item].tk_status);
						if (res.data[item].tk_status == 12) {
							this.spends.unshift(res.data[item]);
						} else if (res.data[item].tk_status == 13) {
							this.closed.unshift(res.data[item]);
						} else if (res.data[item].tk_status == 14) {
							this.CLSD.unshift(res.data[item]);
						}
					}
				});
			},
			onTap(item_id) {
				var id = Number(item_id);
				uni.navigateTo({
					url: `/pages/common/goods-detail?id=${id}`
				})
			}
		}
	}
</script>

<style>
	.page{
		overflow: hidden;
	}
	/* css重写 */
	.uni-tab-bar .active {
		animation: none !important;
		-webkit-transform: none !important;
		-webkit-animation-fill-mode: none !important;
		animation-fill-mode: none !important
	}

	.uni-swiper-tab {
		height: 80upx;
		line-height: 70upx;
	}
	/*  */
	.headTab,
	.headTab_1 {
		padding: 20upx 0;
	}
	/* .tab-bar{
		position: fixed;
	} */
	/* .tab-bar
	.headTab,
	.headTab_1 {
		position: fixed;
	} */

	.headTab {
		background-color: #333;
	}

	.headTab_1 {
		background-color: #EEEFF1;
	}

	.headTab .segmented-control view {
		color: white;
	}

	.uni-tab-bar .active {
		color: #AA7623;
	}

	.swiper-box {
		background-color: #EEEFF1;
	}

	/* page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff;
		height:500px
	} */

</style>
