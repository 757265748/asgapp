<template>
	<view class="uni-tab-bar">
		<view class="head uni-flex uni-column">
			<view class="uni-flex uni-row between">
				<view>账户余额&nbsp;&nbsp;(元)</view>
				<view class="money text">￥{{data.CommissionSurplusA}}</view>
			</view>
			<!-- <view class="uni-flex uni-row between">
				<view class="money">888.88</view>
				<view class="btn1 tdyj">团队佣金</view>
			</view> -->
			<view class="uni-flex uni-row between">
				<view class="">团队奖金</view>
				<view class="money text">￥{{data.MonthCommissionTeam}}</view>
			</view>
			<view class="uni-flex uni-row between">
				<view class="btn1 tx">提现</view>
				<view class="btn1 tdjj">提现记录</view>
			</view>
		</view>
		<scroll-view id="tab-bar" class="uni-swiper-tab" style="background-color: #E9CEA1;font-weight: bold;" scroll-x
		 :scroll-left="scrollLeft">
			<view v-for="(tab,index) in tabBars" :key="tab.id" class="swiper-tab-list" :class="tabIndex==index ? 'active' : ''"
			 :id="tab.id" :data-current="index" @click="tapTab">{{tab.name}}
				<view v-show="tabIndex==index" style="height: 4upx;background-color: #A9731A;width: 50%;margin: auto;"></view>
			</view>
		</scroll-view>
		<swiper :current="tabIndex" class="swiper-box" :duration="300" @change="changeTab">
			<swiper-item v-for="(tab,index1) in newsitems" :key="index1">
				<scroll-view class="list" scroll-y @scrolltolower="loadMore(index1)">
					<view class="day">
						<view class="uni-flex uni-row between">
							<view>日预估收入</view>
							<view class="uni-flex uni-row">说明<span class="explain">&nbsp;&nbsp;&gt;</span></view>
						</view>
						<view class="content">
							<view>
								<view class="title uni-flex uni-row">
									<view>今日付款笔数</view>
									<view>今日订单预估收入</view>
								</view>
								<view class="values uni-flex uni-row">
									<view class="fkbs bold">{{data.TodayCount}}</view>
									<view class="ygsr bold">￥{{data.TodayCommission}}</view>
								</view>
							</view>
							<view>
								<view class="title uni-flex uni-row between">
									<view>昨日付款笔数</view>
									<view>昨日订单预估收入</view>
								</view>
								<view class="values uni-flex uni-row between">
									<view class="fkbs bold">{{data.AgodayCount}}</view>
									<view class="ygsr bold">￥{{data.AgodayCommission}}</view>
								</view>
							</view>
						</view>
					</view>
					<view class="month">
						<view class="uni-flex uni-row between">
							<view>月预估收入</view>
							<view class="uni-flex uni-row">说明<span class="explain">&nbsp;&nbsp;&gt;</span></view>
						</view>
						<view class="content">
							<view>
								<view class="title uni-flex uni-row between">
									<view>本月预估收入</view>
									<view>订单预估收入</view>
								</view>
								<view class="values uni-flex uni-row between">
									<view class="fkbs bold">{{data.MonthCommissionEstimate}}</view>
									<view class="ygsr bold">{{data.MonthCommissionSettlement}}</view>
								</view>
							</view>
							<view>
								<view class="title uni-flex uni-row between">
									<view>上月预估收入</view>
									<view>上月结算预估收入</view>
								</view>
								<view class="values uni-flex uni-row between">
									<view class="fkbs bold">{{data.AgoMonthCommissionEstimate}}</view>
									<view class="ygsr bold">{{data.AgoMonthCommissionSettlement}}</view>
								</view>
							</view>
						</view>
						<view class="regulation uni-flex uni-row between">
							<view></view>
							<view>规则说明</view>
						</view>
					</view>
					<!-- <view class="uni-tab-bar-loading">
						{{tab.loadingText}}
					</view> -->
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
	import {
		order,
		getRelation_id
	} from '@/api/goods.js'
	import {
		my_income
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
		components: {},
		data() {
			return {
				sysH: uni.getSystemInfoSync().windowHeight,
				scrollLeft: 0,
				data:new Object(),
				isClickChange: false,
				tabIndex: 0,
				newsitems: [],
				tabBars: [{
					name: '淘宝',
					id: 'tb'
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
				relation_id: "",
			}
		},
		onLoad() {
			this.newsitems = this.randomfn()
			this.init();
			console.log()
		},
		onNavigationBarButtonTap(e) {
			console.log(e);
			if (e.index == 0) {
				uni.navigateTo({
					url: '/pages/user/board'
				})
			}
		},
		methods: {
			init() {
				// uni.showLoading({
				// 	title:"正在加载..."
				// }) 
				console.log(uni.getStorageSync("user"));
				if (uni.getStorageSync("user").pid == "") {
					console.log(uni.getStorageSync("tbsqFlag"));
					if (uni.getStorageSync("tbsqFlag")) {
						getRelation_id({
							phone: uni.getStorageSync("user").phone
						}).then(res => {
							console.log(res.data);
							if (res.code == 200) {
								this.relation_id = res.data
								this.incomeData(uni.getStorageSync("user").id);
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
					console.log(uni.getStorageSync("user").id);
					this.incomeData(uni.getStorageSync("user").id);
				}
			},
			incomeData(id) {
				my_income({
					id:id
				}).then(res => {
					console.log(id);
					console.log(JSON.stringify(res.data));
					if(res.code==200){
						this.data=res.result[0];
					}
				});
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
	.bold{
		font-weight: bold;
	}
	.fkbs{
		color: #62D189;
	}
	.ygsr{
		color: #DFB667;
	}
	.explain{
		border-radius: 1rem;
		background-color: #E8E8E8;
		width: 1.2rem;
		height: 1.2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 5upx;
	}
	.day .content .values,
	.month .content .values{
		margin: 10upx;
	}
	.day .content .title view,
	.day .content .values view,
	.month .content .title view,
	.month .content .values view{
		flex: 1;
	}
	.month .content 
	.flex_1{
		flex: 1;
	}
	.day .content,
	.month .content {
		flex: 1;
		text-align: center;
		border-radius: 30upx;
		background-color: #fff;
		margin-top: 20upx;
	}

	.day,
	.month {
		margin: 20upx 20upx;
		color: #888888;
	}

	.head .tx {
		background-color: transparent;
		color: #fff;
		border: 1px solid #E9CEA1;
	}
	.text{
		width: 180upx;
		text-align: center;
	}
	.btn1 {
		border-radius: 1rem;
		background-color: #E9CEA1;
		width: 180upx;
		height: 60upx;
		line-height: 60upx;
		color: #000;
		text-align: center;
	}

	.head .money {
		font-weight: bold;
		/* font-size: 1.05rem; */
	}

	.head view {
		margin: 5upx;
	}

	.head {
		background-color: #EA4D3E;
		color: #fff;
	}

	.head {
		padding: 20upx 40upx;
	}

	.between {
		justify-content: space-between;
	}

	.uni-tab-bar-loading {
		text-align: center;
		font-size: 28upx;
		color: #999;
	}

	.page {
		overflow: hidden;
	}

	/* css重写 */
	.uni-tab-bar .swiper-box {
		height: calc(100%-120px) !important;
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
		background-color: #333;
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
