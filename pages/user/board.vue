<template>
	<view class="uni-tab-bar">
		<view class="headTab">
			<uni-segmented-control :activeBorder="activeBorder1" :deadBorder='deadBorder1' :deadColor='deadColor1' :deadBack="deadBack1"
			 :activeBack="activeBack1" :current="current1" :values="items1" :active-color="activeColor1" @clickItem="onClickItem1" />
		</view>
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
		<swiper v-if="current1==0" :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
					<!-- <block v-for="(newsitem,index2) in tab.data" :key="index2">
						
					</block> -->
					<view v-show="current === 0">
						<view v-for="(item,index) in orders">
							<order-list :isOrder="true" :good="item" @onTap="onTap()"></order-list>
						</view>
					</view>
					<view v-show="current === 1">
						<view v-for="(item,index) in spends">
							<order-list :isOrder="true" :good="item"></order-list>
						</view>
					</view>
					<view v-show="current === 2">
						<view v-for="(item,index) in CLSD">
							<order-list :isOrder="true" :good="item"></order-list>
						</view>
					</view>
					<view v-show="current === 3">
						<view v-for="(item,index) in closed">
							<order-list :isOrder="true" :good="item"></order-list>
						</view>
					</view>
					<view class="uni-tab-bar-loading">
						{{tab.loadingText}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
		<swiper v-if="current1==1" :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
					<!-- <block v-for="(newsitem,index2) in tab.data" :key="index2">
						
					</block> -->
					<view v-show="current === 0">
						<view v-for="(item,index) in team_orders">
							<order-list :isOrder="true" type='team' :good="item" @onTap="onTap()"></order-list>
						</view>
					</view>
					<view v-show="current === 1">
						<view v-for="(item,index) in team_spends">
							<order-list :isOrder="true" :good="item"></order-list>
						</view>
					</view>
					<view v-show="current === 2">
						<view v-for="(item,index) in team_CLSD">
							<order-list :isOrder="true" :good="item"></order-list>
						</view>
					</view>
					<view v-show="current === 3">
						<view v-for="(item,index) in team_closed">
							<order-list :isOrder="true" :good="item"></order-list>
						</view>
					</view>
					<view class="uni-tab-bar-loading">
						{{tab.loadingText}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import mediaList from '@/components/mediaList.vue';
	import orderList from '@/components/order-list.vue'
	import uniSegmentedControl from '@/components/tab-control.vue';
	import {
		order,
		getRelation_id
	} from '@/api/goods.js'
	import {
		my_income,
		team_order
	} from '@/api/user.js'
	const tpl = {
		data0: {
			"datetime": "40分钟前",
			"article_type": 0,
			"title": "uni-app行业峰会频频亮相，开发者反响热烈!",
			"source": "DCloud",
			"comment_count": 639
		},
		
	};

	export default {
		components: {
			mediaList,
			orderList,
			uniSegmentedControl
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
				}],
				items1: [
					'我的订单',
					'团队订单'
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
				team_orders: [],
				team_spends: [],
				team_CLSD: [],
				team_closed: [],
				timer: new Object(),
				relation_id: "",
			}
		},
		onLoad() {
			this.newsitems = this.randomfn()
			this.getOrder();
			console.log()
		},
		methods: {
			onClickItem1(index) {
				if (this.current1 !== index) {
					this.current1 = index
				}
			},
			onClickItem(index) {
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
					console.log(uni.getStorageSync("user"));
					this.orderData(uni.getStorageSync("user").pid);
				}
			},
			orderData(relation_id) {
				order(relation_id).then(res => {
					console.log(JSON.stringify(res.data));
					this.orders = res.data;
					for (var item in res.data) {
						// console.log(res.data[item]);
						this.orders.push(res.data[item]);
						console.log(res.data[item].tk_status);
						if (res.data[item].tk_status == 12) {
							this.spends.push(res.data[item]);
						} else if (res.data[item].tk_status == 13) {
							this.closed.push(res.data[item]);
						} else if (res.data[item].tk_status == 14) {
							this.CLSD.push(res.data[item]);
						}
					}
				});
				console.log(uni.getStorageSync("user").id);
				team_order({
					id:uni.getStorageSync("user").id
				}).then(res => {
					console.log(JSON.stringify(res));
					let result=res.result;
					this.team_orders = result;
					for (var item in result) {
						// console.log(res.data[item]);
						this.team_orders.push(result[item]);
						console.log(result[item].tk_status);
						if (result[item].tk_status == 12) {
							this.team_spends.push(result[item]);
						} else if (result[item].tk_status == 13) {
							this.team_closed.push(result[item]);
						} else if (result[item].tk_status == 14) {
							this.team_CLSD.push(result[item]);
						}
					}
				});
			},
			teamOrder(id){
				
			},
			goDetail(e) {
				uni.navigateTo({
					url: '/pages/template/tabbar/detail/detail?title=' + e.title
				});
			},
			close(index1, index2) {
				uni.showModal({
					content: '是否删除本条信息？',
					success: (res) => {
						if (res.confirm) {
							this.newsitems[index1].data.splice(index2, 1);
						}
					}
				})
			},
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
				if (this.newsitems[index].data.length === 0) {
					this.addData(index)
				}
				if (this.isClickChange) {
					this.tabIndex = index;
					this.isClickChange = false;
					return;
				}
				let tabBar = await this.getElSize("tab-bar"),
					tabBarScrollLeft = tabBar.scrollLeft;
				let width = 0;

				for (let i = 0; i < index; i++) {
					let result = await this.getElSize(this.tabBars[i].id);
					width += result.width;
					console.log(width);
				}
				let winWidth = uni.getSystemInfoSync().windowWidth,
					nowElement = await this.getElSize(this.tabBars[index].id),
					nowWidth = nowElement.width;
				if (width + nowWidth - tabBarScrollLeft > winWidth) {
					this.scrollLeft = width + nowWidth - winWidth;
				}
				if (width < tabBarScrollLeft) {
					this.scrollLeft = width;
				}
				this.isClickChange = false;
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
				let tabIndex = e.target.dataset.current;
				if (this.newsitems[tabIndex].data.length === 0) {
					this.addData(tabIndex)
				}
				if (this.tabIndex === tabIndex) {
					return false;
				} else {
					let tabBar = await this.getElSize("tab-bar"),
						tabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft
					this.scrollLeft = tabBarScrollLeft;
					this.isClickChange = true;
					this.tabIndex = tabIndex;
				}
			},
			randomfn() {
				let ary = [];
				for (let i = 0, length = this.tabBars.length; i < length; i++) {
					let aryItem = {
						loadingText: '没有更多了',
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
			}
		}
	}
</script>

<style>
	.uni-tab-bar-loading {
		text-align: center;
		font-size: 28upx;
		color: #999;
	}
	.page{
		overflow: hidden;
	}
	/* css重写 */
	.uni-tab-bar .swiper-box{
		height: calc(100%-120px)!important;
	}
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
		background-color: #EA4D3E;
	}
	
	.headTab_1 {
		background-color: #EEEFF1;
		box-sizing: border-box;
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
</style>
